import { Component, Input } from '@angular/core';
import { Note } from '../../interface/note';

@Component({
  selector: 'app-component-note',
  standalone: true,
  imports: [],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'
})
export class NoteComponent {
  @Input()note!: Note;
}
