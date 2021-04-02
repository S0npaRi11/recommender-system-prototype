import { Navbar, Container } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar expand="lg" className='header'>
            <Container>
                <Navbar.Brand> Purchase behaviour predictor and product recommender (PROTO) </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header
