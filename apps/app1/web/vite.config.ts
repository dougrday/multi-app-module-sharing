import { buildViteConfig } from "../../../vite.config";

export default buildViteConfig({
    lib: {
        cssFileName: "app",
        entry: "src/entrypoints/app.ts",
        fileName: () => "app.mjs",
        formats: ["es"],
    },
    preview: { port: 3002 },
    server: { port: 3002 },
});
