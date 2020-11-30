class TennisGame
    def initialize(player_one_name, player_two_name)
        @player_one_name = player_one_name
        @player_two_name = player_two_name

        @player_one_score = 0
        @player_two_score = 0
    end

    def score
        return "DEUCE" if deuce?
        "#{@player_one_name}: #{translate_score(@player_one_score)} #{@player_two_name}: #{translate_score(@player_two_score)}"
    end

    def player_one_scores
        @player_one_score += 1
    end

    def player_two_scores
        @player_two_score += 1
    end

    private

    def translate_score(score)
        return "love" if score == 0
        return "15" if score == 1
        return "30" if score == 2
        return "40" if score == 3
    end

    def deuce?
        @player_one_score == @player_two_score && @player_one_score >= 3
    end
end