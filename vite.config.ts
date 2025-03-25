import react, { Options as ReactPluginOptions } from "@vitejs/plugin-react";
import { defineConfig, LibraryOptions, ServerOptions, UserConfig } from "vite";

interface BuildViteConfigOptions {
    lib?: LibraryOptions;
    reactOptions?: ReactPluginOptions;
    server?: ServerOptions;
}

// https://vite.dev/config/
export const buildViteConfig = ({ lib, reactOptions, server }: BuildViteConfigOptions) =>
    defineConfig({
        build: {
            lib,
            // Standardized rollup options for externalized packages
            rollupOptions: {
                // Apps and shared packages are externalized
                // alongside standard shared packages
                external: [
                    "@example/app1-shared",
                    "@example/app1-web",
                    "@example/app2-shared",
                    "@example/app1-web",
                    "react",
                    "react-dom/client",
                    "react-router",
                ],
            },
        },
        plugins: [react(reactOptions)],
        server,
    } as UserConfig);
