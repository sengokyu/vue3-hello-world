export class HelloWorld {
  private _name = "";

  // お名前
  get name(): string {
    return this._name;
  }

  // お名前
  set name(value: string) {
    this._name = value;
  }

  // Hello Worldメッセージ
  get message(): string {
    return `Hello ${this.name} !!`;
  }
}
