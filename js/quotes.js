const quotes = [
    {
        quote: "JUST DO IT",
        author: "Catchphrase of NIKE",
    },
    {
        quote: "Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.",
        author: "Albert Einstein",
    },
    {
        quote: "If you want to conquer fear, don't sit home and think about it. Go out and get busy.",
        author: "Dale Carnegie",
    },
    {
        quote: "Life is too short to be little.",
        author: "Benjamin Disraeli",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.round(Math.random() * (quotes.length - 1))];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;