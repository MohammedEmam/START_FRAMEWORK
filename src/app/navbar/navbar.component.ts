import { Component } from '@angular/core';
import * as $ from 'jquery';

// import $ = require('jquery')
// $('#elemId').width();

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(){
    
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      $(".navbar").height(200)
    }
  
    $("body").scrollTop()
  }
}

window.addEventListener('scroll', function(e) {
  console.log(document.body.scrollTop);

  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    $(".navbar").height(40)
  }else {
    $(".navbar").height(60)
  }
});

