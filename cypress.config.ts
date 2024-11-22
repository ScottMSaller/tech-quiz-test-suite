import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: "http://localhost:3000", // Adjust the base URL as per your app's local dev server
    },
    component: {
        devServer: {
            framework: "react",
            bundler: "webpack",
        },
    },
});
