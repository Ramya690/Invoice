import axios from 'axios';
import Catalog from '../components/Catalog';
export default class CatalogService
{
    static baseUrl='https://awesome-store-server.herokuapp.com'
    static getProducts()
        {
            //axios.*() returns a promise object(Promise is built-in class in JS-it was introduced in ES2015)
            //then() and catch() are 2 methods of promise object
           return  axios.get(`${this.baseUrl}/products`)
                .then(function(response) //backend successfully returned data
                {
                    return response.data;//data returned by backend (array of products)
                })
                .catch(function(error){//backend was not able to  retur data
                console.log(error.message);
                throw error;//we throw the error so that someone calling getProducts is able to handle it
               

                })

        }
}
