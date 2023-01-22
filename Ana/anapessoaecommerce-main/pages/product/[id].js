import Head from 'next/head'
import Link from 'next/link'
import { useState, useContext } from 'react'
import { getData } from '../../utils/fetchData'
import { DataContext } from '../../store/GlobalState'
import { addToCart } from '../../store/Actions'

const DetailProduct = (props) => {
    const [product] = useState(props.product)
    const [tab, setTab] = useState(0)

    const productFormated = (product.price)
    const formated = productFormated.toLocaleString('pt', {style: 'currency', currency: 'EUR'})

    const { state, dispatch } = useContext(DataContext)
    const { cart, auth } = state

    const isActive = (index) => {
        if(tab === index) return " active";
        return ""
    }

    return(
        <div className="row detail_page">
            <Head>
                <title>Detail Product</title>
            </Head>

            <div className="col-md-6">
                <img src={ product.images[tab].url } alt={ product.images[tab].url }
                className="img-view-product d-block img-thumbnail rounded mt-4 w-100"
                style={{height: 'auto' }} />

                <div className="row mx-0" style={{cursor: 'pointer'}} >

                    {product.images.map((img, index) => (
                        <img key={index} src={img.url} alt={img.url}
                        className={`img-thumbnail rounded ${isActive(index)}`}
                        style={{height: '60px', width: '20%'}}
                        onClick={() => setTab(index)} />
                    ))}

                </div>
            </div>

            <div className="col-md-6 mt-3">
                <h2 className="text-uppercase">{product.title}</h2>
                <h5 className="text-danger">{formated}</h5>

                <div className="row mx-0 d-flex justify-content-between">
                    {
                        product.inStock > 0
                        ? <h6 className="text-danger">Em Stock: {product.inStock}</h6>
                        : <h6 className="text-danger">Fora de Stock</h6>
                    }

                    <h6 className="text-danger">Vendido: {product.sold}</h6>
                </div>

                <div className="my-2">{product.description}</div>
                <div className="my-2">
                    {product.content}
                </div>
                <Link href={auth.user ? '/cart' : '/signin'}>
                    <a className="btn btn-info"
                    style={{marginRight: '5px', flex: 1}}
                    onClick={() => dispatch(addToCart(product, cart))}
                    >Comprar agora</a>
                </Link>
                <button className="btn btn-success"
                style={{marginLeft: '5px', flex: 1}}
                disabled={product.inStock === 0 ? true : false} 
                onClick={() => dispatch(addToCart(product, cart))} >
                    Adicionar ao carrinho
                </button>
                <Link href={'/'}>
                    <a className="btn btn-dark my-2" >Retornar as compras</a>
                </Link>

            </div>
        </div>
    )
}

export async function getServerSideProps({params: {id}}) {

    const res = await getData(`product/${id}`)
    // server side rendering
    return {
      props: { product: res.product }, // will be passed to the page component as props
    }
}


export default DetailProduct