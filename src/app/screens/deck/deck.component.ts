import { Component, OnInit } from "@angular/core";
import { AlertService } from "app/components/alert";
import { OnActiveMessage } from "app/components/card";
import { LoaderService } from "app/components/loading";
import { GameService } from "app/game";
import { Card, Deck } from "app/models";
import { PokemonApiService } from "app/services";
import { catchError } from "rxjs";




@Component({
    selector: 'pokemon-deck',
    templateUrl:'./deck.component.html',
    styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
    deck?: Deck = undefined;
    type: 'edit' | 'search' = 'search'; 
    cards: Card[] = [];
    showSave: boolean = false;
    showRemove: boolean = false;

    constructor(
        private gameService: GameService,
        private pokemonApiService: PokemonApiService,
        private loaderService: LoaderService,
        private alertService: AlertService
    ) {
        this.loaderService.showFor(3000);
        this.gameService.currentDeck().subscribe(deck => {
            this.deck = deck;
        });
    }

    get cardsOnDeck(): number {
        return (this.deck?.getCards() || []).length;
    }

    get cardsSelectedToAdd(): number {
        return this.cards.filter(card => !!card.active).length
    }

    get cardsSelectedToRemove() : number {
        return this.deck?.getCards().filter(card => !card.active).length || 0;
    }

    get activesCards(): boolean {
        return this.cards.filter(card => !!card.active).length > 0;
    }

    get inactiveCards() : boolean {
        return !!this.deck?.getCards().filter(card => !card.active).length;
    }


    get selectedCards(): Card[] {
        return this.cards.filter(card => !!card.active);
    }

    ngOnInit(): void {
        this.selectMode(this.type);
    }

    selectMode(type: 'edit' | 'search') {
        if (type === 'edit') {
            this.onEditMode();
        } else {
            this.onSearchMode();
        }
    }

    onEditMode() {
        if (!this.deck?.getCards().length) {
            this.onSearchMode();
        } else {
            this.type = 'edit';
            this.showSave = false;
        }
    }


    onSearchMode() {
        this.loaderService.show();
        this.showRemove = false;
        this.type = 'search';
        this.pokemonApiService.getCards().subscribe(cards => {
            this.cards = cards.data;
            this.loaderService.close();
        });
    } 


    selectCard(event: OnActiveMessage) : void {
        this.cards = this.cards.map(card => ({
            ...card,
            active: (card.id === event?.card?.id ? event.active : card.active)
        }));
        this.showSave = this.activesCards;
    }

    removeCard(event: OnActiveMessage) : void {
        try {
            this.deck?.setCardActive(event.active || false, event.card);
        }
        catch(error: any) {
            this.alertService.showError(error?.message);
        }
    }


    save() {
        try {
            this.loaderService.show();
            this.deck?.addCards(...this.selectedCards);
            this.gameService.save(this.deck);
            this.onEditMode();
            this.loaderService.close();
        }
        catch(error: any) {
            this.alertService.showError(error?.message)
        }
    }

    saveDeletes() {
        try {
            this.loaderService.show();
            const cards = this.deck?.getCards()
                .filter(card => card.active);

            if (!cards?.length) {
                this.deck?.setCards([]);
                this.gameService.save(this.deck);
                this.onSearchMode();
                return;
            } else {
                this.deck?.setCards(cards);
                this.gameService.save(this.deck);
            }

            this.loaderService.close();
        }
        catch (error: any) {
            this.alertService.showError(error?.message);
        }
    }

}