import { buildViteConfig } from "../../../vite.config";

export default buildViteConfig({
    lib: {
        entry: "src/public-api.ts",
        fileName: "shared",
        formats: ["es"],
    },
    reactOptions: { jsxRuntime: "classic" },
    server: { port: 3003 },
});
