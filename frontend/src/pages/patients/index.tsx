import { useCallback, useEffect, useMemo, useState } from 'react';
import { Box, Button } from '@mui/material'
import { DataGrid, GridToolbar, GridValueGetterParams, GridActionsCellItem, GridColumns, GridRowId } from '@mui/x-data-grid'
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import { Header } from '../../components/Header'
import { patient } from '../../api/patient.api';
import { AddPatient } from './add';

export const PatientPage = () => {

  const [patientData, setPatientData] = useState([])
  const [loading, setLoading] = useState(true)
  const [openAddPatient, setOpenAddPatient] = useState(false)
  
  useEffect(() => {
    patient.patientAll().then((response) => {
      setPatientData(response.data)
      setLoading(false)
    }).catch((error) => {
      console.error(error)
      setLoading(false)
    })
  },[])

  const handleOpenAddPatient = () => {
    setOpenAddPatient(true)
  }

  const handleCloseAddPatient = () => {
    setOpenAddPatient(false)
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
      { field: 'name', headerName: 'Nombre', width: 140, }, 
      { field: 'birthdate', headerName: 'Fecha de nacimiento', width: 170, },
      { field: 'weight', headerName: 'Peso', width: 120, },
      { field: 'gender', headerName: 'Sexo', width: 100, },  
      { field: 'species', headerName: 'Especie', width: 130, },  
      { field: 'race', headerName: 'Raza', width: 180, },
      { field: 'sterilized', headerName: 'Esterelizado', width: 120, },
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
      <Box textAlign={'right'}>
        <Button variant='contained' startIcon={<PetsOutlinedIcon />} onClick={handleOpenAddPatient}> 
          Adicionar
        </Button>
      </Box>
      <AddPatient open={openAddPatient} close={handleCloseAddPatient} submitPatient={AddPatient} />
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