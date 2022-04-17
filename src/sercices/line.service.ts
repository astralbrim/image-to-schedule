import { Injectable } from '@nestjs/common';
import { Client, MessageAPIResponseBase } from '@line/bot-sdk';

@Injectable()
export class LineService {
  constructor(private client: Client) {
    this.client = new Client({
      channelAccessToken: process.env.channelAccessToken,
      channelSecret: process.env.channelSecret,
    });
  }

  sendText(text: string, replyToken: string): Promise<MessageAPIResponseBase> {
    return this.client.replyMessage(replyToken, { type: 'text', text });
  }
}
