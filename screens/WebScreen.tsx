import React from 'react';
import {Button} from 'react-native';
import WebviewComponent from './WebviewComponent';

const WebScreen = ({navigation}) => {
  return (
    <>
      <Button title="⚙️ 설정" onPress={() => navigation.navigate('Settings')} />
      <WebviewComponent />
    </>
  );
};

export default WebScreen;
