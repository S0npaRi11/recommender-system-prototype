import { useState } from 'react'
import { Button, Row } from 'react-bootstrap'

const AddProductForm = ({ AddProd,Customer }) => {

    const[pID, setpID] = useState(-1)
    const[q, setQ] = useState(0)
    const [date, setDate] = useState(0)

    const addToBill = () => {

        if(parseInt(Customer) !== -1){
            const prod = {
                pID: pID,
                cID: Customer,
                x: date,
                q: q
            }
    
            AddProd(prod, date)
        }else{
            alert(' Please select the customer first ')
        }
    }

    return (
        <>
            <Row className="addProductForm">
                <div className="col-lg-3">
                    <label htmlFor="productID"> Product ID </label>
                    <input type="text" id="productID" placeholder="Product ID" className="form-control" onChange={(e) =>  setpID(e.target.value)}/>
                </div>

                <div className="col-lg-3">
                    <label htmlFor="customerID"> X Index ( weeks of gap in the purchses ) </label>
                    <input type="number" id="customerID" className="form-control" onChange = {((e) => setDate(e.target.value))}  />
                </div>

                <div className="col-lg-3">
                    <label htmlFor="customerID"> Quantity </label>
                    <input type="number" id="customerID" placeholder="1" className="form-control" onChange={(e) => setQ(e.target.value)} />
                </div>

                <div className="col-lg-3 addProductButton">
                    <Button onClick = {addToBill} > Add Product </Button>
                </div>
            </Row>
        </>
    )
}

export default AddProductForm
