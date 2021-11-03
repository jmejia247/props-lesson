// here we will create a template for a product component!

function Product ({ name, description }) {
    // console.log(props, 'aaaaaaaaaa')
    // let { name, description } = props
    // let name = props.name === let {name} = props  
    return (
        <div className='product'>
            <h1>{name}</h1>
            <p>{description}</p>
        </div>
    )
}

// const Product = (props) = ({}) => {

//     return (
//         <div className='product'>
//             <h1>{props.name}</h1>
//             <p>{props.description}</p>
//         </div>
//     )
// }

export default Product;
