import { Box, Grid, GridItem, Spinner, Text } from "@chakra-ui/react";
import { useCurrency } from "../hooks/useCurrency.tsx";
import ConverterHeader from "./components/ConverterHeader/";
import ConverterOption from "./components/ConverterOption/";
import ConverterInput from "./components/ConverterInput";
import ConverterDisplay from "./components/ConverterDisplay";
import { RepeatIcon } from "@chakra-ui/icons";

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
    time,
  } = useCurrency();

  if (isError)
    return (
      <Text fontWeight="bold" fontSize="3xl" color="white" my="10">
        Something has gone wrong
      </Text>
    );

  if (isLoading)
    return (
      <Spinner
        margin="auto 0"
        size="xl"
        thickness="4px"
        speed="0.65s"
        color="blue.500"
        emptyColor="blue.200"
      />
    );

  return (
    <Box width={{ base: "90vw", sm: "45vw" }} margin="0 auto">
      <Grid
        templateColumns="repeat(5, 1fr)"
        templateRows="repeat(3, 1fr)"
        padding={{ base: "6", sm: "10" }}
        gap="1rem"
        backgroundColor="rgb(4,39,77, 0.85)"
        borderRadius="lg"
      >
        <GridItem colSpan={5} justifySelf="center" alignSelf="center">
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
          <RepeatIcon boxSize="2rem" color="rgb(15,215,245)" />
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

        <GridItem colSpan={2}>
          <ConverterInput value={amount} onAmountChange={setAmount} />
        </GridItem>

        <GridItem colSpan={3} justifySelf="right" alignSelf="right">
          <ConverterDisplay
            amount={amount}
            ratesData={ratesData.data}
            currencyOne={currencyOne}
            currencyTwo={currencyTwo}
            convertedAmount={convertedAmount}
            date={date}
            time={time}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Converter;
