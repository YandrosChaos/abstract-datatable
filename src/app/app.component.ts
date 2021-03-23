import { Component, OnInit } from '@angular/core';
import { Person } from './common/person.interface';
import { PersonService } from './common/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public personList: Array<Person>;
  public buttonText: string = 'Crear nueva alta';
  public columns = [
    {
      name: 'job',
      description: 'job desc',
    },
    {
      name: 'name',
      description: 'name desc',
    },
    {
      name: 'surname',
      description: 'surname description',
    },
  ];

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.personService.getAllPersons().subscribe((response) => {
      this.personList = response;
    });
  }
}
