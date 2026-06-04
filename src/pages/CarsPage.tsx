import { useEffect, useState } from "react"
import type { ICar } from "../models/ICar"
import { getCars } from "../services/api.service"

const CarsPage = () => {
    const [cars, setCars] = useState<ICar[]>([])

    useEffect(() => {
        getCars().then(cars => setCars(cars))
    }, [])

return (
    <main className="mx-auto px-6 py-12">
      <div className="mb-8 pb-4">
        <h1 className="text-xl font-medium text-neutral-900">Cars List</h1>
      </div>

      {cars.length === 0 ? (
        <div className="text-center py-8 border border-dashed border-neutral-200 rounded-lg">
          <p className="text-xl text-black">No cars found</p>
        </div>
      ) : (
        <ul className="divide-y divide-neutral-200">
          {cars.map((car) => (
            <li 
              key={car.id} 
              className="py-3.5 flex items-center justify-between group px-2 -mx-2 rounded-md transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-neutral-800">
                  {car.id} - {car.brand}
                </span>
              </div>
              
              <div className="text-right">
                <span className="text-xs text-neutral-500 font-mono">
                  {car.year}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}

export default CarsPage