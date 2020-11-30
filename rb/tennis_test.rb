require './tennis.rb'

RSpec.describe(TennisGame) do
    let(:game) { TennisGame.new("Sam", "Alastair") }

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
end