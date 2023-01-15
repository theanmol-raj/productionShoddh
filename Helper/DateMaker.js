export default function getDate(x) {
    let lol = new Date(x) ;
    const month = ["January" ,"Febuary" ,"March" ,"April" ,"May" ,"June" ,"July" ,"August" ,"September" ,"October" ,"November" ,"December"]

    return ` ${lol.getDay()} ${month[lol.getMonth()]} ${lol.getFullYear()}`
}