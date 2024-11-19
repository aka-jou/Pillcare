import React from "react";
import { TextField } from "@mui/material";

function PatientInform({ patient, setPatient }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatient({
      ...patient,
      [name]: value,
    });
  };

  return (
    <form className="space-y-6 bg-[#FDFDFD] p-8 rounded-lg ">
      <TextField
        fullWidth
        label="Nombre Completo"
        variant="outlined"
        name="fullName"
        value={patient.fullName}
        onChange={handleInputChange}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#00747C" },
            "&:hover fieldset": { borderColor: "#00BBC9" },
            "&.Mui-focused fieldset": { borderColor: "#00BBC9" },
          },
          "& .MuiInputLabel-root": {
            color: "#00747C",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#00BBC9",
          },
        }}
      />
      <TextField
        fullWidth
        label="Género"
        variant="outlined"
        name="gender"
        value={patient.gender}
        onChange={handleInputChange}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#00747C" },
            "&:hover fieldset": { borderColor: "#00BBC9" },
            "&.Mui-focused fieldset": { borderColor: "#00BBC9" },
          },
          "& .MuiInputLabel-root": {
            color: "#00747C",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#00BBC9",
          },
        }}
      />
      <TextField
        fullWidth
        label="Edad"
        type="number"
        variant="outlined"
        name="age"
        value={patient.age}
        onChange={handleInputChange}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#00747C" },
            "&:hover fieldset": { borderColor: "#00BBC9" },
            "&.Mui-focused fieldset": { borderColor: "#00BBC9" },
          },
          "& .MuiInputLabel-root": {
            color: "#00747C",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#00BBC9",
          },
        }}
      />
      <TextField
        fullWidth
        label="Dirección"
        variant="outlined"
        name="address"
        value={patient.address}
        onChange={handleInputChange}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#00747C" },
            "&:hover fieldset": { borderColor: "#00BBC9" },
            "&.Mui-focused fieldset": { borderColor: "#00BBC9" },
          },
          "& .MuiInputLabel-root": {
            color: "#00747C",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#00BBC9",
          },
        }}
      />
      <TextField
        fullWidth
        label="Teléfono"
        variant="outlined"
        name="phone"
        value={patient.phone}
        onChange={handleInputChange}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#00747C" },
            "&:hover fieldset": { borderColor: "#00BBC9" },
            "&.Mui-focused fieldset": { borderColor: "#00BBC9" },
          },
          "& .MuiInputLabel-root": {
            color: "#00747C",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#00BBC9",
          },
        }}
      />
    </form>
  );
}

export default PatientInform;
