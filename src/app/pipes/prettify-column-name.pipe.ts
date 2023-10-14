import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettifyColumnName',
})
export class PrettifyColumnNamePipe implements PipeTransform {
  transform(columnName: string): string {
    switch (columnName) {
      case 'id':
        return 'ID';
      case 'name_ru':
        return 'Name RU';
      case 'name_transcript':
        return 'Name EN';
      case 'nationality':
        return 'Nationality';
      case 'date_of_birth':
        return 'Date of birth';
      case 'date_of_listing':
        return 'Date of listing';
      case 'current_location':
        return 'Current location';
      case 'cause_of_listing':
        return 'Cause of listing';
      case 'additional_info':
        return 'Additional info';
      default:
        return '#';
    }
  }
}
