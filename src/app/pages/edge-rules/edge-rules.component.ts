import { Component } from '@angular/core';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { ActiveRulesComponent } from '../../components/active-rules/active-rules.component';

@Component({
  selector: 'app-edge-rules',
  standalone: true,
  imports: [SideMenuComponent, ActiveRulesComponent],
  templateUrl: './edge-rules.component.html',
  styleUrl: './edge-rules.component.scss'
})
export class EdgeRulesComponent {
}
