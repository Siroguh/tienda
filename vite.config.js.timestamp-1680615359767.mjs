// vite.config.js
import { sveltekit } from "file:///C:/Users/Siroguh/Documents/Sites/tienda/node_modules/.pnpm/@sveltejs+kit@1.5.0_svelte@3.55.1+vite@4.1.1/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import UnoCSS from "file:///C:/Users/Siroguh/Documents/Sites/tienda/node_modules/.pnpm/unocss@0.50.6_postcss@8.4.21+vite@4.1.1/node_modules/unocss/dist/vite.mjs";
import { extractorSvelte } from "file:///C:/Users/Siroguh/Documents/Sites/tienda/node_modules/.pnpm/@unocss+core@0.50.6/node_modules/@unocss/core/dist/index.mjs";
import presetUno from "file:///C:/Users/Siroguh/Documents/Sites/tienda/node_modules/.pnpm/@unocss+preset-uno@0.50.6/node_modules/@unocss/preset-uno/dist/index.mjs";
import presetIcons from "file:///C:/Users/Siroguh/Documents/Sites/tienda/node_modules/.pnpm/@unocss+preset-icons@0.50.6/node_modules/@unocss/preset-icons/dist/index.mjs";
var config = {
  plugins: [
    UnoCSS({
      configFile: "uno.config.ts",
      extractors: [extractorSvelte],
      presets: [
        presetUno(),
        presetIcons({
          prefix: "i-",
          extraProperties: {
            "display": "inline-block",
            "vertical-align": "middle"
          }
        })
      ]
    }),
    sveltekit()
  ]
};
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxTaXJvZ3VoXFxcXERvY3VtZW50c1xcXFxTaXRlc1xcXFx0aWVuZGFcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFNpcm9ndWhcXFxcRG9jdW1lbnRzXFxcXFNpdGVzXFxcXHRpZW5kYVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvU2lyb2d1aC9Eb2N1bWVudHMvU2l0ZXMvdGllbmRhL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgc3ZlbHRla2l0IH0gZnJvbSAnQHN2ZWx0ZWpzL2tpdC92aXRlJztcclxuaW1wb3J0IFVub0NTUyBmcm9tIFwidW5vY3NzL3ZpdGVcIjtcclxuaW1wb3J0IHsgZXh0cmFjdG9yU3ZlbHRlIH0gZnJvbSAnQHVub2Nzcy9jb3JlJ1xyXG5pbXBvcnQgcHJlc2V0VW5vIGZyb20gXCJAdW5vY3NzL3ByZXNldC11bm9cIjtcclxuaW1wb3J0IHByZXNldEljb25zIGZyb20gJ0B1bm9jc3MvcHJlc2V0LWljb25zJ1xyXG5cclxuLyoqIEB0eXBlIHtpbXBvcnQoJ3ZpdGUnKS5Vc2VyQ29uZmlnfSAqL1xyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgVW5vQ1NTKHtcclxuICAgICAgY29uZmlnRmlsZTogJ3Vuby5jb25maWcudHMnLFxyXG4gICAgICBleHRyYWN0b3JzOiBbZXh0cmFjdG9yU3ZlbHRlXSxcclxuICAgICAgcHJlc2V0czogW1xyXG4gICAgICAgIHByZXNldFVubygpLFxyXG4gICAgICAgIHByZXNldEljb25zKHtcclxuICAgICAgICAgIHByZWZpeDogJ2ktJyxcclxuICAgICAgICAgIGV4dHJhUHJvcGVydGllczoge1xyXG4gICAgICAgICAgICAnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgICAgICAgICAndmVydGljYWwtYWxpZ24nOiAnbWlkZGxlJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSksXHJcbiAgICAgIF0sXHJcbiAgICB9KSxcclxuICAgIHN2ZWx0ZWtpdCgpLFxyXG4gIF0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVQsU0FBUyxpQkFBaUI7QUFDN1UsT0FBTyxZQUFZO0FBQ25CLFNBQVMsdUJBQXVCO0FBQ2hDLE9BQU8sZUFBZTtBQUN0QixPQUFPLGlCQUFpQjtBQUd4QixJQUFNLFNBQVM7QUFBQSxFQUNiLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFlBQVk7QUFBQSxNQUNaLFlBQVksQ0FBQyxlQUFlO0FBQUEsTUFDNUIsU0FBUztBQUFBLFFBQ1AsVUFBVTtBQUFBLFFBQ1YsWUFBWTtBQUFBLFVBQ1YsUUFBUTtBQUFBLFVBQ1IsaUJBQWlCO0FBQUEsWUFDZixXQUFXO0FBQUEsWUFDWCxrQkFBa0I7QUFBQSxVQUNwQjtBQUFBLFFBQ0YsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFVBQVU7QUFBQSxFQUNaO0FBQ0Y7QUFFQSxJQUFPLHNCQUFROyIsCiAgIm5hbWVzIjogW10KfQo=
