import Home from "./pages/home/Home"
import UserList from "./pages/users/UserList"
import Products from "./pages/products/Products"

let routes = [
    {path:'/',element:<Home />},
    {path:'/users',element:<UserList />},
    {path:'/Products',element:<Products />}
]

export default routes