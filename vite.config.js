import { defineConfig } from "vite";
import { resolve } from "path";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

// https://vitejs.dev/config/
export default defineConfig({
  root,
  base: "/realstravels/",
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        product: resolve(root, "pages", "producto.html"),
        clientLogin: resolve(root, "pages", "client-login.html"),
        clientSignup: resolve(root, "pages", "client-signup.html"),
        recoverPass: resolve(root, "pages", "recuperar-contrasena.html"),
        businessLogin: resolve(root, "pages", "business-login.html"),
        businessSignup: resolve(root, "pages", "business-singup.html"),
        hotelSignup: resolve(root, "pages", "hotel-singup.html"),
        agencySignup: resolve(root, "pages", "agency-signup.html"),
      },
    },
  },
});
