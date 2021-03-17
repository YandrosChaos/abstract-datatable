import { Component, OnInit } from '@angular/core';
import { Person } from './common/person.interface';
import { PersonService } from './common/person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public personList : Array<Person>
  public columns :string[]=["name","surname","age", "job"]

  constructor(private personService: PersonService){}

  ngOnInit(){
    this.personService.getAllPersons().subscribe(response => {
      this.personList = response;
    })
  }

}
