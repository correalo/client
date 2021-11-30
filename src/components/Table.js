import React, { useState } from 'react'
import '../App.css'
import MaterialTable from 'material-table'

// import MaterialTable, { MTableToolbar } from 'material-table';

import { forwardRef } from 'react'

import AddBox from '@material-ui/icons/AddBox'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import Check from '@material-ui/icons/Check'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import Edit from '@material-ui/icons/Edit'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Remove from '@material-ui/icons/Remove'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'
import AccountCircle from '@material-ui/icons/AccountCircle';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
        <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
        <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => (
        <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
}

;<MaterialTable icons={tableIcons} />

const emplist = []
const newData = []
const selectedRow = []

function Table() {
    const [data, setData] = useState(emplist)
    const columns = [
        {
            title: 'id',
            field: 'id',
            edditable: false,
            align: 'center',
            lookup: '',
            type: 'integer',
            cellStyle: {
                backgroundColor: '#85929E',
                color: '#0f3057',
                width: '5%',
            },
            headerStyle: {
                backgroundColor: '#333FFF',
                color: '#FFF',
                fontSize: 15,
                width: '5%',
                fontWeight: 'bold',
                align: 'center',
            },
        },
        {
            title: 'Nome',
            field: 'nome',
            type: 'text',
            validate: rowData => rowData.name !=='',
            cellStyle: {
                backgroundColor: '#E8E8E8',
                color: '#0f3057',
                width: '20%',
                validate: (rowData) => rowData.dataDeCirurgia !== '',
            },
            headerStyle: {
                backgroundColor: '#1E90FF',
                color: '#FFF',
                fontSize: 14,
                fontWeight: 'bold',
                width: '20%',
            },
        },
        {
            title: 'Data de Cirurgia',
            field: 'dataDeCirurgia',
            type: 'date',
            cellStyle: {
                backgroundColor: '#E8E8E8',
                color: '#0f3057',
                width: '12%',
                validate: (rowData) => rowData.dataDeCirurgia !== '',
            },
            headerStyle: {
                backgroundColor: '#1E90FF',
                color: '#FFF',
                fontSize: 14,
                fontWeight: 'bold',
                width: '12%',
            },
        },
        {
            title: 'Tipo de Cirurgia',
            field: 'tipoDeCirurgia',
            cellStyle: {
                backgroundColor: '#E8E8E8',
                color: '#0f3057',
                width: '20%',
            },
            headerStyle: {
                backgroundColor: '#1E90FF',
                color: '#FFF',
                fontSize: 14,
                fontWeight: 'bold',
                width: '20%',
            },
        },
        {
            title: 'Convênio',
            field: 'convenio',
            cellStyle: {
                backgroundColor: '#E8E8E8',
                color: '#0f3057',
                width: '18%',
            },
            headerStyle: {
                backgroundColor: '#1E90FF',
                color: '#FFF',
                fontSize: 14,
                fontWeight: 'bold',
                width: '18%',
            },
        },
        {
            title: 'Valor',
            field: 'valor',
            type: 'currency',
            cellStyle: {
                backgroundColor: '#E8E8E8',
                color: '#0f3057',
                width: '8%',
            },
            headerStyle: {
                backgroundColor: '#1E90FF',
                color: '#FFF',
                fontSize: 14,
                fontWeight: 'bold',
                width: '8%',
            },
        },
        {
            title: 'Recebido Por',
            field: 'recebidoPor',
            cellStyle: {
                backgroundColor: '#E8E8E8',
                color: '#0f3057',
                width: '12%',
                
            },
            headerStyle: {
                backgroundColor: '#1E90FF',
                color: '#FFF',
                fontSize: 14,
                fontWeight: 'bold',
                width: '12%',
                
            },
        },
        {
            title: 'Pago',
            field: 'pago',
            cellStyle: {
                backgroundColor: '#E8E8E8',
                color: '#0f3057',
                width: '5%',
                sorting: 'boolean',
                
            },
            headerStyle: {
                backgroundColor: '#1E90FF',
                color: '#FFF',
                fontSize: 14,
                fontWeight: 'bold',
                width: '5%',
                
            },
        },
    ]
    return (
        <div
            className="Table"
            style={{
                maxWidth: '99,5%',
                margin: 'auto',
                padding: 2,
                Color: 'grey',
                backgroundColor: 'grey',
            }}
        >
            <MaterialTable
                title="Cirurgias Realizadas"
                style={{
                    backgroundColor: '#d3d6db',
                }}
                data={data}
                columns={columns}
                icons={tableIcons}
                editable={{
                    
                    onBulkUpdate: (changes) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                setData([...data, newData])

                                resolve()
                            }, 1000)
                        }),
                    onRowAddCancelled: (rowData) =>
                        console.log('Row adding cancelled'),
                    onRowUpdateCancelled: (rowData) =>
                        console.log('Row editing cancelled'),
                    onRowAdd: (newData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                setData([...data, newData])

                                resolve()
                            }, 1000)
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataUpdate = [...data]
                                const index = oldData.tableData.id
                                dataUpdate[index] = newData
                                setData([...dataUpdate])

                                resolve()
                            }, 1000)
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const dataDelete = [...data]
                                const index = oldData.tableData.id
                                dataDelete.splice(index, 1)
                                setData([...dataDelete])

                                resolve()
                            }, 1000)
                        }),
                }}
                detailPanel={[
                    {
                      tooltip: 'Show Name',
                      render: rowData => {
                        return (
                          <div
                            style={{
                              fontSize: 100,
                              textAlign: 'center',
                              color: 'white',
                              backgroundColor: '#43A047',
                            }}
                          >
                            {rowData.nome}
                          </div>
                        )
                      },
                    },
                    {
                        icon: () => <AccountCircle/>,
                        tooltip: 'Show Surname',
                        render: rowData => {
                          return (
                            <div
                              style={{
                                fontSize: 100,
                                textAlign: 'center',
                                color: 'white',
                                backgroundColor: '#E53935',
                              }}
                            >
                              {rowData.surname}
                            </div>
                          )
                        },
                      },
                  ]}
                options={{
                    search: true,
                    paging: false,
                    toolbarButtonAlignment: 'left',
                    searchAutoFocus: true,
                    cellStyle: { minWidth: '100px', maxWidth: '100px' },
                    selection: true,
                    rowStyle: (rowData) => ({
                        backgroundColor:
                            selectedRow === rowData.tableData.id
                                ? '#EEE'
                                : '#FFF',
                    }),
                    exportButton: true
                }}
                cellEditable={{
                    cellStyle: {},
                    onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
                        return new Promise((resolve, reject) => {
                            const index = data.findIndex(dados => dados.id === rowData.id);
                            data[index][columnDef.field] = newValue;
                            setData(data)
                            setTimeout(resolve, 4000);
                        });
                    }
                }}
                actions={[
                    {
                      icon: () => <DeleteOutline/>,
                      tooltip: 'Delete User',
                      onClick: (event, rowData) => {
                          const newData = data.filter(dados => !rowData.some(data => data.id === dados.id));
                          setData(newData)
                      }
                    },
                  ]}
              
            />
        </div>
    )
}

export default Table
