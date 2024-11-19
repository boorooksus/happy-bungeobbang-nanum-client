# SK행복마을 자치회 붕어빵 나눔 대기 현왕

## 프로젝트 설치 및 실행 방법

1. 저장소를 클론합니다.

```
git clone https://github.com/boorooksus/happy-bungeobbang-nanum-client.git
```

2. 프로젝트 폴더로 이동합니다.

```
cd happy-bungeobbang-nanum-client-main
```

3. 필요한 의존성을 설치합니다.

```
npm install
```

4. `.env.sample` 파일의 이름을 `.env`으로 바꾸고, VITE_APP_NAVERMAPS_CLIENT_ID에 Naver Cloud에서 발급 받은 `client_id`로 채웁니다. `client_id`는 [NAVER CLOUD PLATFORM](https://console.ncloud.com/naver-service/application) 에서 어플리케이션 등록 후 발급받을 수 있습니다.
5. `.env`파일에서 VITE_APP_APIKEY,VITE_APP_AUTHDOMAIN, VITE_APP_DATABASEURL, VITE_APP_PROJECTID, VITE_APP_STORAGEBUCKET, VITE_APP_MESSAGINGSENDERID, VITE_APP_APPID, VITE_APP_MEASUREMENTID에 Firebase 값들을 설정합니다.
6. `.env`파일에서 VITE_APP_PASSWORDKEY 값을 원하는대로 설정합니다.
   예시: passwordkey, myKey, ...
7. src/firebase.ts 파일에 Firebase SDK를 설정합니다. [Firebase](https://firebase.google.com/docs/web/setup?hl=ko) 문서를 참고하여 SDK를 설정할 수 있습니다.
8. 사용자 정의가 필요한 파일들을 수정합니다. (아래의 체크리스트 참고)
9. 애플리케이션을 실행합니다.

```
npm run dev
```

## Clone 후, 바로 배포하기

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/import?s=https%3A%2F%2Fgithub.com%2Fboorooksus%2Fhappy-bungeobbang-nanum-client&hasTrialAvailable=1&showOptionalTeamCreation=false&project-name=happy-bungeobbang-nanum-client&framework=vite&totalProjects=1&remainingProjects=1&teamSlug=boo-sjs-projects)

## 참고 자료

- mobile-wedding-invitation 래파지토리: [heejin-hwang](https://github.com/heejin-hwang/mobile-wedding-invitation)
- react-photoswipe-gallery 라이브러리: [react-photoswipe-gallery](https://www.npmjs.com/package/react-photoswipe-gallery)
- react-naver-maps 공식문서: [react-naver-maps](https://zeakd.github.io/react-naver-maps/)
- 네이버 클라우드 플랫폼: [NAVER CLOUD PLATFORM](https://console.ncloud.com/naver-service/application)

이 프로젝트는 MIT 라이센스에 따라 배포됩니다. 자세한 내용은 LICENSE 파일을 참조하세요.
