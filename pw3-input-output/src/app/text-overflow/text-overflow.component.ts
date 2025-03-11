import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-overflow',
  imports: [],
  templateUrl: './text-overflow.component.html',
  styleUrl: './text-overflow.component.css'
})
export class TextOverflowComponent {
  @Input() titulo = "Hãn? hahahahahha"
  @Input() texto = "Hoje eu queria que o ônibus estivesse vazio, mas infelizmente estava lotado"
  @Input() clip : boolean = true
}
