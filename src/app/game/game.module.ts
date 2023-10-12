import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { GameService } from "./game.service";


@NgModule({
    imports: [CommonModule],
    providers: [GameService]
})
export class GameModule {}