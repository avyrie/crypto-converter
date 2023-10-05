/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Grid, GridItem, Spinner, Text } from "@chakra-ui/react";
import { useCurrency } from "../Hooks/useCurrency";
import ConverterHeader from './components/ConverterHeader/'
import ConverterOption from './components/ConverterOption/'
import ConverterInput from './components/ConverterInput'
import ConverterDisplay from './components/ConverterDisplay'
import { RepeatIcon } from "@chakra-ui/icons";

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
        <Box width={{ base: "90vw", sm: "45vw" }} margin="0 auto">
        {/* <Box width="70%" height="80%" margin="0 auto" padding="5%" background="rgb(4,39,77, 0.7)"> */}

            <Grid 
                templateColumns='repeat(5, 1fr)' templateRows='repeat(3, 1fr)' padding={{ base: "6", sm: "10" }}
                gap="1rem"
                backgroundColor="rgb(4,39,77, 0.85)"
                borderRadius="lg"
            >
                <GridItem 
                    colSpan={5}
                    justifySelf="center"
                    alignSelf="center"
                >
                    <ConverterHeader />
                </GridItem>

                <GridItem 
                    colSpan={{ base: 5, sm: 2 }}
                    justifySelf="center"
                    alignSelf="center"
                >
                    <ConverterOption 
                        currencyList={currencyList}
                        symbol={symbolsData.data}
                        onCurrencyChange={setCurrencyOne}
                        currency={currencyOne}
                    />
                </GridItem>

                <GridItem 
                    display={{ base: "none", sm: "block" }}
                    colSpan={1}
                    justifySelf="center"
                    alignSelf="center"
                >
                    <RepeatIcon
                        boxSize="2rem"
                        color="rgb(15,215,245)"
                    />
                </GridItem>  

                <GridItem 
                    colSpan={{ base: 5, sm: 2 }}
                    justifySelf="center"
                    alignSelf="center"
                >
                    <ConverterOption 
                        currencyList={currencyList}
                        symbol={symbolsData.data}
                        onCurrencyChange={setCurrencyTwo}
                        currency={currencyTwo}
                    />
                </GridItem>

                <GridItem 
                    colSpan={2}
                >
                    <ConverterInput 
                        value={amount} 
                        onAmountChange={setAmount}
                    />
                </GridItem>

                <GridItem 
                    colSpan={3}
                    justifySelf="right"
                    alignSelf="right"
                >
                    <ConverterDisplay 
                        amount={amount} 
                        ratesData={ratesData.data} currencyOne={currencyOne} currencyTwo={currencyTwo} convertedAmount={convertedAmount} date={date} 
                        time={time}
                    />
                </GridItem>

            </Grid>
            
            
            
            
        </Box>
    );
}
 
export default Converter;