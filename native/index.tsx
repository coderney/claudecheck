import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import * as Haptics from 'expo-haptics';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { getGameHtml } from './src/gameHtml';

function App() {
  const [key, setKey] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" hidden />
      <WebView
        key={key}
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
        onMessage={(e) => {
          const raw = e.nativeEvent.data;
          if (raw === 'reset') { setKey(k => k + 1); return; }
          try {
            const msg = JSON.parse(raw);
            if (msg.type === 'haptic') {
              switch (msg.style) {
                case 'light':   Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light); break;
                case 'medium':  Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium); break;
                case 'success': Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success); break;
                case 'error':   Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error); break;
              }
            }
          } catch (_) {}
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

registerRootComponent(App);
