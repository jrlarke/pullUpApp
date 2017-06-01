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

const TwentyOneToTwentyFivePullups = () => {
  return (
    <ScrollView height={"100vh"}>
    <Center column>
      <h2>21-25 pull ups</h2>
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
            <TableRowColumn>12</TableRowColumn>
            <TableRowColumn>16</TableRowColumn>
            <TableRowColumn>12</TableRowColumn>
            <TableRowColumn>12</TableRowColumn>
            <TableRowColumn>Max (Min 15)</TableRowColumn>
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
            <TableRowColumn>13</TableRowColumn>
            <TableRowColumn>16</TableRowColumn>
            <TableRowColumn>12</TableRowColumn>
            <TableRowColumn>12</TableRowColumn>
            <TableRowColumn>Max (Min 16)</TableRowColumn>
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
          <TableRowColumn>13</TableRowColumn>
          <TableRowColumn>17</TableRowColumn>
          <TableRowColumn>13</TableRowColumn>
          <TableRowColumn>13</TableRowColumn>
          <TableRowColumn>Max (Min 16)</TableRowColumn>
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
          <TableRowColumn>14</TableRowColumn>
          <TableRowColumn>19</TableRowColumn>
          <TableRowColumn>13</TableRowColumn>
          <TableRowColumn>13</TableRowColumn>
          <TableRowColumn>Max (Min 18)</TableRowColumn>
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
          <TableRowColumn>14</TableRowColumn>
          <TableRowColumn>19</TableRowColumn>
          <TableRowColumn>14</TableRowColumn>
          <TableRowColumn>14</TableRowColumn>
          <TableRowColumn>Max (Min 19)</TableRowColumn>
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
          <TableRowColumn>15</TableRowColumn>
          <TableRowColumn>20</TableRowColumn>
          <TableRowColumn>14</TableRowColumn>
          <TableRowColumn>14</TableRowColumn>
          <TableRowColumn>Max (Min 20)</TableRowColumn>
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
          <TableRowColumn>7</TableRowColumn>
          <TableRowColumn>16</TableRowColumn>
          <TableRowColumn>20</TableRowColumn>
          <TableRowColumn>16</TableRowColumn>
          <TableRowColumn>16</TableRowColumn>
          <TableRowColumn>Max (Min 20)</TableRowColumn>
          </TableRow>
          <TableRow>
            <TableRowColumn>Minimum 1 day break</TableRowColumn>
          </TableRow>
          <TableRow>
          <TableRowColumn>8</TableRowColumn>
          <TableRowColumn>16</TableRowColumn>
          <TableRowColumn>21</TableRowColumn>
          <TableRowColumn>16</TableRowColumn>
          <TableRowColumn>16</TableRowColumn>
          <TableRowColumn>Max (Min 20)</TableRowColumn>
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
          <TableRowColumn>9</TableRowColumn>
          <TableRowColumn>17</TableRowColumn>
          <TableRowColumn>22</TableRowColumn>
          <TableRowColumn>16</TableRowColumn>
          <TableRowColumn>16</TableRowColumn>
          <TableRowColumn>Max (Min 21)</TableRowColumn>
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

export default TwentyOneToTwentyFivePullups
