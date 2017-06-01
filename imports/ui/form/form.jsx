import React from 'react';
import FormState from './state'
import GeneralState from '../general/state'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Center, Page, Box, VBox, ScrollView} from 'react-layout-components';

const Form = ({name}) => {
  return (
    <ScrollView height={"100vh"}>
      <Center column>
        <h1>{name}</h1>
        <h1>My Fitness App</h1>
        <p>Thanks for checking out my app! To get started, fill in one of the boxes below:</p>
        <form onSubmit={handleSubmit}>
          <Center column>
            <TextField floatingLabelText='How many pull ups did you do?' onChange={changePullUpCount} type="int" name="pullUps"/>
            <RaisedButton type="submit" label='submit' style={{width: 100}} primary/>
          </Center>
        </form>
        <form>
          <Center column>
            <TextField floatingLabelText='Enter age here' type='int'name="age"/>
            <TextField floatingLabelText='Enter your Pull Ups here.' type='int' name="pftPullUps"/>
            <TextField floatingLabelText='Enter cruches here.' type='int' name="pftCrunches"/>
            <TextField floatingLabelText='Enter run time here.' name="pftRunTime"/>
            <RaisedButton type="submit" label='calculate PFT score' style={{width:100}} primary/>
          </Center>
        </form>
        <form>
          <Center column>
            <TextField floatingLabelText='Enter age here' type='int'name="cftAge"/>
            <TextField floatingLabelText='Enter movement to contact time here.' type='int' name="cftMTC"/>
            <TextField floatingLabelText='Enter ammo can lifts here.' type='int' name="cftACL"/>
            <TextField floatingLabelText='Enter manuever under fire time here.' name="cftMUF"/>
            <RaisedButton type="submit" label='calculate CFT score' style={{width:100}} primary/>
          </Center>
        </form>
      </Center>
    </ScrollView>
  )
}

Form.propTypes = {
  name: React.PropTypes.string
}

const changePullUpCount = (evt) => {
  FormState.changePullUpCount(evt.target.value)
}

const handleSubmit = (evt) => {
  evt.preventDefault()
  GeneralState.changeShouldRender('workouts')
}
export default Form
