// import React from 'react';
// import {Box} from "@chakra-ui/react";
// import {Link} from "react-router-dom";
// import {Avatar, Col, Row,Menu} from "antd";
// import styled from "styled-components";
// import {CloudFilled, HomeFilled , PieChartFilled, UserOutlined,DiffFilled} from '@ant-design/icons';
// import '../layout/index.css';
// const Heading1 = styled.div`
//   font-family: Arial Black,serif;
//   margin-top:1vh;
//   margin-bottom:1vh;
//   margin-left:6vw;
//   color:white;
//   text-align: left;
//   font-size:30px;
//
// `;
//
// export const DefaultLayout = () => {
//
//
//
//     return (
//         <>
//             <Box bg='#71AF9D' maxW="10xl" mx={'auto'} pt={5} px={{base: 2, sm: 12, md: 17}}>
//                 <Row wrap>
//                     <Col  flex={1}>
//                         <Avatar size="large" icon={<UserOutlined />} style={{alignItems:'center',margin:'0',position: 'absolute',top: '10%',marginLeft:'3vh'}} />
//                         <Link to="/">
//                             <Heading1>
//                                 Smart Farming
//                             </Heading1>
//                         </Link>
//                     </Col>
//                     <Col justify='end'>
//                         <Menu mode="horizontal" style={{background:'#71AF9D',color:'white',flex: "auto",fontFamily: 'Bahnschrift SemiBold', fontSize:'16px',marginRight:'2vw' }}>
//                             <Menu.Item key="dashboard" icon={<HomeFilled />}>
//                                 <Link to="/dashboard"/>
//                                 Dashboard
//                             </Menu.Item>
//                             <Menu.Item key="climateCondition" icon={<CloudFilled />}>
//                                 <Link to="/climateCondition"/>
//                                 Weather
//                             </Menu.Item>
//                             <Menu.Item  key="precisionsFarming" icon={<DiffFilled />}>
//                                 <Link to="/precisionsFarming"/>
//                                 Precisions Farming
//                             </Menu.Item>
//                             <Menu.Item key="dataAnalytics" icon={<PieChartFilled />}>
//                                 <Link to="/dataAnalytics"/>
//                                 Data Analytics
//                             </Menu.Item>
//                         </Menu>
//                     </Col>
//                 </Row>
//             </Box>
//         </>
//     );
// };


import React, {useEffect, useState} from "react";
import { Layout, Button, Drawer } from "antd";
import LeftMenu from "./leftMenu";
import RightMenu from "./rightMenu";
import { MenuOutlined } from "@ant-design/icons";
import {Link, useLocation} from "react-router-dom";
import './index.css'
import {Box} from "@chakra-ui/react";


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
                </Layout>
            </nav>
        </Box>
    );
};

export default Navbar;