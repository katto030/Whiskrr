import React, {useState, createContext, useEffect } from "react";
import Dashboard from "./dashboard/Dashboard";
import axios, { AxiosResponse } from 'axios';
import { SERVER_URL } from "../utilities/config";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import FosterPage from "./fosterPage/FosterPage";
import WeightNotes from "./fosterPage/notes/WeightNotes";
import Note from "./fosterPage/notes/Note";


interface Props {
  user: string;
}

interface DataInterface {
  data?: {[key:string]:any}[] | null;
  setNote?: React.Dispatch<React.SetStateAction<string | null>>
}

export const DataCtx = createContext<DataInterface>({})

const User : React.FC<Props> = ({ user }) => {
  const [data, setData] = useState<{[key:string]:any}[] | null>(null);
  const [foster, setFoster] = useState<{[key:string]:any}[] | null>(null);
  const [note, setNote] = useState<string | null>(null)

  useEffect(() => {
    axios.get(`${SERVER_URL}/${user}`)
      .then((res:AxiosResponse) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [user])

  console.log('WHATS WRONG WITH MY STATES', note)

  return (
    <DataCtx.Provider value={{data, setNote}}>
      <Navbar>
        <Container>
          <Navbar.Brand>Welcome Back {user}!</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {
                foster ? <button className="pink-hover-btn nav-btn" onClick={() => setFoster(null)}>Back</button > : <button className="pink-hover-btn nav-btn" >Logout</button >
              }
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id="user">
      {
        note ? <Note note={note}/> :
        foster  ? <FosterPage setNote={setNote} foster={foster} />
        : <Dashboard click={setFoster}/>
      }
      </div>
    </DataCtx.Provider>
  )
}

export default User;