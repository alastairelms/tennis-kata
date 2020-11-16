const points = {
    0 : "0",
    1 : "15",
    2 : "30",
    3 : "40"
}

class TennisGame {
    constructor(playerOne, playerTwo){
        this.playerOne = playerOne
        this.playerTwo = playerTwo
        this.playerOneScore = 0
        this.playerTwoScore = 0
    }
    playerOneScores() {
        this.playerOneScore++
    }

    playerTwoScores() {
        this.playerTwoScore++
    }

    updateDisplay() {
        const playerOnePresentedScore = this.presentPlayerScore(this.playerOneScore)
        const playerTwoPresentedScore = this.presentPlayerScore(this.playerTwoScore)

        if (this.playerHaswon(this.playerOneScore, this.playerTwoScore)) {
            console.log(`${this.playerOne} has won!`)
        } else if (this.playerHaswon(this.playerTwoScore, this.playerOneScore)) {
            console.log(`${this.playerTwo} has won!`)
        } else if (this.checkAdv(this.playerOneScore, this.playerTwoScore)) {
            console.log(`${this.playerOne}: Adv ${this.playerTwo}: ${playerTwoPresentedScore}`)
        } else if (this.checkAdv(this.playerTwoScore, this.playerOneScore)) {
            console.log(`${this.playerOne}: ${playerOnePresentedScore} ${this.playerTwo}: Adv`)
        } else if (this.isDeuce(this.playerOneScore, this.playerTwoScore)) {
                console.log(" * DEUCE * ")
        } else {
            let score = `${this.playerOne}: ${playerOnePresentedScore} ${this.playerTwo}: ${playerTwoPresentedScore}`
            console.log(score)
        }
        
    }

    // PRIVATE FUNCTIONS
    playerHaswon(score, otherScore) {
        return (score - otherScore >= 2 && score > 3)
    }

    isDeuce(score, otherScore) {
        return (score === otherScore && score >= 3)
    }

    checkAdv(score, otherScore) {
        return (score - otherScore === 1 && score > 3)
    }

    presentPlayerScore(score) {
        const lookupScore = score > 2 ? 3 : score
            return points[lookupScore]
    }

}

const gameOne = new TennisGame("Sam", "Alastair")
gameOne.updateDisplay()
gameOne.playerOneScores()
gameOne.updateDisplay()
gameOne.playerOneScores()
gameOne.updateDisplay()
gameOne.playerOneScores()
gameOne.updateDisplay()
gameOne.playerTwoScores()
gameOne.updateDisplay()
gameOne.playerTwoScores()
gameOne.updateDisplay()
gameOne.playerTwoScores()
gameOne.updateDisplay()
gameOne.playerOneScores()
gameOne.updateDisplay()
gameOne.playerTwoScores()
gameOne.updateDisplay()
gameOne.playerTwoScores()
gameOne.updateDisplay()
gameOne.playerOneScores()
gameOne.updateDisplay()
gameOne.playerTwoScores()
gameOne.updateDisplay()
gameOne.playerOneScores()
gameOne.updateDisplay()
gameOne.playerTwoScores()
gameOne.updateDisplay()
gameOne.playerOneScores()
gameOne.updateDisplay()
gameOne.playerOneScores()
gameOne.updateDisplay()
gameOne.playerTwoScores()
gameOne.updateDisplay()
gameOne.playerTwoScores()
gameOne.updateDisplay()
gameOne.playerTwoScores()
gameOne.updateDisplay()