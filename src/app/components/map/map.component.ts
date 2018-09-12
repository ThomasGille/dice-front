import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map : String [][] ;
  avaliableBackgrounds = [
    "https://www.iconshock.com/img_jpg/PERSPECTIVE/general/jpg/128/square_icon.jpg",
    "http://icons.iconarchive.com/icons/mysitemyway/blue-jeans-social-media/128/newswire-square-icon.png",
    "http://wfarm4.dataknet.com/static/resources/icons/set1/a947bd4c1d25.png",
    "http://icons.iconarchive.com/icons/custom-icon-design/flatastic-6/128/Square-icon.png",
    "https://www.mycutegraphics.com/backgrounds/squares/square2.gif",
    "http://images.freeimages.com/images/premium/large-thumbs/3370/33708338-colorful-triangle-background.jpg"
  ]
  selectedBackground = "https://www.mycutegraphics.com/backgrounds/squares/square2.gif";

  constructor() {
    this.map = [];

    for(var i: number = 0; i < 10; i++) {
        this.map[i] = [];
        for(var j: number = 0; j< 10; j++) {
            this.map[i][j] = "http://images.freeimages.com/images/premium/large-thumbs/3370/33708338-colorful-triangle-background.jpg";
        }
    }
   }

  ngOnInit() {

  }

  onClick (i: number, j: number) {
    this.map[i][j] = this.selectedBackground;
  }

}
