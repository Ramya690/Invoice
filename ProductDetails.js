//rcc
import React, { Component } from 'react';
import Details from '../services/Details'
import Alert from '../components/Alert'
const DETAILS_FETCHING='DETAILS_FETCHING';
const DETAILS_FETCHED='DETAILS_FETCHED';
const DETAILS_FETCH_FAILED='DETAILS_FETCH_FAILED';
class ProductDetails extends Component {
    state={
        product:null,
        error:null
    };
    render() {
        const {status,error,product}=this.state;
        let el=null;
        switch(status)
        {
            case DETAILS_FETCHING:
                el=(
                    //b4-alert-dismissable
                    <Alert type="info">
                    
                        <strong>Hand on!Products are being fetched</strong>
                        </Alert>
                )
        
                  break;
                  case DETAILS_FETCHED:
                    el=(
                        <div className="row">
                     <div className="col-4 ">
                        
                            <img  src={product.imageUrl} className="img-fluid"/>
                            <div className="col-8 ">
                                <h2>{product.name}</h2>
                            </div>
                            
                            <h2>ProductDetails</h2>
                <hr/>
                               <p>{product.description}</p>
                               <p>Code:${product.code}</p>
                               <p>Relesed on:${product.releaseDate}</p>
                              <p >Price:${product.price}</p>
                              <p>Rating:${product.starRating}/5</p>
                            </div>
                        
                        </div>
                        
                    );
                            
                        
                        
                    
                    break;
                    case DETAILS_FETCH_FAILED:
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
               
                {el}
                
            </div>
        );
    }
    //cdm
    componentDidMount() {
        this.setState({
            status:DETAILS_FETCHING
            
        });
    
        Details.getProduct(1).then((product)=>
        {
            this.setState({

            
            product:product,
            status:DETAILS_FETCHED
        })
    })
     
        .catch((error)=>
        {
            this.setState({
                error:error,
                product:null,
                status:DETAILS_FETCH_FAILED
            })
        });

    }
}


export default ProductDetails;