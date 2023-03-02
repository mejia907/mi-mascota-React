import { ClientType } from "../types/client"
import { instance } from "./base.api"

const endpoint = "client"

export const client = {
  clientAll: function(){
    return instance.get(endpoint, {withCredentials:true})
  },
  saveClient: function(client: ClientType){
    return instance.post(endpoint, client , {withCredentials:true})
  }
}