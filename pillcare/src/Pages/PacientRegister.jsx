// PacientRegister.js
import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button, Modal, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PatientInform from '../Components/Register/PatientInform';
import ClinicalData from '../Components/Register/ClinicalData';
import MedicationSchedule from '../Components/Register/MedicationSchedule';

function PacientRegister() {
  const [activeStep, setActiveStep] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const [patient, setPatient] = useState({
    fullName: '',
    gender: '',
    age: '',
    address: '',
    phone: '',
  });
  const [clinicalData, setClinicalData] = useState({
    preexistingConditions: '',
    allergies: '',
    bloodType: '',
    weight: '',
    medicalCondition: '',
    recentDiagnoses: '',
  });
  const [medication, setMedication] = useState({
    name: '',
    dosage: '',
    frequency: '',
    startDate: '',
    endDate: '',
    hoursInterval: '',
    notes: '',
  });

  const steps = ['Datos del Paciente', 'Datos Clínicos', 'Programación de Medicación'];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async () => {
    setModalOpen(true); // Abrir el modal
    setTimeout(() => {
      setModalOpen(false); // Cerrar el modal
      navigate('/home'); // Redirigir a la página de inicio
    }, 2000); // Esperar 2 segundos antes de redirigir
  };

  const handleModalClose = () => {
    setModalOpen(false);
    navigate('/home'); // Redirigir al cerrar el modal
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h2 className="text-2xl font-semibold text-teal-600 mb-6">Registro del Paciente</h2>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full mt-6">
        {activeStep === 0 && <PatientInform patient={patient} setPatient={setPatient} />}
        {activeStep === 1 && <ClinicalData clinicalData={clinicalData} setClinicalData={setClinicalData} />}
        {activeStep === 2 && <MedicationSchedule medication={medication} setMedication={setMedication} />}

        <div className="flex justify-between mt-6">
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Atrás
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Finalizar Registro
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleNext}>
              Siguiente
            </Button>
          )}
        </div>
      </div>

      {/* Modal */}
      <Modal open={modalOpen} onClose={handleModalClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            border: '2px solid #00747C',
            borderRadius: '16px',
            boxShadow: 24,
            p: 4,
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" component="h2" sx={{ color: '#00747C', mb: 2 }}>
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
