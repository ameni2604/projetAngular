import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Class/prouduct';
import { Client } from '../Class/client';

const API_URL="http://localhost:3000/products";
const API_client="http://localhost:3200/client";
@Injectable({
  providedIn: 'root'
})
export class ProductSericeService {
private readonly http:HttpClient=inject(HttpClient);

public getProduts():Observable<Product[]>{
  return this.http.get<Product[]>(API_URL);
}
public addProduct(p: Product): Observable<Client> {
  const client: Client={
    nom: '',
    prenom: '',
    mdp: '',
    nomUtilisateur: '',
    products: [p], 
    commentaire: []
  };

  return this.http.post<Client>(API_client, client);
}
public getClient():Observable<Client[]>{
  return this.http.get<Client[]>(API_client);
}

}
