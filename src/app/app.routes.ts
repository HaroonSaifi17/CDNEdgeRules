import { Routes } from '@angular/router';
import { EdgeRulesComponent } from './pages/edge-rules/edge-rules.component';

export const routes: Routes = [
  {
    path: 'edgerules/:tab',
    component: EdgeRulesComponent,
  },
  {
    path: '**',
    redirectTo: 'edgerules/caching',
  },
];
