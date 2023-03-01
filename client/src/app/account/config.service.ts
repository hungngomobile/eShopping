import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() {}

  get authApiURI() {
      return 'https://localhost:9010';
  }

  get resourceApiURI() {
      return 'http:s//localhost:9010/api';
  }
}
