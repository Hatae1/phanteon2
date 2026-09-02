import React from 'react';
import { Sword, Target, Shield, Zap, Sparkles, Heart } from 'lucide-react';
import { CharacterRole } from '../types';

interface RoleIconProps {
  role: CharacterRole;
  className?: string;
  size?: number;
}

export const RoleIcon: React.FC<RoleIconProps> = ({ role, className = '', size = 16 }) => {
  switch (role) {
    case 'warrior':
      return <Sword size={size} className={className} />;
    case 'archer':
      return <Target size={size} className={className} />;
    case 'guardian':
      return <Shield size={size} className={className} />;
    case 'mage':
      return <Zap size={size} className={className} />;
    case 'support':
      return <Heart size={size} className={className} />;
    default:
      return <Sparkles size={size} className={className} />;
  }
};

export const getRoleLabel = (role: CharacterRole, lang: 'ko' | 'en' = 'ko'): string => {
  if (lang === 'en') {
    switch (role) {
      case 'warrior':
        return 'Warrior';
      case 'archer':
        return 'Archer';
      case 'guardian':
        return 'Guardian';
      case 'mage':
        return 'Mage';
      case 'support':
        return 'Support';
    }
  }

  switch (role) {
    case 'warrior':
      return '전사';
    case 'archer':
      return '원거리';
    case 'guardian':
      return '수호자';
    case 'mage':
      return '권능/마법';
    case 'support':
      return '보조/생명';
  }
};

