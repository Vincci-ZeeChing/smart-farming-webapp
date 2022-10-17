import React from 'react';
import {Box} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import {Avatar, Col, Row,Menu} from "antd";
import styled from "styled-components";
import {CloudFilled, HomeFilled , PieChartFilled, UserOutlined,DiffFilled} from '@ant-design/icons';

const Heading1 = styled.div`
  font-family: Arial Black,serif;
  margin-top:1vh;
  margin-bottom:1vh;
  margin-left:6vw;
  color:white; 
  text-align: left;
  font-size:30px;
  
`;

export const DefaultLayout = () => {
    return (
        <>
            <Box bg='#71AF9D' maxW="10xl" mx={'auto'} pt={5} px={{base: 2, sm: 12, md: 17}}>
                <Row wrap>
                    <Col  flex={1}>
                        <Avatar size="large" icon={<UserOutlined />} style={{alignItems:'center',margin:'0',position: 'absolute',top: '10%',marginLeft:'3vh'}} />
                        <Link to="/">
                            <Heading1>
                                Smart Farming
                            </Heading1>
                        </Link>
                    </Col>
                    <Col justify='end'>
                        <Menu mode="horizontal" defaultSelectedKeys={['mail']} style={{background:'#71AF9D',color:'white',flex: "auto",fontFamily: 'Bahnschrift SemiBold', fontSize:'16px',marginRight:'2vw' }}>
                            <Menu.Item key="mail" icon={<HomeFilled />}>
                                <Link to="/dashboard"/>
                                Dashboard
                            </Menu.Item>
                            <Menu.Item key="climateCondition" icon={<CloudFilled />}>
                                <Link to="/climateCondition"/>
                                Weather
                            </Menu.Item>
                            <Menu.Item key="precisionsFarming" icon={<DiffFilled />}>
                                <Link to="/precisionsFarming"/>
                                Precisions Farming
                            </Menu.Item>
                            <Menu.Item key="dataAnalytics" icon={<PieChartFilled />}>
                                <Link to="/dataAnalytics"/>
                                Data Analytics
                            </Menu.Item>
                        </Menu>
                    </Col>
                </Row>
            </Box>
        </>
    );
};

