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
    currencyOne,
    currencyTwo,
    convertedAmount,
    date,
    time
}) => {
    let enteredAmount:string|number;
    let displayedConvertedAmount:string|number;
    if (amount.toString().length > 8 || convertedAmount.toString().length > 8) {
            enteredAmount = parseFloat(amount.toString()).toExponential(4).toString();
            displayedConvertedAmount = parseFloat(convertedAmount.toString()).toExponential(4).toString();
    } else {
        enteredAmount = amount;
        displayedConvertedAmount = convertedAmount
    }
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
                {enteredAmount} {currencyOne}
            </Text>
            <Text 
                fontSize="2xl" 
                fontWeight="bold" 
                color="rgb(15,215,245)"
            >
                {displayedConvertedAmount} {currencyTwo}
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