import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { imagePreprocessor } from 'svimg';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $components: 'src/components',
      $utils: 'src/utils',
      $a: 'src'
    }
  },
  preprocess: [
    imagePreprocessor({
      inputDir: 'static',
      outputDir: 'static/g',
      webp: true,
      avif: true
    }), 
    preprocess({
      postcss: true
    })
  ]
};

export default config;
