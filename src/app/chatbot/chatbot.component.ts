import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
})
export class ChatbotComponent {
  userInput = '';

  constructor(public chatService: ChatService) {}

  sendMessage(): void {
    const userMessage = this.userInput.trim();
    if (userMessage !== '') {
      this.chatService.addMessage('user', userMessage);
      this.chatService.addMessage('chatbot', '¡Hola! Soy un chatbot. ¿En qué puedo ayudarte?');
      this.userInput = ''; 
    }
  }

  clearConversation(): void {
    this.chatService.clearConversation();
  }
}
