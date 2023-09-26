/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flex, Select } from "@chakra-ui/react";
import { UseQueryResult } from "@tanstack/react-query";

type ConverterOptionProps = {
  currency: string;
  onCurrencyChange: (value: string) => void;
  currencyList: object;
  symbol: string | unknown;
};

const ConverterOption: React.FC<ConverterOptionProps> = ({
  currency,
  onCurrencyChange,
  currencyList,
  symbol,
}) => {
  return (
    <Flex gap="1rem" shadow="md" padding="1rem" borderRadius="lg">
      <Select
        variant="unstyled"
        size="md"
        defaultValue={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      ></Select>
    </Flex>
  );
};

export default ConverterOption;
