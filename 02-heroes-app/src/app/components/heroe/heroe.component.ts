import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe: Heroe;

  constructor( private activatedRoute: ActivatedRoute, private heroesService: HeroesService, private location: Location ) { 
    activatedRoute.params.subscribe( params => this.heroe = heroesService.getHeroeById( +params['id'] ) );
  }

  goBack() {
    this.location.back();
  }


}
