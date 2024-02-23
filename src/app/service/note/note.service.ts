import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../../interface/note';

interface NoteMessage {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) {}

  getAllNote():Observable<Note[]>{
    return this.http.get<Note[]>("http://localhost:4000/api/note")
  }


  updateNoteOrder(previous: number, current: number):Observable<NoteMessage> {
    return this.http.put<NoteMessage>(
        "http://localhost:4000/api/note/order",
        {
          previous,
          current
        }
    )
  }
}
