import { Component, OnInit, Input } from '@angular/core';

import { Observable, Subject, of } from 'rxjs';

import { TestService } from '../test.service';
import {Person} from '../person';

@Component({
  selector: 'app-test-search',
  templateUrl: './test-search.component.html',
  styleUrls: ['./test-search.component.css']
})
export class TestSearchComponent implements OnInit {
  person$: Observable<Person[]>;
  name: string;

  private searchTerms = new Subject<string>();

  constructor(private testService: TestService) { }

  ngOnInit() {
    setTimeout(() => {
      this.name = "Shiyong Yin";
    }, 1000)
  }

  search(): void {
    // this.searchTerms.next(this.name)
    const a = this.testService.searchPerson(this.name);
    this.person$ = a;
    
  }

}
