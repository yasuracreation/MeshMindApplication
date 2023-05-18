import { Schema, model, Document } from 'mongoose';

export interface AppointmentDocument extends Document {
  customerName: string;
  customerEmail: string;
  status: string;
  appointmentTime: Date;
}

const appointmentSchema = new Schema({
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  status: { type: String, required: true },
  appointmentTime: { type: Date, required: true },
});

export const AppointmentModel = model<AppointmentDocument>('Appointment', appointmentSchema);
