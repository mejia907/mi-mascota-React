import { Autocomplete, TextField, Box, Dialog, DialogContent, DialogTitle, DialogActions, Button } from '@mui/material'
import { FormEvent, useEffect, useState } from "react"
import { client } from "../../api/client.api"
import { useNotification } from "../../context/notification.context"
import { ClientType } from "../../types/client"
import { PatientType } from "../../types/patient"

type HeaderProps = {
 open: boolean,
 close: () => void,
 submitPatient: (newPatient: never) => void,
}

const INITIAL_STATE = {
 name: '',
 birthdate: new Date(),
 weight: 0,
 gender: '',
 species: '',
 race: '',
 sterilized: false
}

const styleInput = {
 width: '25ch'
}

export const AddPatient = ({open, close, submitPatient}: HeaderProps) => {

 const { getError, getSuccess } = useNotification()

 const [patientData, setpatientData] = useState<PatientType>(INITIAL_STATE)
 const [clientData,setClienData] = useState<ClientType[]>([])

 useEffect(() => {
   client.clientAll().then((response) =>{
    setClienData(response.data)
   })
 }, [])

 const handleSavePatient = (event: FormEvent<HTMLInputElement>) => {
  event.preventDefault()

 }

 return(
   <Dialog open={open}>
    <Box component="form" onSubmit={handleSavePatient}>
     <DialogTitle color="primary"> Adicionar Paciente </DialogTitle>
     <DialogContent>
      <Box sx={{ width: '100%', typography: 'body', display: 'flex', flexWrap: 'wrap',
      '& .MuiTextField-root': {m:1, width: styleInput.width},
      }}
      >
       <Autocomplete id="client" freeSolo disableClearable 
       options={clientData?.map((option) => option.first_name )} 
       renderInput={(params) => ( <TextField {...params} InputProps={{...params.InputProps, type: 'search'}} label="Cliente" /> )} 
       />

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