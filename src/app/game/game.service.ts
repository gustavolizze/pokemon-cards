import { Injectable } from "@angular/core";
import { Card, Deck, Screen } from "app/models";
import { BehaviorSubject, Observable, filter } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class GameService {
    private _decks: Deck[] = [];
    private _deck: BehaviorSubject<Deck | undefined> = new BehaviorSubject<Deck | undefined>(undefined);
    private _decksSubject: BehaviorSubject<Deck[]> = new BehaviorSubject<Deck[]>([]); 
    private _gameScreen: BehaviorSubject<Screen> = new BehaviorSubject<Screen>(Screen.AddDeck);
    private _menu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    public menu(): Observable<boolean> {
        return this._menu.asObservable();
    }

    public screen(): Observable<Screen> {
        return this._gameScreen.asObservable();
    }

    public decks():  Observable<Deck[]> {
        return this._decksSubject.asObservable();
    }

    public currentDeck(): Observable<Deck | undefined> {
        return this._deck.asObservable().pipe(filter(deck => !!deck));
    }


    public selectDeck(name: string): void {
        const deck = new Deck(name, []);

        const find = this._decks.find(_deck => deck.equals(deck));

        if (!find) {
            throw new Error('O Deck não foi encontrado!');
        }

        this._deck.next(find);
        this._gameScreen.next(Screen.Deck);
        this.closeMenu();
    }

    public save(deck?: Deck) {
        if (!deck) {
            throw new Error('Informe um baralho!');
        }

        const cards = deck.getCards();

        if (cards.length <= 0) {
            throw new Error('Selecione uma carta pelo menos!');
        }

        if (cards.length > 24) {
            throw new Error('Somente 24 cartas!');
        }

        this._decks = this._decks.map(_deck => _deck.equals(deck) ? deck : _deck);
        this._decksSubject.next(this._decks);
        this._deck.next(deck);
        this._menu.next(false);
    }

    public addDeck(deck: Deck) : void {
        if (!deck.name) {
            throw new Error('Você não colocou nome no baralho!');
        }
        
        const find = this._decks.filter(_deck => _deck.equals(deck)) || [];
        
        if (find.length > 0) {
            throw new Error('Você já cadastrou o baralho!');
        }

        this._decks.push(deck);
        this._decksSubject.next(this._decks);
        this.openMenu();
    }

    public removeDeck(deck: Deck): void {
        this._decks = this._decks.filter(deck => deck.equals(deck) === false) || [];
        this._decksSubject.next(this._decks);
    }

    public getDecks(): Deck[] {
        const decks = this._decks;
        return decks;
    }

    public openMenu() {
        this._menu.next(true);
    }

    public closeMenu() {
        this._menu.next(false);
    }
    
}