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

const SixToEightPullups = () => {
  return (
    <Center column>
      <h2>6-8 pull ups</h2>
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
            <TableRowColumn>3</TableRowColumn>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn>Max (Min 3)</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Minimum 1 day break</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn>3</TableRowColumn>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn>Max (Min 4)</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Minimum 1 day break</TableRowColumn>
          </TableRow>
          <TableRow>
          <TableRowColumn>3</TableRowColumn>
          <TableRowColumn>3</TableRowColumn>
          <TableRowColumn>4</TableRowColumn>
          <TableRowColumn>2</TableRowColumn>
          <TableRowColumn>2</TableRowColumn>
          <TableRowColumn>Max (Min 4)</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Minimum 2 day break</TableRowColumn>
          </TableRow>
          <TableRow>
          <TableRowColumn>4</TableRowColumn>
          <TableRowColumn>3</TableRowColumn>
          <TableRowColumn>4</TableRowColumn>
          <TableRowColumn>3</TableRowColumn>
          <TableRowColumn>3</TableRowColumn>
          <TableRowColumn>Max (Min 4)</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Minimum 1 day break</TableRowColumn>
          </TableRow>
          <TableRow>
          <TableRowColumn>5</TableRowColumn>
          <TableRowColumn>3</TableRowColumn>
          <TableRowColumn>5</TableRowColumn>
          <TableRowColumn>3</TableRowColumn>
          <TableRowColumn>3</TableRowColumn>
          <TableRowColumn>Max (Min 5)</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Minimum 1 day break</TableRowColumn>
          </TableRow>
          <TableRow>
          <TableRowColumn>6</TableRowColumn>
          <TableRowColumn>4</TableRowColumn>
          <TableRowColumn>5</TableRowColumn>
          <TableRowColumn>4</TableRowColumn>
          <TableRowColumn>4</TableRowColumn>
          <TableRowColumn>Max (Min 6)</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Minimum 2 day break</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>
      </Center>
    </Center>
  )
}

export default SixToEightPullups
