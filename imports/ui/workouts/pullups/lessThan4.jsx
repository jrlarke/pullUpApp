import React from 'react'
import { Center, Page, Box, VBox, ScrollView} from 'react-layout-components';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const LessThanFourPullups = () => {
  return (
    <ScrollView height={"100vh"}>
    <Center column>
      <h2>Less Than 4 pull ups</h2>
      <p>If you did 0-5 pullups during the test you should start with doing training of descending.
      Instead of pulling up, start at the top and descend slowly until your hands are straight.
      Follow the table below and you'll be doing pullups in no time!</p>
      <Center column>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Day</TableHeaderColumn>
            <TableHeaderColumn>Set 1</TableHeaderColumn>
            <TableHeaderColumn>Set 2</TableHeaderColumn>
            <TableHeaderColumn>Set 3</TableHeaderColumn>
            <TableHeaderColumn>Set 4</TableHeaderColumn>
            <TableHeaderColumn>Set 5</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn>7</TableRowColumn>
            <TableRowColumn>5</TableRowColumn>
            <TableRowColumn>5</TableRowColumn>
            <TableRowColumn>Exactly 7</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Minimum 1 day break</TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn>3</TableRowColumn>
            <TableRowColumn>8</TableRowColumn>
            <TableRowColumn>6</TableRowColumn>
            <TableRowColumn>6</TableRowColumn>
            <TableRowColumn>Exactly 8</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Minimum 1 day break</TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
          </TableRow>
          <TableRow>
          <TableRowColumn>3</TableRowColumn>
          <TableRowColumn>4</TableRowColumn>
          <TableRowColumn>9</TableRowColumn>
          <TableRowColumn>6</TableRowColumn>
          <TableRowColumn>6</TableRowColumn>
          <TableRowColumn>Exactly 8</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Minimum 2 day break</TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
          </TableRow>
          <TableRow>
          <TableRowColumn>4</TableRowColumn>
          <TableRowColumn>5</TableRowColumn>
          <TableRowColumn>9</TableRowColumn>
          <TableRowColumn>7</TableRowColumn>
          <TableRowColumn>7</TableRowColumn>
          <TableRowColumn>Exactly 9</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Minimum 1 day break</TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
          </TableRow>
          <TableRow>
          <TableRowColumn>5</TableRowColumn>
          <TableRowColumn>5</TableRowColumn>
          <TableRowColumn>10</TableRowColumn>
          <TableRowColumn>8</TableRowColumn>
          <TableRowColumn>8</TableRowColumn>
          <TableRowColumn>Exactly 10</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Minimum 1 day break</TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
          </TableRow>
          <TableRow>
          <TableRowColumn>6</TableRowColumn>
          <TableRowColumn>6</TableRowColumn>
          <TableRowColumn>10</TableRowColumn>
          <TableRowColumn>8</TableRowColumn>
          <TableRowColumn>8</TableRowColumn>
          <TableRowColumn>Exactly 12</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Minimum 2 day break</TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
            <TableRowColumn></TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
      </Center>
    </Center>
    </ScrollView>
  )
}

export default LessThanFourPullups
