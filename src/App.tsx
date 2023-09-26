import { Flex, TabList, Tabs, Tab, TabPanel, TabPanels, TabIndicator } from "@chakra-ui/react";
import Converter from "../features/Converter/Converter";

function App() {
  return (
    <>
    <Flex bgGradient='linear(to-tr, #eddec9, #fee3ca, #f8a28a, #d46059, #aa4058)' height='100vh' justifyContent='center' paddingTop='5%'>
      <Tabs isFitted isManual size='lg' colorScheme="white" align='start'>
        <TabList>
          <Tab>Global Currency Conversions</Tab>
          <Tab>CryptoCurrency Conversions</Tab>
        </TabList>
        <TabIndicator mt="-1.5px"
      height="4px"
      bg="red.800"
      borderRadius="1px" />
        <TabPanels>
          <TabPanel>
            <Converter /> 
          </TabPanel>
          <TabPanel>
            <h1>Crypto</h1>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
    </>
  );
}

export default App;
