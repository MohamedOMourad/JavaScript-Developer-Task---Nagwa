import { Category, Word } from "../types";
import { getTestData } from "../utils/functions";

//shuffle word list to have random words each time
const randomizeWordList = (wordList: Word[]) => {
    let currentIndex = wordList.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [wordList[currentIndex], wordList[randomIndex]] = [
            wordList[randomIndex], wordList[currentIndex]];
    }
    return wordList;
}

//make sure to have at least one word for each category of part of speech in the test 
const filterWordList = (wordList: Word[]) => {
    const testWords: Word[] = [], categories: any = {};


    for (let i = 0; i < wordList.length; i++) {
        //categorize words according to their syntactic functions and check already saved in object or not
        if (!categories[wordList[i].pos]) {
            //save it for first time
            categories[wordList[i].pos] = wordList[i];
            // add word to the random test
            testWords.push(wordList[i]);
            //remove added words to prevent repetition
            wordList.splice(i, 1);
        }
    }

    //after making sure all categorize added then add the rest of 10 words
    for (let i = 0; i < 6; i++) {
        testWords.push(wordList[i]);
    }

    return testWords;
}
export const getTestQuestions = () => {
    const { wordList } = getTestData();
    const randomWordList = randomizeWordList(wordList);
    const testQuestions = filterWordList(randomWordList);
    return testQuestions;
}