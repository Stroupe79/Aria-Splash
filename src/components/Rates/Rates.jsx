import React from 'react';
import { Table, TableHeader, TableFooter, TableBody, TableRow, TableCell, Text } from 'grommet';
import styled from 'styled-components';

// import React from 'react';
// import { Table } from '@bit/grommet.grommet.table';
// import { TableBody } from '@bit/grommet.grommet.table-body';
// import { TableCell } from '@bit/grommet.grommet.table-cell';
// import { TableFooter } from '@bit/grommet.grommet.table-footer';
// import { TableHeader } from '@bit/grommet.grommet.table-header';
// import { TableRow } from '@bit/grommet.grommet.table-row';
// import { Text } from '@bit/grommet.grommet.text';

const DATA = [
  {
    id: 1,
    name: 'Eric',
    email: 'eric@local',
    amount: 3775
  },
  {
    id: 2,
    name: 'Chris',
    email: 'chris@local',
    amount: 5825
  },
  {
    id: 3,
    name: 'Alan',
    email: 'alan@local',
    amount: 4300
  }
];

let TOTAL = 0;
DATA.forEach(datum => {
  TOTAL += datum.amount;
});

const amountFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});

const COLUMNS = [
  {
    property: 'name',
    label: 'Name',
    dataScope: 'row',
    format: datum => <strong>{datum.name}</strong>
  },
  {
    property: 'email',
    label: 'Email'
  },
  {
    property: 'amount',
    label: 'Amount',
    align: 'end',
    footer: amountFormatter.format(TOTAL / 100),
    format: datum => amountFormatter.format(datum.amount / 100)
  }
];

export default (

) => {
    return (
            
  <div>
  <Table caption='Simple Table'>
    <TableHeader>
      <TableRow>
        {COLUMNS.map(c => (
          <TableCell
            key={c.property}
            scope='col'
            border='bottom'
            align={c.align}
          >
            <Text>{c.label}</Text>
          </TableCell>
        ))}
      </TableRow>
    </TableHeader>
    <TableBody>
      {DATA.map(datum => (
        <TableRow key={datum.id}>
          {COLUMNS.map(c => (
            <TableCell key={c.property} scope={c.dataScope} align={c.align}>
              <Text>{c.format ? c.format(datum) : datum[c.property]}</Text>
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
    <TableFooter>
      <TableRow>
        {COLUMNS.map(c => (
          <TableCell key={c.property} border='top' align={c.align}>
            <Text>{c.footer}</Text>
          </TableCell>
        ))}
      </TableRow>
    </TableFooter>
  </Table>
</div>
    )
}
;
          