export interface contentfulOptions {
  spaceId: string;
  deliveryToken: string;
  previewToken: string;
}

export interface contentfulClient {
  getSpace: Promise<void>;
  getLocales: Promise<void>;
  getEntry: any;
}

/**
 * Views
 */
export class AboutMeView {
  image: string;

  imageAlt: string;

  title: string;

  desc: string;

  constructor() {
    this.image = '';
    this.imageAlt = '';
    this.title = '';
    this.desc = '';
  }
}

export class HomeView {
  title: string;

  description: string;

  buttonText: string;

  constructor() {
    this.title = '';
    this.description = '';
    this.buttonText = '';
  }
}

/**
 * Components
 */
export interface ImageArticle {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  id: string;
  updatedAt: string;
}
