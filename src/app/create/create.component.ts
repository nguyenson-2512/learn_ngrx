import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as TutorialActions from '../../actions/tutorial.action'
import { Tutorial } from '../../model/tutorial.model'
import { AppState } from '../app.state'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addTutorial(name: string, url: string) {
    this.store.dispatch(new TutorialActions.AddTutorial({name, url}))
  }

  ngOnInit(): void {
  }

}
