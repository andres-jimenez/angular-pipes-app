import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameLowerCase: string = 'andrés jiménez';
  public nameUpperCase: string = 'ANDRÉS JIMÉNEZ';
  public name: string = 'AnDrÉs JiMéNeZ';
  public date: Date = new Date();
}
