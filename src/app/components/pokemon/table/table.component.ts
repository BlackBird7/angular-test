import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonsService } from 'src/app/services/pokemons.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private pokemonService: PokemonsService) {
    this.getPokemonCollection();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log('paginator', this.paginator);
  }

  getPokemonCollection() {
    this.pokemonService
      .getPokemonsPaginated(20, 0)
      .then((resp: any) => {
        console.log('resp', resp);
        this.dataSource = new MatTableDataSource<Pokemon>(resp.results);
      })
      .catch((error) => {});
  }
}
