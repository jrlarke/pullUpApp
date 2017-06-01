import { Meteor } from 'meteor/meteor';
import { observable, action } from 'mobx'

class FormState {

  @observable pullUpCount = 0

  @action changePullUpCount = (num) => {
    console.log('we are changing the pull up count')
    console.log(num)
    this.pullUpCount = num
  }
}

const singleton = new FormState()
export default singleton
