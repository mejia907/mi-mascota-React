import React, { Dispatch, SetStateAction } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import DialogContent from '@mui/material/DialogContent'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import Tab from '@mui/material/Tab'
import PersonPinIcon from '@mui/icons-material/PersonPin'
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined'
import Switch from '@mui/material/Switch'
import FormControlLabel from '@mui/material/FormControlLabel'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { TabList, TabPanel, TabContext } from '@mui/lab'
import { ClientValidate } from '../../utils/validateForm'
import { useNotification } from '../../context/notification.context'
import { ClientType } from '../../types/client'
import { client } from '../../api/client.api'

type HeaderProps = {
  open: boolean,
  close: () => void,
  submitClient: (newClieta: never) => void
}

const ListTypeDocument = [
  {
    value: 'CC',
    label: 'Cédula'
  }
]

const listGender = [
  {
    value: 'M',
    label: 'Masculino'
  },
  {
    value: 'F',
    label: 'Femenino'
  }
]

const listSex = [
  {
    value: 'M',
    label: 'Macho'
  },
  {
    value: 'H',
    label: 'Hembra'
  }
]

const listSpecie = [
  {
    value: 'CA',
    label: 'Canino'
  },
  {
    value: 'FE',
    label: 'Felino'
  },
  {
    value: 'PO',
    label: 'Porcino'
  },
  {
    value: 'AV',
    label: 'Aviar'
  }
]

const listRace = [
  {
    value: 'M',
    label: 'Mestizo'
  }
]

const INITIAL_STATE = {
  type_document: '',
  document: '',
  first_name: '',
  last_name: '',
  mobile: 0,
  gender: '',
  address: '',
  email: '',
  telephone: 0
}

const styleInput = {
  width: '25ch'
}

