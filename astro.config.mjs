import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://lynebeauty.ch',
  base: '/',
  output: 'static',
  server: { port: 4321 },
});
