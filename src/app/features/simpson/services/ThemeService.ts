import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  THEME_KEY = 'app-theme';
  themes = ['valentine', 'dark', 'light'];

  saveTheme(theme: string) {
    const themeJson = JSON.stringify(theme);
    localStorage.setItem(this.THEME_KEY, themeJson);
  }

  getTheme() {
    const themeJson = localStorage.getItem(this.THEME_KEY);
    if (!themeJson) return 'valentine';
    return JSON.parse(themeJson);
  }

  // Cambia el tema y actualiza el atributo global
  setTheme(theme: string): void {
    document.documentElement.setAttribute('data-theme', theme);
    this.saveTheme(theme);
  }
}
