import React from 'react';
import {
    Route,
    Routes
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ClimateCondition from "../pages/ClimateCondition";
import Navigation from "../naviagtion";
import PrecisionsFarming from "../pages/PrecisonsFarming";
import DataAnalytics from "../pages/DataAnalytics";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Dashboard />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="climateCondition" element={<ClimateCondition />} />
                <Route path="precisionsFarming" element={<PrecisionsFarming />} />
                <Route path="dataAnalytics" element={<DataAnalytics />} />
            </Route>
        </Routes>
    );
};

export default Routing;
