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
        source={{ html: getGameHtml() }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        originWhitelist={['*']}
        scrollEnabled={false}
        bounces={false}
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        allowsBackForwardNavigationGestures={false}
        injectedJavaScript={`
          window.onerror = function(msg, src, line) {
            window.ReactNativeWebView && window.ReactNativeWebView.postMessage('ERR: ' + msg + ' @ ' + line);
            return true;
          };
          true;
        `}
        onMessage={(e) => console.log('[WebView]', e.nativeEvent.data)}
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
