import { sveltekit } from '@sveltejs/kit/vite'
import UnoCSS from "unocss/vite"
import { extractorSvelte } from '@unocss/core'
import presetUno from "@unocss/preset-uno"
import { presetIcons } from '@unocss/preset-icons'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    UnoCSS({
      configFile: 'uno.config.ts',
      extractors: [extractorSvelte],
      presets: [
        presetUno(),
        presetIcons({
          prefix: 'i-',
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          }
        }),
      ],
    }),
    sveltekit(),
  ],
};

export default config;
