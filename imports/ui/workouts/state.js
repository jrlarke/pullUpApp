import { Meteor } from 'meteor/meteor';
import { observable, action } from 'mobx'

class WorkoutState {

  @observable renderWorkout = 4

  @action changeRenderWorkout = (num) => {
    this.renderWorkout = num
  }
}

const singleton = new WorkoutState()
export default singleton
