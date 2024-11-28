import { Injectable } from '@angular/core';
import { activeRules } from './EdgeRule.data';
import { BehaviorSubject } from 'rxjs';
import { Rule } from './EdgeRule.interface';



@Injectable({
  providedIn: 'root',
})
export class EdgeRulesDataService {
 activeRules$ = new BehaviorSubject<Rule[]>(activeRules)

  constructor() {}
}
