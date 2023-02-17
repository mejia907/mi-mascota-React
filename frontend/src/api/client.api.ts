import { instance } from "./base.api"

const endpoint = "client"

export const client = {
  clientAll: function(){
    return instance.get(endpoint, {withCredentials:true})
  }
}