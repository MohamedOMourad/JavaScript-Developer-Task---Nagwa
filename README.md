# JavaScript-Developer-Task---Nagwa

## Task description

- In English language, words can be categorized according to their syntactic functions, which is known as "Part of Speech".
Examples of part of speech: (noun, verb, adjective, ...).

- My task is to make an interactive activity using React.js, node.js, and Express.js that helps the students practice categorizing a
set of words according to their part of speech.

## Technologies used

- React.js
- Node.js
- Express.js
- TypeScript

## File Structure (server side)

```bash
├── index # use necessary middleware  and runs the server
|
└── routers # uses model and routes to /words and /rank using the required methods
    |
    ├── getWords (/words resource) # send a response of an array of 10 random words
    |    └── getData # fetches data from JSON file
    |
    ├── getRank (/ranks resource) # take student score and calculates student's rank and sends it as a response
    |    └── getData
```

## File Structure (client side)

```bash
├── App component #  routes to practice page and rank page, and uses Card Component as its layout
    |
    └── Practice Page # manages the state of the result (correct or incorrect), the progress, and the number of correct answers
    |   ├── ProgressBar Component # shows student's progress
    |   ├── PoSButtons Component # lists the 4 buttons (noun, adverb, adjective, verb)
    |   |   └── Button Component
    |   └── NextButton Component # the next button goes to the next question
    |       └── Button Component
    |
    └── Rank Page # shows student's rank amongst his/her peers
        └── Button Component # goes back to practice page
```

## How to run the app

First, clone the repository using this command `git clone https://github.com/MohamedOMourad/JavaScript-Developer-Task---Nagwa.git`

Then, open a terminal inside the directory and go to the server directory using `cd server` and run the following commands:

1. `npm install`
2. `npm run dev`

After you run the server, now you can open a new terminal and go to the client directory using `cd client`, then run:

1. `npm install`
2. `npm start`

## How to use the app

Once you start the app, you'll see the quiz started and you can immediately choose an answer for each question.

You'll get a random of 10 questions, each question gives you a word and asks whether this word is a noun, adverb, adjective, or a verb, after you choose an answer you'll get a feedback whether it's correct or not. Then you can go to the next question and do the same until you reach the last question.

When you finish the 10 questions, your rank amongst other students will be shown to you, then you can retake the quiz if you want.

## live experience

### I hope you enjoy using the app :)
