import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './listagem/listagem.component';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private url = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  public salvar(cliente: Cliente) {
    return this.http.post<Cliente>(this.url, cliente);
  }

  public buscarPorCpf(cpf: string) {
    let parametrosHttp = new HttpParams();

    parametrosHttp = parametrosHttp.append('cpf', cpf);

    return this.http
      .get<Cliente>(this.url, {
        params: parametrosHttp,
      })
      .pipe(take(1));
  }
}
