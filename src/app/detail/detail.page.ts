import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton,IonBackButton,IonItem,IonLabel,IonCard } from '@ionic/angular/standalone';
import { Todo,TodoService } from '../services/todo.service';
import { ActivatedRoute } from '@angular/router';
import { addIcons } from 'ionicons';
import { trashOutline,checkmarkOutline } from 'ionicons/icons';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton,IonBackButton,IonItem,IonLabel,IonCard]
})
export class DetailPage implements OnInit {
  todo:Todo | undefined;

  constructor(private todoService:TodoService, private activatedRoute:ActivatedRoute) {
    addIcons({trashOutline,checkmarkOutline});
   }

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!,10);
    this.todo = this.todoService.getById(id);
  }

}
