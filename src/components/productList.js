import { Table } from 'react-bootstrap'
import ProductEach from "./product";

const ProductList = ({ Products }) => {
    return (
        <>
           <div className="productList">
                <h2> Purchased Product </h2>
                <Table>
                <tbody>
                        <tr>
                            <th> # </th>
                            <th> Product ID </th>
                            <th> Product Name </th>
                            <th> Purchase Date </th>
                            <th> Quantity </th>
                            <th> Behaviour </th>
                        </tr>

                        {Products.length !== 0 ? 
                            Products.map(p => (
                                <ProductEach  key={Products.indexOf(p)} Prod = {p} index ={Products.indexOf(p)} />               
                            ))  
                            :  
                            <tr>
                                <td> No purchases yet </td>
                            </tr>
                        }
                       
                    </tbody>
                </Table>
           </div>
        </>
    )
}

export default ProductList
