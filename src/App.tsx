import { Flex } from "@chakra-ui/react";
// import { Flex, TabList, Tabs, Tab, TabPanel, TabPanels } from "@chakra-ui/react";
import Converter from "../features/Converter/Converter";
import GG from "./assets/currency.jpg";

function App() {
  return (
    <Flex
      bgImage={GG}
      bgPosition="center"
      bgRepeat="no-repeat"
      height="100vh"
      justifyContent="center"
      paddingTop="10%"
    >
      {/* <Tabs isFitted isManual size='lg' colorScheme="white" align='start'>
        <TabList>
          <Tab>Global Currency Conversions</Tab>
          <Tab>CryptoCurrency Conversions</Tab>
        </TabList>
        <TabPanels>
          <TabPanel> */}
      <Converter />
      {/* </TabPanel>
          <TabPanel>
            <h1>Crypto</h1>
          </TabPanel>
        </TabPanels>
      </Tabs> */}
    </Flex>
  );
}

export default App;
