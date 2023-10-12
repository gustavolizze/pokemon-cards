import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Card, Response } from 'app/models';


@Injectable()
export class PokemonApiService {
    private apiUrl: string = 'https://api.pokemontcg.io/v2';

    constructor(public http: HttpClient) {

    }

    getCards() {
        return this.http.get<Response<Card[]>>(`${this.apiUrl}/cards`);
    }
}