import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snakeCase',
  standalone: true
})
export class SnakeCasePipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    if (value == null) {
      return '';
    }

    const input = String(value).trim();

    return input
      .replace(/([A-Z])/g, ' $1')
      .toLowerCase()
      .replace(/[^\w]+/g, '_')
      .replace(/^_|_$/g, '');
  }
}
