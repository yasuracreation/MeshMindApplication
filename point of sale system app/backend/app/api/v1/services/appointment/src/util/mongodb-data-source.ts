import { AppointmentDocument } from "@src/models/appointment.model";

export interface AppointmentDataSource {
    create(appointment: AppointmentDocument): Promise<AppointmentDocument>;
    update(id: string, appointment: AppointmentDocument): Promise<AppointmentDocument | null>;
    findById(id: string): Promise<AppointmentDocument | null>;
    findAll(): Promise<AppointmentDocument[]>;
    findByStatus(status: string): Promise<AppointmentDocument[]>;
    delete(id: string): Promise<boolean>;
  }
  