import React from "react"
import { BrowserRouter as Router,Route,Routes,Link} from "react-router-dom"
import Contact from "./Contact"
import Home from "./Home"
import Nopage from "./Nopage"
import Shop from "./Shop"

function Main(){
    return(
        <div>
            <Router>
                <div>
                <ul>
                    <li><Link to= "/">Home</Link></li>  
                    <li><Link to= "/Shop">Shop</Link></li>
                    <li><Link to= "/Contact">contact</Link></li>
                </ul>
                </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="Shop" element={<Shop/>}/>
                <Route path="Contact" element={<Contact/>}/>
                <Route path="*" element={<Nopage/>}/>
            </Routes>
            </Router>
        </div>
    )
}
export default Main