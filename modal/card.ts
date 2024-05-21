export class Card {
    word: string;
    translation: string;
    cardStatus: string;

    constructor(word: string, translation: string, cardStatus: string){
        this.word = word;
        this.translation = translation;
        this.cardStatus = cardStatus;
    }
}


