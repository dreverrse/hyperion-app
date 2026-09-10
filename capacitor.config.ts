import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.hyperion.app',
  appName: 'Hyperion',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    StatusBar: {
      overlaysWebView: true,
      style: 'DARK',
      backgroundColor: '#121214',
    },
  },
}

export default config