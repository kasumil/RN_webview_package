import React, {useRef, useState} from 'react';
import {BackHandler, ToastAndroid} from 'react-native';
import {WebView} from 'react-native-webview';

interface WebviewComponentProps {}

function WebviewComponent({}: WebviewComponentProps) {
  const webviewRef = useRef(null);
  const [canGoBack, setCanGoBack] = useState(false);

  // Android 뒤로 가기 제어
  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        if (canGoBack && webviewRef.current) {
          webviewRef.current.goBack();
          return true;
        } else {
          ToastAndroid.show('한 번 더 누르면 종료됩니다.', ToastAndroid.SHORT);
          return false;
        }
      },
    );
    return () => backHandler.remove();
  }, [canGoBack]);

  return (
    <WebView
      ref={webviewRef}
      source={{uri: 'https://kasumil.tistory.com'}}
      javaScriptEnabled
      domStorageEnabled
      originWhitelist={['*']}
      mixedContentMode="always"
      onNavigationStateChange={navState => setCanGoBack(navState.canGoBack)}
      allowsBackForwardNavigationGestures={true}
      style={{
        flex: 1,
      }}
    />
  );
}

export default WebviewComponent;
