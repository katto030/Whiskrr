import React, { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import { DataCtx } from "../User";

interface Props {
  foster: {[key:string]:any}[] | null;
}

const FosterPage:React.FC<Props>= ({ foster }) => {
  const dataCtx = useContext(DataCtx);
  const [data, setData] = useState<{[key:string]:any}[] | null>(null);

  useEffect(() => {
    setData(dataCtx);
  }, [dataCtx]);

  console.log('foster page', foster)
  return (
    <Container>

    </Container>
  )
}

export default FosterPage;