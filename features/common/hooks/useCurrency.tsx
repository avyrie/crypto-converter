/* eslint-disable @typescript-eslint/no-unused-vars */
import { UseQueryResult, useQueries } from "@tanstack/react-query";
import { useState } from "react";
import { fetchRates, fetchSymbols } from "../../Converter/api/fetchData"

interface RatesData {
    rates: {
        [key: string]: number;
    };
    date: string;
    timestamp: number;
}

interface SymbolsData {
    symbols: string;
}

export const useCurrency = (): {
    amount: number;
    currencyOne: string;
    currencyTwo: string;
} => {
    const [amount, setAmount] = useState<number>(25);
    const [currencyOne, setCurrencyOne] = useState<string>("USD");
    const [currencyTwo, setCurrencyTwo] = useState<string>("EUR");

    // useQueries = multiple fetches in a single method - ratesData and symbolsData. Provided method by tanstack
    const [ ratesData, symbolsData ] = useQueries({
        // array of query calls
        queries: [
            {
                // rates is the query key and currencyOne is a variable passed in the the query function
                queryKey: ["rates", currencyOne],
                // fetchRates in our fetchData file requires a currency as an argument
                queryFn: () => fetchRates(currencyOne),
                // allows us to use react query as a kind of state management. means the query won't happen unless we do a hard refresh or actually trigger a new query - won't go over limit of requests
                staleTime: Infinity,
                // how we manipulate the data before it is sent back from the query. this way we are able to access the data we need in a cleaner manner without having to dig into the data returned
                select: ({ rates, date, timestamp }: RatesData) => {
                    return { rates, date, timestamp };
                },
            },
            {
                queryKey: ["symbols"],
                // here the queryFn is referencing fetchSymbols directly with no need for an argument, hence why it is not an arrow function
                queryFn: fetchSymbols,
                staleTime: Infinity,
                select: ({ symbols }: SymbolsData) => symbols,
            },
        ]
    })
  

    // however many queries we put into this array,if SOME of these (ratesData or symbolsData) have isLoading as true, our isLoading is going to come back as true, if both have false, then our isLoading will have a value of false
    const isLoading = [ ratesData, symbolsData ].some((query) => query.isLoading)
    const isError = [ ratesData, symbolsData ].some((query) => query.isError)

    // passing in currencyOne to the api call returns the other rates as percentages of the currencyOne rate. Amount is how many of currencyOne you are wanting to convert
    const convertedAmount = ratesData.data ? (ratesData.data.rates[currencyTwo] * amount).toFixed(2) : null;

    // When was this rate updated
    const time = new Date(ratesData.data?.timestamp)
    // console.log(ratesData.data?.rates)

    return { amount, currencyOne, currencyTwo }
}