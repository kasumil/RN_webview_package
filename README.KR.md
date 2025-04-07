# 카슈밀 블로그 앱 (Kasumil Blog App)

[카슈밀 티스토리 블로그](https://kasumil.tistory.com)를 React Native의 WebView로 감싸서 모바일 앱으로 패키징한 프로젝트입니다. Android와 iOS 모두 지원하며, Android 뒤로가기 버튼 처리, 다크모드, 알림 설정과 같은 동적 설정 기능을 포함하고 있습니다.

## 주요 기능

- **웹뷰(WebView) 패키징:** 앱 내부에서 kasumil.tistory.com 웹사이트를 WebView로 표시
- **멀티 플랫폼 지원:** Android 및 iOS 모두 지원
- **뒤로가기 버튼 처리:** Android에서 뒤로가기 버튼으로 웹뷰 히스토리 탐색 가능
- **동적 설정:** 설정 화면에서 다크모드 및 알림 설정을 토글로 조정 가능
- **네비게이션:** Stack 및 하단 탭 내비게이션을 React Navigation으로 구현

## 필수 요구사항

- Node.js, npm 또는 Yarn
- React Native CLI
- Xcode (iOS 용), Android Studio (Android 용)
- CocoaPods (iOS 용)

## 설치 방법

1.  **레포지토리 복제하기**

    ```sh
    git clone <repository-url>
    cd RN_webview_package
    ```

2.  **의존성 설치하기**

    npm을 사용하는 경우:

    ```
    npm install
    ```

    yarn을 사용하는 경우:

    ```
    yarn install
    ```

3.  **iOS 의존성 설치 (CocoaPods)**

    ```
    cd ios && pod install && cd ..
    ```

## 앱 실행 방법

### Android

    다음 명령어를 실행하여 Android 앱을 빌드하고 실행하세요.
    npx react-native run-android

### iOS

    다음 명령어를 실행하여 앱을 빌드하고 iOS 시뮬레이터에서 실행하세요. (사용할 iOS 버전을 지원하는 시뮬레이터 선택 필요, 예: iPhone 16)
    npx react-native run-ios --simulator="iPhone 16"

## 프로젝트 구조

프로젝트 구조는 다음과 같습니다:

<pre>
RN_webview_package/
├── android/
├── ios/
├── src/
│ ├── navigation/
│ │ └── AppNavigator.tsx # Stack/Tab 네비게이터 설정
│ ├── screens/
│ │ ├── WebScreen.tsx # WebView 화면 (kasumil.tistory.com)
│ │ └── SettingsScreen.tsx # 설정 화면 (다크모드, 알림 설정)
│ └── components/
│ └── WebviewComponent.tsx # (선택적) WebView를 커스텀한 컴포넌트
├── App.tsx # NavigationContainer를 사용하는 루트 컴포넌트
├── README.md
└── package.json
</pre>

```

```