export const AddClient = ({open, close, submitClient} : HeaderProps) => {

  const { getError, getSuccess } = useNotification()

  const [option, setOption] = React.useState('1')
  const [birthdate, setBirthdate] = React.useState<Dayjs | null>(
    dayjs()
  )
  const [clientData, setClient] = React.useState<ClientType>(INITIAL_STATE)

  const dataClient = (event: React.ChangeEvent<HTMLInputElement>) => {   
    setClient({ ...clientData, [event.target.name]: event.target.value })
  }

  const handleOptions = (event: React.SyntheticEvent, newOption: string) => {
    setOption(newOption)
  }

  const handleBirthdatePet = (newBirthdate: Dayjs | null) => {
    setBirthdate(newBirthdate)
  }

  const handleChangeGender = (event: SelectChangeEvent) => {
    setClient({...clientData, gender: event.target.value as string})
  }

  const handleChangeTypeDocument = (event: SelectChangeEvent) => {
    setClient({...clientData, type_document: event.target.value as string})
  }

  const handleChangeSex = (event: SelectChangeEvent) => {

  }

  const handleChangeSpecie = (event: SelectChangeEvent) => {

  }

  const handleChangeRace = (event: SelectChangeEvent) => {

  }


  const handleSaveClient = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault()
    
    ClientValidate.validate(clientData).then(async () => {
      const response = await client.saveClient(clientData)
      if(response.data.status == 'OK'){
        submitClient(response.data.data as never)
        close()
        setClient(INITIAL_STATE)
        getSuccess('Cliente creado correctamente!')
      }else{
        getError(response.data)
      }
    }).catch((error) =>{
      getError(error.message)
    })
  }

  return(
    <Dialog open={open}>
      <Box component="form" onSubmit={handleSaveClient}>
      <DialogTitle color='primary'>Adicionar cliente</DialogTitle>
      <DialogContent>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={option}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleOptions} >
                <Tab label='Datos Personales' icon={<PersonPinIcon />} iconPosition='start' value='1' />
                <Tab label='Mascota' icon={<PetsOutlinedIcon />} iconPosition='start' value='2' />
              </TabList>
            </Box>

            <TabPanel value='1'>
              <Box 
                sx={{ display: 'flex', flexWrap: 'wrap',
                  '& .MuiTextField-root': {m:1, width: '25ch'},
                  }}
              >
                <FormControl sx={{ m: 1 }}>
                  <InputLabel id='type_document'>Tipo documento</InputLabel>
                  <Select labelId='type_document' name='type_document' value={clientData.type_document} label='Tipo documento' onChange={handleChangeTypeDocument} sx={{ width: styleInput.width }}>
                    {
                      ListTypeDocument.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))
                    }
                  </Select>
                </FormControl>
                <TextField id='document' name='document' label='Documento' autoComplete='off' onChange={dataClient} />
                <TextField id='first_name' name='first_name' label='Nombre completo' autoComplete='off' onChange={dataClient} />
                <TextField id='last_name' name='last_name' label='Apellidos' autoComplete='off' onChange={dataClient} />
                <TextField id='mobile' name='mobile' type='number' label='Celular' autoComplete='off' onChange={dataClient} />
                <TextField id='telephone' name='telephone' type='number' label='Teléfono' autoComplete='off' onChange={dataClient} />
                <FormControl sx={{ m: 1 }}>
                  <InputLabel id='gender'>Genero</InputLabel>
                  <Select labelId='gender' name='gender' value={clientData.gender} label='Genero' onChange={handleChangeGender} sx={{ width: styleInput.width }}>
                    {
                      listGender.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))
                    }
                  </Select>
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor='address'>Dirección</InputLabel>
                  <OutlinedInput id='address' name='address' label='Dirección' autoComplete='off' onChange={dataClient} />
                </FormControl>
                <FormControl fullWidth sx={{ m: 1 }}>
                  <InputLabel htmlFor='email'>Email</InputLabel>
                  <OutlinedInput id='email' name='email' label='Email' autoComplete='off' onChange={dataClient} />
                </FormControl>
              </Box>
            </TabPanel>

            <TabPanel value='2'>
              <Box 
                  sx={{ display: 'flex', flexWrap: 'wrap',
                    '& .MuiTextField-root': {m:1, width: '25ch'},
                    }}
              >
                <TextField id='name' label='Nombre' />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label='Fecha de nacimiento'
                    inputFormat='DD/MM/YYYY'
                    value={birthdate}
                    onChange={handleBirthdatePet}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <FormControl sx={{ m: 1 }} >
                  <InputLabel htmlFor="weight">Peso</InputLabel>
                  <OutlinedInput id="weight" name='weight' label='Peso' type='number' endAdornment={ 'Kg' } sx={{ width: styleInput.width }} />
                </FormControl>
                <FormControl sx={{ m: 1 }}>
                  <InputLabel id='sex'>Sexo</InputLabel>
                  <Select labelId='sex' name='sex' label='Sexo' onChange={handleChangeSex} sx={{ width: styleInput.width }}>
                    {
                      listSex.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))
                    }
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1 }}>
                  <InputLabel id='specie'>Especie</InputLabel>
                  <Select labelId='specie' name='specie' label='Especie' onChange={handleChangeSpecie} sx={{ width: styleInput.width }}>
                    {
                      listSpecie.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))
                    }
                  </Select>
                </FormControl>
                <FormControl sx={{ m: 1 }}>
                  <InputLabel id='race'>Raza</InputLabel>
                  <Select labelId='race' name='race' label='Raza' onChange={handleChangeRace} sx={{ width: styleInput.width }}>
                    {
                      listRace.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))
                    }
                  </Select>
                </FormControl>
                <FormControlLabel labelPlacement="start" control={<Switch color="primary" name="sterilized" inputProps={{ 'aria-label': 'primary checkbox' }} />} label="Esterelizado" />
              </Box>
            </TabPanel> 
          </TabContext>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>Cancelar</Button>
        <Button type='submit' variant='contained'>Aceptar</Button>
      </DialogActions>
      </Box>
    </Dialog>
  )
} 