import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, 
  IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonLabel, 
  IonInput, IonTextarea, IonSelect, IonSelectOption, IonButton, 
  IonIcon 
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { addCircleOutline, trashOutline, imageOutline } from 'ionicons/icons';

interface Livro {
  titulo: string;
  autor: string;
  descricao: string;
  genero?: string;
  imagem?: string;
  nota?: number;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader,
    IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonLabel,
    IonInput, IonTextarea, IonSelect, IonSelectOption, IonButton, IonIcon,
    FormsModule, CommonModule
  ]
})
export class Tab2Page {
  novoLivro: Livro = {
    titulo: '',
    autor: '',
    descricao: '',
    genero: '',
    imagem: ''
  };

  constructor() {
    addIcons({ addCircleOutline, trashOutline, imageOutline });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.novoLivro.imagem = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  adicionarNovoLivro() {
    // Aqui você implementaria a lógica para salvar o livro
    console.log('Novo livro:', this.novoLivro);
    
    // Simulando sucesso
    alert('Livro adicionado com sucesso!');
    this.limparFormulario();
  }

  limparFormulario() {
    this.novoLivro = {
      titulo: '',
      autor: '',
      descricao: '',
      genero: '',
      imagem: ''
    };
  }
}
