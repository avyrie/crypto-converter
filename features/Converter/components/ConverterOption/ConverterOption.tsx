import { Avatar, Flex, Select } from "@chakra-ui/react";
import { useFlags } from "../../../common/hooks/useFlags.tsx";

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
  const { flagUrl } = useFlags(currency);
  return (
    <Flex
      gap="1rem"
      padding="1rem"
      borderWidth="thin"
      borderRadius="lg"
      borderColor="white"
    >
      <Avatar src={flagUrl} size="xs" />
      <Select
        _hover={{ cursor: "pointer" }}
        variant="unstyled"
        size="lg"
        color="#FFFFFF"
        defaultValue={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        {currencyList.map((currency) => {
          return (
            <option key={currency} value={currency}>
              {currency} - {symbol[currency]}
            </option>
          );
        })}
      </Select>
    </Flex>
  );
};

export default ConverterOption;
