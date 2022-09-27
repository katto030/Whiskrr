import React, {useState, createContext, useEffect } from "react";
// import { createContext } from "vm";
import Dashboard from "./dashboard/Dashboard";
import axios, { AxiosResponse } from 'axios';

interface Props {
  user: string;
}

const db_api = 'http://localhost:8080/fosters';

export const DataContext = createContext({});

const User : React.FC<Props>= ({ user }) => {
  const [data, setData] = useState({});
  const [page, setPage] = useState<number>(0);

  console.log(process.env.DB_API)

  useEffect(() => {
    axios.get(`${db_api}/${user}`)
      .then((res:AxiosResponse) => console.log(res))
      .catch((err) => console.log(err))
  }, [user])

  return (
    <DataContext.Provider value={data}>
      User: {user}
      {
        page === 0 ? <Dashboard />
        : page === 1 ? <p>individual foster page</p>
        : <p>forms</p>
      }
    </DataContext.Provider>
  )
}

export default User;