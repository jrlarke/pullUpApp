import React from 'react';
import LessThanFourPullups from './pullups/lessThan4.jsx'
import FivePullups from './pullups/5.jsx'
import SixToEightPullups from './pullups/6to8.jsx'
import NineToElevenPullups from './pullups/9to11.jsx'
import TwelveToFifteenPullups from './pullups/12to15.jsx'
import SixteenToTwentyPullups from './pullups/16to20.jsx'
import TwentyOneToTwentyFivePullups from './pullups/21to25.jsx'
import TwentySixToThirtyPullups from './pullups/26to30.jsx'
import ThirtyOneToThirtyFivePullups from './pullups/31to35.jsx'
import ThirtySixToFortyPullups from './pullups/36to40.jsx'
import OverFortyPullups from './pullups/Over40.jsx'
import WorkoutState from './state'
import { observer } from 'mobx-react'
import FormState from '../form/state'

const renderContent = () => {
  let content
  if(FormState.pullUpCount <= 3){
    content = <LessThanFourPullups/>
  } else if(FormState.pullUpCount <= 5){
    content = <FivePullups/>
  } else if(FormState.pullUpCount <= 8){
    content = <SixToEightPullups/>
  } else if(FormState.pullUpCount <= 11){
    content = <NineToElevenPullups/>
  } else if(FormState.pullUpCount <= 15){
    content = <TwelveToFifteenPullups/>
  } else if(FormState.pullUpCount <= 20){
    content = <SixteenToTwentyPullups/>
  } else if(FormState.pullUpCount <= 25){
    content = <TwentyOneToTwentyFivePullups/>
  } else if(FormState.pullUpCount <= 30){
    content = <TwentySixToThirtyPullups/>
  } else if(FormState.pullUpCount <= 35){
    content = <ThirtyOneToThirtyFivePullups/>
  } else if(FormState.pullUpCount <= 40){
    content = <ThirtySixToFortyPullups/>
  } else if(FormState.pullUpCount >= 41){
    content = <OverFortyPullups/>
  }
  return content
}

const Workouts = () => {
  return (
    <div>
      <h1>This is the workouts component</h1>
      {renderContent()}
    </div>
  )
}

export default observer(Workouts)
