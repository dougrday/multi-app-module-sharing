import { buildViteConfig } from "../../../vite.config";

export default buildViteConfig({
    lib: {
        cssFileName: "components",
        entry: ["src/entrypoints/components.ts", "src/entrypoints/hooks.ts"],
        fileName: (_, entryName) => `${entryName}.mjs`,
        formats: ["es"],
    },
    preview: { port: 3001 },
    server: {
        port: 3001,
    },
});
