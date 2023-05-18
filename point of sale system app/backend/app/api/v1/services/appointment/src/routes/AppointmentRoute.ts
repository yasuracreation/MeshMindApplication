import express from 'express';
import { AppointmentService } from '../services/AppointmentService';

const router = express.Router();

const appointmentController = new AppointmentService();

router.post('/appointments', appointmentController.createAppointment);
router.get('/appointments', appointmentController.getAllAppointments);
router.get('/appointments/:id', appointmentController.getAppointmentById);
// router.put('/appointments/:id', appointmentController.updateAppointment);
router.delete('/appointments/:id', appointmentController.deleteAppointment);
router.get('/appointments/status/:status', appointmentController.getAppointmentsByStatus);

export default router;
