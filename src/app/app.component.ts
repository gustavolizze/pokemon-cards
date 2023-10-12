import { Component, OnInit } from '@angular/core';
import { Screen } from './models';
import { GameService } from './game';
import { LoaderService } from './components/loading';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  screen: Screen = Screen.AddDeck;
  title = 'Pokemon Cards';  


  constructor(
    private gameService: GameService,
    private loaderService: LoaderService
  ) {
    this.gameService.screen().subscribe(screen => {
      this.screen = screen;
    });
    this.loaderService.showFor(5);
  }

  get getScreen(): typeof Screen {
    return Screen;
  }
  
  ngOnInit(): void {
  }
  
}
