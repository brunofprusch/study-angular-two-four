import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() 
  counterValue: number;

  constructor() { }

  increase() {
    this.counterValue++;
  }

  decrease() {
    this.counterValue--;
  }

  ngOnInit() {
  }

}
