import React from 'react'
import { Center, Page, Box } from 'react-layout-components';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom'
import { observer } from 'mobx-react'
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Form from '../../imports/ui/form/form';
import Workouts from '../../imports/ui/workouts/workouts';
import GeneralState from '../../imports/ui/general/state'
import Login from '../../imports/ui/login/login';

export const Main = observer(React.createClass({
  displayName: "Main",
  // childContextTypes:{
  //   muiTheme: React.PropTypes.object
  // },
  // getChildContext(){
  //   return{
  //     muiTheme: getMuiTheme(theme)
  //   }
  // },

  //renders the landing page
  _getContent(){
    console.log(GeneralState.shouldRender)
    let content
    //if the state is form, render form.jsx
    if(GeneralState.shouldRender === 'form'){
      content = <Form/>
    }
    //if the state is workouts, render workouts.jsx
    if(GeneralState.shouldRender === 'workouts'){
      content = <Workouts/>
    }
    return content
  },
  render(){
    // console.log(GeneralState.currentUser)
    // if(GeneralState.currentUser !== undefined){
      // console.log('true*****')
      return (
        //buttons here are at the top of the page, change the state between form and workouts
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
          <Page style={{backgroundColor: '#ffffff'}}>
            <Box>
              <button onClick={()=>{GeneralState.changeShouldRender('form')}}>Form </button>
            </Box>
          {this._getContent()}
          </Page>
        </MuiThemeProvider>
      )
    // } else {
    //   return (
    //     <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    //       <Login/>
    //     </MuiThemeProvider>
    //   )
    // }
  }
})
)
