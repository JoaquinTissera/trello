import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray} from '@angular/cdk/drag-drop';

import { Note } from '../../interface/note';
import { NoteComponent } from '../../components/note/note.component';
import { NoteService } from '../../service/note/note.service';

@Component({
  selector: 'app-containers-box',
  standalone: true,
  imports: [NoteComponent, CdkDrag, CdkDropList],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})
export class BoxComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService){}

  ngOnInit(): void {
    this.noteService.getAllNote()
      .subscribe(notes => this.notes = notes)
  }

  drop(event: CdkDragDrop<string[]>){
    moveItemInArray(this.notes, event.previousIndex, event.currentIndex)
    this.noteService.updateNoteOrder(event.previousIndex, event.currentIndex).subscribe()
  }

}
