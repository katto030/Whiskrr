import React, {useState, createContext, useEffect } from "react";
import Dashboard from "./dashboard/Dashboard";
import axios, { AxiosResponse } from 'axios';
import { SERVER_URL } from "../utilities/config";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import FosterPage from "./fosterPage/FosterPage";


interface Props {
  user: string;
}

export const DataCtx = createContext<{[key:string]:any}[] | null>(null)

const User : React.FC<Props> = ({ user }) => {
  const [data, setData] = useState<{[key:string]:any}[] | null>(null);
  const [foster, setFoster] = useState<{[key:string]:any}[] | null>(null);

  useEffect(() => {
    axios.get(`${SERVER_URL}/${user}`)
      .then((res:AxiosResponse) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [user])

  console.log('data state --', data, 'page state --', foster)

  return (
    <DataCtx.Provider value={data}>
      <Navbar>
        <Container>
          <Navbar.Brand>Welcome Back {user}!</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {
                foster ? <button className="date-picker" onClick={() => setFoster(null)}>Back</button > : <button >Logout</button >
              }
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id="user">
      {
        foster  ? <FosterPage foster={foster} />
        : <Dashboard click={setFoster}/>
      }
      </div>
    </DataCtx.Provider>
  )
}

export default User;