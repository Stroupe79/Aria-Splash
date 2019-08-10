import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'


class Table extends React.Component {
    render() {
      return (
        <MaterialTable
          title="Rates"
          columns={[
            {
              title: 'How Long?', field: 'name',
              cellStyle: {
                backgroundColor: '#039be5',
                color: '#FFF'
              },
              headerStyle: {
                backgroundColor: '#039be5',
              }
            },
            { title: 'Hours', field: 'hours' },
            {
              title: 'Price',
              field: 'price',
            },
          ]}
          data={[
            { name: 'Full Day', hours: '8am - 8pm', price: "$1500"},
            { name: 'Half Day', hours: '8am - 2pm or 2pm - 8pm', price: "$750"},
          ]}
          options={{
            headerStyle: {
              backgroundColor: '#01579b',
              color: '#FFF'
            }
          }}
        />
      )
    }
  }

  export default Table;