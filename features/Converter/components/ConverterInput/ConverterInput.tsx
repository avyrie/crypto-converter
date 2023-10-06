import { Flex, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

interface ConverterInputProps {
  value: number;
  onAmountChange: (value: number) => void;
}

const ConverterInput: React.FC<ConverterInputProps> = ({
  value,
  onAmountChange,
}) => {
  console.log(value);

  return (
    <Flex direction="column" gap="1rem">
      <FormLabel htmlFor="amount" color="gray.300">
        Amount
      </FormLabel>
      <Input
        color="gray.300"
        id="amount"
        size="lg"
        padding="1rem"
        type="number"
        value={value}
        min={0}
        onChange={(e) => onAmountChange(parseInt(e.target.value, 10))}
      />
    </Flex>
  );
};

export default ConverterInput;
