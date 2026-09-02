import { useEffect, useRef } from 'react';

export interface ModalBackHandlerOptions {
  isOpen: boolean;
  onClose: () => void;
  modalId: string;
  // Optional sub-identifier (e.g. character ID or item ID)
  subId?: string;
  // Optional callback when sub-history exists and user presses back
  onBackStep?: () => boolean; // return true if handled internally, false to proceed with modal close
}

// Global modal stack for tracking open modals and their close handlers
interface StackItem {
  id: string;
  subId?: string;
  close: () => void;
  onBackStep?: () => boolean;
}

let modalStack: StackItem[] = [];
let ignorePopstateCount = 0;
let isHandlingPopstate = false;
let isListenerInitialized = false;

function initGlobalListeners() {
  if (isListenerInitialized || typeof window === 'undefined') return;
  isListenerInitialized = true;

  // Handle browser / mobile back button
  window.addEventListener('popstate', () => {
    if (ignorePopstateCount > 0) {
      ignorePopstateCount--;
      return;
    }

    if (modalStack.length > 0) {
      const top = modalStack[modalStack.length - 1];

      // Check if top modal wants to handle internal back step (e.g. previous sub-character or closing zoom)
      if (top.onBackStep && top.onBackStep()) {
        return;
      }

      // Pop the modal from our stack and execute its close handler
      modalStack.pop();
      isHandlingPopstate = true;
      try {
        top.close();
      } finally {
        setTimeout(() => {
          isHandlingPopstate = false;
        }, 60);
      }
    }
  });

  // Handle ESC key to smoothly close top-most modal
  window.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape' && modalStack.length > 0) {
      const top = modalStack[modalStack.length - 1];
      if (top) {
        // Trigger normal UI close which pops history
        top.close();
      }
    }
  });
}

/**
 * Custom hook to bind any modal/popup to the browser history and hardware/gesture Back button.
 * When the modal opens, a history entry is pushed.
 * When the user presses the phone/browser back button, the modal closes without leaving the page.
 * When the user closes via 'X' button or backdrop, the pushed history entry is cleanly reverted.
 */
export function useModalBack({
  isOpen,
  onClose,
  modalId,
  subId,
  onBackStep,
}: ModalBackHandlerOptions) {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  const onBackStepRef = useRef(onBackStep);
  onBackStepRef.current = onBackStep;

  const isPushedRef = useRef(false);
  const currentSubIdRef = useRef<string | undefined>(subId);

  useEffect(() => {
    initGlobalListeners();
  }, []);

  useEffect(() => {
    if (isOpen) {
      // If modal just opened or changed subId
      if (!isPushedRef.current) {
        // Register in stack
        modalStack.push({
          id: modalId,
          subId,
          close: () => onCloseRef.current(),
          onBackStep: () => (onBackStepRef.current ? onBackStepRef.current() : false),
        });

        // Push state to browser history
        window.history.pushState(
          { appModal: true, modalId, subId, depth: modalStack.length },
          ''
        );
        isPushedRef.current = true;
        currentSubIdRef.current = subId;
      } else if (subId && subId !== currentSubIdRef.current) {
        // Sub-navigation within the same open modal (e.g. Zeus -> Hera)
        currentSubIdRef.current = subId;
        const top = modalStack[modalStack.length - 1];
        if (top && top.id === modalId) {
          top.subId = subId;
        }

        window.history.pushState(
          { appModal: true, modalId, subId, depth: modalStack.length },
          ''
        );
      }
    } else {
      // Modal was closed
      if (isPushedRef.current) {
        isPushedRef.current = false;
        currentSubIdRef.current = undefined;

        // Remove from stack if still present
        const index = modalStack.findIndex(item => item.id === modalId);
        if (index !== -1) {
          modalStack.splice(index, 1);
        }

        // If closed via UI (not via browser popstate), revert the pushed history entry
        if (!isHandlingPopstate) {
          ignorePopstateCount++;
          window.history.back();
        }
      }
    }

    return () => {
      // Cleanup on unmount
      if (isPushedRef.current) {
        isPushedRef.current = false;
        const index = modalStack.findIndex(item => item.id === modalId);
        if (index !== -1) {
          modalStack.splice(index, 1);
        }
        if (!isHandlingPopstate) {
          ignorePopstateCount++;
          window.history.back();
        }
      }
    };
  }, [isOpen, modalId, subId]);
}
