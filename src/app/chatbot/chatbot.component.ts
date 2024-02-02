import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
})
export class ChatbotComponent {
  userInput = '';

  constructor(public chatService: ChatService) { }

  sendMessage(): void {
    const userMessage = this.userInput.trim();
    this.chatService.sendMessage("").subscribe(
      (response: any) => {
        const chatbotMessage = response.content || 'No se pudo obtener una cita aleatoria.';
        this.chatService.addMessage('user', userMessage);
        this.chatService.addMessage('chatbot', chatbotMessage);
      },
      (error: any) => {
        console.error('Error al llamar a la API de Random Quotes:', error);
      }
    );

    this.userInput = '';
  }

  clearConversation(): void {
    this.chatService.clearConversation();
  }
}
