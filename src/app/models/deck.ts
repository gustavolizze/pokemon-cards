import { Card } from "./card";

export class Deck {

    get id() : string {
        return this.name.trim().replace(/ /g, '').toLowerCase();
    }


    name: string;
    private cards: Card[];

    constructor(name: string, cards: Card[]) {
        this.name = name;
        this.cards = cards;
    }

    setCardActive(active: boolean, card?: Card) : void {
        if (!card) {
            throw new Error('Informe o card');
        }

        this.cards = this.cards.map(_card => _card.id === card.id ? { ..._card, active }  : { ..._card }); 
    }

    getCards() : Card[] {
        return this.cards;
    }

    setCards(cards?: Card[]) : void {
        this.cards = cards || [];
    }

    addCards(...cards: Card[]) : void {
        this.cards.push(...cards);
    }

    equals(deck: Deck): boolean {
        return deck?.id === this.id;
    }
}