import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Card } from "app/models";


export interface OnActiveMessage {
    active?: boolean;
    card?: Card;
}

@Component({
    selector: 'pokemon-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input()
    active?: boolean = false;

    @Input()
    card?: Card = undefined;

    @Output()
    onActive: EventEmitter<OnActiveMessage> = new EventEmitter<OnActiveMessage>();


    setActive(): void {
        this.active = !this.active;
        this.onActive.emit({ active: this.active, card: this.card });
    }
}