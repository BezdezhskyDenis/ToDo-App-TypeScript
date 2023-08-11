export class Todo {
  // static
  static CURRENT_ID = 1;

  // properties
  id: number;
  title: string;
  isComplete: boolean = false;
  createdAt: Date = new Date();

  // constructor
  constructor(title: string) {

    this.id = Todo.CURRENT_ID++;
    this.title = title;
  }

}
