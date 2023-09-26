/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flex, Select } from "@chakra-ui/react";

interface SymbolObject {
    [currencyCode: string]: string;
}
type ConverterOptionProps = {
  currency: string;
  onCurrencyChange: (value: string) => void;
  currencyList: string[];
  symbol: SymbolObject;
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
      >
        {currencyList.map((currency) => {
          return (
            <option key={currency} value={currency}>
              {currency} - {(symbol)[currency]}
            </option>
          );
        })}
      </Select>
    </Flex>
  );
};

export default ConverterOption;
