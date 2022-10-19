import React from "react";
import {Menu} from "antd";
import {CloudFilled, DiffFilled, HomeFilled, PieChartFilled} from "@ant-design/icons";
import {Link} from "react-router-dom";


const LeftMenu = ({ mode }) => {
    return (
        <Menu mode={mode} style={{background:'#71AF9D',color:'white',flex: "auto",fontFamily: 'Bahnschrift SemiBold', fontSize:'16px',marginRight:'2vw' }}>
            <Menu.Item key="dashboard" icon={<HomeFilled />}>
                <Link to="/dashboard"/>
                Dashboard
            </Menu.Item>
            <Menu.Item key="climateCondition" icon={<CloudFilled />}>
                <Link to="/climateCondition"/>
                Weather
            </Menu.Item>
            <Menu.Item  key="precisionsFarming" icon={<DiffFilled />}>
                <Link to="/precisionsFarming"/>
                Precisions Farming
            </Menu.Item>
            <Menu.Item key="dataAnalytics" icon={<PieChartFilled />}>
                <Link to="/dataAnalytics"/>
                Data Analytics
            </Menu.Item>
        </Menu>
    );
};

export default LeftMenu;