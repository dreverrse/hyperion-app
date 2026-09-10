import { useEffect } from 'react';

export default function useCapacitorStatusBar() {
  useEffect(() => {
    const capacitor = (
      window as unknown as { Capacitor?: { isNativePlatform?: () => boolean } }
    ).Capacitor;

    const isNative =
      typeof window !== 'undefined' &&
      !!capacitor &&
      typeof capacitor.isNativePlatform === 'function' &&
      capacitor.isNativePlatform();

    if (!isNative) return;

    import('@capacitor/status-bar')
      .then(({ StatusBar }) => {
        StatusBar.setOverlaysWebView({ overlay: true }).catch(() => {});
        StatusBar.hide().catch(() => {});
      })
      .catch(() => {});
  }, []);
}