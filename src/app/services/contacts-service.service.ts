import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/Contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private contacts: Contact[] = [
    {
      name: 'Eileen Russell',
      image:
        'https://st4.depositphotos.com/1070459/29216/v/600/depositphotos_292162998-stock-illustration-blonde-avatar-man.jpg',
      email: 'eileenrussell@xumonk.com',
      birthday: new Date('2020-08-09T08:51:00'),
      phones: ['+1 (824) 598-2328'],
    },
    {
      name: 'Francis Mckay',
      image:
        'https://st4.depositphotos.com/1070459/29216/v/600/depositphotos_292162998-stock-illustration-blonde-avatar-man.jpg',
      email: 'francismckay@xumonk.com',
      birthday: new Date('2014-01-15T08:20:08'),
      phones: [],
    },
    {
      name: 'Jewell Schultz',
      image:
        'https://st4.depositphotos.com/1070459/29216/v/600/depositphotos_292162998-stock-illustration-blonde-avatar-man.jpg',
      email: 'jewellschultz@xumonk.com',
      birthday: new Date('2020-07-03T01:03:19'),
      phones: ['+1 (932) 538-2367', '+1 (949) 503-2184'],
    },
    {
      name: 'Goodman Hunter',
      image:
        'https://st4.depositphotos.com/1070459/29216/v/600/depositphotos_292162998-stock-illustration-blonde-avatar-man.jpg',
      email: 'goodmanhunter@xumonk.com',
      birthday: new Date('2016-02-22T11:42:38'),
      phones: [],
    },
    {
      name: 'Beck Webb',
      image:
        'https://st4.depositphotos.com/1070459/29216/v/600/depositphotos_292162998-stock-illustration-blonde-avatar-man.jpg',
      email: 'beckwebb@xumonk.com',
      birthday: new Date('2019-08-24T10:40:04'),
      phones: ['+1 (986) 566-2317', '+1 (950) 438-3960', '+1 (997) 562-3636'],
    },
    {
      name: 'Tabitha Combs',
      image:
        'https://st4.depositphotos.com/1070459/29216/v/600/depositphotos_292162998-stock-illustration-blonde-avatar-man.jpg',
      email: 'tabithacombs@xumonk.com',
      birthday: new Date('2018-03-24T01:55:12'),
      phones: ['+1 (897) 437-2473'],
    },
    {
      name: 'Schmidt Jennings',
      image:
        'https://st4.depositphotos.com/1070459/29216/v/600/depositphotos_292162998-stock-illustration-blonde-avatar-man.jpg',
      email: 'schmidtjennings@xumonk.com',
      birthday: new Date('2014-09-24T04:18:20'),
      phones: [],
    },
    {
      name: 'Bullock Martinez',
      image:
        'https://st4.depositphotos.com/1070459/29216/v/600/depositphotos_292162998-stock-illustration-blonde-avatar-man.jpg',
      email: 'bullockmartinez@xumonk.com',
      birthday: new Date('2016-05-18T11:26:22'),
      phones: ['+1 (889) 424-3036', '+1 (819) 403-2637'],
    },
    {
      name: 'Reva Stafford',
      image:
        'https://st4.depositphotos.com/1070459/29216/v/600/depositphotos_292162998-stock-illustration-blonde-avatar-man.jpg',
      email: 'revastafford@xumonk.com',
      birthday: new Date('2022-02-21T03:10:47'),
      phones: ['+1 (929) 465-2033', '+1 (952) 546-2373'],
    },
    {
      name: 'Franco Mccray',
      image:
        'https://st4.depositphotos.com/1070459/29216/v/600/depositphotos_292162998-stock-illustration-blonde-avatar-man.jpg',
      email: 'francomccray@xumonk.com',
      birthday: new Date('2020-03-02T07:29:18'),
      phones: ['+1 (900) 587-3989'],
    },
  ];
  constructor() {}
  getContacts(): Contact[] {
    return this.contacts;
  }
}
