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
  totalRecords: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private pokemonService: PokemonsService) {}

  ngAfterViewInit() {
    let pageCount = this.paginator.pageIndex * this.paginator.pageSize;
    this.getPokemonCollection(this.paginator.pageSize, pageCount);
  }

  getPokemonCollection(rows: number, offset: number): any {
    this.pokemonService
      .getPokemonsPaginated(rows, offset)
      .then((resp: any) => {
        this.totalRecords = resp.count;
        let fixedData = resp.results.map((result: any) => {
          return {
            id: result.url.split('/')[result.url.split('/').length - 2],
            name: result.name,
          };
        });
        this.dataSource = new MatTableDataSource<any>(fixedData);
      })
      .catch((error) => {});
  }
  onTableChange(event: any) {
    let pageCount = event.pageIndex * event.pageSize;
    this.getPokemonCollection(event.pageSize, pageCount);
  }
  onRowClick(event: any) {
    // const { name, value } = event.target;
    // console.log('name', name);
    // console.log('value', value);
    console.log(event.target.innerText)
  }
}
