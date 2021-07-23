class Mx {
  public static get myField1(): number {
    return 1;
  }

  private get ['myField2'](): string {
    return 'hello world';
  }
}
