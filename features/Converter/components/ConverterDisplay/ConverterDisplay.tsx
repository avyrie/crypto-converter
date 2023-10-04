/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Text } from "@chakra-ui/react";

interface ConverterDisplayProps {
    amount: number,
    ratesData: object,
    currencyOne: string,
    currencyTwo: string,
    convertedAmount: number,
    date: string;
    time: string;
}

const ConverterDisplay: React.FC<ConverterDisplayProps> = ({
    amount,
    ratesData,
    currencyOne,
    currencyTwo,
    convertedAmount,
    date,
    time
}) => {
    
    return (
        <Box 
            textAlign="right" 
            paddingRight="1rem" 
            paddingTop="1rem"
        >
            <Text 
                fontSize="2xl" 
                fontWeight="bold" 
                color="rgb(15,215,245)"
            >
                {amount} {currencyOne}
            </Text>
            <Text 
                fontSize="2xl" 
                fontWeight="bold" 
                color="rgb(15,215,245)"
            >
                {convertedAmount} {currencyTwo}
            </Text>
            <Text 
                fontSize='xs' 
                color='gray.400'
            >
                Market rates collected - {date} {time}
            </Text>
        </Box>
    )
}

export default ConverterDisplay;