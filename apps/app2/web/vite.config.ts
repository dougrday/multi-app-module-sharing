import { buildViteConfig } from "../../../vite.config";

export default buildViteConfig({
    lib: {
        cssFileName: "web",
        entry: "src/public-api.ts",
        fileName: "web",
        formats: ["es"],
    },
    reactOptions: { jsxRuntime: "classic" },
    server: { port: 3004 },
});
