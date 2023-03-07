import { Types } from "mongoose";

export interface Client{
  type_document: string;
  document: string;
  first_name: string;
  last_name: string;
  mobile: number;
  gender: string;
  address: string;
  email: string;
  telephone: number;  
  patients?: Types.ObjectId
}