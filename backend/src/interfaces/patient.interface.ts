import { Types } from "mongoose";

export interface Patient{
  name: string;
  birthdate: Date;
  weight: number;
  gender: string;
  species: Types.ObjectId;
  race: Types.ObjectId;
  sterilized: boolean;
}