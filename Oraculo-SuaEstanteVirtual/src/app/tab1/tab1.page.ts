import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton,
  IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, 
  IonCardSubtitle, IonCardContent, IonIcon 
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { add, libraryOutline, bookOutline,searchOutline,addCircleOutline } from 'ionicons/icons';

interface Livro {
  titulo: string;
  autor: string;
  descricao: string;
  imagem?: string;
  nota?: number;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton,
    IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, 
    IonCardSubtitle, IonCardContent, IonIcon
  ]
})
export class Tab1Page {
  livros: Livro[] = [
    { 
      titulo: 'Livro do Desassossego',
      autor: 'Fernando Pessoa', 
      descricao: 'O Livro do Desassossego, de Fernando Pessoa (sob o heterônimo Bernardo Soares), é um diário poético e fragmentário que mistura reflexões sobre a vida, a solidão e a própria identidade, explorando sentimentos de inquietação e introspecção de forma profunda e lírica.', 
      imagem: 'assets/livros/livroDes.jpeg' 
    },
    { 
      titulo: 'Drácula',
      autor: 'Bram Stoker', 
      descricao: 'Drácula, de Bram Stoker, é um romance gótico que narra a luta entre o conde vampiro Drácula e um grupo de pessoas liderado por Jonathan Harker e Van Helsing, abordando temas de terror, suspense, desejo e o confronto entre o bem e o mal.', 
      imagem: 'assets/livros/livroDra.jpeg' 
    },
    { 
      titulo: 'Iracema',
      autor: 'José de Alencar', 
      descricao: 'Iracema, de José de Alencar, é um romance romântico que conta a história da índia Iracema e do colonizador português Martim, simbolizando o encontro entre a cultura indígena e a europeia no Brasil e exaltando a formação da identidade nacional.', 
      imagem: 'assets/livros/livroIra.jpeg' 
    }
  ];

  constructor() {
    addIcons({ add, libraryOutline });
    addIcons({ 
      libraryOutline, 
      bookOutline, 
      searchOutline,
      addCircleOutline 
    });
  }

  removerLivro(index: number) {
    this.livros.splice(index, 1);
  }

  adicionarLivro() {
    console.log('Adicionar novo livro');
  }

  avaliarLivro(index: number, nota: number) {
    if (this.livros[index]) {
      this.livros[index].nota = nota;
      console.log(`Livro "${this.livros[index].titulo}" avaliado com nota ${nota}`);
    }
  }
}