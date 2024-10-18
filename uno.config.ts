import { defineConfig } from 'unocss';
import { presetUno } from 'unocss';
import { presetIcons, presetWebFonts } from 'unocss';

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: ['IBM Plex Sans'], // You can add your favorite fonts here.
      },
    }),
  ],
});
