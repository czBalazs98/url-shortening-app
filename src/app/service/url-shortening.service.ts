import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UrlShorteningService {

  constructor(private http: HttpClient) {
  }

  shortenUrl(url: string): Observable<{ result_url: string }> {
    return this.http.post<{ result_url: string }>('api/shorten', {url: url});
  }
}
