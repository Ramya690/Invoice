//rcc
import React, { Component } from 'react';
import CatalogService from '../services/Catalog'
import Alert from '../components/Alert'
import {Link} from 'react-router-dom';
const CATALOG_FETCHING='CATALOG_FETCHING';
const CATALOG_FETCHED='CATALOG_FETCHED';
const CATALOG_FETCH_FAILED='CATALOG_FETCH_FAILED';
class Catalog extends Component {
    state={
        products:null,
        error:null
    };
    render() {
        const {status,error,products}=this.state;
        let el=null;
        switch(status)
        {
            case CATALOG_FETCHING:
                el=(
                    //b4-alert-dismissable
                    <Alert type="info">
                    
                        <strong>Hand on!Products are being fetched</strong>
                        </Alert>
                )
        
                  break;
                  case CATALOG_FETCHED:
                    el=(
                        <div className="row">
                            {
        
                     products.map(product=>(
        
                     <div className="col-4 my-3">
                        <div class="card">
                            <Link className="col-4 my-5" to={`/catalog/${product.id}`}>
                            <img class="card-img-top" src={product.imageUrl} alt=""/>
                            <div class="card-body">
                                <h4 class="card-title">{product.name}</h4>
                                <p class="card-text">{product.price}</p>
                            </div>
                            </Link>
                        </div>
                        
                        </div>
                    ))
                            }
                            </div>
                    );
                    break;
                    case CATALOG_FETCH_FAILED:
                        el=(
                            <div class="alert alert-primary alert-dismissible fade show" role="alert">
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    <span class="sr-only">Close</span>
                                </button>
                                <strong>Sorry,we are not unable to fetch the products</strong>
                                <br/>
                                {error.message}
                            </div>
                        )
                        break;
                        default:
                            el=null;
                            break;

        }
        return (
            <div>
                <h2>Catalog</h2>
                <hr/>
                {el}
                
            </div>
        );
    }
    //cdm
    componentDidMount() {
        this.setState({
            status:CATALOG_FETCHING
            
        })
        CatalogService.getProducts().then((products)=>
        {
            this.setState({

            
            products:products,
            status:CATALOG_FETCHED
        })
    })
     
        .catch((error)=>
        {
            this.setState({
                error:error,
                products:null,
                status:CATALOG_FETCH_FAILED
            })
        });

    }
}


export default Catalog;