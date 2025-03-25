import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    build: {
        lib: {
            cssFileName: "app1-web",
            entry: "src/main.tsx",
            fileName: "app1-web",
            formats: ["es"],
            name: "app1-web",
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
