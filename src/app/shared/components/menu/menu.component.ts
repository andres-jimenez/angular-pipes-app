import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [],
})
export class MenuComponent implements OnInit {
  public items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Angular Pipes',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Texts & Dates',
            icon: 'pi pi-align-left',
            routerLink: 'basics',
          },
          { label: 'Numbers', icon: 'pi pi-dollar', routerLink: 'numbers' },
          { label: 'Not Popular', icon: 'pi pi-globe', routerLink: 'uncommon' },
        ],
      },
      {
        label: 'Custom Pipes',
        icon: 'pi pi-cog',
        items: [
          { label: 'Custom Pipes', icon: 'pi pi-cog', routerLink: 'custom' },
        ],
      },
    ];
  }
}
