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
    <Flex 
      gap="1rem" 
      padding="1rem" 
      borderRadius="lg"
      borderColor="white"
    >
      <Select
        _hover={{ borderColor: 'rgb(15,215,245)', cursor: 'pointer' }}
        variant="outline"
        size="lg"
        color="#FFFFFF"
        focusBorderColor="#FFFFFF"
        defaultValue={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        {currencyList.map((currency) => {
          return (
            <option 
              key={currency} 
              value={currency}
            >
              {currency} - {(symbol)[currency]}
            </option>
          );
        })}
      </Select>
    </Flex>
  );
};

export default ConverterOption;
