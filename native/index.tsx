import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { getGameHtml } from './src/gameHtml';

function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" hidden />
      <WebView
        source={{ html: getGameHtml(), baseUrl: 'https://localhost' }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scrollEnabled={false}
        bounces={false}
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        allowsBackForwardNavigationGestures={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f9fa',
  },
  webview: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

registerRootComponent(App);
