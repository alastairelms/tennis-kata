const TennisGame = require("./index.js")

describe("TennisGame Class", function() {
    describe("at the start of a game", function() {
        describe("when I update the display", function() {
            it("displays Sam: 0 Alastair: 0", () => {
                const test = new TennisGame("Sam", "Alastair")
                const result = test.updateDisplay()
                expect(result).toBe("Sam: 0 Alastair: 0")
            })
        })
        describe("after player one scores a point", function() {
            it("displays Sam: 15 Alastair: 0", () => {
                const test = new TennisGame("Sam", "Alastair")
                test.playerOneScores()
                const result = test.updateDisplay()
                expect(result).toBe("Sam: 15 Alastair: 0")
            })
        })
        describe("after player two scores a point", function() {
            it("displays Sam: 0 Alastair: 15", () => {
                const test = new TennisGame("Sam", "Alastair")
                test.playerTwoScores()
                const result = test.updateDisplay()
                expect(result).toBe("Sam: 0 Alastair: 15")
            })
        })     
    })
    describe("when both players have scored 3 points", function() {
        let game 
        beforeEach(function() {
            game = new TennisGame("Sam", "Alastair")
            game.playerOneScore = 3
            game.playerTwoScore = 3
        })
        describe("when I update the display", function() {
            it("displays * DEUCE * ", () => {
                const test = game
                const result = test.updateDisplay()
                expect(result).toBe(" * DEUCE * ")
            })
        })
        describe("and player one scores", function() {
            it("displays Sam: Adv Alastair: 40", () => {
                const test = game
                game.playerOneScores()
                const result = test.updateDisplay()   
                expect(result).toBe("Sam: Adv Alastair: 40")
            })
        })
        describe("and player two scores", function() {
            it("displays Sam: 40 Alastair: Adv", () => {
                const test = game
                game.playerTwoScores()
                const result = test.updateDisplay()   
                expect(result).toBe("Sam: 40 Alastair: Adv")
            })
        })
    })
    describe("when player one has the advantage", function() {
        let game 
        beforeEach(function() {
            game = new TennisGame("Sam", "Alastair")
            game.playerOneScore = 4
            game.playerTwoScore = 3
        })
        describe("and player one scores", function() {
            it("displays Sam has won!", () => {
                const test = game
                game.playerOneScores()
                const result = test.updateDisplay()
                expect(result).toBe("Sam has won!")
            })
        })
    })
    describe("when player two has the advantage", function() {
        let game 
        beforeEach(function() {
            game = new TennisGame("Sam", "Alastair")
            game.playerOneScore = 3
            game.playerTwoScore = 4
        })
        describe("and player two scores", function() {
            it("displays Alastair has won!", () => {
                const test = game
                game.playerTwoScores()
                const result = test.updateDisplay()
                expect(result).toBe("Alastair has won!")
            })
        })
    })
    describe("when both players have 30 points", function() {
        let game 
        beforeEach(function() {
            game = new TennisGame("Sam", "Alastair")
            game.playerOneScore = 30
            game.playerTwoScore = 30
        })
        describe("and player one scores", function() {
            it("displays Sam: Adv Alastair: 40", () => {
                const test = game
                game.playerOneScores()
                const result = test.updateDisplay()
                expect(result).toBe("Sam: Adv Alastair: 40")
            })
        })
        describe("and player two scores", function() {
            it("displays Sam: 40 Alastair: Adv", () => {
                const test = game
                game.playerTwoScores()
                const result = test.updateDisplay()
                expect(result).toBe("Sam: 40 Alastair: Adv")
            })
        })
    })
}) 

// Arrange - setup
// Act - do the test
// Assert - ensure you get the outcome 

// life cycle hooks
// before all, before each    
// after all, after each