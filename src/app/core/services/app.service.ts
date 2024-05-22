import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

interface IRefreshPrivateKey {
  message: string;
}

@Injectable({
  providedIn: 'root'
})

export class AppService {

  DOMAIN = "http://192.168.1.50:8082"

  constructor(private http: HttpClient) {
  }

  refreshPrivateKey(key: string): Observable<IRefreshPrivateKey> {
    return this.http
      .put<IRefreshPrivateKey>(`${this.DOMAIN}/user/update-key/1`, {
        key: key
      })
  }

}
