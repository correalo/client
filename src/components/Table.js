/* eslint-disable no-undef */
import React, { useState } from 'react'
import '../App.css'
import MaterialTable from 'material-table'
import { Grid, TablePagination, Typography, Divider } from '@material-ui/core'
import { Checkbox } from '@material-ui/core'
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

// import AccountCircle from '@material-ui/icons/AccountCircle'

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

// se usar o options para alterar as cores, precisa usar essa constante abaixo
// const selectedRow = []


function Table() {
    const [data, setData] = useState(emplist)
    const [filter, setFilter] = useState(true)
    const totalAmount = () => {
        if(data.length > 0){
            const valores = data.map(el => el.valor);
            return valores.reduce((acc,curr) => acc + curr);
        }
        return 0
    }
    const columns = [
        // {
        //     title: 'id',
        //     field: 'id',
        //     edditable: false,
        //     align: 'center',
        //     lookup: '',
        //     type: 'integer',
        //     cellStyle: {
        //         backgroundColor: '#85929E',
        //         textAlign: 'center',
        //         color: '#0f3057',
        //         width: '5%',
        //     },
        //     headerStyle: {
        //         backgroundColor: '#333FFF',
        //         textAlign: 'center',
        //         color: '#FFF',
        //         fontSize: 15,
        //         width: '5%',
        //         fontWeight: 'bold',
        //     },
        // },
        {
            title: 'Nome do Paciente',
            field: 'name',
            type: 'text',
            validate: (rowData) => {
                if (rowData.name === undefined || rowData.name === '') {
                    return 'preencha o nome do paciente!'
                } else if (rowData.name.length < 3) {
                    return 'O nome precisa ter 3 caracteres ao menos'
                }
                return true
            },
            cellStyle: {
                backgroundColor: (rowData) => {
                    if (rowData.pago === 'SIM') {
                        return (backgroundColor = 'green')
                    } else if (rowData.pago === 'NÃO') {
                        return (backgroundColor = 'red')
                    }
                    return (BackgroundColor = '#E8E8E8')
                },
                textAlign: 'center',
                align: 'center',
                color: '#0f3057',
                width: '20%',
            },
            headerStyle: {
                backgroundColor: '#1E90FF',
                textAlign: 'center',
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
            sorting: true,
            validate: (rowData) => {
                if (
                    rowData.dataDeCirurgia === undefined ||
                    rowData.dataDeCirurgia === ''
                ) {
                    return 'Escolha a Data!'
                } else if (
                    rowData.dataDeCirurgia !== '' &&
                    rowData.dataDeCirurgia === 'DD.MM.YYYY.'
                ) {
                    return true
                }
                return true
            },

            cellStyle: {
                backgroundColor: (rowData) => {
                    if (rowData.pago === 'SIM') {
                        return (backgroundColor = 'green')
                    } else if (rowData.pago === 'NÃO') {
                        return (backgroundColor = 'red')
                    }
                    return (BackgroundColor = '#E8E8E8')
                },
                textAlign: 'center',
                color: '#0f3057',
                width: '12%',
            },
            headerStyle: {
                backgroundColor: '#1E90FF',
                textAlign: 'center',
                color: '#FFF',
                fontSize: 14,
                fontWeight: 'bold',
                width: '12%',
            },
        },
        {
            title: 'Tipo de Cirurgia',
            field: 'tipoDeCirurgia',
            lookup: {
                0: 'BYPASS',
                1: 'BYPASS+COLECISTECTOMIA',
                2: 'BYPASS+HERNIORRAFIA INCISIONAL',
                3: 'BYPASS+HERNIA UMBELICAL',
                4: 'SLEEVE',
                5: 'SLEEVE + COLECISTECTOMIA',
                6: 'COLECISTECTOMIA',
                7: 'COLECTOMIA',
                8: 'ENTERECTOMIA',
                9: 'FISTULECTOMIA',
                10: 'FISTULECTOMIA 2 TEMPO',
                11: 'HERNIA DE HIATO',
                12: 'HERNIA DE HIATO+CCC',
                13: 'HERNIA DE HIATO+ UMBILICAL',
                14: 'FISSURECTOMIA',
                15: 'HEMORRÓIDA',
                16: 'HEMORROIDECTOMIA C/ ESFINTERECTOMIA',
                17: 'HERNIA INGUINAL UNIL',
                18: 'HERNIA INGUINAL BILAT',
                19: 'HERNIA INCISIONAL',
                20: 'HERNIA UMBELICAL',
                21: 'TTO CIRURGICO DO MEGAESOFAGO',
                22: 'LAPAROSCOPIA+BIÓPSIA HEPATICA TRANS',
                23: 'LAPAROTOMIA EXPLORADORA + CCC',
                24: 'LAPAROTOMIA EXPLORADORA + ENTEROTOMIA',
                25: 'APENDICECTOMIA',
                26: 'RETIRADA DE PORTOCATH',
                27: 'DRENAGEM DE ABCESSO PERIANAL',
                28: 'FECHAMENTO DE PETERSEN',
                29: 'LAPAROTOMIA EXPLORADORA',
                30: 'RETOSSIGMOIDECTOMIA',
            },
            validate: (rowData) => {
                if (
                    rowData.tipoDeCirurgia === undefined ||
                    rowData.tipoDeCirurgia === ''
                ) {
                    return 'Escolha o nome do procedimento!'
                }
                return true
            },

            cellStyle: {
                backgroundColor: (rowData) => {
                    if (rowData.pago === 'SIM') {
                        return (backgroundColor = 'green')
                    } else if (rowData.pago === 'NÃO') {
                        return (backgroundColor = 'red')
                    }
                    return (BackgroundColor = '#E8E8E8')
                },
                textAlign: 'left',
                color: '#0f3057',
                width: '20%',
            },
            headerStyle: {
                backgroundColor: '#1E90FF',
                textAlign: 'center',
                color: '#FFF',
                fontSize: 14,
                fontWeight: 'bold',
                width: '20%',
            },
        },
        {
            title: 'Convênio',
            field: 'convenio',
            lookup: {
                0: 'PARTICULAR',
                1: 'SULAMERICA',
                2: 'BRADESCO',
                3: 'ABET',
                4: 'ALLIANZ',
                5: 'AMAFRESP',
                6: 'AMIL',
                7: 'CASSI',
                8: 'CABESP',
                9: 'CARE PLUS',
                10: 'CLASSES LABORIOSAS',
                11: 'CORREIOS-POSTAL SAÚDE',
                12: 'ECONOMUS',
                13: 'FUNDAÇÃO CESP',
                14: 'GAMA',
                15: 'GEAP',
                16: 'GOLDEN CROSS',
                17: 'INTERMÉDICA',
                18: 'IPT',
                19: 'ITAU',
                20: 'LINCX',
                21: 'MARÍTIMA',
                22: 'MEDIAL',
                23: 'MEDISERVICE',
                24: 'NOTRE DAME',
                25: 'OMINT',
                26: 'ONE HEALTH',
                27: 'PLAMTEL',
                28: 'PORTO SEGURO',
                29: 'PREVENT SENIOR',
                30: 'SABESPREV',
                31: 'SAUDE CAIXA',
                32: 'UNIMED CENTRAL NACIONAL',
                33: 'UNIMED FESP',
                34: 'UNIMED PAULISTANA',
                35: 'SEGUROS UNIMED',
            },
            validate: (rowData) => {
                if (rowData.convenio === undefined || rowData.convenio === '') {
                    return 'Escolha o Convênio!'
                }
                return true
            },
            cellStyle: {
                backgroundColor: (rowData) => {
                    if (rowData.pago === 'SIM') {
                        return (backgroundColor = 'green')
                    } else if (rowData.pago === 'NÃO') {
                        return (backgroundColor = 'red')
                    }
                    return (BackgroundColor = '#E8E8E8')
                },
                textAlign: 'left',
                color: '#0f3057',
                width: '18%',
            },
            headerStyle: {
                backgroundColor: '#1E90FF',
                textAlign: 'center',
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
            validate: (rowData) => ({
                isValid: true,
                helperText: 'Opcional',
            }),
            cellStyle: {
                backgroundColor: (rowData) => {
                    if (rowData.pago === 'SIM') {
                        return (backgroundColor = 'green')
                    } else if (rowData.pago === 'NÃO') {
                        return (backgroundColor = 'red')
                    }
                    return (BackgroundColor = '#E8E8E8')
                },
                textAlign: 'left',
                color: '#0f3057',
                width: '15%',
            },
            headerStyle: {
                backgroundColor: '#1E90FF',
                textAlign: 'left',
                color: '#FFF',
                fontSize: 14,
                fontWeight: 'bold',
                width: '15%',
            },
        },
        {
            title: 'Recebido Por',
            field: 'recebidoPor',
            lookup: { hospital: 'HOSPITAL', consultorio: 'CONSULTÓRIO' },
            validate: (rowData) => {
                if (
                    rowData.recebidoPor === undefined ||
                    rowData.recebidoPor === ''
                ) {
                    return 'Escolha a Fonte Pagadora!'
                }
                return true
            },
            cellStyle: {
                backgroundColor: (rowData) => {
                    if (rowData.pago === 'SIM') {
                        return (backgroundColor = 'green')
                    } else if (rowData.pago === 'NÃO') {
                        return (backgroundColor = 'red')
                    }
                    return (BackgroundColor = '#E8E8E8')
                },
                textAlign: 'left',
                color: '#0f3057',
                width: '12%',
            },
            headerStyle: {
                backgroundColor: '#1E90FF',
                textAlign: 'center',
                color: '#FFF',
                fontSize: 14,
                fontWeight: 'bold',
                width: '12%',
            },
        },

        {
            title: 'Pago',
            field: 'pago',
            lookup: { SIM: 'SIM', NÃO: 'NÃO' },

            validate: (rowData) => {
                if (rowData.pago === undefined || rowData.pago === '') {
                    return 'Escolha Sim ou Não!'
                }
                return true
            },
            cellStyle: {
                backgroundColor: (rowData) => {
                    if (rowData.pago === 'SIM') {
                        return (backgroundColor = 'green')
                    } else if (rowData.pago === 'NÃO') {
                        return (backgroundColor = 'red')
                    }
                    return (BackgroundColor = '#E8E8E8')
                },

                textAlign: 'left',
                color: '#0f3057',
                width: '3%',
                sorting: 'boolean',
            },
            headerStyle: {
                backgroundColor: '#1E90FF',
                textAlign: 'left',
                color: '#FFF',
                fontSize: 14,
                fontWeight: 'bold',
                width: '3%',
            },
        },
    ]
    const handleChange = () => {
        setFilter(!filter)
    }

    return (
        <div
            className="Table"
            style={{
                maxWidth: '98,5%',
                margin: 'auto',
                padding: 5,
                Color: 'grey',
                backgroundColor: 'grey',
            }}
        >
            <Checkbox
                style={{ color: 'blue', position: 'rigth' }}
                checked={filter}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
            <MaterialTable
                title="Cirurgias Realizadas"
                style={{
                    backgroundColor: '#AEB6BF',
                    textAlign: 'left',
                    fontWeight: 'bold',
                    fontSize: 14,
                    color: 'blue',
                }}
                data={data}
                columns={columns}
                icons={tableIcons}
                components={{
                    Pagination: (props) => (
                        <>
                            <Grid
                                container
                                style={{ padding: 15, background: '#f5f5f5' }}
                            >
                                <Grid sm={7} item>
                                    <Typography variant="subtitle1">
                                        Número de Cirurgias : {props.count}
                                    </Typography>
                                </Grid>
                                <Grid sm={5} item>
                                    <Typography variant="subtitle1">
                                        Valor Total: {totalAmount()}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Divider />
                            <TablePagination {...props} />
                        </>
                    ),
                }}
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
                        render: (rowData) => {
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
                    // para fazer um icone mostrando detalhes da tabela
                    // {
                    //     icon: () => <AccountCircle />,
                    //     tooltip: 'Show Surname',
                    //     render: (rowData) => {
                    //         return (
                    //             <div
                    //                 style={{
                    //                     fontSize: 100,
                    //                     textAlign: 'center',
                    //                     color: 'white',
                    //                     backgroundColor: '#E53935',
                    //                 }}
                    //             >
                    //                 {rowData.surname}
                    //             </div>
                    //         )
                    //     },
                    // },
                ]}
                options={{
                    search: true,
                    paging: true,
                    filtering: filter,
                    exportButton: true,
                    toolbarButtonAlignment: 'left',
                    searchAutoFocus: true,
                    cellStyle: { minWidth: '100px', maxWidth: '100px' },
                    selection: true,
                    rowStyle: (rowData) => {
                        if (rowData.pago === 'SIM') {
                            return { backgroundColor: 'green' }
                        }
                        return { backgroundColor: 'red' }
                    },

                    // ({
                    //     backgroundColor:
                    //         selectedRow === rowData.tableData.id
                    //             ? '#EEE'
                    //             : '#FFF',
                    // }),
                }}
                cellEditable={{
                    cellStyle: {},
                    onCellEditApproved: (
                        newValue,
                        oldValue,
                        rowData,
                        columnDef
                    ) => {
                        return new Promise((resolve, reject) => {
                            const index = data.findIndex(
                                (dados) => dados.id === rowData.id
                            )
                            data[index][columnDef.field] = newValue
                            setData(data)
                            setTimeout(resolve, 4000)
                        })
                    },
                }}
                actions={[
                    {
                        icon: () => <DeleteOutline />,
                        tooltip: 'Delete User',
                        onClick: (event, rowData) => {
                            const newData = data.filter(
                                (dados) =>
                                    !rowData.some(
                                        (data) => data.id === dados.id
                                    )
                            )
                            setData(newData)
                        },
                    },
                ]}
            />
        </div>
    )
}

export default Table
