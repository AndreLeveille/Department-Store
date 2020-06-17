import React from 'react'
import {Card, Header, Button} from 'semantic-ui-react'
import axios from 'axios'
import {Link} from 'react-router-dom'
// import NavBar from './components/NavBar'


class Products extends React.Component {
  state = {products: [], }


  componentDidMount(){
    axios.get('/api/products')
    .then (res => {
      this.setState({products: res.data,})
    })

  }

  renderProducts = () => {
    const {products,} = this.state
    if(products.length <= 0)
      return <h2>No Products</h2>
    return products.map (product => (
      <Card>
        <Card.Content>
          <Card.Header>{product.name}</Card.Header>
          <Card.Meta>{product.department}</Card.Meta>
          <Card.Description>{product.description}</Card.Description>
          <Card.Content extra>
          <Button as={Link} to={`/products/${product.id}`} color='blue'>
            View
          </Button>
        </Card.Content>
        </Card.Content>
      </Card>
    ))
  }

  render(){
    return (
      <div>
        {/* <NavBar/> */}
        <Header as='h1'>
          Products
        </Header>
        <br/>
        <Button as={Link} color="blue" to='/products/new'>Add a Product</Button>
        <br/>
        <br/>
        <Card.Group>
          {this.renderProducts()}
        </Card.Group>
      </div>
    )
  }
}


export default Products