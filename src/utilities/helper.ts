interface foodInterface {
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

interface medicationInterface {
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
  console.log('LOG PARSER DATA', data)
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

  console.log('LOG PARSER RESULT', parsedLog);
  return parsedLog;
}

