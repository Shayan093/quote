// list of quotes by day
const quotes = [
    "Sunday: A new week brings new opportunities.",
    "Monday: Embrace the challenges of a new week with a positive attidute.",
    "Tuesday: Your determination today will shape your success tommorow.",
    "Wednesday: Midweek reminder to keep pushing towards your goals.",
    "Thursday: The path to greatness is forged with consistent effort.",
    "Friday: Finish the week strong and celebrate your progress.",
    "Saturday: Take time to recharge.",
];
const workOrNot = [
    "Relax its Sunday",
    "Time to work its Monday",
    "Time to work its Tuesday",
    "Time to work its Wednesday",
    "Time to work its Thursday",
    "Time to work its Friday",
    "Relax its Saturday",
]
const 

// A function to get the quote for the current day
function getQuote() {
    const today = new Date().getDay() //Gets current day of the week from 0-6 starting from Sunday
    console.log(quotes[today])
    console.log(workOrNot[today])
}

getQuote();