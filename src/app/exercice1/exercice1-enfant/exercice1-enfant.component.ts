import { Component, OnInit, Input , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() public compteurVal: number; 
  @Output() public updateParentCompteur: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  plus(){
    this.compteurVal  = this.compteurVal +1;
    this.updateParentCompteur.emit(this.compteurVal);
  }

  moins(){
    this.compteurVal = this.compteurVal -1 ;
    this.updateParentCompteur.emit(this.compteurVal);
  }

}
