import react, { Options as ReactPluginOptions } from "@vitejs/plugin-react";
import { defineConfig, LibraryOptions, PreviewOptions, ServerOptions, UserConfig } from "vite";

interface BuildViteConfigOptions {
    lib?: LibraryOptions;
    preview?: PreviewOptions;
    reactOptions?: ReactPluginOptions;
    server?: ServerOptions;
}

// https://vite.dev/config/
export const buildViteConfig = ({ lib, preview, reactOptions, server }: BuildViteConfigOptions) =>
    defineConfig({
        build: {
            minify: false,
            lib,
            // Standardized rollup options for externalized packages
            rollupOptions: {
                // Apps and shared packages are externalized
                // alongside standard shared packages
                external: [
                    "@example/app1-shared",
                    "@example/app1-web",
                    "@example/app2-shared",
                    "@example/app2-web",
                    "react",
                    "react-dom/client",
                ],
            },
            sourcemap: true,
        },
        define: {
            // Believe it or not, the CDN-deployed "react" has `process.env.NODE_ENV` checks in it.
            // This makes it unsuitable for browser-based apps without some help, like this 👇🏽
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        },
        plugins: [react(reactOptions)],
        preview,
        server,
    } as UserConfig);
