import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, IonButtons, IonBackButton,IonItem,IonInput,IonLabel,IonList,IonCard } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addOutline } from 'ionicons/icons';
import { RouterModule } from '@angular/router';
import { Todo, TodoService } from '../services/todo.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonFab, IonFabButton, IonIcon, RouterModule, IonButtons, IonBackButton,IonItem,IonInput,IonLabel,IonList,IonCard,CommonModule],
})
export class HomePage implements OnInit{
  todos:Todo[] = [];
  constructor(private todoService:TodoService) {
    addIcons({ addOutline});
  }
  //when the app is loaded(OnCreate), retrieve the list of todos
  ngOnInit(){
    this.todos = this.todoService.getAll();
  }

  ionViewWillEnter(){
    this.todos = this.todoService.getAll();
    console.log(this.todos);
  }
}
