import React from 'react';
import { TextField } from '@mui/material';

function ClinicalData({ clinicalData, setClinicalData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClinicalData({
      ...clinicalData,
      [name]: value,
    });
  };

  return (
    <form className="space-y-4 bg-[#FDFDFD] p-6 rounded-lg shadow-lg">
      <TextField
        fullWidth
        label="Enfermedades Preexistentes"
        variant="outlined"
        name="preexistingConditions"
        value={clinicalData.preexistingConditions}
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
        label="Alergias"
        variant="outlined"
        name="allergies"
        value={clinicalData.allergies}
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
        label="Grupo Sanguíneo"
        variant="outlined"
        name="bloodType"
        value={clinicalData.bloodType}
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
        label="Peso"
        type="number"
        variant="outlined"
        name="weight"
        value={clinicalData.weight}
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
        label="Condición Médica"
        variant="outlined"
        name="medicalCondition"
        value={clinicalData.medicalCondition}
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
        label="Diagnósticos Recientes"
        variant="outlined"
        name="recentDiagnoses"
        value={clinicalData.recentDiagnoses}
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

export default ClinicalData;
