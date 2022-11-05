import { getTestData } from "../utils/functions"


const calculateRank = (score: number, scoreList: number[]): number => {
    let count = 0;

    //count scores in the scoresList which are below student score
    for (let i = 0; i < scoreList.length; i++) {
        if (scoreList[i] < score) {
            count++;
        }
    }
    return count / scoreList.length * 100;
}



export const getRank = (score: number): number => {
    const { scoresList } = getTestData();
    const rank = +(calculateRank(score, scoresList).toFixed(2));//rounded to the nearest hundredth.
    return rank;
}

