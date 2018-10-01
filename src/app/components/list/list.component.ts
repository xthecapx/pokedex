import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  pokemons;
  visibles;
  counter = 20;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getPokemons().subscribe(pokemons => {
      this.pokemons = pokemons['results'];
      this.showPokemons();
    });
  }

  showPokemons() {
    this.visibles = this.pokemons.slice(0, ++this.counter);
    console.log(this.visibles);
  }

  getNumber(index) {
    const mystr = '' + index;
    const pad = '000';
    return (pad + mystr).slice(-pad.length);
  }
}
