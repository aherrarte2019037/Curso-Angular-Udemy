import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

textoBoton: string = 'Ocultar';
tipoIcono: string = 'far fa-eye-slash';
flagMostrar: boolean = true;
personajes: string[] = ['Spiderman', 'Venom', 'Thor', 'Flash'];
frase: any = {
  mensaje: 'Un gran poder requiere una gran responsabilidad.',
  autor: 'Ben Barker'
}

  constructor() {}

  ngOnInit(): void { }


  estadoBoton() {
    if(this.flagMostrar === true){
      this.textoBoton = 'Ocultar'
      this.tipoIcono = 'far fa-eye-slash'
    }else {
      this.textoBoton = 'Mostrar'
      this.tipoIcono = 'far fa-eye'
    }
  }



}
