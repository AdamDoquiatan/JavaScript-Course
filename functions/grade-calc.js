//student's score, total possible score
// 15/20 --> You got a C (75%)!

const calculateGrade = function (score, maxScore) {
    
    const percent = score / maxScore * 100
    let letter;

    if (percent >= 90) {
        letter = 'A'
    } else if (percent >= 80) {
        letter = 'B'
    } else if (percent >= 70) {
        letter = 'C'
    } else if (percent >= 60) {
        letter = 'D'
    } else {
        letter = 'F'
    }

    return `You got a(n) ${letter} (${percent}%)!`
}

console.log(calculateGrade(99, 100))