# 그리스 로마 신화 판테온 & 성물 도감 (Greek & Roman Mythology Codex)

올림포스 12주신, 명계의 신, 영웅, 괴물 및 전설 속 신성 무기·성물(케라우노스, 아이기스, 트리아이나 등)의 기원과 권능을 총망라한 고품격 인터랙티브 신화 대도감 웹 애플리케이션입니다.

---

## ⚡ Cloudflare Pages 배포 가이드 (1분 완료)

Cloudflare Pages에 프로젝트를 배포할 때 아래 설정만 입력하시면 추가 설정 없이 100% 자동 빌드 및 배포됩니다.

- **프레임워크 프리셋 (Framework Preset)**: `Vite`
- **빌드 명령어 (Build Command)**: `npm run build`
- **빌드 출력 디렉터리 (Build Output Directory)**: `dist`
- **환경 변수 (Environment Variables)**: **필요 없음 (None)**
  - *모든 신화 데이터가 앱 내에 최적화되어 포함되어 있어 별도의 API 키 없이 즉시 동작합니다.*

> 본 저장소에는 Cloudflare Pages의 SPA 라우팅을 위한 `public/_redirects`와 고속 캐싱 보안 설정을 위한 `public/_headers`, Node.js 20 호환용 `.node-version` 설정이 모두 적용되어 있습니다.

---

## 💻 로컬 개발 환경 실행

```bash
# 1. 의존성 패키지 설치
npm install

# 2. 로컬 개발 서버 실행
npm run dev

# 3. 프로덕션 빌드 테스트
npm run build
```
