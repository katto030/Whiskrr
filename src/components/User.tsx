import React, {useState, createContext, useEffect } from "react";
import Dashboard from "./dashboard/Dashboard";
import axios, { AxiosResponse } from 'axios';
import { SERVER_URL } from "../utilities/config";


interface Props {
  user: string;
}

export const DataCtx = createContext<{[key:string]:any}[] | null>(null)

const User : React.FC<Props> = ({ user }) => {
  const [data, setData] = useState<{[key:string]:any}[] | null>(null);
  // const [page, setPage] = useState(0);
  const page = 0;

  useEffect(() => {
    axios.get(`${SERVER_URL}/${user}`)
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