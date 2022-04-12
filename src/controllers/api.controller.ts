import {Body, Controller, Post} from '@nestjs/common';
import { AppService } from '../sercices/app.service';
import {RequestBodyDto} from "./RequestBody.dto";

@Controller("/api")
export class ApiController {
  constructor(private readonly appService: AppService) {}

  @Post()
  webhookEntry(@Body() requestBody: RequestBodyDto){
  }
}
