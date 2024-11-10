import React, { useEffect } from "react";

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { router as route } from "@inertiajs/react";
import { useDispatch, useSelector } from "react-redux";
import { setPathname } from "@/app/redux/app-slice";
import {
    AccountBalanceWallet,
    AssignmentInd,
    Diversity1,
    Diversity3,
    Engineering,
    EngineeringOutlined,
    FolderShared,
    ForwardToInbox,
    Groups,
    Groups2,
    HistoryEdu,
    MarkEmailRead,
    MarkEmailUnread,
    Payment,
    People,
    PowerSettingsNew,
    School,
    SupervisedUserCircle,
    Unsubscribe,
} from "@mui/icons-material";
import LogoutSection from "../_sections/logout-section";

import { get_user_login_thunk } from "@/app/redux/app-thunk";
import NotificationSection from "../_sections/notification-section";
import store from "@/store/store";

const NAVIGATION = [
    {
        kind: "header",
        title: "Main items",
    },
    {
        segment: "dashboard",
        title: "Dashboard",
        icon: <DashboardIcon />,
    },
    {
        segment: "sales",
        title: "Sales",
        icon: <Payment />,
    },
    {
        segment: "products",
        title: "Products",
        icon: <ShoppingCartIcon />,
    },
    {
        segment: "accounts",
        title: "Accounts",
        icon: <Groups />,
    },
    {
      segment: "settings",
      title: "Settings",
      icon: <EngineeringOutlined />,
  },
    {
        kind: "divider",
    },
    {
        kind: "header",
        title: "Analytics",
    },
    {
        segment: "logout",
        title: "Logout",
        icon: <PowerSettingsNew />,
    },
];

const demoTheme = createTheme({
    cssVariables: {
        colorSchemeSelector: "data-toolpad-color-scheme",
    },
    palette: {
        primary: {
            main: "#d32f2f", // Primary color
        },
    },
    colorSchemes: { light: true, dark: true },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});
function AdministratorLayout({ children }, props) {
    const { pathname } = useSelector((state) => state.app);
    const { window } = props;
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        store.dispatch(get_user_login_thunk());
    }, []);

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path) => {
                if (path == "/logout") {
                    setOpen(true);
                } else {
                    if (path == "/remaining_loan_records") {
                        route.visit(
                            String(
                                "/administrator" + path + "?status=Remaining",
                            ),
                        );
                    } else {
                        route.visit(String("/administrator" + path));
                    }
                    dispatch(setPathname(path));
                }
            },
        };
    }, [pathname]);

    // Remove this const when copying and pasting into your project.
    const demoWindow = window !== undefined ? window() : undefined;
    return (
        // preview-start
        <AppProvider
            navigation={NAVIGATION}
            router={router}
            theme={demoTheme}
            window={demoWindow}
            branding={{
                logo: '',
                // <img src="/images/logo.png" /> logo
                title: "GBS Mini Mart Cashiering System",
            }}
        >
            <NotificationSection />
            <DashboardLayout>
                <LogoutSection open={open} setOpen={setOpen} />
                <div className="p-4">{children}</div>
            </DashboardLayout>
        </AppProvider>
        // preview-end
    );
}

AdministratorLayout.propTypes = {
    window: PropTypes.func,
};

export default AdministratorLayout;
