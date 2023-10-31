import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  url = environment.apiUrl;

  async getPokemonsPaginated(rows:number, page:number){
    const data = await fetch(`${this.url}pokemon/?limit=${rows}&offset=${page}`);
    return await data.json() ?? {};
  }
}
