import { Component, inject } from '@angular/core';
import { EdgeRulesDataService } from '../../utils/edge-rules-data.service';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { SnakeCasePipe } from '../../utils/snake-case.pipe';

@Component({
  selector: 'app-active-rules',
  standalone: true,
  imports: [CommonModule, AsyncPipe, SnakeCasePipe],
  templateUrl: './active-rules.component.html',
  styleUrl: './active-rules.component.scss',
})
export class ActiveRulesComponent {
  activeRules$ = inject(EdgeRulesDataService).activeRules$;
  private route = inject(ActivatedRoute);
  tabParam: string | null = null;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.tabParam = params['tab'];
    });
  }
}
