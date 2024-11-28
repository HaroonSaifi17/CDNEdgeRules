import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { EdgeRulesDataService } from '../../utils/edge-rules-data.service';
import { SnakeCasePipe } from '../../utils/snake-case.pipe';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterLink, CommonModule, SnakeCasePipe, RouterLinkActive],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss',
})
export class SideMenuComponent {
  activeRules$ = inject(EdgeRulesDataService).activeRules$;
}
