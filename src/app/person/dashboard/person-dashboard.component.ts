import { Component, OnInit } from '@angular/core';
import { Person } from '../../model/person.model';
import PersonApiService from '../api/person-api.service';

@Component({
  selector: 'app-person-dashboard',
  templateUrl: './person-dashboard.component.html',
  styleUrl: './person-dashboard.component.scss'
})
export class PersonDashboardComponent implements OnInit {
  persons: Person[] = [];

  constructor(
    private personApiService: PersonApiService
  ) { }

  ngOnInit(): void {
    this.retrievePersons();
  }

  retrievePersons() {
    this.personApiService.getData()
      .subscribe({
        next: (data) => {
          this.persons = data.map((person : Person) => {
            const split = person.birthDate.split('-');
            person.birthDate = `${split[2]}/${split[1]}/${split[0]}`;
            return person;
          });
        }
      });
  }

}
