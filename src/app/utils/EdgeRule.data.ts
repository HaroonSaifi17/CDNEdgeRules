import { ApplyTo, FilterType, Rule } from './EdgeRule.interface';

export const activeRules: Rule[] = [
  {
    name: 'Caching',
    applyTo: ApplyTo.All,
    criteria: [
      {
        type: 'content-type',
        filter: FilterType.OneOf,
        options: ['Case Sensitive values', 'Wildcards in value'],
        selectedValues: ['text/html', 'text/css', 'application/javascript'],
        priority: 1,
      },
    ],
  },
  {
    name: 'Response',
    applyTo: ApplyTo.Any,
    criteria: [
      {
        type: 'content-type',
        filter: FilterType.Equals,
        options: ['Case Sensitive values', 'Wildcards in value'],
        selectedValues: ['application/json'],
        priority: 1,
      },
      {
        type: 'request-method',
        filter: FilterType.OneOf,
        options: ['Consider X forwarded for IP'],
        selectedValues: ['GET', 'HEAD'],
        priority: 2,
      },
    ],
  },
];
