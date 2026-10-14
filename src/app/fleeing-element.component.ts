import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fleeing-element',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="fleeing-box"
      [style.left.px]="posX"
      [style.top.px]="posY">
      🎁 Spróbuj mnie złapać!
    </div>
  `,
  styles: [`
    .fleeing-box {
      position: fixed; 
      padding: 1rem 2rem;
      background: linear-gradient(135deg, #3b82f6, #ec4899);
      color: white;
      font-weight: bold;
      border-radius: 9999px;
      cursor: pointer;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
      user-select: none;
      z-index: 9999;
      transition: left 0.15s ease-out, top 0.15s ease-out;
    }
  `]
})
export class FleeingElementComponent {
  posX = window.innerWidth / 2 - 100;
  posY = window.innerHeight / 2 - 30;

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const boxCenterX = this.posX + 100;
    const boxCenterY = this.posY + 30;

    const distance = Math.hypot(event.clientX - boxCenterX, event.clientY - boxCenterY);

    if (distance < 150) {
      this.teleportToRandomPosition();
    }
  }

  teleportToRandomPosition() {
    const margin = 80;
    const maxX = window.innerWidth - margin - 200;
    const maxY = window.innerHeight - margin - 60;
    this.posX = Math.max(margin, Math.random() * maxX);
    this.posY = Math.max(margin, Math.random() * maxY);
  }
}