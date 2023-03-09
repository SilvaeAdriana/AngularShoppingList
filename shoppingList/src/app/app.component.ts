import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingList';
<<<<<<< HEAD
  loadedFeature = 'recipe';//vai pro html desse componente via ngIf


  //recebe a feature lá do header, possibilitada pelo output e intermediada pelo Output(filho para pai)
  onNavigate(feature: string){
    this.loadedFeature = feature;

  }
=======
>>>>>>> 505218f7604641aeb5119a3069aac33689d9c5a6
}
