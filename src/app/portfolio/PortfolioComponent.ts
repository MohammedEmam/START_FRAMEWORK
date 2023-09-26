import { Component } from '@angular/core';

// import * as $ from 'jquery';
// declare let $:any;
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {

  mainImgLayer: string = "";

  img1: string = "./assets/Images/poert1.png";
  img2: string = "./assets/Images/port2.png";
  img3: string = "./assets/Images/port3.png";

  listImg: string[] = [this.img1, this.img2, this.img3, this.img1, this.img2, this.img3];



  clicked(imgSrc: string) {
    
    this.mainImgLayer  = imgSrc

    $(".mainLayer").css('display', 'flex');
  }

  displaynone ( ){
      $(".mainLayer").click(function(event) {
        if (event.target.id == "LayerNone") {
          $(".mainLayer").css('display', 'none');
        }
      });

  }

  


}

document.addEventListener('click', (e) => {
  if (e.target) {
  } else {
  }
 });
