import { Component, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() name!: string;
  @Input() image!: string;
  @Input() location!: string;
  @Input() occupation!: string;
  @Input() socialMediaLinks!: string[];
}
