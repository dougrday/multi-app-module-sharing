import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    build: {
        lib: {
            cssFileName: "app2-shared",
            entry: "src/public-api.ts",
            fileName: "app2-shared",
            formats: ["es"],
            name: "app2-shared",
        },
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
