import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  private seletedTheme = new BehaviorSubject({ theme: 'dark' });
  currentTheme = this.seletedTheme.asObservable();

  constructor() {}

  getTheme(): Observable<any> {
    return this.currentTheme;
  }

  changeTheme(currentObj: any) {
    this.seletedTheme.next(currentObj);
  }
}
