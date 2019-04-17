import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   num1 =0;
   num2 =0;
   avg : any

   increase( event )
   {
     ++this.num1;
     
   }
  
   increase1(event )
   {
    ++this.num2;
     
   }
    Average(event )
    {
     this.avg =  (this.num1+this.num2)/2;
    }

     reset(even )
     {
        this.num1= 0;
        this.num2 = 0;
        this.avg = 0;

     }

     
    }
