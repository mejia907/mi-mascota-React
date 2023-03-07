import { useCallback, useMemo, useState } from 'react';
import { Box, Button } from '@mui/material'
import { DataGrid, GridToolbar, GridValueGetterParams, GridActionsCellItem, GridColumns, GridRowId } from '@mui/x-data-grid'
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import { Header } from '../../components/Header'

export const PatientPage = () => {

  const [patientData, setPatientData] = useState([])
  const [loading, setLoading] = useState(true)
  const [openAddPatient, setOpenAddPatient] = useState(false)
  
  const handleOpenAddPatient = () => {
    setOpenAddPatient(true)
  }

    const deletePatient = useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        console.log(id);
        
      });
    },
    [],
  );

  const editPatient = useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        console.log(id);
        
      });
    },
    [],
  );

  const viewPatient = useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        console.log(id);
        
      });
    },
    [],
  );

  const columns = useMemo<GridColumns>( 
    () => [
      { field: 'name', headerName: 'Nombre', width: 130, }, 
      { field: 'birthdate', headerName: 'Fecha de nacimiento', width: 130, },
      { field: 'weight', headerName: 'Peso', width: 140, },
      { field: 'gender', headerName: 'Sexo', width: 140, },  
      { field: 'species', headerName: 'Especie', width: 230, },  
      { field: 'race', headerName: 'Raza', width: 180, },
      { field: 'sterilized', headerName: 'Esterelizado', width: 80, },
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
          onClick={viewPatient(params.id)}
          />,
          <GridActionsCellItem
          icon={<ModeEditOutlineOutlinedIcon />}
          label="Edit"
          onClick={editPatient(params.id)}
          />,
          <GridActionsCellItem
            icon={<DeleteOutlinedIcon />}
            label="Delete"
            onClick={deletePatient(params.id)}
          />,
        ],
      },
    ],
    [deletePatient, editPatient, viewPatient],
  )

  return (
    <Box m='20px' sx={{width:'100%'}}>
    <Header title='Pacientes' subtitle='Administrar los pacientes' />
    <Box alignContent={'left'}>
      <Button variant='contained' startIcon={<PetsOutlinedIcon />} onClick={handleOpenAddPatient}> 
        Adicionar
      </Button>
    </Box>
    
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
        rows={patientData} 
        columns={columns} 
        components={{ Toolbar: GridToolbar }} 
        getRowId={(row: any) => row._id}  
        loading={loading}
        />
    </Box>
  </Box>
  )
}