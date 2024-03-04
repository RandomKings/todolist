import { Container, Box, TextField, Typography, Link } from '@mui/material'; // Import Link
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '/firebase';
import { useEffect } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom'; // Import RouterLink

const Register = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(password, email);
    createUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h6">
          Register
        </Typography>
        <Box className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-sm opacity-90">
          <form onSubmit={handleSubmit}>
            <TextField margin="normal" fullWidth name="email" label="Email Address" className="mb-4" />
            <TextField margin="normal" fullWidth name="password" label="Password" type="password" className="mb-4" />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </form>
          <Typography variant="body2" align="center" mt={2} sx={{color: 'black'}}>
            Already have an account?{' '}
            <Link component={RouterLink} to="/login" underline="always">
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
