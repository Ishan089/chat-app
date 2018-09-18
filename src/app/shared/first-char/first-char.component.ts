import { Component, OnChanges, Input, EventEmitter, Output, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'first-char',
  templateUrl: './first-char.component.html',
  styleUrls: ['./first-char.component.css']
})
export class FirstCharComponent implements OnInit {
  @Input() userName: string;
  @Input() userBg: string;
  @Input() userColor: string;

  public firstChar: string;
  private _name :string=" ";

  @Output() userNameAppear: EventEmitter<string> =
      new EventEmitter<string>();

  ngOnInit(): void {
      this.firstChar = this.userName[0];

  } // end ngOnInit

  ngOnChanges(changes:SimpleChanges){
    let name = changes.name;
    this._name = name.currentValue;
    this.firstChar =  this._name[0]
  }
}
