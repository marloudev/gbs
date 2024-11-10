import "./bootstrap";
import "../css/app.css";
import { CssBaseline } from "@mui/material";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import store from "./store/store";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";
const theme = createTheme({
    palette: {
        primary: {
            main: "#d32f2f", // Primary color
        },
        error: {
            main: "#d32f2f", // Custom "danger" color
        },
    },
});
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./app/${name}.jsx`,
            import.meta.glob("./app/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Provider store={store}>
                    <App {...props} />
                </Provider>
            </ThemeProvider>
        );
    },
    progress: {
        color: "#4B5563",
    },
});
