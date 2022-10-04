import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { DataCtx } from "../../User";
import Stack from 'react-bootstrap/Stack';
import { getPhotoUrl } from "../../../utilities/helper";
import axios from "axios";
import { SERVER_URL } from "../../../utilities/config";

const PhotoForm = () => {
  const dataCtx = useContext(DataCtx);
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [data, setData] = useState<{}[] | null>(null);
  const [id, setId] = useState<string | null>(null);

  const handleImgChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setImgFile(e.target.files[0]);
    }
  }

  const handleIdChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setId(e.target.value);
  }

  const handlePhotoUpload = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form:any = document.getElementById('photo-upload-form');
    const btn = document.getElementById('photo-submit-btn');
    console.log('BUTTON', btn)
    if (btn) {btn.innerHTML = 'Uploading'};
    if (imgFile && id && dataCtx) {
      let fosterData = dataCtx.data?.find(({ _id }) => _id === id);
      getPhotoUrl(imgFile)
        .then((res) => {
          if (fosterData) {fosterData.photos.push(res)}
          axios.post(`${SERVER_URL}/${id}`, {photos: fosterData?.photos})
            .then((res) => {
              if (btn) {btn.innerHTML = 'Uploaded!'};
              if (form) {form.reset();}
              setTimeout(() => {
                if (btn) {btn.innerHTML = 'Upload'};
                console.log('BUTTON', btn)
              }, 4000)
            })
            .catch((err) => {if (btn) {btn.innerHTML = 'Error, try again?'}; if (form) {form.reset();}})
        })
    }

  }

  useEffect(() => {
    if (dataCtx.data) {
      setData(dataCtx.data);
    }
  }, [dataCtx])

  return (
    <form onSubmit={(e) => handlePhotoUpload(e)} id="photo-upload-form">
      <Stack direction="horizontal" gap={3}>
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
      <Stack direction="horizontal" gap={3}>
        Picture:
        <input onChange={(e) => handleImgChange(e)} type="file" accept="image/png, image/jpeg" id="picture-upload" name="picture"></input>
      </Stack>
      <button type="submit" id="photo-submit-btn" className="pink-hover-btn">Upload</button>

    </form>
  )
}

export default PhotoForm;