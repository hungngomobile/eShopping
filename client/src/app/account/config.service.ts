import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() {}

  get authApiURI() {
      return 'http://localhost:9010';
  }

  get resourceApiURI() {
      return 'http://localhost:9010/api';
  }
}
