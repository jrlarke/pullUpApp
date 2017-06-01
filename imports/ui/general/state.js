import { Meteor } from 'meteor/meteor';
import { observable, action, computed } from 'mobx'

class GeneralState {
  @observable shouldRender = 'form'

  @action changeShouldRender = (name) => {
    this.shouldRender = name
  }

  @computed get currentUser(){
    return Meteor.user()
  }

}

const singleton = new GeneralState()
export default singleton
