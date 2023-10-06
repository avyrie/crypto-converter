export type UseCurrency = {
    amount: number;
    currencyOne: string;
    setCurrencyOne: (value: string) => void;
    currencyTwo: string;
    setCurrencyTwo: (value: string) => void;
    currencyList: string[];
    isLoading: boolean;
    isError: boolean;
    setAmount: (value: number) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    convertedAmount: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ratesData: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    symbolsData: any;
    date: string;
    time: string;
}

export type UseFlags = {
    flagUrl: string
}