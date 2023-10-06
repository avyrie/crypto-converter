# Currency Converter
### A React + TypeScript + Vite project

## Getting Started

### Scripts
`yarn` to install dependencies
`yarn dev` to run app in development mode (note: I have this script set to `"vite --host"` which will also allow you to run this app in development mode on a separate mobile device assuming that device is connected to the same wi-fi as your computer)
`yarn build` to build app for production

This project was initiated using `yarn create vite .`
(Select TypeScript)

## Technology

| Tool Name   | Function                       |
| ----------- | ------------------------------ |
| TypeScript  | Coding language used           |
| React.js    | Front-End Library              |
| Vite        | Front-End development environment and build tool |
| yarn        | Package manager                |
| Chakra UI   | CSS Library                    |
| React Query | API call/server state handling |
| Axios       | API data fetching              |

## Dependencies
`yarn add axios`
`yarn add --dev --exact prettier`
`yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion`
`yarn add @chakra-ui/icons`
`yarn add @tanstack/react-query`

## Approach
This project was created with reference to an instructional video created by Calvin Torra. Of course many aspects between said video and the final project were changed including the aesthetic, some functionalities, and the coding language used. The original video had the entire project coded in JavaScript. I translated the entire project to TypeScript and made my own changes.

Custom react hooks including `useCurrency()` and `useFlags()` were created for this project.

Chakra UI responsive styling was implemented to create a responsive project that resizes appropriately with respect to screen size.

## Next Steps
My original intent with this project was to create a cryptocurrency converter. I have small amounts of investments in a few different cryptocurrencies and, with the ever-fluctuating market, I wanted a way to accurately visualize my monetary investment worth. I have already begun implementing functionality for a cryptocurrency section of this project and plan on displaying it versus the global currency conversion using separate tabs, but similar functionalities. I have identified multiple API's that would be good to use to pull cryptocurrency data including CoinAPI.io and CoinGecko.

In addition to adding cryptocurrency conversion functionality, I would also like to add global SCSS variables. While there are not many places where repeating CSS attributes are used, there are a few including colour that repeat and I would like to cut down on code redundency.

## Reflection
This was a challenging and enjoyable project to work on. 
I had never used Vite, Chakra UI, yarn, or React Query before and quickly realized why they are frequently used. 

The speed at which I was able to initialize this project with vite compared to doing it previously with CRA was incredible as was the speed at which dependencies and updates were able to be added.

I absolutely fell in love with Chakra UI. With its responsive styling and sleek component templates, it made creating an aesthetically-pleasing project downright easy. I do not miss languishing in CSS hell one moment.

I am not sure if it was the way I was implementing yarn vs npm, but I did not notice much of a difference in the way they operated beyond syntax. In researching the differences, I will say I will probably favor yarn in the future more for security purposes and supposed speed.

The syntax of React Query was easily understandable from the documentation and made API handling go much more smoothly.

It is always difficult while referring to an instructional element to differentiate the project you are creating from that produced from instruction; you want to follow along to learn all you can, but also want the end product to not be an exact replica of that created in the instruction. In going into this with the intention of practicing my TypeScript skills with the translation of the instruction JavaScript to my own TypeScript as well as implementing my own aesthetics and other functionalities, I think it's safe to say that this project is wholly mine.


### Attributions
<a href="https://www.flaticon.com/free-icons/inflation" title="inflation icons">Inflation icons created by Sulhandika - Flaticon</a>
<a href="https://www.freepik.com/free-vector/digital-money-transfer-technology-background_4025865.htm#query=currency&position=28&from_view=search&track=sph">Image by starline</a> on Freepik
<a href="https://www.youtube.com/@calvintorra">Calvin Torra YouTube Channel</a>

