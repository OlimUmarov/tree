export function getLocales(): string | null {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        return localStorage.getItem('locale');
    } else {
        return null;
    }
}

export function setLocales(locale: string): void {
    localStorage.setItem('locale', locale)
}