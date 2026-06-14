import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getGameHtml } from '../src/gameHtml';

export default function GameScreen() {
  const webViewRef = useRef<WebView>(null);
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
    }]}>
      <WebView
        ref={webViewRef}
        source={{ html: getGameHtml(), baseUrl: 'https://localhost' }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsInlineMediaPlayback={true}
        scrollEnabled={false}
        bounces={false}
        overScrollMode="never"
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        allowsBackForwardNavigationGestures={false}
        onShouldStartLoadWithRequest={(request) => {
          return request.url === 'about:blank' || request.url.startsWith('https://localhost') || request.url.startsWith('blob:');
        }}
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
