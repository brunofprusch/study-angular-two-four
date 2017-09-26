import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() 
  counterValue: number;

  @Output()
  changedValue = new EventEmitter();


  constructor() { }

  increase() {
    this.counterValue++;
    this.changedValue.emit({newValue: this.counterValue});
  }

  decrease() {
    this.counterValue--;
    this.changedValue.emit({newValue: this.counterValue});
  }

  ngOnInit() {
  }

}
