import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    server: {
      deps: {
        external: ["https://esm.sh/react@18.2.0"]
      }
    }
  },
})
