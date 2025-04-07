[🇰🇷 한국어로 보기](./README.KR.md)

# Kasumil Blog App

A React Native application that packages the blog [kasumil.tistory.com](https://kasumil.tistory.com) as a mobile app using React Native WebView. This project supports both Android and iOS platforms and includes features like back-button handling on Android and dynamic settings (e.g., dark mode, notification toggles).

## Features

- **WebView Packaging:** Display kasumil.tistory.com inside the app using WebView.
- **Platform Support:** Works on both Android and iOS.
- **Back Button Handling:** Custom back-button behavior on Android (navigates WebView history).
- **Dynamic Settings:** Settings screen with toggles for Dark Mode and Notifications.
- **Navigation:** Integrated React Navigation with both Stack and Bottom Tab navigators.

## Prerequisites

- Node.js, npm or Yarn
- React Native CLI
- Xcode (for iOS) and Android Studio (for Android)
- CocoaPods (for iOS)

## Installation

1. **Clone the Repository**

   ```sh
   git clone <repository-url>
   cd RN_webview_package

   ```

2. **Install Dependencies**
   Using npm: npm install
   Or using Yarn: yarn install

3. **Install iOS Dependencies (CocoaPods)**
   cd ios && pod install && cd ..

## Running the App

Android

Run the following command:
npx react-native run-android

iOS

Run the following command (ensuring you select a simulator that supports your target iOS version, e.g., iPhone 16):
npx react-native run-ios --simulator="iPhone 16"

## Project Structure

Below is a sample project structure:

    RN_webview_package/
    ├── android/
    ├── ios/
    ├── src/
    │   ├── navigation/
    │   │   └── AppNavigator.tsx      # Stack/Tab navigator setup
    │   ├── screens/
    │   │   ├── WebScreen.tsx         # WebView screen (kasumil.tistory.com)
    │   │   └── SettingsScreen.tsx    # Settings screen (Dark Mode, Notifications)
    │   └── components/
    │       └── WebviewComponent.tsx  # (Optional) WebView wrapper with custom behavior
    ├── App.tsx                       # Root component integrating NavigationContainer
    ├── README.md
    └── package.json
