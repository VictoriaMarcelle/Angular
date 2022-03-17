import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tarefa = '';
  itens: string[] = [];
  private KEY = 'Dados-do-ToDo';
  private storage = localStorage.getItem(this.KEY);

  ngOnInit(): void {
    if (this.storage !==null) {
      const valorConvertido = JSON.parse(this.storage);
      this.itens = valorConvertido;
    }
  }

  adiciona() {
    this.itens.push(this.tarefa);
    this.tarefa = '';
    localStorage.setItem(this.KEY, JSON.stringify(this.itens));
  }

  remove(index: number) {
    this.itens.splice(index, 1);
    localStorage.setItem(this.KEY, JSON.stringify(this.itens));
  }

  limparToDo() {
    this.itens = [];
    localStorage.removeItem(this.KEY);
  }

  onChangeInput(event: any) {
    this.tarefa = event.target.value;
  }

}
