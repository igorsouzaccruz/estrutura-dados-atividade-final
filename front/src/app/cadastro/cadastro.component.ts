import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss',
})
export class CadastroComponent {
  formulario!: FormGroup;
  formBuilder = inject(FormBuilder);
  // service = inject(ClienteService);

  ngOnInit(): void {
    this.criarFormulario();
  }

  private criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      celular: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  public salvar() {
    // this.service.salvar(this.formulario.value).subscribe({
    //   next: (respota) => console.log(respota),
    //   error: (erro) => console.log('error'),
    //   complete: () => {
    //     console.log('fim');
    //   },
    // });
  }

  public limparFormulario(): void {
    this.formulario.reset();
  }
}
