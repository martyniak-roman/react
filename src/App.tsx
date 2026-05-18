import './App.css'
import {coursesTitleArray} from "./data/course.ts";

function App() {
  return (
    <>
      <ul>
          {
            coursesTitleArray.map((value: string, index: number)=>
              <li className="text-3xl font-medium" key={index}>{value}</li>
            )
          }
      </ul>
    </>
  )
}

export default App