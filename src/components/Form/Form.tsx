import {useForm} from "react-hook-form";
import type {ICar} from "../../models/ICar.ts";
import {addCar} from "../../services/api.service.ts";
import {carValidator} from "../../validators/carValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const navigate = useNavigate();

    const {register,handleSubmit, formState: {errors, isSubmitting}} = useForm<ICar>({
        'mode': 'all',
        'resolver': joiResolver(carValidator)
    })

    const onSubmit = async (data: ICar) => {
        await addCar(data);
        navigate('/cars');
    }

return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <label className="block text-xs font-medium text-neutral-500 mb-1">Brand Name</label>
        <input 
          type="text" 
          {...register('brand')} 
          className="w-full px-3 py-1.5 bg-white border border-neutral-200 rounded text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900" 
        />
        {errors.brand && <p className="mt-1 text-xs text-red-600">{errors.brand.message}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-neutral-500 mb-1">Price (USD)</label>
          <input 
            type="number" 
            {...register('price')} 
            className="w-full px-3 py-1.5 bg-white border border-neutral-200 rounded text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900" 
          />
          {errors.price && <p className="mt-1 text-xs text-red-600">{errors.price.message}</p>}
        </div>
        
        <div>
          <label className="block text-xs font-medium text-neutral-500 mb-1">Year</label>
          <input 
            type="number" 
            {...register('year')} 
            className="w-full px-3 py-1.5 bg-white border border-neutral-200 rounded text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900" 
          />
          {errors.year && <p className="mt-1 text-xs text-red-600">{errors.year.message}</p>}
        </div>
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full mt-2 py-2 bg-neutral-950 hover:bg-neutral-800 text-white font-medium text-xs rounded transition-colors cursor-pointer disabled:bg-neutral-300 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Saving..." : "Save car"}
      </button>  
    </form>
  );
};

export default Form;