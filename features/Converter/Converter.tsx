/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Spinner, Text } from "@chakra-ui/react";
import { useCurrency } from "../Hooks/useCurrency";
import ConverterHeader from './components/ConverterHeader/'
import ConverterOption from './components/ConverterOption/'
import ConverterInput from './components/ConverterInput'
import ConverterDisplay from './components/ConverterDisplay'

// interface ConverterProps {
//     isLoading: boolean,
//     isError: boolean,
//     amount: number, 
//     setAmout: (value: number) => void;
//     currencyOne: string, 
//     setCurrencyOne: (value: string) => void,
//     setCurrencyTwo: (value: string) => void,
//     currencyTwo: string, 
//     currencyList: string[],
//     convertedAmount: number,
//     ratesData: object,
//     symbolsData: object, 
//     date: string, 
//     time: string
// }
const Converter = () => {
    const { 
        isLoading,
        isError,
        amount, 
        setAmount,
        currencyOne, 
        setCurrencyOne,
        setCurrencyTwo,
        currencyTwo, 
        currencyList,
        convertedAmount,
        ratesData, 
        symbolsData, 
        date, 
        time 
    } = useCurrency();

    if (isError) 
        return (
            <Text fontWeight="bold" fontSize="3xl" color="white" my="10">
                Something is amiss
            </Text>
        )
    
    if (isLoading)
        return (
            <Spinner
                margin="auto 0"
                size="xl"
                thickness="4px"
                speed="0.65s"
                color="purple.500"
                emptyColor="purple.200"
            />
        );
    
    return ( 
        <Box width="70%" height="80%" margin="0 auto" padding="5%" background="rgb(4,39,77, 0.7)">
            <ConverterHeader />
            <ConverterOption 
                currencyList={currencyList}
                symbol={symbolsData.data}
                onCurrencyChange={setCurrencyOne}
                currency={currencyOne}
            />
            <ConverterOption 
                currencyList={currencyList}
                symbol={symbolsData.data}
                onCurrencyChange={setCurrencyTwo}
                currency={currencyTwo}
            />
            <ConverterInput 
                value={amount} 
                onAmountChange={setAmount}
            />
            <ConverterDisplay 
                amount={amount} 
                ratesData={ratesData.data} currencyOne={currencyOne} currencyTwo={currencyTwo} convertedAmount={convertedAmount} date={date} 
                time={time}
            />
        </Box>
    );
}
 
export default Converter;