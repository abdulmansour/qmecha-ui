export class Image {
  private _id: number;
  private _imageLink: string;

  constructor(id: number, imageLink: string) {
    this._id = id;
    this._imageLink = imageLink;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get imageLink(): string {
    return this._imageLink;
  }

  set imageLink(value: string) {
    this._imageLink = value;
  }
}
