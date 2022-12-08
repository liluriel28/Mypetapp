import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  picture: any[]=[
    {
      id:1, url:'../../assets/imagenes/dog_icon.svg',name:'Perro'
    },
    {
      id:2, url:'../../assets/imagenes/cat_icon.svg',name:'Gato'
    },
    {
      id:3, url:'../../assets/imagenes/fish-sharp.svg',name:'Fish'
    },
    
    {
      id:5, url:'../../assets/imagenes/snake.svg',name:'Snek'
    },
    {
      id:6, url:'../../assets/imagenes/dog_icon.svg',name:'Perro'
    },
    {
      id:7, url:'../../assets/imagenes/cat_icon.svg',name:'Gato'
    },
    {
      id:4, url:'../../assets/imagenes/Lizard.svg',name:'Lizard'
    },
  ];


  slideOpts ={
    initialSlide:1,
    speed:200,
    slidesPerView:2.4,
    spaceBetween:5
  };

  constructor() {}

}
