import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [

      { id: 1, title: 'Cronicas de Arthur'},
      { id: 2, title: 'Lord of the Rings'},
      { id: 3, title: 'Jogador No1'}
  
  ];
    return {books};
  }
}