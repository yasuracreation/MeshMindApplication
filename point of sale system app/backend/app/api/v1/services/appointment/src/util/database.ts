import { MongoClient, Db } from 'mongodb';

export class MongoDBDataSource {
  private client: MongoClient;
  public db: Db;

  constructor(private url: string, private dbName: string) {}

  async connect(): Promise<void> {
    this.client = await MongoClient.connect(this.url, { useUnifiedTopology: true });
    this.db = this.client.db(this.dbName);
  }

  async disconnect(): Promise<void> {
    await this.client.close();
  }

  getAppointmentsCollection() {
    return this.db.collection('appointments');
  }
}
