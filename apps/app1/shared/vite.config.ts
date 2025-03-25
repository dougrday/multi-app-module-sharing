import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    build: {
        lib: {
            cssFileName: "app1-shared",
            entry: "src/public-api.ts",
            fileName: "app1-shared",
            formats: ["es"],
            name: "app1-shared",
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
    plugins: [react({ jsxRuntime: "classic" })],
});
