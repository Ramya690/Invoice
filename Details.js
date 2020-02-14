import axios from 'axios';

export default class Details
{
    static baseUrl='https://awesome-store-server.herokuapp.com'
    static getProduct(id)
        {
           return  axios.get(`${this.baseUrl}/products/${id}`)
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
