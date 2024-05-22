import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css',
})
export class RatingComponent implements OnChanges {
  @Input()
  public rating: number | undefined;

  public dinamicWidth: string = '0';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rating']) {
      this.dinamicWidth = this.getFillWidth(this.rating);
    }
  }

  private getFillWidth(rating?: number): string {
    if (!rating) return '0';
    return (rating * 10).toFixed() + '%';
  }
}
