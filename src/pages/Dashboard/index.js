import React, {useEffect, useState} from 'react';
import  'antd/dist/antd.min.css';
import {Box, SimpleGrid} from "@chakra-ui/react";
import axios from "axios";
import {Card, Row} from "antd";
import soil from "../../image/soil.png"
import surrounding from "../../image/surrounding.png"
const Dashboard = () => {

    const [soilSensorData,setSoilSensorData] = useState({
        temperature: undefined,
        humidity: undefined,
        moisture: undefined
    });
    const [surroundingSensorData,setSurroundingSensorData] = useState({
        temperature: undefined,
        humidity: undefined,
        moisture: undefined
    });
    const getSoilSensorData =()=>{
        axios.get(
            "http://localhost:5000/soilSensors")
            .then((response) =>
            {
                setSoilSensorData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    const getSurroundingSensorData =()=>{
        axios.get(
            "http://localhost:5000/surroundingSensors")
            .then((response) =>
            {
                setSurroundingSensorData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getSoilSensorData()
        getSurroundingSensorData()
    }, []);


    return (
        <>
            <Row>
                <Box maxW="10xl" mx={'auto'} px={{base: 2, sm: 12, md: 17}} style={{margin:"5vh"}}>
                    <SimpleGrid columns={{base: 1, md: 1}} spacing={{base: 5, lg: 8}} >
                        <Card
                            hoverable
                            title={
                                <h3 style={{textAlign:"center", fontSize:"25px", fontWeight:"bolder"}}>
                                    Soil
                                </h3>
                            }
                            type="inner"
                            cover={
                                <div style={{ overflow: "hidden", width: "100%" , height : "280px" }}>
                                    <img
                                        alt="example"
                                        style={{ height: "100%" }}
                                        src={soil}
                                    />
                                </div>
                            }
                            headStyle={{ backgroundColor: '#e9e9e9' }}
                            bodyStyle={{ backgroundColor: '#e9e9e9' }}
                            style={{
                                width: "100%",
                                borderRadius: "20px",
                                overflow: "hidden",
                                alignItems:'center'
                            }}
                        >
                            <p>Temperature:{soilSensorData.temperature}</p>
                            <p>Humidity:{soilSensorData.humidity}</p>
                            <p>Moisture:{soilSensorData.moisture}</p>
                        </Card>
                    </SimpleGrid>
                </Box>


                <Box maxW="10xl" mx={'auto'} px={{base: 2, sm: 12, md: 17}} style={{margin:"5vh"}}>
                    <SimpleGrid columns={{base: 1, md: 1}} spacing={{base: 5, lg: 8}}>
                        <Card
                            hoverable
                            title={
                                <h3 style={{textAlign:"center", fontSize:"25px", fontWeight:"bolder"}}>
                                    Surrounding
                                </h3>
                            }
                            type={"inner"}
                            cover={
                                <div style={{ overflow: "hidden", width: "100%" , height : "280px"  }}>
                                    <img
                                        alt="example"
                                        style={{ height: "100%" }}
                                        src={surrounding}
                                    />
                                </div>
                            }
                            headStyle={{ backgroundColor: '#e9e9e9' }}
                            bodyStyle={{ backgroundColor: '#e9e9e9' }}
                            style={{
                                width: "100%",
                                borderRadius: "20px",
                                overflow: "hidden",
                            }}
                        >
                            <p>Temperature:{surroundingSensorData.temperature}</p>
                            <p>Humidity:{surroundingSensorData.humidity}</p>
                            <p>Moisture:{surroundingSensorData.moisture}</p>
                        </Card>
                    </SimpleGrid>
                </Box>
            </Row>
        </>
    );
};

export default Dashboard;
