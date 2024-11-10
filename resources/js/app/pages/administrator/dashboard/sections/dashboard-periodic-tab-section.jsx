import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { setTab } from "../redux/dashboard-slice";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}

export default function DashboardPeriodicTabSection() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const dispatch = useDispatch();

    const { tab } = useSelector((state) => state.dashboard);

    return (
        <Box sx={{ bgcolor: "background.paper", width: 500 }} className="my-5">
            <AppBar position="static">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="inherit"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab
                        label="Daily"
                        onClick={() => dispatch(setTab("daily"))}
                    />
                    <Tab
                        label="Weekly"
                        onClick={() => dispatch(setTab("weekly"))}
                    />
                    <Tab
                        label="Monthly"
                        onClick={() => dispatch(setTab("monthly"))}
                    />
                    <Tab
                        label="Quarterly"
                        onClick={() => dispatch(setTab("quarterly"))}
                    />
                </Tabs>
            </AppBar>
        </Box>
    );
}
