// this is where we will create a component that displays our recomended products!
import React from 'react'
import Product from './products'
import shoes from './recomendedShoes'

class RecomendedProducts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: this.props.title
        }
        
    }

    render () {
        // console.log(this)
        let {title} = this.props
        let recomended = shoes.map((item) => {
            return <Product name={item.name} description={item.description} /> 
        })
        console.log(this)
        return (
            <div>
                <h1>{title}</h1>
                <div className='product-ul'>
                    {/* <Product shoe={shoes[0]}/> */}
                    {/* <Product name={shoes[0].name} description={shoes[0].description}/>
                    <Product name={shoes[1].name} description={shoes[1].description}/>
                    <Product name={shoes[2].name} description={shoes[2].description}/>
                    <Product name={shoes[3].name} description={shoes[3].description}/>
                    <Product name={shoes[4].name} description={shoes[4].description}/> */}
                    {recomended}
                </div>
            </div>
        )
    }
}

export default RecomendedProducts;
