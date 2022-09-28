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

      *this is the user page*
      {
        page === 0 ? <Dashboard user={user}/>
        : page === 1 ? <p>individual foster page</p>
        : <p>forms</p>
      }
      </div>
    </DataCtx.Provider>
  )
}

export default User;