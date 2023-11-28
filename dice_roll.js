export function rolling() {
    const diceResults = [];
    for (let i = 0; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        diceResults.push(randomNumber);
    }
    
    return {
        diceResults,
        totalScore: diceResults.reduce((sum, result) => sum + result, 0)
    };
}