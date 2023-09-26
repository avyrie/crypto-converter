import { axiosInstance } from "../../../lib/axios"

// gives the exchange rates between two different currencies
export const fetchRates = async (currencyOne: string) => {
    const { data } = await axiosInstance.get(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        `latest?base=${currencyOne}&apikey=${(import.meta as any).env.VITE_API_KEY}`
    );
    return data;
};

// returns symbols for all available currencies
export const fetchSymbols = async () => {
    const { data } = await axiosInstance.get(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        `/symbols?apikey=${(import.meta as any).env.VITE_API_KEY}`
    );
    return data;
}