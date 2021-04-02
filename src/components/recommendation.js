import C from '../constants'

const Recommendation = ({ Rec, index }) => {

    const products = C.products

    return (
        <>
            <tr>
                <td> {index + 1} </td>
                <td> {products[Rec.product]} </td>
                <td> {Rec.product} </td>
            </tr>
        </>
    )
}

export default Recommendation
