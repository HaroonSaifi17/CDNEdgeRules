import { Component, inject } from '@angular/core';
import { EdgeRulesDataService } from '../../utils/edge-rules-data.service';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, CommonModule } from '@angular/common';
import { SnakeCasePipe } from '../../utils/snake-case.pipe';
import { FormsModule } from '@angular/forms';
import { RippleModule } from 'primeng/ripple';
import { Rule } from '../../utils/EdgeRule.interface';
import { map } from 'rxjs';

@Component({
  selector: 'app-active-rules',
  standalone: true,
  imports: [CommonModule, AsyncPipe, SnakeCasePipe, FormsModule, RippleModule],
  templateUrl: './active-rules.component.html',
  styleUrl: './active-rules.component.scss',
})
export class ActiveRulesComponent {
  activeRule$ = inject(EdgeRulesDataService).activeRules$.pipe(
    map((rules) =>
      rules.find(
        (rule) =>
          new SnakeCasePipe().transform(rule.name) ===
          this.tabParam
      ),
    ),
  );

  private route = inject(ActivatedRoute);
  tabParam: string | null = null;
  activeRule: Rule | undefined;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.tabParam = params['tab'];
    });
    this.activeRule$.subscribe((activeRule) => {
      this.activeRule = activeRule;
    });
  }
}
