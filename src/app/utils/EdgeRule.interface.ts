export enum ApplyTo {
  All = 'all',
  Any = 'any',
}

export enum FilterType {
  OneOf = 'oneOf',
  Contains = 'contains',
  Equals = 'equals',
  Matches = 'matches',
  StartsWith = 'startsWith',
}

export interface RuleCriteria {
  type: string;
  filter: FilterType;
  options: string[];
  selectedValues: string[];
  priority?: number;
}

export interface Rule {
  name: string;
  applyTo: ApplyTo;
  criteria: RuleCriteria[];
}
