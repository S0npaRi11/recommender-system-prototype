import C from '../constants'

const Product = ({ Prod, index }) => {

    const products = C.products;
    return (
        <>
            <tr>
                <td> {index + 1} </td>
                <td> { Prod.pID } </td>
                <td> { products[Prod.pID] }  </td>
                <td> 
                    {new Intl.DateTimeFormat("en-GB", {
                    style: "currency",
                    currency: "GBP",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0
                    }).format(Prod.date)}
                </td>
                <td> { Prod.q } </td>
                <td> { Prod.behaviour } </td>
            </tr>
        </>
    )
}

export default Product
