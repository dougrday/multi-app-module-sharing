import { buildViteConfig } from "../../../vite.config";

export default buildViteConfig({
    lib: {
        cssFileName: "components",
        entry: ["src/entrypoints/components.ts"],
        fileName: (_, entryName) => `${entryName}.mjs`,
        formats: ["es"],
    },
    preview: { port: 3003 },
    server: { port: 3003 },
});
