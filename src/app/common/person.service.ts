import { Injectable } from '@angular/core';
import { Person } from './person.interface';
import { personList } from './data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private dataList: Person[] = personList;

  constructor() {}

  getAllPersons(): Observable<Person[]> {
    return of(this.dataList);
  }
  
}
