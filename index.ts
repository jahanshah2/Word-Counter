#! /usr/bin/env node

// import the "inquirer" which is a command line interface for Node.js
import inquirer from "inquirer";

const answers: {
  Sentence: string;
} = await inquirer.prompt([
  {
    name: "Sentence",
    type: "input",
    message:"Enter Your Sentence to count the Words"
  },
]);

const words = answers.Sentence.trim().split(" ")
// print the array of words to the console.log
console.log(words);

console.log(`Your sentence words count is :${words.length}`);
