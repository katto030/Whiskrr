import axios from "axios";
import { IMGBB_KEY, IMGBB_URL } from "./config";

export interface foodInterface {
  foodAmount: string,
  foodFreq: string,
  foodName: string,
  foodNotes: string,
  _id: string
}

interface parsedLogInterface {
  morning: string[];
  afternoon: string[];
  evening: string[];
}

export interface medicationInterface {
  medAmount: string,
  medFreq: string,
  medName: string,
  medNotes: string,
  _id: string
}

export const logParser = (data:{[key: string]: any;}[]) => {
  let parsedLog = {
    morning: [],
    afternoon: [],
    evening: []
  } as parsedLogInterface;

  data.forEach((foster:any) : void => {
    let { fosterName, food, medication } = foster;

    food.forEach((foodItem:foodInterface) : void => {
      if (foodItem.foodFreq === '2x/day') {
        parsedLog.morning.push(fosterName + ': ' + foodItem.foodAmount + ' of ' + foodItem.foodName);
        parsedLog.evening.push(fosterName + ': ' + foodItem.foodAmount + ' of ' + foodItem.foodName)
      }
    })

    medication.forEach((medItem:medicationInterface) : void => {
      if (medItem.medFreq === '2x/day') {
        console.log('MEDICATION HERE')
        parsedLog.morning.push(fosterName + ': ' + medItem.medAmount + ' ' + medItem.medName);
        parsedLog.evening.push(fosterName + ': ' + medItem.medAmount + ' ' + medItem.medName)
      } else {
        parsedLog.morning.push(fosterName + ': ' + medItem.medAmount + ' ' + medItem.medName);
      }
    })
  })

  return parsedLog;
}

export const getPhotoUrl = (img: File) => {
  let data = new FormData();
      data.set('key', IMGBB_KEY);
      data.append('image', img);
  return axios({
        method: 'post',
        url: IMGBB_URL,
        data: data
      })
        .then((res) => res.data.data.url)
        .catch((err) => console.log(err))
};

export const categories:string[] = ['Potty', 'Weight','Appetite','Behavior','Others'];

export interface FormCompInterface {
  Potty: JSX.Element;
  Weight: JSX.Element;
  Appetite: JSX.Element;
  Behavior: JSX.Element;
  Others: JSX.Element;
}