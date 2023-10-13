import { Component, OnInit } from "@angular/core";
import { GameService } from 'app/game';
import { Deck, Screen } from "app/models";
import { AlertService } from "../alert";

@Component({
    selector: 'pokemon-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    viewDecks: boolean = false;
    decks: Deck[] = [];
    screen: Screen = Screen.AddDeck;

    constructor(
        private gameService: GameService,
        private alertService: AlertService
        ) {}

    get getScreen() : typeof Screen {
        return Screen;
    }

    ngOnInit(): void {
        this.gameService.screen().subscribe(screen => {
            this.screen = screen;
        });

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

    addDeck() {
        this.gameService.goToScreen(Screen.AddDeck);
    }
}