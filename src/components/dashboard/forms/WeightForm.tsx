import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import Stack from "react-bootstrap/Stack";
import { DataCtx } from "../../User";

const WeightForm = () => {
  const dataCtx = useContext(DataCtx);
  const [data, setData] = useState<{}[] | null>(null);
  const [id, setId] = useState<string | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const handleIdChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setId(e.target.value);
  }
  const handleWeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(e.target.value));
  }
  useEffect(() => {
    if (dataCtx.data) {
      setData(dataCtx.data);
    }
  }, [dataCtx])

  console.log('WEIGHT FORM HERE HELLO', weight, id)
  return (
    <div>
      <form id="weight-form">
        <Stack style={{margin: '2%'}} direction="horizontal" gap={3}>
            Name:
            <select onChange={(e) => handleIdChange(e)} name="foster-name">
              <option>Select your foster</option>
              {
                data?.map((foster:{[key:string]:any}) => {
                  return <option key={foster.fosterName} value={foster._id}>{foster.fosterName}</option>
                })
              }
            </select>
          </Stack>
          <Stack direction="horizontal" style={{margin: '2%'}} gap={2}>
            Weight:
            <input onChange={(e) => handleWeightChange(e)} type="number" id="weight-upload" name="weight"></input>
            Lbs
          </Stack>
          <button type="submit" id="weight-submit-btn" className="pink-hover-btn">Record</button>
      </form>
    </div>
  )
}

export default WeightForm;