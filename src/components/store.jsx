import React, { Component } from 'react';
import StoreProduct from './storeProduct';

class Store extends Component {
    state = { 
        products : [
            { name:'Coca Cola', code:'C332', price:20, quantity:10 },
            { name:'5Star', code:'F168', price:15, quantity:7 },
            { name:'Maggi', code:'M288', price:28, quantity:16 },
            { name:'Pepsi', code:'P288', price:20, quantity:18 },
            { name:'Dairy Milk', code:'D311', price:40, quantity:5 },
            { name:'Mirinda', code:'M301', price:25, quantity:8 },
            { name:'Kitkat', code:'K477', price:16, quantity:7 },
            { name:'Red Bull', code:'R544', price:90, quantity:3 },
        ],
        codeType : 0,
     }

     handleIncrement = product => {
         const products = [...this.state.products];
         const index = products.indexOf(product);
         products[index] = {...product};
         products[index].quantity++ ;
         this.setState({ products });
     }

     handleDecrement = product => {
         const products = [...this.state.products];
         const index = products.indexOf(product);
         products[index] = {...product};
         products[index].quantity-- ;
         this.setState({ products });
     }

     compareByAsc(key) {
            return function (a, b) {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
            };
     }
                
     orderByAsc(key) {
            let arrayCopy = [...this.state.products];
            arrayCopy.sort(this.compareByAsc(key));
            this.setState({products: arrayCopy});
     }

      handleTable = () => {
            this.setState({codeType : 1});
     }
      handleGrid = () => {
            this.setState({codeType : 0});
     }
     
 
     render() { 
        if(this.state.codeType === 0){
        return  <div className='container bg-light' style={{textAlign:'center'}}>
                <h3>Product in Store</h3>
                <button onClick={() => this.orderByAsc('quantity')} className="btn btn-primary btn-sm m-2">OrderBy Quantity</button>
                <button onClick={() => this.orderByAsc('price')} className="btn btn-primary btn-sm m-2">OrderBy Price</button>
                <button onClick={this.handleTable} className="btn btn-primary btn-sm m-2">View : Table</button>

           <div className='row'>
                {this.state.products.map((product,i) => (
                    <StoreProduct 
                    key={i}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    product={product}
                    />
                ))}
        </div> 
        </div>
         }
        else if(this.state.codeType === 1){
             return  <div className='container bg-light' style={{textAlign:'center'}}>
                <h3>Product in Store</h3>
                <button onClick={() => this.orderByAsc('quantity')} className="btn btn-primary btn-sm m-2">OrderBy Quantity</button>
                <button onClick={() => this.orderByAsc('price')} className="btn btn-primary btn-sm m-2">OrderBy Price</button>
                <button onClick={this.handleGrid} className="btn btn-primary btn-sm m-2">View : Grid</button> 
           
            <table className='table table-indexed'>
                <thead className='thead-dark'>
                    <tr>
                        <th scope='col' style={{width: '30%'}}>Name</th>
                        <th scope='col' style={{width: '20%'}}>Code</th>
                        <th scope='col' style={{width: '10%'}}>Price</th>
                        <th scope='col' style={{width: '10%'}}>Quantity</th>
                        <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map((product,i) => { 
                            return (
                            <tr key={i}>
                                <td scope='row'>{product.name}</td>
                                <td scope='row'>{product.code}</td>
                                <td scope='row'>{product.price}</td>
                                <td scope='row'>{product.quantity}</td>
                                <td><button  onClick= { () => this.handleIncrement(product)} 
                                        className="btn btn-success btn-sm m-2">+</button>
                                    <button  onClick= { () => this.handleDecrement(product)} 
                                        disabled={product.quantity === 0}   className="btn btn-danger btn-sm m-2">-</button>
                                </td>
                            </tr>
                            );
                        } )}
                        </tbody>
                </table>
           
        </div>
        }
          
    }
}
 
export default Store;


    