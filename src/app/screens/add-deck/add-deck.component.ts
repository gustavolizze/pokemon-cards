import { Component, OnInit } from "@angular/core";
import { AlertService } from "app/components/alert";
import { GameService } from "app/game";
import { Deck } from "app/models";


@Component({
    selector: 'pokemon-add-deck',
    templateUrl: './add-deck.component.html',
    styleUrls: ['./add-deck.component.scss']
})
export class AddDeckComponent implements OnInit {
    deckName: string = '';


    constructor(
        private gameService: GameService, 
        private alertService: AlertService
        ) {}

    ngOnInit(): void {
    }

    clean() {
        this.deckName = '';
    }

    addDeck() {
        try {
            var deck = new Deck(this.deckName, []);
            this.gameService.addDeck(deck);
            this.clean();
        }
        catch (error: any) {
            this.alertService.showError(error?.message);
        }
    }

}