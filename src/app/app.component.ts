import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Title';
  name = 'Bob';
  ninja={
    name:"Ryuk",
    belt:"Red"
  };
  yell(e){
    alert("I am yelling");
    console.log(e);
  };
}
