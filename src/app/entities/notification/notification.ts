import { Content } from './content';

export type NotificationProps = {
  content: Content;
  category: string;
  readAt?: Date | null;
  recipientId: string;
  createdAt: Date;
};

export class Notification {
  private props: NotificationProps;

  constructor(props: NotificationProps) {
    this.props = props;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  /**
   * We won't update the createdAt property, so we don't need a setter for it.
   */
  public get createdAt(): Date {
    return this.props.createdAt;
  }
}

// const notification = new Notification({});

// notification.content;
