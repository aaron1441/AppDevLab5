import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count:number = 0;
  
  onClick(){
    this.count++;
  }
  hidelabel:boolean = true;
  showLabel(){
    if(this.hidelabel){
      this.hidelabel = false;
    }else{
      this.hidelabel = true;  
    }
  }
}


