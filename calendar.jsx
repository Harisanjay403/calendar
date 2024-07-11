 
import {useState} from "react";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",]    
const months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
export default function App() {
    const [selectedDate, setSelectedDate]=useState(new Date())
    const daysInMonth = ()=>{
        const daysArray=[];
        const firstDay = new Date(selectedDate.getFullYear(),selectedDate.getMonth(),1)
        const lastDay = new Date(selectedDate.getFullYear(),selectedDate.getMonth() +1, 0)
        for (i=0; i<firstDay.getDay();i++){
            daysArray.push(null);
        }

        for(i=1; i<=lastDay.getDate();i++){
            daysArray.push(new Date(selectedDate.getFullYear(),selectedDate.getMonth(),i))
        }
        return daysArray
    }
  
  return (
      <>
          <div className="calendar">
              <div className="header">
                  <button>&#60;</button>
                  <select value={selectedDate.getMonth()}>
                      {months.map((month,index)=>(
                              <option key={index} value={index}>{month}</option>
                          ))}
                  </select>
                  <select value={selectedDate.getFullYear()}>
                      {Array.from({length: 10}, (_, i) =>selectedDate.getFullYear() - 5 + i ).map((year)=>(
                      <option key={year} value={year}>{year}</option>
                      ))}
                  </select>
                  <button>&gt;</button>
              </div>

              <div className="daysOfWeek">
                  {daysOfWeek.map((day)=>(
                      <div>{day}</div>
                  ))}
              </div>
              <div className="days">
                  {daysInMonth().map((day, index)=>(
                      <div key={index} className={day?"day":"empty"}>{day ?day.getDate() : ""}</div>
                  ))}
              </div>
          </div>
     </>
  )
    
}
    
       


