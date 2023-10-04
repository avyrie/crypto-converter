import { Box, Text } from "@chakra-ui/react";
const ConverterHeader = () => {
    return ( 
        <Box 
            textAlign='center' 
            color='white'
            marginBottom='10'
        >
            <Text 
                fontWeight="bold" 
                fontSize="3xl"
            >
                Currency Converter & Exchange Rates
            </Text>
        </Box>
     );
}
 
export default ConverterHeader;