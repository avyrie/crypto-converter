import { FormLabel, Input } from "@chakra-ui/react";
import React from "react";

interface ConverterInputProps {
    value: number;
    onAmountChange: (value: number) => void;
}
const ConverterInput: React.FC<ConverterInputProps> = ({ value, onAmountChange }) => {

    return ( 
        <>
            <FormLabel htmlFor="amount" color="purple.300">
                Amount
            </FormLabel>
            <Input 
                id="amount" 
                size="lg" 
                type="number" 
                value={value} 
                min={0} 
                onChange={(e) => onAmountChange(parseInt(e.target.value, 10))}
            />
        </>

     );
}
 
export default ConverterInput;