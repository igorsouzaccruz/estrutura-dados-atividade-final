import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from './listagem/listagem.component';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private url = 'http://localhost:8080/clientes';

  constructor(private http: HttpClient) {}

  public salvar(cliente: Cliente) {
    return this.http.post<Cliente>(this.url, cliente);
  }

  public buscarPorCpf(cpf: string): Observable<any> {
    return this.http.get<any>(this.url + '/' + cpf).pipe(take(1));
  }

  public buscar(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
