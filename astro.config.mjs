import { defineConfig, passthroughImageService } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://unexpiredbread.github.io",
  base: "dvn",
  image: {
    service: passthroughImageService(),
  },
});
