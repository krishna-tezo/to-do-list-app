export default class Task {
  id: number;
  title: string;
  description: string;
  status: number;
  userId: string;
  createdOn: Date;

  constructor(id: number, title: string, description: string, status: number, userId:string, createdOn:Date) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.userId = userId;
    this.createdOn = createdOn;
  }
}
