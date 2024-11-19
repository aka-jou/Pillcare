import React, { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { TextField, Button, IconButton, InputAdornment, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/pacientRegister'); 
  };

  return (
    <div className="w-full md:w-1/2 bg-[#FDFDFD] rounded-2xl p-8 text-center shadow-lg">
      <h2 className="text-3xl font-semibold text-teal-600 mb-6 item">Crea tu cuenta</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <TextField
            fullWidth
            label="Nombre completo"
            variant="outlined"
            color="primary"
          />
        </div>
        <div>
          <TextField
            fullWidth
            label="Número de teléfono"
            type="tel"
            variant="outlined"
            color="primary"
          />
        </div>
        <div>
          <TextField
            fullWidth
            label="Fecha de nacimiento"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            color="primary"
          />
        </div>
        <div>
          <TextField
            fullWidth
            label="Correo electrónico"
            type="email"
            variant="outlined"
            color="primary"
          />
        </div>
        <div>
          <TextField
            fullWidth
            label="Contraseña"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            color="primary"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={togglePasswordVisibility}
                    edge="end"
                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#00747C',
            '&:hover': {
              backgroundColor: '#00BBC9',
            },
          }}
        >
          Unirse ahora
        </Button>
      </form>
      <div className="mt-4 text-center">
        <span className="text-gray-600">¿Ya tienes una cuenta? </span>
        <Link
          href="/login"
          underline="hover"
          sx={{ color: '#00747C', fontWeight: 'bold' }}
        >
          Inicia sesión aquí
        </Link>
      </div>
    </div>
  );
}

export default SignupForm;
