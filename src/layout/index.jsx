import React, {useEffect, useState} from "react";
import { Layout, Button, Drawer } from "antd";
import LeftMenu from "./leftMenu";
import RightMenu from "./rightMenu";
import { MenuOutlined } from "@ant-design/icons";
import {Link, useLocation} from "react-router-dom";
import './index.css'
import {Box, Grid} from "@chakra-ui/react";
import Dashboard from "../pages/Dashboard";
import ClimateCondition from "../pages/ClimateCondition";
import PrecisionsFarming from "../pages/PrecisonsFarming";
import DataAnalytics from "../pages/DataAnalytics";


const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(!visible);
    };


    // If you do not want to auto-close the mobile drawer when a path is selected
    // Delete or comment out the code block below
    // From here
    let { pathname: location } = useLocation();

    useEffect(() => {
        setVisible(false);
    }, [location]);
    // Upto here


    return (
        <Box bg='#71AF9D' maxW="10xl" mx={'auto'} pt={5} px={{base: 2, sm: 12, md: 17}}>
            <nav className="navbar">
                <Layout>
                    <Layout.Header className="nav-header">
                        <div className="logo">
                            <h3 className="brand-font">
                                <Link to="/">
                                    Smart Farming
                                </Link>
                            </h3>
                        </div>
                        <div className="navbar-menu">
                            <div className="leftMenu">
                                <LeftMenu mode={"horizontal"} />
                            </div>
                            <Button className="menuButton" type="text" onClick={showDrawer}>
                                <MenuOutlined />
                            </Button>
                            <div className="rightMenu">
                                <RightMenu mode={"horizontal"} />
                            </div>

                            <Drawer
                                title={"Smart Farming"}
                                autoFocus={false}
                                placement="right"
                                closable={true}
                                returnFocusOnClose={false}
                                onClose={showDrawer}
                                visible={visible}
                                style={{ zIndex: 99999}}
                            >
                                <LeftMenu mode={"inline"} />
                                <RightMenu mode={"inline"} />
                            </Drawer>
                        </div>
                    </Layout.Header>
                    <Layout.Content>
                        <Grid
                            minH='100vh'
                            h='100%'
                            w='100%'
                            backgroundColor='#E1F6F0'
                            gap={2}
                        >
                            <Grid
                                minH='80vh'
                                backgroundColor='white'
                                gap={1}
                                style={{margin:"6vh",alignItems:"center",justifyContent:'center'}}
                            >
                                {(() => {
                                    if (location === "/"){
                                        return(
                                            <Dashboard/>
                                        )
                                    }else if (location === "/dashboard"){
                                        return(
                                            <Dashboard/>
                                        )
                                    }else if (location === "/climateCondition"){
                                        return(
                                            <ClimateCondition/>
                                        )
                                    }else if (location === "/precisionsFarming"){
                                        return(
                                            <PrecisionsFarming/>
                                        )
                                    }else if (location === "/dataAnalytics"){
                                        return(
                                            <DataAnalytics/>
                                        )
                                    }
                                })()}
                            </Grid>
                        </Grid>
                    </Layout.Content>
                    <Layout.Footer style={{textAlign:"center"}}>
                        Smart Farming System ©2023 Created by Vincci Chye
                    </Layout.Footer>
                </Layout>
            </nav>
        </Box>
    );
};

export default Navbar;