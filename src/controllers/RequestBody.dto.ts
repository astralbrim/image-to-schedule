export class RequestBodyDto {
    destination: string;
    events: [
        {
            type: "message" | "follow" | "unfollow";
            message?: MessageEventText | MessageEventImage;
            timestamp: string;
            source: {
                type: "user";
                userId: string;
            }
            replyToken: string;
            mode: "active" | "standby"
        }
    ]
}

class MessageEventText {
    type: "text";
    id: string;
    text: string;
}

class MessageEventImage {
    type: "image";
    id: string;
    contentProvider: {
        type: "line" | "external";
    }
    imageSet: {
        id: string;
        index: number;
        total: number;
    }
}