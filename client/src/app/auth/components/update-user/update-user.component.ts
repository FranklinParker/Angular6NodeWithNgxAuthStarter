import {Component, OnInit} from '@angular/core';
import {AppState} from '../../../reducers';
import {Store} from '@ngrx/store';
import {selectLoggedInUser} from '../../auth.selector';
import {LoggedInUser} from '../../model/loggedInUser';
import {AuthService} from '../../service/auth.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: LoggedInUser;
  isLoading = false;
  passwordMinLength = 8;
  password: string;
  passwordConfirm: string;
  updateError: string;

  constructor(private store: Store<AppState>,
              private authService: AuthService) {
  }

  get passwordsMatch() {
    return this.password && this.password.length > this.passwordMinLength &&
      this.password === this.passwordConfirm;

  }


  get passwordsDoNotMatch() {
    return this.password && this.password.length > this.passwordMinLength &&
      this.password !== this.passwordConfirm;

  }


  ngOnInit() {
    this.store.select(selectLoggedInUser)
      .subscribe(loggedInUser => this.user = loggedInUser);
  }

  async onUpdate(signUpForm) {
    this.user.password = this.password;
    const result = await this.authService.updateUser(this.user);
    console.log('update user', result);

  }

  onFormKeyUp(){
    this.updateError = undefined;
  }


}
