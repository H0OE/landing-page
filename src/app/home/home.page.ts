import { Component } from '@angular/core';
import { Card } from '../model/card.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cards: Card[] = [
    {
      title: 'Galleta de Gumbo',
      subtitle: 'Nutritiva',
      description:
        'Nuestras galletas son tan nutritivas que no necesitarias comenr un desayuno ya que estas te llenaran completamente',
    },
    {
      title: 'Mejor que la carne',
      subtitle: 'Proteina',
      description:
        'Contienen el doble de carbohidratos que la carne de res y mas del triple que la carne de cabllo y es mas suave que la carne de canguro',
    },
    {
      title: 'Galleta de Gumbo',
      subtitle: 'Nutritiva',
      description:
        'Nuestras galletas son tan nutritivas que no necesitarias comenr un desayuno ya que estas te llenaran completamente',
    },
    {
      title: 'Mejor que la carne',
      subtitle: 'Proteina',
      description:
        'Contienen el doble de carbohidratos que la carne de res y mas del triple que la carne de cabllo y es mas suave que la carne de canguro',
    },
  ];
  constructor() {}
}
