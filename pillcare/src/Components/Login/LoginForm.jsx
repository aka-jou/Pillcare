import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Typography,
  Link,
} from "@mui/material";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[550px] h-[600px] bg-[#FDFDFD] rounded-3xl flex flex-col justify-center items-center shadow-lg">
        <Typography
          variant="h4"
          sx={{ color: "#00747C", fontWeight: "bold", mb: 4, textAlign: "center" }}
        >
          Inicia sesión
        </Typography>
        <form className="space-y-4 w-full max-w-xs">
          <TextField
            fullWidth
            label="Usuario"
            variant="outlined"
            color="primary"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#42858C" },
                "&:hover fieldset": { borderColor: "#00BBC9" },
                "&.Mui-focused fieldset": { borderColor: "#00BBC9" },
              },
              "& .MuiInputLabel-root": {
                color: "#42858C",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#00BBC9",
              },
            }}
          />
          <TextField
            fullWidth
            label="Contraseña"
            variant="outlined"
            color="primary"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={togglePasswordVisibility}
                    aria-label={
                      showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                    }
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#42858C" },
                "&:hover fieldset": { borderColor: "#00BBC9" },
                "&.Mui-focused fieldset": { borderColor: "#00BBC9" },
              },
              "& .MuiInputLabel-root": {
                color: "#42858C",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#00BBC9",
              },
            }}
          />
          <Button
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: "#00747C",
              "&:hover": {
                backgroundColor: "#00BBC9",
              },
              py: 1.5,
            }}
            href="/home"
          >
            Ingresar
          </Button>
        </form>
        <Typography
          variant="body2"
          sx={{ mt: 4, textAlign: "center", color: "gray" }}
        >
          ¿No estás registrado?{" "}
          <Link
            href="/signup"
            sx={{
              color: "#00747C",
              fontWeight: "bold",
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Hazlo aquí
          </Link>
        </Typography>
      </div>
    </div>
  );
}

export default LoginForm;
