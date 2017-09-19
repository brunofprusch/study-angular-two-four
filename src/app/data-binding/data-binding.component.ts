import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'data-binding-component',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  name: String = 'Bruno Feldmann Prusch';
  inputKeyUpValue: any;
  isMouseOverOut: boolean;
  twoWayDataBinding: String = 'Teste two way data binding';
  person: any = {
    name: "Bruno Feldmann Prusch",
    age: 26
  }

  buttonClick() {
    alert("Button Clicked")
  }

  inputKeyUp(inputValue) {
    this.inputKeyUpValue = inputValue;
  }

  saveInputValue(inputValue) {
    alert("Value: " + inputValue + " saved!")
  }

  mouseOverOut() {
    this.isMouseOverOut = !this.isMouseOverOut;
  }

  savePerson() {
    alert("Person saved! name: " + this.person.name + ", age: " + this.person.age);
  }

  constructor() { }

  ngOnInit() {  }

}
