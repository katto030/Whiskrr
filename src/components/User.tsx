import React, {useState, createContext, useEffect } from "react";
// import { createContext } from "vm";
import Dashboard from "./dashboard/Dashboard";
import axios, { AxiosResponse } from 'axios';


interface Props {
  user: string;
}

const db_api = 'http://localhost:8080/fosters';

interface DataCtxInterface {
  data: {[key: string]: any;}[];
}

export const DataCtx = createContext<DataCtxInterface | null>(null)

const User : React.FC<Props> = ({ user }) => {
  const [data, setData] = useState([{}]);
  // const [page, setPage] = useState(0);
  const page = 0;

  useEffect(() => {
    axios.get(`${db_api}/${user}`)
      .then((res:AxiosResponse) => {
        setData(res.data);
      })
      .catch((err) => console.log(err))
  }, [user])

  console.log('data state --', data, 'page state --', page)

  const dataCtx:DataCtxInterface = {
    data: data
  }

  return (
    <DataCtx.Provider value={dataCtx}>
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