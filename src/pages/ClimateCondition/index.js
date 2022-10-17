import React from 'react';
import {Box, SimpleGrid} from "@chakra-ui/react";

const ClimateCondition = () => {
    return (
        <Box bg='#E1F6F0' minH="90vh" w='100%' color='black'>
            <SimpleGrid>
                <Box bg='white' minH="80vh" style={{margin: '5vh'}}>
                    Climate Condition
                </Box>
            </SimpleGrid>
        </Box>
    );
};

export default ClimateCondition;
