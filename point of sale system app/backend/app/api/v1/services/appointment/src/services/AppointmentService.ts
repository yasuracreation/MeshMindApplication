import { AppointmentDocument } from "@src/models/appointment.model";
import { MongoAppointmentRepository } from "@src/repos/AppointmentRepository";
import { MongoDBDataSource } from "@src/util/database";

export class AppointmentService {

  private readonly appointmentRepository: MongoAppointmentRepository;

  constructor() {
    this.appointmentRepository = new MongoAppointmentRepository(new MongoDBDataSource('',''));
  }
  async getAllAppointments( appointment: any) {
    return await this.appointmentRepository.createAppointment(appointment);

  }
  async createAppointment(appointment: AppointmentDocument): Promise<AppointmentDocument> {
    return await this.appointmentRepository.createAppointment(appointment);
  }

  async getAppointmentById(id: string): Promise<AppointmentDocument | null> {
    return await this.appointmentRepository.getAppointmentById(id);
  }

  async updateAppointment(id: string, appointment: AppointmentDocument): Promise<AppointmentDocument | null> {
    return await this.appointmentRepository.updateAppointment(id, appointment);
  }

  async deleteAppointment(id: string): Promise<boolean> {
    return await this.appointmentRepository.deleteAppointment(id);
  }

  async getAppointmentsByStatus(status: string): Promise<AppointmentDocument[]> {
    return await this.appointmentRepository.getAppointmentsByStatus(status);
  }
  
}
