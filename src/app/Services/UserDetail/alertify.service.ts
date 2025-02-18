import { Injectable } from '@angular/core';
declare var alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  message(message: string, options : Partial<AlertifyOptions>  ) {

  const msj= alertify[options.messageType](message);
  if(options.dissmisOther){
    msj.dissmisOther();
  }
    alertify.set('notifier','position',options.position)
    alertify.set('notifier','delay',options.delay)

  }
dismis(){
  alertify.dismissAll();
}

}

export class AlertifyOptions{
  messageType : MessageType = MessageType.Message;
  position : Position = Position.BottomCenter;
  delay : number = 3;
  dissmisOther = false
  
}

export enum MessageType {
  Error = "error",
  Message = "message",
  Notify = "notify",
  Success = "success",
  Warning = "warning"

}

export enum Position{
  TopCenter = "top-center",
  TopRight = "top-right",
  TopLeft = "top-left",
  BottomRight = "bottom-right",
  BottomCenter = "bottom-center",
  BottomLeft = "bottom-left"
}

