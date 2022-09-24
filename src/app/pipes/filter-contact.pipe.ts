import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../interfaces/Contact';

@Pipe({
  name: 'filterContact',
})
export class FilterContactPipe implements PipeTransform {
  transform(
    contacts: Contact[],
    propName: keyof Contact,
    value: string
  ): Contact[] {
    let contactArr: Contact[] = [];
    for (let contact of contacts) {
      if (
        (contact[propName] as string)
          .toLowerCase()
          .includes(value.toLowerCase())
      ) {
        contactArr.push(contact);
      }
    }
    return contactArr;
  }
}
