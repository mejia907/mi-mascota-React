import { Box } from '@mui/material'
import React from 'react';
import { DataGrid, GridColDef, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid'
import { client } from '../../api/client.api';
import { Header } from '../../components/Header'

const columns: GridColDef[] = [
  {
    field: 'type_document',
    headerName: 'Tipo documento',
    width: 130,
  }, 
  {
    field: 'document',
    headerName: 'Documento',  
    width: 130,  
  },
  {
    field: 'fullName',
    headerName: 'Nombre completo',
    sortable: false,
    width: 230,
    valueGetter: (params: GridValueGetterParams) =>
    `${params.row.first_name || ''} ${params.row.last_name || ''}`,
  },
  {
    field: 'telephone',
    headerName: 'Teléfono',  
    width: 140,  
  },
  {
    field: 'mobile',
    headerName: 'Celular', 
    width: 140,   
  },  
  {
    field: 'email',
    headerName: 'Email',   
    width: 230, 
  },  
  {
    field: 'address',
    headerName: 'Dirección',   
    width: 180, 
  },
  {
    field: 'gender',
    headerName: 'Género',  
    width: 80,  
  }
]

export const ClientPage = () => {

  const [clientData, setClientData] = React.useState([])

  React.useEffect(() => {
    getClients()
  },[])

  const getClients = async() => {
    const dataClient = await client.clientAll()
    setClientData(dataClient.data)
  }

  return (
    <Box m="20px" sx={{width:'100%'}}>
      <Header title="Clientes" subtitle="Administrar los clientes" />
      <Box 
      sx={{ height: '75vh', width: '100%',
      '& .MuiDataGrid-root': {
        border: 'none',
      },
      '& .MuiDataGrid-cell': {
        borderBottom: 'nonde',
      },
      '& .MuiDataGrid-columnHeaders': {
        backgroundColor: 'primary.main',
        borderBottom: 'none',
        color: 'primary.contrastText'
      },
      '& .MuiDataGrid-footerContainer': {
        backgroundColor: 'primary.main',
        borderTop: 'none'
      },
      '& .MuiTablePagination-root': {
        color: 'primary.contrastText'
      }
      }}>
        <DataGrid 
          rows={clientData} 
          columns={columns} 
          components={{ Toolbar: GridToolbar }} 
          getRowId={(row: any) => row._id}  
          loading={clientData.length === 0}
          />
      </Box>
    </Box>

  )
}