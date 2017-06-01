import { Meteor } from 'meteor/meteor';
import { observable, action } from 'mobx'

class LogInState {
  @observable signUp = false

  @observable createUsername = ''

  @observable createPassword = ''

  @observable loginUsername = ''

  @observable loginPassword = ''

  @action changeSignUp = (bool) => {
    this.signUp = bool
  }

  @action changeCreateUsername = (username) => {
    this.createUsername = username
  }

  @action changeCreatePassword = (password) => {
    this.createPassword = password
  }

  @action changeLoginUsername = (username) => {
    this.loginUsername = username
  }

  @action changeLoginPassword = (password) => {
    this.loginPassword = password
  }
}

const singleton = new LogInState()
export default singleton
