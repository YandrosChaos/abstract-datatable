import { Observable } from "rxjs";
import { Person } from "./person.interface";

export const personList: Array<Person> = [
  {
    name: 'Bob',
    surname: 'Bobson',
    age: 26,
    job: 'Developer',
  },
  {
    name: 'Victor',
    surname: 'Maximo',
    age: 25,
    job: 'Hacker',
  },
  {
    name: 'Marco',
    surname: 'Aurelio',
    age: 40,
    job: 'Emperor',
  },
  {
    name: 'Rodrigo',
    surname: 'Diaz',
    age: 33,
    job: 'Noble',
  },
  {
    name: 'Jordan',
    surname: 'Bioco',
    age: 26,
    job: 'Personal Trainer',
  },
  {
    name: 'Heracles',
    surname: undefined,
    age: 26,
    job: 'Hero',
  },
];
