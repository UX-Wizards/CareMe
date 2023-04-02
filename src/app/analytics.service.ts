import { Injectable } from '@angular/core'

declare const gtag: Function;

@Injectable({
  providedIn: 'root'
})

export class AnalyticsService {
  public static Tag(name: string, event: string): void
  public static Tag(name: string): void
  public static Tag(name: string, event?: string) {
    gtag('event', event || 'select_content', {item_id: name})
  }
}
