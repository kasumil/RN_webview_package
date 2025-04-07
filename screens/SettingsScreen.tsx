import React, {useState} from 'react';
import {View, Text, StyleSheet, Switch, SafeAreaView} from 'react-native';

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(previous => !previous);
  const toggleNotifications = () =>
    setIsNotificationsEnabled(previous => !previous);

  // 다크모드에 따른 동적 스타일 적용
  const containerStyle = [
    styles.container,
    {backgroundColor: isDarkMode ? '#000' : '#fff'},
  ];

  const textStyle = [styles.text, {color: isDarkMode ? '#fff' : '#000'}];

  return (
    <SafeAreaView style={containerStyle}>
      <Text style={[styles.title, {color: isDarkMode ? '#fff' : '#000'}]}>
        앱 설정
      </Text>
      <Text style={textStyle}>
        다크모드 상태: {isDarkMode ? '켜짐' : '꺼짐'}
      </Text>
      <Text style={textStyle}>
        알림 설정 상태: {isNotificationsEnabled ? '켜짐' : '꺼짐'}
      </Text>
      <View style={styles.settingItem}>
        <Text
          style={[styles.settingLabel, {color: isDarkMode ? '#fff' : '#000'}]}>
          다크모드
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isDarkMode ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleDarkMode}
          value={isDarkMode}
        />
      </View>
      <View style={styles.settingItem}>
        <Text
          style={[styles.settingLabel, {color: isDarkMode ? '#fff' : '#000'}]}>
          알림 설정
        </Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isNotificationsEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleNotifications}
          value={isNotificationsEnabled}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  settingLabel: {
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default SettingsScreen;
