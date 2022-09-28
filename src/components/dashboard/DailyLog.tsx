import React, { useContext, useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import { BsFillMoonStarsFill, BsFillSunFill, BsSunsetFill } from 'react-icons/bs'
import { logParser } from "../../utilities/helper";
import { DataCtx } from "../User";
import Stack from 'react-bootstrap/Stack';

interface LogInterface {
  morning: string[] | never[];
  afternoon: string[] | never[];
  evening: string[] | never[];
}
const startLog = {
  morning: [],
  afternoon: [],
  evening: []
} as LogInterface;

const DailyLog = () => {
  const [log, setLog] = useState<LogInterface>(startLog)
  const dataCtx = useContext(DataCtx);
  useEffect(() => {
    if (dataCtx) {
      let temp = logParser(dataCtx);
      setLog(temp);
    }
  }, [dataCtx])

  return (
    <Container id="daily-log" className="component-container">
      <h5>Daily Log</h5>
      <BsFillSunFill size={30} className="log-icon" style={{color: 'rgb(255, 226, 80)'}}/>
      {
        log.morning.length ?
          <Stack>
            {
              log.morning.map((task:string) =>
              <div>{task}</div>
              )
            }
          </Stack>
          :
          <p>No morning tasks today ʕ•́ᴥ•̀ʔっ</p>
      }
      <BsSunsetFill size={30} className="log-icon" style={{color: 'darkorange'}}/>
      {
        log.afternoon.length ?
          <Stack>
            {
              log.afternoon.map((task:string) =>
              <div>{task}</div>
              )
            }
          </Stack>
          :
          <p>No afternoon tasks today ʕ•́ᴥ•̀ʔっ</p>
      }
      <BsFillMoonStarsFill size={28} className="log-icon" style={{color: 'rgb(62, 80, 133)'}}/>
      {
        log.evening.length ?
          <Stack>
            {
              log.evening.map((task:string) =>
              <div>{task}</div>
              )
            }
          </Stack>
          :
          <p>No evening tasks today ʕ•́ᴥ•̀ʔっ</p>
      }

    </Container>
  )
}

export default DailyLog;
