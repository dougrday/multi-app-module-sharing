import { buildViteConfig } from "../../../vite.config";

export default buildViteConfig({
    lib: {
        entry: "src/public-api.ts",
        fileName: "shared",
        formats: ["es"],
    },
    preview: { port: 3003 },
    server: { port: 3003 },
});
