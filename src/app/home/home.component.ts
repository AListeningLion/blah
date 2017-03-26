import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to the ninja directory!... ";
  // ninja = {
  //   name: "Yoshi",
  //   belt: "Black"
  // };

  //input decorator tells the recieving component to expect an incoming variable... Note you have to import Input to use
  //second Note: if there is a breakdown here, Your app will just keep loading
  @Input() ninjaAppData;
  @Output() onYell = new EventEmitter();

  fireYellEvent(e){
    this.onYell.emit(e);
    console.log(e);
  }




  // myString = "I like chicken";
  // myString2 = "I like bacon";
  // myBoolean = true;


  // alertBeef(val){
  //   alert("Hey there, " + val);
  // }

  constructor() { }
  ngOnInit() {
  }

}
