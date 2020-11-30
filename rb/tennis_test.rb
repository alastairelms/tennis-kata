require './tennis.rb'

RSpec.describe(TennisGame) do
    let(:game) { TennisGame.new("Sam", "Alastair") }

    def setup_score(score_one, score_two)
        score_one.times { game.player_one_scores }
        score_two.times { game.player_two_scores }
    end

    context 'when noone has scored' do
        it 'returns "Sam: love Alastair: love"' do
            expect(game.score).to eq "Sam: love Alastair: love"
        end

        context 'with different players' do
            let(:game) { TennisGame.new("Frodo", "Sam") }

            it 'returns "Frodo: love Sam: love"' do    
                expect(game.score).to eq "Frodo: love Sam: love"
            end
        end

        context 'and player one scores' do
            it 'returns "Sam: 15 Alastair: love"' do
                game.player_one_scores
    
                expect(game.score).to eq "Sam: 15 Alastair: love"
            end
        end
    
        context 'and player two scores' do
            it 'returns "Sam: love Alastair: 15"' do
                game.player_two_scores
    
                expect(game.score).to eq "Sam: love Alastair: 15"
            end
        end
    end

    context 'when both players have scored 2 points' do
        before do
            setup_score(2, 2)
        end

        it 'returns "Sam: 30 Alastair: 30"' do
            expect(game.score).to eq "Sam: 30 Alastair: 30" 
        end

        context 'and player one scores ' do
            it 'returns "Sam: 40 Alastair: 30"' do
                game.player_one_scores
                expect(game.score).to eq "Sam: 40 Alastair: 30"
            end
        end    
    end

    context 'when both players have scored 3 points' do
        before do
            setup_score(3, 3)
        end

        it 'returns "DEUCE"' do
            expect(game.score).to eq "DEUCE"
        end
    end
end