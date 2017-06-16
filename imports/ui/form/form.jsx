import React from 'react';
import FormState from './state'
import GeneralState from '../general/state'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Center, Page, Box, VBox, ScrollView} from 'react-layout-components';
import { observer } from 'mobx-react'

import { UserPlans } from '../../api/userPlans/userPlans.js'
import { Plans } from '../../api/plans/plans'
import Workouts from '../workouts/workouts'

const renderContent = () => {
  let content
  if(FormState.showWorkouts){
    content = <Workouts/>
  } else {
    content = (
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
        </Center>
      </ScrollView>
    )
  }
  return content
}

const Form = ({name}) => {
  return (
    <div>
      {renderContent()}
    </div>
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
  FormState.setShowWorkouts(true)
  let plan = Plans.findOne({"name" : "50 Pullups"})
  let planId = plan._id
  let userPlan = {
    userId: Meteor.user()._id,
    planId: planId,
    initialInput: FormState.pullUpCount,
    levels: {
      level3 : {
        days: {
          day1 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day2 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day3 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day4 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day5 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day6 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          }
        }
      },
      level5 : {
        days: {
          day1 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day2 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day3 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day4 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day5 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day6 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          }
        }
      },
      level8 : {
        days: {
          day1 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day2 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day3 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day4 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day5 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day6 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          }
        }
      },
      level11 : {
        days: {
          day1 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day2 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day3 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day4 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day5 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day6 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          }
        }
      },
      level15 : {
        days: {
          day1 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day2 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day3 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day4 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day5 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day6 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          }
        }
      },
      level20 : {
        days: {
          day1 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day2 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day3 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day4 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day5 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day6 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day7 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day8 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day9 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          }
        }
      },
      level25 : {
        days: {
          day1 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day2 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day3 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day4 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day5 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day6 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day7 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day8 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day9 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          }
        }
      },
      level30 : {
        days: {
          day1 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day2 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day3 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day4 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day5 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day6 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day7 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day8 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day9 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          }
        }
      },
      level35 : {
        days: {
          day1 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day2 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day3 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day4 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day5 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day6 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day7 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day8 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day9 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          }
        }
      },
      level40 : {
        days: {
          day1 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day2 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day3 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day4 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day5 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day6 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day7 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day8 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day9 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          }
        }
      },
      level41 : {
        days: {
          day1 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day2 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day3 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day4 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day5 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day6 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day7 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day8 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          },
          day9 : {
            set1: false,
            set2: false,
            set3: false,
            set4: false,
            set5: 0
          }
        }
      }
    }
  }
  UserPlans.insert(userPlan)
  GeneralState.changeShouldRender('workouts')
}
export default observer(Form)
