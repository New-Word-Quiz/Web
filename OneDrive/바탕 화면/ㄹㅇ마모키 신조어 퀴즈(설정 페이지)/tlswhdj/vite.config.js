import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',       // SW 자동 업데이트
      includeAssets: ['favicon.svg'],   // 추가로 캐시할 퍼블릭 자산
      manifest: {
        name: '신조어 퀴즈',
        short_name: '퀴즈',
        description: '노년층 대상 PWA 신조어 퀴즈 앱',
        start_url: '/',
        display: 'standalone',
        background_color: '#F2F2F2',
        theme_color: '#007AFF',
        icons: [
          { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' }
        ]
      }
    })
  ]
});
