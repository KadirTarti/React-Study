import { useContext } from "react"
import { RecipeContext } from "../context/RecipeProvider"
import { Navigate, Outlet } from "react-router-dom"


const PrivateRouter = () => {

    const {name, password} = useContext(RecipeContext)

    return name === 'abdulkadir' && password==='1234' ? <Outlet/> : <Navigate to='/'/>
    // outlet istenen yere gönderiyor. Navigate...giriş başarısız olursa yönlendirilecek sayfayı gösteriyor. Yanlış girişte login'de kalınması gerektiği ve login'e / verdiğimiz için Navigate to'ya '/' verdik.



}

export default PrivateRouter