import { useCurrency } from "../common/hooks/useCurrency";
// m3sXR1FT7lnpSQ2lNQxmNM8qHwRnZ7w5
const Converter = () => {
    const { amount, currencyOne, currencyTwo } = useCurrency();
    return ( 
        <>
            <>{amount}</>
            <>{currencyOne}</>
            <>{currencyTwo}</>
        </>
     );
}
 
export default Converter;