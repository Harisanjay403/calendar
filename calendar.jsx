
import {useState} from "react";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",]    
const months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
export default function App() {
    const [selectedDate, setSelectedDate]=useState(new Date())
    const daysInMonth = ()=>{
        const daysArray=[];
        const firstDay = new Date(selectedDate.getFullYear(),selectedDate.getFullMonth(),1)
        const lastDay = new Date(selectedDate.getFullYear(),selectedDate.getFullMonth() +1, 0)

        return daysArray
    }
  
  return (
      <>
          <div className="calendar">
              <div className="header">
                  <button>&#60;</button>
                  <select></select>
                  <select></select>
                  <button>&gt;</button>
              </div>

              <div className="daysOfWeek">
                  {daysOfWeek.map((day)=>(
                      <div>{day}</div>
                  ))}
              </div>
          </div>
     </>
  )
    
}
    
       


