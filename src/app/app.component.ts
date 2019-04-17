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

     reset(even : Event)
     {
        this.num1= 0;
        this.num2 = 0;
        this.avg = 0;
     }

    url: string;
    result: any;
onSelectFile(event) { // called each time file input changes
    
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
}

}
