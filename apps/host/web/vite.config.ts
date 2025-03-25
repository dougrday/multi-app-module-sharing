import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
            external: ["react", "react-dom/client", "react-router"],
            output: {
                globals: {
                    react: "react",
                    "react-dom": "ReactDOM",
                    "react-router": "ReactRouter",
                },
            },
        },
    },
    plugins: [react()],
});
