import {Image} from './Image';
import {Bulletpoint} from './bpoint';

export class Product {
  private _id: number;
  private _amazonLink: string;
  private _brand: string;
  private _description: string;
  private _isPrime: boolean;
  private _marketplace: string;
  private _price: number;
  private _title: string;
  private _asin: string;
  private _bulletpoints: Bulletpoint[];
  private _images: Image[];
  private _mainImage: string;


  // tslint:disable-next-line:max-line-length
  constructor(id: number, amazonLink: string, brand: string, description: string, isPrime: boolean, marketplace: string, price: number, title: string, asin: string, bulletpoints: Bulletpoint[], images: Image[]) {
    this._id = id;
    this._amazonLink = amazonLink;
    this._brand = brand;
    this._description = description;
    this._isPrime = isPrime;
    this._marketplace = marketplace;
    this._price = price;
    this._title = title;
    this._asin = asin;
    this._bulletpoints = bulletpoints;
    this._images = images;

    if (images[0] !== undefined) {
      this._mainImage = images[0].imageLink;
    }
    else {
      this._mainImage = '';
    }
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get amazonLink(): string {
    return this._amazonLink;
  }

  set amazonLink(value: string) {
    this._amazonLink = value;
  }

  get brand(): string {
    return this._brand;
  }

  set brand(value: string) {
    this._brand = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get isPrime(): boolean {
    return this._isPrime;
  }

  set isPrime(value: boolean) {
    this._isPrime = value;
  }

  get marketplace(): string {
    return this._marketplace;
  }

  set marketplace(value: string) {
    this._marketplace = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get asin(): string {
    return this._asin;
  }

  set asin(value: string) {
    this._asin = value;
  }

  get bulletpoints(): Bulletpoint[] {
    return this._bulletpoints;
  }

  set bulletpoints(value: Bulletpoint[]) {
    this._bulletpoints = value;
  }

  get images(): Image[] {
    return this._images;
  }

  set images(value: Image[]) {
    this._images = value;
  }


  get mainImage(): string {
    return this._mainImage;
  }

  set mainImage(value: string) {
    this._mainImage = value;
  }
}
