import React, {useState, createContext, useEffect } from "react";
// import { createContext } from "vm";
import Dashboard from "./dashboard/Dashboard";
import axios, { AxiosResponse } from 'axios';


interface Props {
  user: string;
}

const db_api = 'http://localhost:3000/fosters';

export const DataCtx = createContext<{}[] | null>(null)

const User : React.FC<Props> = ({ user }) => {
  const [data, setData] = useState<{}[] | null>(null);
  // const [page, setPage] = useState(0);
  const page = 0;

  useEffect(() => {
    axios.get(`${db_api}/${user}`)
      .then((res:AxiosResponse) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [user])

  console.log('data state --', data, 'page state --', page)

  return (
    <DataCtx.Provider value={data}>
      <div id="user">
      {
        page === 0 ? <Dashboard user={user}/>
        : <p>individual foster page</p>
      }
      </div>
    </DataCtx.Provider>
  )
}

export default User;