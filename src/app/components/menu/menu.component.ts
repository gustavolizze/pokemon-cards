import { Component, OnInit } from "@angular/core";
import { GameService } from 'app/game';
import { Deck } from "app/models";
import { AlertService } from "../alert";

@Component({
    selector: 'pokemon-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    viewDecks: boolean = false;
    decks: Deck[] = [];

    constructor(
        private gameService: GameService,
        private alertService: AlertService
        ) {}

    ngOnInit(): void {
        this.gameService.decks().subscribe(decks => {
            this.decks = decks;
        });
        
        this.gameService.menu().subscribe(menu => {
            this.viewDecks = menu;
        });
    }

    openDecks(): void {
        this.viewDecks = !this.viewDecks;
    }

    selectDeck(name: string): void {
        try {
            this.gameService.selectDeck(name);
        }
        catch(error: any) {
            this.alertService.showError(error?.message);
        }
    }
}