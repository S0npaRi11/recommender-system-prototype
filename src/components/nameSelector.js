import { Form, Row } from 'react-bootstrap'


const NameSelector = ({ SelectCustomer }) => {

    const cus = (e) => {
        e.preventDefault()
        SelectCustomer(e.target.value)
        // console.log(e.target.value)
    }

    return (
        <Row>
            <div className="col-lg-4 nameSelector" >
                <Form onChange={cus} >
                    <Form.Group>
                        <Form.Label> Select Customer </Form.Label>
                        <Form.Control as="select">
                            <option value="-1"> Select Customer </option>
                            <option value="0"> Botan </option>
                            <option value="1"> Pekora </option>
                            <option value="2"> Fubuki </option>
                            <option value="3"> Ina </option>
                            <option value="4"> SUbaru </option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </div>
        </Row>
    )
}

export default NameSelector
