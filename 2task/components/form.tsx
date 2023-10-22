'use client'
import { useState } from 'react';
import axios from 'axios';
import { Grid , Button, Typography, TextField,  Container } from '@mui/material';
import './form.css'
export default function RegisterForm() {
  const [data, setData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrs] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const validateForm = () => {
    let isValid = true;
    const updatedErrors = { ...errors };
    
    // Email validation using a simple Regex

    const emailvalidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailvalidation.test(data.email)) {
      updatedErrors.email = 'Please enter a valid email address';
      isValid = false;
    } else {
      updatedErrors.email = '';
    }

    // validation the password length
    if (data.password.length < 8) {
      updatedErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    } else {
      updatedErrors.password = '';
    }

    // Password and Confirm Password match validation
    if (data.password !== data.confirmPassword) {
      updatedErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    } else {
      updatedErrors.confirmPassword = '';
    }

    setErrs(updatedErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const apiUrl = 'http://localhost:5000/api/register';
      axios.post(apiUrl, data)
        .then((resp) => {
          alert("User created");
          setData(data);
        })
        .catch((error) => {
          alert('Error sending data: '+ error.response.data.errors[0].error);
        });
    }
  };
  return (
    <div className='container'>
    <Container >
      <Typography variant="h4">Registration Form</Typography>
      <br></br>
      <form onSubmit={handleSubmit}>
        <Grid  spacing={1} container>
          <Grid item xs={12}>
            <TextField
              type="email" 
              id="email" 
              name="email"
              label="Email" 
              value={data.email}
              onChange={handleChange}
              error={Boolean(errors.email)}
              helperText={errors.email}
              variant="standard"
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={8}>
            <TextField
              type="password"
              id="password"
              name="password"
              label="Password"
              variant="standard"
              value={data.password}
              onChange={handleChange}
              required
              fullWidth
              error={Boolean(errors.password)}
              helperText={errors.password}
            />
          </Grid>

          <Grid item  xs={5}>
            <TextField
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              fullWidth
              variant="standard"
              value={data.confirmPassword}
              onChange={handleChange}
              required
              error={Boolean(errors.confirmPassword)}
              helperText={errors.confirmPassword}
            />
          </Grid>
          <Grid item xs={18}>
            <Button type="submit" variant="contained" color="secondary">
              send
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
    </div>
  );
}