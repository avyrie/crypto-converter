import { Flex, TabList, Tabs, Tab, TabPanel, TabPanels } from "@chakra-ui/react";
import Converter from "../features/Converter/Converter";

function App() {
  return (
    <>
    <Flex bgGradient='linear(to-t, #ae085c, #2e0656)' height='100vh' justifyContent='center' paddingTop='5%'>
      <Tabs>
        <TabList>
          <Tab>Global Currency Conversions</Tab>
          <Tab>CryptoCurrency Conversions</Tab>
        </TabList>
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
