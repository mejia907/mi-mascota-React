import { PatientType } from "../types/patient"
import { instance } from "./base.api" 

const endpoint = "patient"

export const patient = {
  patientAll: function() {
   return instance.get(endpoint, {withCredentials:true})
  }
}