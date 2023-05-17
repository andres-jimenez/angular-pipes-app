import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  // i18nSelect
  public name: string = 'Andrés';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18nPlural Json
  public clients: string[] = ['María', 'Pedro', 'Eduardo', 'Andrés', 'Melissa'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    other: 'tenemos # clientes esperando',
  };

  deleteClient() {
    this.clients.pop();
  }

  // KeyValue
  public person = {
    name: 'Andrés',
    age: 24,
    address: 'Medellín',
  };

  // AsyncPipe
  public myObservableTimer = interval(2000).pipe(
    tap((value) => console.log(value))
  );

  public promiseValue: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Finish promise');
    }, 3500);
  });
}
