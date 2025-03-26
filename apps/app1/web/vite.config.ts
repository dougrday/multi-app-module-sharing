import { buildViteConfig } from "../../../vite.config";

export default buildViteConfig({
    lib: {
        cssFileName: "web",
        entry: "src/public-api.ts",
        fileName: "web",
        formats: ["es"],
    },
    preview: { port: 3002 },
    server: { port: 3002 },
});
