import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // 1. Plugins: Ativa o suporte ao React com Fast Refresh
  plugins: [react()],

  // 2. Base Path: Crucial para o GitHub Pages.
  // Garante que os caminhos dos ficheiros apontem para https://vnsfc.github.io/managerfc/
  base: '/managerfc/',

  // 3. Servidor de Desenvolvimento Local (Opcional)
  server: {
    port: 3000,     // Define a porta padrão (ex: http://localhost:3000)
    open: true,     // Abre automaticamente o navegador ao iniciar o servidor
  },

  // 4. Configurações de Compilação (Build)
  build: {
    outDir: 'dist',          // Pasta de saída para os ficheiros estáticos
    assetsDir: 'assets',      // Pasta interna para armazenar CSS, JS e imagens
    sourcemap: false,         // Desativa sourcemaps em produção para reduzir o tamanho
  }
})