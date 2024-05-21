import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';


interface Task {
  number: number;
  task: string;
  folder: string;
  date: Date;
  status: string;
}

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']

})
export class FoldersComponent implements OnInit {
  
  taskForm!: FormGroup;
  dataSource = new MatTableDataSource<Task>([
    {
      number: 1,
      folder: 'Personal Notes',
      task: 'Call mom',
      date: new Date('2023-05-21'),
      status: 'In Progress'
    },
    {
      number: 2,
      folder: 'Daily To Do',
      task: 'Buy groceries',
      date: new Date('2023-05-22'),
      status: 'On Hold'
    },
    {
      number: 3,
      folder: 'Educational Notes',
      task: 'Read chapter 5',
      date: new Date('2023-05-23'),
      status: 'Done'
    },
    {
      number: 4,
      folder: 'Groceries',
      task: 'Get milk and eggs',
      date: new Date('2023-05-24'),
      status: 'In Progress'
    },
    {
      number: 5,
      folder: 'Bible Readings',
      task: 'Read Psalm 23',
      date: new Date('2023-05-25'),
      status: 'On Hold'
    },
    {
      number: 6,
      folder: 'Short-term goals',
      task: 'Learn Angular',
      date: new Date('2023-05-26'),
      status: 'Done'
    },
    {
      number: 7,
      folder: 'Long-term goals',
      task: 'Save for a house',
      date: new Date('2023-05-27'),
      status: 'In Progress'
    }
  ]);
  displayedColumns: string[] = ['number', 'folder', 'task', 'date', 'status', 'actions'];
  taskCounter = 1;

  folder = new FormControl('');

  folderList: string[] = ['Personal Notes', 'Daily To Do', 'Educational Notes', 'Groceries', 'Bible Readings', 'Short-term goals','Long-term goals'];

 
  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      folder: new FormControl(''),
      date: new FormControl(''),
    });
  }

  ngOnInit() {
    this.taskForm = this.fb.group({
      task: ['', Validators.required],
      folder: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      const newTask: Task = {
        number: this.taskCounter++,
        task: this.taskForm.value.task,
        folder: this.taskForm.value.folder,
        date: this.taskForm.value.date,
        status: 'In Progress'
      };
      this.dataSource.data = [...this.dataSource.data, newTask];
      this.taskForm.reset();
    }
  }

  updateTaskStatus(task: Task) {
    this.dataSource.data = this.dataSource.data.map(t => t.number === task.number ? task : t);
  }

  deleteTask(task: Task) {
    this.dataSource.data = this.dataSource.data.filter(t => t.number !== task.number);
  }

  updateTask(task: Task) {
    this.taskForm.setValue({
      task: task.task,
      folder: task.folder,
      date: task.date
    });

    this.deleteTask(task); // Remove the old task
  }
}
