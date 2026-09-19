import { Component } from '@angular/core';
import { IHeroes } from '../heroes';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.html',
})
export class HeroesList {
imageWidth:number=48;
imageMargin:number=2;
muestraImage:boolean=true;
listFilter:string='';

showImage():void{
  this.muestraImage=!this.muestraImage;
}



  heroes:IHeroes[]=[

     {
      
    imagen:'https://dragonball-api.com/characters/roshi.webp',
    nombre:'Roshi',
    description:'Kame hame haa',
    race:'Humano',
    ki:5000
    },
    {
      
    imagen:'https://dragonball-api.com/characters/Dr._Gero%20nadroide%2020.webp',
    nombre:'Dr Gero',
    description:'Rayo',
    race:'Androide',
    ki:50000
    },
    {
      
    imagen:'https://dragonball-api.com/characters/Babidi_Artwork.webp',
    nombre:'Babidi',
    description:'Ipnotismo',
    race:'Alienigena',
    ki:30000
    },
    {
  
    imagen:'https://dragonball-api.com/characters/Dispo_render.webp',
    nombre:'Dyspo',
    description:'Volocidad',
    race:'Alienigena',
    ki:1000000
    }


 
  ]
}
