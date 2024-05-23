// react hook => useState, useEffect 
 
import { useState, useEffect } from "react" 
 
function App() {  
 
  const [hour, setHour] = useState(0) 
  const [minut, setMinut] = useState(0) 
  const [second, setSecond] = useState(0) 
  const [isActive, setIsActive] = useState(false) 
  const [isPause, setIsPause] = useState(true) 
  const [timeList, setTimeList] = useState([])
 
  useEffect(() => { 
    let interval = null 
 
    if (isActive && !isPause) { 
      interval = setInterval(() => { 
        if (second >= 59) { 
          if (minut >= 59) { 
            if (hour >= 22) { 
              setSecond(0) 
              setMinut(0) 
              setHour(0)  
            } else { 
              setSecond(0) 
              setMinut(0) 
              setHour(hour + 1)  
            } 
          } else { 
            setSecond(0) 
            setMinut(minut + 1) 
          } 
        } else { 
          setSecond(second + 1) 
        } 
      },1) 
    } 
 
    return () => { 
      clearInterval(interval) 
    } 
 
  }, [isActive, isPause, second]) 
 
  const onStart = () => { 
    setIsActive(true) 
    setIsPause(false) 
  } 
 
  const onPause = () => { 
    setIsActive(false) 
    setIsPause(true) 
  } 
 
  const onClear = () => {
    setIsPause(true) 
    setHour(0)
    setMinut(0)
    setSecond(0)
    setTimeList([])
    setIsActive(false)
  } 

  const checkTime = () => {
    const currentTime = `${hour < 10 ? "0" + hour : hour}:${minut < 10 ? "0" + minut : minut}:${second < 10 ? "0" + second : second}`;
    setTimeList([...timeList, currentTime])
  }
     
    return ( 
      <div className="container mt-4">  
          <div className="row">  
            <div className="col-5 m-auto">  
              <div className="card">  
                <div className="card-header">  
                  <div className="card-title text-center">Stopwatch</div>  
                </div>  
                <div className="card-body d-flex justify-content-center align-items-center gap-2">  
                    <h2 className="m-0">{hour < 10 ? "0" + hour  : hour }</h2>  
                    <span>:</span>  
                    <h2 className="m-0">{minut < 10 ? "0" + minut : minut}</h2>  
                    <span>:</span>  
                    <h2 className="m-0">{second < 10 ? "0" + second : second}</h2>  
                </div>  
                <div className="card-footer d-flex justify-content-around">  
                  <button className="btn btn-success" disabled={isActive} onClick={onStart}>Start</button>  
                  <button className="btn btn-warning" disabled={isPause} onClick={onPause}>Pause</button>  
                  <button className="btn btn-secondary" disabled={isPause} onClick={checkTime}>Check time</button>  
                  <button className="btn btn-danger" onClick={onClear} >Clear</button>  
                </div>  
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Time range</th>
                  </tr>
                </thead>
                <tbody>
                  {timeList.map((time, index) => (
                    <tr key={index}>
                      <td>{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>  
          </div>  
      </div> 
    ) 
} 
 
export default App