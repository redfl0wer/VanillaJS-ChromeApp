const quotes = [
  {
    quote: "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
  }, 
  {
    quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game.",
    author: "Babe Ruth",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
    author: "Dr. Seuss",
  },
  {
    quote: "I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom.",
    author: "Rosa Parks",
  },
  {
    quote: "Being happy never goes out of style.",
    author: "Lilly Pulitzer",
  },
  {
    quote: "Life is either a great adventure or nothing.",
    author: "Helen Keller",
  },
  {
    quote: "You are the sum total of everything you've ever seen, heard, eaten, smelled, been told, forgot --  it's all there. Everything influences each of us, and because of that I try to make sure that my experiences are positive.",
    author: "Maya Angelou",
  },
  {
    quote: "All you need in this life is ignorance and confidence; then success is sure.",
    author: "Mark Twain",
  },
  {
    quote: "I have very strong feelings about how you lead your life. You always look ahead, you never look back.",
    author: "Ann Richards",
  },
  {
    quote: "Never lose sight of the face that the most important yard stick to your success is how you treat other people.",
    author: "Barbara Bush",
  },
  {
    quote: "All your life, you will be faced with a choice. You can choose love or hate…I choose love.",
    author: "Johnny Cash",
  },
  {
    quote: "I don't go by the rule book…I lead from the heart, not the head.",
    author: "Princess Diana",
  },
  {
    quote: "Life is a mountain. Your goal is to find your path, not to reach the top.",
    author: "Maxime Lagacé",
  },
  {
    quote: "Three things in life – your health, your mission, and the people you love. That’s it.",
    author: "Naval Ravikant",
  },
  {
    quote: "Life is from the inside out. When you shift on the inside, life shifts on the outside.",
    author: "Kamal Ravikant",
  },
  {
    quote: "If you spend too much time thinking about a thing, you’ll never get it done.",
    author: "Bruce Lee",
  },
  {
    quote: "Keep your eyes on the stars and your feet on the ground.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "Life can only be understood backwards; but it must be lived forwards.",
    author: "Søren Kierkegaard",
  },
  {
    quote: "Life is not a spectator sport. If you're going to spend your whole life in the grandstand just watching what goes on, in my opinion you're wasting your life.",
    author: "Jackie Robinson",
  },
  {
    quote: "Despite the forecast, live like it's spring.",
    author: "Lilly Pulitzer",
  },
  {
    quote: "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;