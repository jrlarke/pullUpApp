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

const ThirtyOneToThirtyFivePullups = () => {
  return (
    <ScrollView height={"100vh"}>
    <Center column>
      <h2>31-35 pull ups</h2>
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
            <TableRowColumn>20</TableRowColumn>
            <TableRowColumn>25</TableRowColumn>
            <TableRowColumn>19</TableRowColumn>
            <TableRowColumn>19</TableRowColumn>
            <TableRowColumn>Max (Min 23)</TableRowColumn>
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
            <TableRowColumn>22</TableRowColumn>
            <TableRowColumn>25</TableRowColumn>
            <TableRowColumn>21</TableRowColumn>
            <TableRowColumn>21</TableRowColumn>
            <TableRowColumn>Max (Min 25)</TableRowColumn>
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
          <TableRowColumn>23</TableRowColumn>
          <TableRowColumn>26</TableRowColumn>
          <TableRowColumn>23</TableRowColumn>
          <TableRowColumn>23</TableRowColumn>
          <TableRowColumn>Max (Min 25)</TableRowColumn>
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
          <TableRowColumn>24</TableRowColumn>
          <TableRowColumn>27</TableRowColumn>
          <TableRowColumn>24</TableRowColumn>
          <TableRowColumn>24</TableRowColumn>
          <TableRowColumn>Max (Min 26)</TableRowColumn>
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
          <TableRowColumn>25</TableRowColumn>
          <TableRowColumn>28</TableRowColumn>
          <TableRowColumn>24</TableRowColumn>
          <TableRowColumn>24</TableRowColumn>
          <TableRowColumn>Max (Min 37)</TableRowColumn>
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
          <TableRowColumn>25</TableRowColumn>
          <TableRowColumn>29</TableRowColumn>
          <TableRowColumn>25</TableRowColumn>
          <TableRowColumn>25</TableRowColumn>
          <TableRowColumn>Max (Min 28)</TableRowColumn>
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
          <TableRowColumn>26</TableRowColumn>
          <TableRowColumn>29</TableRowColumn>
          <TableRowColumn>25</TableRowColumn>
          <TableRowColumn>25</TableRowColumn>
          <TableRowColumn>Max (Min 29)</TableRowColumn>
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
          <TableRowColumn>8</TableRowColumn>
          <TableRowColumn>26</TableRowColumn>
          <TableRowColumn>30</TableRowColumn>
          <TableRowColumn>26</TableRowColumn>
          <TableRowColumn>26</TableRowColumn>
          <TableRowColumn>Max (Min 30)</TableRowColumn>
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
          <TableRowColumn>26</TableRowColumn>
          <TableRowColumn>32</TableRowColumn>
          <TableRowColumn>26</TableRowColumn>
          <TableRowColumn>26</TableRowColumn>
          <TableRowColumn>Max (Min 32)</TableRowColumn>
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

export default ThirtyOneToThirtyFivePullups
