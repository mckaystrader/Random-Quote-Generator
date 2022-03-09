/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
	{
	quote: 'The secret of getting ahead is getting started',
	source: 'Sally Berger',
	citation: 'American businesswoman',
	year: 1933,
  type: 'Motivational'
	},
	{
	quote: 'If You Don’t Like Our Weather, Just Wait a Few Minutes',
	source: 'James A. Cruikshank',
	citation: 'Field and Stream',
	year:1909,
  type: 'Practical'
	},
	{
	quote: 'The Radio Is a Distraction and Keeps You from Concentrating',
	source: 'Nikola Tesla',
	citation: 'New York Herald Tribune',
	year: 1932,
  type: 'Practical'
	},
	{
	quote: 'Celebrity Is the Chastisement of Merit and the Punishment of Talent',
	source: 'Nicolas Chamfort',
	citation: 'Maximes, Pensées, Caractères et Anecdotes',
	year: 1796
	},
	{
	quote: 'Science Gathers Knowledge Faster Than Society Gathers Wisdom',
	source: 'Isaac Asimov',
	citation: 'Isaac Asimov’s Book of Science and Nature Quotations',
	year: 1988
	},
	{
	quote: 'Nobody Realizes That Some People Expend Tremendous Energy Merely To Be Normal',
	source: 'Blanche Balain',
	citation: 'Notebook #4',
	year: 1945
	},
	{
	quote: 'Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome while trying to succeed',
	source: 'Booker T. Washington',
	citation: 'The Outlook',
	year: 1900
	}	
];
/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
const randomNumber = Math.floor(Math.random() * quotes.length) ;

// testing randomNumber
console.log(randomNumber);

  // 2. Use the random number variable and bracket notation 
  // to grab a random object from the `quotes` array, and 
  // store it in a variable
const randomObject = quotes[randomNumber];

// testing that I get what I want in randomObject
for (let prop in randomObject){
console.log(`${prop}: ${randomObject[prop]}`);
}

  // 3. Return the variable storing the random quote object
return randomObject;

}



/***
 * `printQuote` function
***/
function printQuote() {
  
  let randomQuote = getRandomQuote();

  // testing that I get what I want in randomQuote
  for (let prop in randomQuote){
  console.log(`${prop}: ${randomQuote[prop]}`);
  }

  let html = `<p class="quote"> ${randomQuote.quote} </p>
              <p class="source"> ${randomQuote.source} `;
  
  // check for and add citation            
  if (randomQuote.citation){
    html += `<span class="citation"> ${randomQuote.citation} </span>`;
  }  

  // check for and add year
  if (randomQuote.year){
    html += `<span class="year"> ${randomQuote.year} </span>`;
  } 

  // check for and add type
  if (randomQuote.type){
    html += `<span class="type"> ${randomQuote.type} </span>`;
  } 

  // close paragraph tab
  html += `</p>`;

  // create random number up to 256
  const randomColor = () => Math.floor(Math.random() * 256);

  // generate random RGB values
  red = randomColor();
  green = randomColor();
  blue = randomColor();
  
  // create random color
  randomBackground = `rgb(${red}, ${green}, ${blue})`;

  // assign random color to background
  document.body.style.backgroundColor =  randomBackground;

  document.getElementById('quote-box').innerHTML = html; 

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/



document.getElementById('load-quote').addEventListener("click", printQuote, false);

// setup a variable for the button
const autoClick = document.getElementById('load-quote');

// setup an interval that clicks on the button every 20 seconds
setInterval(function() {autoClick.click();}, 20000);
