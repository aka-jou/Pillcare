import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Modal,
  Box,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PatientInform from "../Components/Register/PatientInform";
import ClinicalData from "../Components/Register/ClinicalData";
import MedicationSchedule from "../Components/Register/MedicationSchedule";

function PacientRegister() {
  const [activeStep, setActiveStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    fullName: "",
    gender: "",
    age: "",
    address: "",
    phone: "",
  });
  const [clinicalData, setClinicalData] = useState({
    preexistingConditions: "",
    allergies: "",
    bloodType: "",
    weight: "",
    medicalCondition: "",
    recentDiagnoses: "",
  });
  const [medication, setMedication] = useState({
    name: "",
    dosage: "",
    frequency: "",
    startDate: "",
    endDate: "",
    hoursInterval: "",
    notes: "",
  });

  const steps = [
    "Datos del Paciente",
    "Datos Clínicos",
    "Programación de Medicación",
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async () => {
    setModalOpen(true); 
    setTimeout(() => {
      setModalOpen(false); 
      navigate("/home"); 
    }, 2000); 
  };

  const handleModalClose = () => {
    setModalOpen(false);
    navigate("/home"); 
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h2 className="text-2xl font-semibold text-teal-600 mb-6">
        Registro del Paciente
      </h2>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        sx={{
          "& .MuiStepIcon-root": {
            color: "#FDFDFD", 
            border: "2px solid #00747C", 
            borderRadius: "50%",
            "& text": {
              fill: "#00747C", 
            },
          },
          "& .MuiStepIcon-root.Mui-active": {
            color: "#00747C", 
            border: "2px solid #FDFDFD",
            "& text": {
              fill: "#FFFFFF",
            },
          },
          "& .MuiStepIcon-root.Mui-completed": {
            color: "#00747C", 
            border: "2px solid #FFFFFF",
            "& text": {
              fill: "#FFFFFF", 
            },
          },
          "& .MuiStepLabel-label": {
            color: "#00747C", 
            "&.Mui-active": {
              color: "#00747C",
              fontWeight: "bold", 
            },
          },
        }}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full mt-6">
        {activeStep === 0 && (
          <PatientInform patient={patient} setPatient={setPatient} />
        )}
        {activeStep === 1 && (
          <ClinicalData
            clinicalData={clinicalData}
            setClinicalData={setClinicalData}
          />
        )}
        {activeStep === 2 && (
          <MedicationSchedule
            medication={medication}
            setMedication={setMedication}
          />
        )}

        <div className="flex justify-between mt-6">
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{
              color: "#00747C", 
              border: "1px solid #00747C", 
              backgroundColor: "#FDFDFD", 
              "&:hover": {
                backgroundColor: "#00BBC9", 
                color: "#FFFFFF", 
              },
            }}
          >
            Atrás
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button
              variant="contained"
              onClick={handleSubmit}
              sx={{
                backgroundColor: "#00747C", 
                "&:hover": {
                  backgroundColor: "#00BBC9", 
                },
              }}
            >
              Finalizar Registro
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleNext}
              sx={{
                backgroundColor: "#00747C", 
                "&:hover": {
                  backgroundColor: "#00BBC9", 
                },
              }}
            >
              Siguiente
            </Button>
          )}
        </div>
      </div>

      <Modal open={modalOpen} onClose={handleModalClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            borderRadius: "16px",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            sx={{ color: "#00747C", mb: 2 }}
          >
            ¡Registro Exitoso!
          </Typography>
          <Typography sx={{ mb: 2 }}>
            El paciente ha sido registrado correctamente.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default PacientRegister;
