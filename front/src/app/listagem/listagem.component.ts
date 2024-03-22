import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
  ],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.scss',
})
export class ListagemComponent implements OnInit {
  formulario!: FormGroup;
  formBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.criarFormulario();
  }

  private criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      cpf: [''],
    });
  }

  public fonteDados = new MatTableDataSource<Cliente>();

  public colunas: Array<IColunas> = [
    {
      def: 'id',
      cabecalho: 'Id',
      conteudo: (element: Cliente) => `${element.id}`,
    },
    {
      def: 'nome',
      cabecalho: 'Nome',
      conteudo: (element: Cliente) => `${element.nome}`,
    },
    {
      def: 'cpf',
      cabecalho: 'Cpf',
      conteudo: (element: Cliente) => `${element.cpf}`,
    },
    {
      def: 'celular',
      cabecalho: 'Celular',
      conteudo: (element: Cliente) => `${element.celular}`,
    },
    {
      def: 'email',
      cabecalho: 'Email',
      conteudo: (element: Cliente) => `${element.email}`,
    },
  ];

  mostrarColunasDinamicas = ['id', 'nome', 'cpf', 'celular', 'email'];

  public buscarPorCpf() {}
}

export interface IColunas {
  def: string;

  cabecalho: string;

  conteudo: any;
}

export class Cliente {
  id!: number;
  nome!: string;
  cpf!: string;
  celular!: string;
  email!: string;
}
