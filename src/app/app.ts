import { Component, signal } from '@angular/core';
import { FleeingElementComponent } from './fleeing-element.component';
import { FormsModule } from '@angular/forms';

interface TileData {
  number: string;
  text: string;
  imageUrl: string;
  isFlipped: boolean;
}

@Component({
  selector: 'app-root',
  imports: [FleeingElementComponent, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  newTileText: string = '';

  tiles: TileData[] = [
      { number: '01', text: '40 cm w bicepsie i bycia the hottest guy in the city (ups, już jesteś)', imageUrl: 'assets/biceps.jpg', isFlipped: false },
      { number: '02', text: 'Podróży małych i dużych (lol, samych dużych, a właściwie pracowania w przerwach od podróży)', imageUrl: 'assets/palm.jpg', isFlipped: false },
      { number: '03', text: '€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€€', imageUrl: 'assets/euro.jpg', isFlipped: false },
      { number: '04', text: 'Piesków, bo to niebiańskie istoty zesłane nam, niegodnym ludziom, na osłodzenie nędznego żywota', imageUrl: 'assets/mops.jpg', isFlipped: false },
      { number: '05', text: '❤❤❤ Kąpania się w miłości ❤❤❤', imageUrl: 'assets/love.jpg', isFlipped: false },
      { number: '06', text: 'Pysznego jedzonka na uleczenie duszy i ciała', imageUrl: 'assets/food.png', isFlipped: false },
      { number: '07', text: 'Perfektes Deutsch. Da werden ihnen die Kinnladen herunterfallen!', imageUrl: 'assets/german.png', isFlipped: false },
      { number: '08', text: 'Domku w Szwajcarii, ale po sąsiedzku ze mną w Polsce. Popracujemy nad teleportem!', imageUrl: 'assets/switzerland.jpg', isFlipped: false },
      { number: '09', text: 'Dodatkowe 3 życzenia ode mnie w prezencie:  ', imageUrl: 'assets/gift.jpg', isFlipped: false }
    ];
  
  toggleFlip(item: TileData) {
    item.isFlipped = !item.isFlipped;
  }

  addNewTile() {
      if (!this.newTileText.trim() || this.tiles.length >= 12) return;
      const nextNumber = (this.tiles.length + 1).toString().padStart(2, '0');

      const newTile: TileData = {
        number: nextNumber,
        text: this.newTileText,
        imageUrl: 'assets/dajana.jpg', 
        isFlipped: false
      };

      this.tiles.push(newTile);
      this.newTileText = '';
    }

}

