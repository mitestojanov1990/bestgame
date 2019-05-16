import React, { Component } from 'react';

class ProductListService extends Component {

    static async getProducts() {
        const { serverRuntimeConfig: { githubClientId, githubClientSecret } } = getConfig();

        const bodyData = JSON.stringify({
            client_id: githubClientId,
            client_secret: githubClientSecret,
            code: query.code,
        });

        const res = await fetch("http://localhost:1337/products");

        const json = await res.json();
        const errorMessage = json.error_description;
        return { errorMessage, products: res };
    }
        
  componentDidMount() {
    const { accessToken } = this.props;

    if (accessToken) {
      Cookies.set('access_token', accessToken);
      Router.push('/');
    }
  }

    firstValidationMethod: function() {
        let response = await fetch("http://localhost:1337/products");
        if (!response.ok) {
          return
        }
    
        let products = await response.json()
    },

    secondValidationMethod: function(value) {
        //inspect the value
    }
};

export default ProductListService;