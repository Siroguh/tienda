import { sveltekit } from '@sveltejs/kit/vite';
import UnoCSS from "unocss/vite";
import presetUno from "@unocss/preset-uno";
import presetIcons from '@unocss/preset-icons'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    UnoCSS({
      mode: 'svelte-scoped',
      presets: [
        presetUno(),
        presetIcons({
          prefix: 'i-',
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          },
        }),
      ],
    }),
    sveltekit(),
  ],
};

export default config;
