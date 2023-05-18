
import { AppointmentDocument } from '@src/models/appointment.model';
import { MongoDBDataSource } from '@src/util/database';

export class MongoAppointmentRepository {
  [x: string]: any;
  private dataSource: MongoDBDataSource;

  constructor(dataSource: MongoDBDataSource) {
    this.dataSource = dataSource;
  }

  async getAllAppointments(): Promise<AppointmentDocument[]> {
    const collection = this.dataSource.db.collection('appointments');
    const appointments = await collection.find().toArray();
    return appointments;
  }

  async getAppointmentsByStatus(status: string): Promise<AppointmentDocument[]> {
    const collection = this.dataSource.db.collection('appointments');
    const appointments = await collection.find({ status: status }).toArray();
    return appointments;
  }

  async createAppointment(appointment: AppointmentDocument): Promise<AppointmentDocument> {
    const collection = this.dataSource.db.collection('appointments');
    const result = await collection.insertOne(appointment);
    return result.ops[0];
  }

  async updateAppointment(id:string , appointment: AppointmentDocument): Promise<AppointmentDocument> {
    const collection = this.dataSource.db.collection('appointments');
    const result = await collection.findOneAndUpdate(
      { _id: id},
      { $set: appointment },
      { returnOriginal: false }
    );
    return result.value;
  }

  async deleteAppointment(id: string): Promise<boolean> {
    const collection = this.dataSource.db.collection('appointments');
    const result = await collection.deleteOne({ _id: id });
    return result.deletedCount === 1;
  }
}
