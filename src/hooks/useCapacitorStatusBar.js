import { useEffect } from 'react';

export default function useCapacitorStatusBar() {
  useEffect(() => {
    const isNative =
      typeof window !== 'undefined' &&
      !!window.Capacitor &&
      typeof window.Capacitor.isNativePlatform === 'function' &&
      window.Capacitor.isNativePlatform();

    if (!isNative) return;

    import('@capacitor/status-bar')
      .then(({ StatusBar }) => {
        StatusBar.setOverlaysWebView({ overlay: true }).catch(() => {});
        StatusBar.hide().catch(() => {});
      })
      .catch(() => {});
  }, []);
}