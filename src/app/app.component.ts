import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   num1 = 0;
   num2 = 0;
   avg : any

   increase( event : Event)
   {
     ++this.num1;
     
   }
  
   increase1(event : Event)
   {
    ++this.num2;
     
   }
    Average(event : Event)
    {
     this.avg =  (this.num1+this.num2)/2;
    }

    url: string;
    result:any

    

}
