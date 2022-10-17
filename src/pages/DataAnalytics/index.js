import React from 'react';
import  'antd/dist/antd.min.css';
import {Box, SimpleGrid} from "@chakra-ui/react";



const DataAnalytics = () => {
    return (
        <Box bg='#E1F6F0' minH="90vh"  w='100%' color='black'>
            <SimpleGrid>
                <Box bg='white' minH="80vh" style={{margin:'5vh'}}>
                    Data Analytics
                </Box>
            </SimpleGrid>
        </Box>

    );
};

export default DataAnalytics;
