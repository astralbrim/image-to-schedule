import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ApiService } from '../sercices/api.service';
import {
  Event,
  MessageEventImage,
  MessageEventText,
  RequestBodyDto,
} from './RequestBody.dto';
import { State } from './type/state';
import { LineService } from '../sercices/line.service';

@Controller('/api')
export class ApiController {
  state: State;

  constructor(
    private readonly apiService: ApiService,
    private readonly lineService: LineService,
  ) {
    this.state.isProcessing = false;
    this.state.receivableImage = false;
    this.state.fixable = false;
  }

  @Post()
  webhookEntry(@Body() requestBody: RequestBodyDto) {
    requestBody.events.forEach((event: Event) => {
      if (this.state.isProcessing) return;
      this.state.isProcessing = true;
      const eventType = event.type;
      switch (eventType) {
        case 'message':
          this.processMessage(event.message, event.replyToken);
        default:
          this.state.isProcessing = false;
          return;
      }
    });
  }

  processMessage(
    message: MessageEventImage | MessageEventText,
    replyToken: string,
  ) {
    switch (message.type) {
      case 'text':
        this.processText(message.text, replyToken);
      case 'image':
        this.apiService.analyzeImage();
      default:
        return;
    }
  }

  processText(text: string, replyToken: string) {
    switch (text) {
      case '登録':
        this.state.receivableImage = true;
        this.lineService.sendText(
          '予定の登録をします。写真を送ってください。',
          replyToken,
        );
      case '修正':
        this.state.fixable = true;
        this.lineService.sendText(
          '予定の修正をします。写真を送ってください。',
          replyToken,
        );
    }
  }
}
