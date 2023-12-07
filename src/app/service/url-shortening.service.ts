import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UrlShorteningService {

  private apiUrlEnvVar = import.meta.env.NG_APP_API_URL;

  private apiUrl = this.apiUrlEnvVar ? `${import.meta.env.NG_APP_API_URL}/api/v1/shorten` : 'api/shorten';

  constructor(private http: HttpClient) {
  }

  shortenUrl(url: string): Observable<{ result_url: string }> {
    return this.http.post<{ result_url: string }>(this.apiUrl, {url: url});
  }
}
