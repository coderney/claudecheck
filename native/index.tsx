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
        source={{ html: '<html><body style="background:red;margin:0;width:100%;height:100%;"><h1 style="color:white;padding:40px">WebView works!</h1></body></html>' }}
        style={styles.webview}
        javaScriptEnabled={true}
        originWhitelist={['*']}
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
