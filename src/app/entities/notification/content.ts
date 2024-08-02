/**
 * Value objects - DDD
 *
 * Não obrigatório
 */
export class Content {
  private readonly content: string;

  constructor(content: string) {
    const isContentLengthValid = this.validateContentLength(content);

    if (!isContentLengthValid) {
      throw new Error('Content must be between 5 and 255 characters');
    }

    this.content = content;
  }

  private validateContentLength(content: string): boolean {
    return content.length < 5 && content.length > 255;
  }

  public get value(): string {
    return this.content;
  }
}
