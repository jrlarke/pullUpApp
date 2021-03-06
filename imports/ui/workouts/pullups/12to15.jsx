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

const TwelveToFifteenPullups = () => {
  return (
    <ScrollView height={"100vh"}>
    <Center column>
      <h2>12-15 pull ups</h2>
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
            <TableRowColumn>6</TableRowColumn>
            <TableRowColumn>8</TableRowColumn>
            <TableRowColumn>6</TableRowColumn>
            <TableRowColumn>6</TableRowColumn>
            <TableRowColumn>Max (Min 8)</TableRowColumn>
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
            <TableRowColumn>6</TableRowColumn>
            <TableRowColumn>9</TableRowColumn>
            <TableRowColumn>6</TableRowColumn>
            <TableRowColumn>6</TableRowColumn>
            <TableRowColumn>Max (Min 9)</TableRowColumn>
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
          <TableRowColumn>7</TableRowColumn>
          <TableRowColumn>10</TableRowColumn>
          <TableRowColumn>6</TableRowColumn>
          <TableRowColumn>6</TableRowColumn>
          <TableRowColumn>Max (Min 9)</TableRowColumn>
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
          <TableRowColumn>7</TableRowColumn>
          <TableRowColumn>10</TableRowColumn>
          <TableRowColumn>7</TableRowColumn>
          <TableRowColumn>7</TableRowColumn>
          <TableRowColumn>Max (Min 10)</TableRowColumn>
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
          <TableRowColumn>8</TableRowColumn>
          <TableRowColumn>11</TableRowColumn>
          <TableRowColumn>8</TableRowColumn>
          <TableRowColumn>8</TableRowColumn>
          <TableRowColumn>Max (Min 10)</TableRowColumn>
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
          <TableRowColumn>9</TableRowColumn>
          <TableRowColumn>11</TableRowColumn>
          <TableRowColumn>9</TableRowColumn>
          <TableRowColumn>9</TableRowColumn>
          <TableRowColumn>Max (Min 11)</TableRowColumn>
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

export default TwelveToFifteenPullups
