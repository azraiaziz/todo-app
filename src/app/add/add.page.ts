import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonItem,IonButtons,IonBackButton,IonLabel,IonButton } from '@ionic/angular/standalone';
import { Todo,TodoService } from '../services/todo.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonItem,IonButtons,IonBackButton,IonLabel,IonButton]
})
export class AddPage implements OnInit {

  constructor(
    private todoService: TodoService, // Inject the TodoService
    private router: Router, // Inject the Router
    private toastController: ToastController // Inject the ToastController
  ) { }
  //our new todo item(model) to be linked to the form through ngModel
  //Omit is to exclude id from the newTodo object
  newTodo: Omit<Todo, 'id'> = {
    title:'',
    description:'',
    place:'',
    done:false
  }

  ngOnInit() {
  }

  async addItemPressed(){
    console.log(this.newTodo);
    //call the function create in TodoService
    //To add the new todo inside the array of todos
    this.todoService.create(this.newTodo);
    this.newTodo={title:'',description:'',place:'',done:false};
    this.router.navigate(['/home']);
    //TODO:Show a toast message to confirm the new todo has been added
    const toastCtrl = await this.toastController.create({
      message:'New todo added!',
      duration: 2000,
      position:'bottom'
    });
    await toastCtrl.present();
  }

}
