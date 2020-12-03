import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  heroesRes: Heroe[];
  textoBuscar: string;

  constructor( private activatedRoute: ActivatedRoute, private heroesService: HeroesService ) { }

  ngOnInit(){
    this.activatedRoute.params.subscribe( params => this.textoBuscar = params.find );
    this.activatedRoute.url.subscribe( () => this.heroesRes = this.heroesService.getHeroesbyName( this.textoBuscar ) );
  }

}
