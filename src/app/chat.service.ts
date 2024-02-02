import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private conversation: { type: string; message: string }[] = [];
  // private apiUrl = 'https://api.openai.com/v1/completions'; 
  private apiUrl = 'https://api.quotable.io/random'; 

  private apiKey = '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';

  constructor(private http: HttpClient) {}

  addMessage(type: string, message: string): void {
    this.conversation.push({ type, message });
    console.log(this.conversation)
  }

  clearConversation(): void {
    this.conversation = [];
  }

  getConversation(): { type: string; message: string }[] {
    return this.conversation;
  }

  // sendMessageToChatGPT(userMessage: string): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${this.apiKey}`,
  //   });

  //   const requestData = {
  //     prompt: userMessage,
  //     max_tokens: 100,
  //     model: "text-similarity-davinci-001"
  //   };

  //   return this.http.post<any>(this.apiUrl, requestData, { headers });
  // }

  sendMessage(userMessage: string): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
