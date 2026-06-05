import { useEffect } from "react"
import { loadAuthProducts, refresh } from "../services/api.service";

export const AuthResourcesPage = () => {
    useEffect(() => {
        loadAuthProducts().then(products => {console.log(products)}).catch(reason => {
          console.log(reason);
          refresh().then(value => loadAuthProducts()).then(products => console.log(products)).catch(reason => console.log(reason));
        })

    }, [])


  return (
    <div>AuthResourcesPage</div>
  )
}
