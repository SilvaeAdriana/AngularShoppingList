import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //o header tem um evento de click para escolher pra onde quer ir:receita ou shoppinglist
  //o evento que está no link é onSelect()
  //que recebe um parametro de nome feature, essa funcao faz
  //a featureSelected que é um eventemitter do tipo string emitir a feature(mostrar o feature?)

  @Output() featureSelected  = new EventEmitter<string>();
  //o output deixara visivel para o app-component, ja que ele recebe o <app-header>(uso indireto)
  onSelect(feature:string){
    this.featureSelected.emit(feature);
  }

}
//