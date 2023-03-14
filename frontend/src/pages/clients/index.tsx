import { useState, useEffect, useCallback, useMemo } from 'react';
import { Box, Button } from '@mui/material'
import { DataGrid, GridToolbar, GridValueGetterParams, GridActionsCellItem, GridColumns, GridRowId } from '@mui/x-data-grid'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import { client } from '../../api/client.api';
import { Header } from '../../components/Header'
import { AddClient } from './add'


export const ClientPage = () => {

  const [clientData, setClientData] = useState([])
  const [loading, setLoading] = useState(true)
  const [openAddClient, setOpenAddPatient] = useState(false)

  useEffect(() => {      
    client.clientAll().then((response) =>{
      setClientData(response.data)
      setLoading(false)
    }).catch((error) =>{
      console.error(error)
      setLoading(false)
    })
   },[])

  const handleOpenAddClient = () => {
    setOpenAddPatient(true)
  }

  const handleCloseAddClient = () => {
    setOpenAddPatient(false);
  }

  const addClient = (newClient: never) => {
    const dataNewClient = [newClient, ...clientData]
    setClientData(dataNewClient)
  }

  const deleteClient = useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        console.log(id);
        
      });
    },
    [],
  );

  const editClient = useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        console.log(id);
        
      });
    },
    [],
  );

  const viewClient = useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        console.log(id);
        
      });
    },
    [],
  );

  const columns =  useMemo<GridColumns>( 
    () => [
      { field: 'type_document', headerName: 'Tipo documento', width: 130, }, 
      { field: 'document', headerName: 'Documento', width: 130, },
      {
        field: 'fullName',
        headerName: 'Nombre completo',
        sortable: false,
        width: 230,
        valueGetter: (params: GridValueGetterParams) =>
        `${params.row.first_name || ''} ${params.row.last_name || ''}`,
      },
      { field: 'telephone', headerName: 'Teléfono', width: 140, },
      { field: 'mobile', headerName: 'Celular', width: 140, },  
      { field: 'email', headerName: 'Email', width: 230, },  
      { field: 'address', headerName: 'Dirección', width: 180, },
      { field: 'gender', headerName: 'Género', width: 80, },
      {
        field: 'options',
        headerName: 'Opciones',  
        width: 150,  
        sortable: false,
        type: 'actions',
        getActions: (params) => [
          <GridActionsCellItem
          icon={<VisibilityOutlinedIcon />}
          label="View"
          onClick={viewClient(params.id)}
          />,
          <GridActionsCellItem
          icon={<ModeEditOutlineOutlinedIcon />}
          label="Edit"
          onClick={editClient(params.id)}
          />,
          <GridActionsCellItem
            icon={<DeleteOutlinedIcon />}
            label="Delete"
            onClick={deleteClient(params.id)}
          />,
        ],
      },
    ],
    [deleteClient, editClient, viewClient],
  )

  return (
    <Box m='20px' sx={{width:'100%'}}>
      <Header title='Clientes' subtitle='Administrar los clientes' />
      <Box textAlign={'right'}>
        <Button variant='contained' startIcon={<PersonAddAlt1Icon />} onClick={handleOpenAddClient}> 
          Adicionar
        </Button>
      </Box>
      <AddClient open={openAddClient} close={handleCloseAddClient} submitClient={addClient}/>
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
          loading={loading}
          />
      </Box>
    </Box>

  )
}