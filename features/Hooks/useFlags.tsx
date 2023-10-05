export const useFlags = (flag:string) => {
    const flagUrl = `https://wise.com/public-resources/assets/flags/rectangle/${flag.toLowerCase()}.png`
    return { flagUrl };
}

 
export default useFlags;