import React, {Component} from 'react';
import shop from '../../api/shop';

class ProductList extends Component {
    constructor(props){
        super(props);

        this.state ={
            isLoading: false,
            items: [],
            pickedItems: []
        }
    }
    componentWillMount(){} // dom 그려지기 전

    componentDidMount(){ //dom 다 그려지고 난후 
        
        
        shop.getProducts(products=> {
            this.setState({
                items : products
            })
            
        })
        

    }
    addToCart = (productId) => {
        console.log(param)
        this.setState({
            pickedItems
        })
        //item.items.map(m => item.items[m].id); 
    }

    render (){
        const { items } = this.state;
        //https://i.imgur.com/JfPpwOA.gif
        return (
            <div>
                <h1>Product List</h1>
                
                <ul>
                    {
                        items.length && items.map(m => 
                            <li key={m.id}>
                                {m.title}
                                <button onClick={()=> this.addToCart(m.id)}>Add to cart</button>    
                            </li>)

                    }
                    
                </ul>
                <h1>cart</h1>
                <p>{}</p>
            </div>
        );
    }
}

export default ProductList;