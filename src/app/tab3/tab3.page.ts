import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar, 
  IonCard, IonCardContent, IonChip, IonLabel, IonList, IonItem, 
  IonAvatar, IonIcon 
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { searchOutline, bookOutline } from 'ionicons/icons';

interface Livro {
  titulo: string;
  autor: string;
  descricao: string;
  genero?: string;
  imagem?: string;
  nota?: number;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar,
    IonCard, IonCardContent, IonChip, IonLabel, IonList, IonItem,
    IonAvatar, IonIcon, FormsModule, CommonModule
  ]
})
export class Tab3Page {
  termoPesquisa: string = '';
  filtroAtivo: string = 'todos';
  
  todosLivros: Livro[] = [
    { 
      titulo: 'Livro do Desassossego',
      autor: 'Fernando Pessoa', 
      descricao: 'Diário poético e fragmentário...',
      genero: 'Poesia',
      nota: 5
    },
    { 
      titulo: 'Drácula',
      autor: 'Bram Stoker', 
      descricao: 'Romance gótico sobre vampiros...',
      genero: 'Terror',
      nota: 4
    },
    { 
      titulo: 'Iracema',
      autor: 'José de Alencar', 
      descricao: 'Romance indianista brasileiro...',
      genero: 'Romance',
      nota: 3
    }
  ];

  livrosFiltrados: Livro[] = [];

  constructor() {
    addIcons({ searchOutline, bookOutline });
  }

  filtrarLivros() {
    if (!this.termoPesquisa.trim()) {
      this.livrosFiltrados = [];
      return;
    }

    const termo = this.termoPesquisa.toLowerCase();
    
    this.livrosFiltrados = this.todosLivros.filter(livro => 
      livro.titulo.toLowerCase().includes(termo) ||
      livro.autor.toLowerCase().includes(termo) ||
      (livro.genero && livro.genero.toLowerCase().includes(termo)) ||
      livro.descricao.toLowerCase().includes(termo)
    );
  }

  alternarFiltro(filtro: string) {
    this.filtroAtivo = filtro;
    this.filtrarLivros();
  }

  verDetalhes(livro: Livro) {
    console.log('Ver detalhes:', livro);
    alert(`Detalhes de: ${livro.titulo}\nAutor: ${livro.autor}\nNota: ${livro.nota || 'Sem nota'}`);
  }
}
