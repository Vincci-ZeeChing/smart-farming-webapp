import React, {useEffect, useState} from 'react';
import  'antd/dist/antd.min.css';
import {Box, SimpleGrid} from "@chakra-ui/react";
import axios from "axios";


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
                console.log(response.data);
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
                console.log(response.data);
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
        <Box bg='#E1F6F0' minH="90vh"  w='100%' color='black'>
            <SimpleGrid>
                <Box bg='white' minH="80vh" style={{margin:'5vh'}}>
                    <p>
                        Dashboard
                    </p>
                    <p>
                        Soil
                    </p>
                    <p>
                        Temperature:{soilSensorData.temperature}
                    </p>
                    <p>
                        Humidity:{soilSensorData.humidity}
                    </p>

                    <p>
                        Moisture:{soilSensorData.moisture}
                    </p>
                    <br/>
                    <p>
                        Surrounding
                    </p>
                    <p>
                        Temperature:{surroundingSensorData.temperature}
                    </p>
                    <p>
                        Humidity:{surroundingSensorData.humidity}
                    </p>

                    <p>
                        Moisture:{surroundingSensorData.moisture}
                    </p>
                    

                </Box>
            </SimpleGrid>
        </Box>

    );
};

export default Dashboard;
