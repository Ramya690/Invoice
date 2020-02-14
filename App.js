//rsf
import React from 'react';
import {Route} from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import Catalog from './Catalog';
import ProductDetails from './ProductDetails';
function App(props)
{
    return(
        <div>
                {/*b4-navbar-minimal-ul*/}
               <Navbar></Navbar>
                <div className="container">
                    <Route path="/"exact component={Home}/>
                    <Route path="/catalog"exact component={Catalog}/>
                    <Route path="/catalog/:id"exact component={ProductDetails}/>
                    
                </div>
        </div>
    )
}
export default App;