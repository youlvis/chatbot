import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private conversation: { type: string; message: string }[] = [];

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
}
