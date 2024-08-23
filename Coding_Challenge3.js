// There are two gymnastics teams, Dolphins and Koalas. They compete against each 
// other 3 times. The winner with the highest average score wins a trophy!
function averageScore(scores) {
    let total = 0;
    for (let score of scores) {
        total += score;
    }
    return total / scores.length;
}

function determineWinner(scores1, scores2, minScore) {
    let avg1 = averageScore(scores1);
    let avg2 = averageScore(scores2);

    if (avg1 >= minScore && avg1 > avg2) {
        return "Dolphins win the trophy!";
    } else if (avg2 >= minScore && avg2 > avg1) {
        return "Koalas win the trophy!";
    } else if (avg1 === avg2 && avg1 >= minScore) {
        return "It's a draw!";
    } else {
        return "No team wins the trophy!";
    }
}

// Data 1
let dolphinsScores = [96, 108, 89];
let koalasScores = [88, 91, 110];
console.log(determineWinner(dolphinsScores, koalasScores, 100));

// Data Bonus 1
dolphinsScores = [97, 112, 101];
koalasScores = [109, 95, 123];
console.log(determineWinner(dolphinsScores, koalasScores, 100));

// Data Bonus 2
dolphinsScores = [97, 112, 101];
koalasScores = [109, 95, 106];
console.log(determineWinner(dolphinsScores, koalasScores, 100));