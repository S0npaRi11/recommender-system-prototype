import { useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/header'
import CustomerSelector from './components/nameSelector'
import ProductForm from './components/addProductForm'
import ProductList from './components/productList'
import RecommendationList from './components/recommendationList'
import { recommendor, getBehaviour } from './simillarity'


import './App.css';

function App() {

  const [product, setProduct] = useState([])
  const [rec, setRec] = useState([])
  // const [form, setForm] = useState([])
  const [customer, setCustomer] = useState('-1')

  // write functions and pass them down as props

  // for adding products to the bill
  const addProducts = (prod, x) => {
    // do some processing for checking the behaviour and save it to the 'prod'
    prod.behaviour = getBehaviour(prod, x)
    setProduct([...product, prod])
    recommendations([...product, prod], x)
  }

  // set the recommendations
  const addRec = (rec) => {
    setRec([rec])
  }

  // set the customer
  const selectCustomer = (cID) => {
    setCustomer(cID)
  }

  const recommendations = (product,x) => {
    const recProducts = recommendor(product, x)
    setRec(recProducts)
  }
  return (
    <>
      <Header />

      <Container>

        <CustomerSelector  SelectCustomer={selectCustomer} />

        <ProductForm  AddProd={addProducts} AddRec={addRec}  Customer={customer} />

        <ProductList  Products={product} />

        <RecommendationList  Recs={rec} />

      </Container>
    </>
  );
}

export default App;
