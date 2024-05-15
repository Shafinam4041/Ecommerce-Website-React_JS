import React, { useState } from 'react';
import { TextField, Button, Box, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const ProductManagement = () => {
  const [form, setForm] = useState({
    name: '',
    imageUrl: '',
    price: '',
    description: '',
  });

  const defaultTheme = createTheme();
  const [products, setProducts] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProduct = {
      id: products.length + 1,
      ...form,
    };


    setProducts([...products, newProduct]);

    // Clear the form fields after submission
    setForm({
      name: '',
      imageUrl: '',
      price: '',
      description: '',
    });
  };
  const handleDelete = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1 style={{ textAlign: 'center' }}>Welcome to Admin Panel</h1>
      <h2 style={{ textAlign: 'center' }}>Product Management</h2>

      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              label="Product Name"
              fullWidth
              name="name"
              value={form.name}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              label="Image URL"
              fullWidth
              name="imageUrl"
              value={form.imageUrl}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              label="Price"
              fullWidth
              name="price"
              value={form.price}
              onChange={(e) => handleChange(e)}
            />
            <TextField
              label="Description"
              fullWidth
              multiline
              name="description"
              value={form.description}
              onChange={(e) => handleChange(e)}
            />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Add Product
            </Button>
            <Link to='/User' style={{ textDecoration: 'none', marginTop: '10px' }}>
              <Button variant='contained' color='primary'>
                View Products
              </Button>
            </Link>
          </Box>
        </Container>
      </ThemeProvider>

      {/* Display added products */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {products.map((product) => (
          <Card key={product.id} style={{ maxWidth: 200, margin: '10px' }}>
            <CardMedia
              component="img"
              height="140"
              image={product.imageUrl}
              alt={product.name}
            />
            <CardContent>
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
              <p>{product.description}</p>
              <CardContent>
              <Button variant="contained" color="secondary" onClick={() => handleDelete(product.id)}>
                Delete
              </Button>
            </CardContent>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductManagement;
