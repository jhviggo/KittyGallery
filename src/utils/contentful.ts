const { createClient } = require('contentful');

import { contentfulOptions, contentfulClient } from '@/interfaces/contentful';

import { AboutMeView, HomeView } from '@/interfaces/contentful';

let deliveryClient: any;
let previewClient: contentfulClient;

/**
 * Initialize the contentful Client
 */
export function initClients(): void {
  const { string: version } = require('../../package.json');
  const applicationName: string = `colours-of-kitty/${version}`;
  const config: contentfulOptions = {
    spaceId: process.env.VUE_APP_CONTENTFUL_SPACE_ID,
    deliveryToken: process.env.VUE_APP_CONTENTFUL_DELIVERY_TOKEN,
    previewToken: process.env.VUE_APP_CONTENTFUL_PREVIEW_TOKEN
  };

  deliveryClient = createClient({
    application: applicationName,
    space: config.spaceId,
    accessToken: config.deliveryToken,
    removeUnresolved: true
  });

  previewClient = createClient({
    application: applicationName,
    space: config.spaceId,
    accessToken: config.previewToken,
    removeUnresolved: true
  });
}

export async function getEntry(entry_id: string): Promise<any> {
  return deliveryClient.getEntry(entry_id);
}

export async function getEntries(type: string): Promise<any> {
  return deliveryClient.getEntries({ content_type: type })
    .then((entry: any) => entry.items
      .map((item: any) => ({
        image: item.fields.image.fields.src.fields.file.url,
        imageAlt: item.fields.image.fields.alt,
        text: item.fields.markdown
      })));
}

/**
 * Views
 */
export async function getAboutMeView(): Promise<AboutMeView> {
  return deliveryClient.getEntry('59ZReiJgvNb8KrRl2y0Sew')
    .then((entry: any) => ({
      title: entry.fields.title,
      desc: entry.fields.desc,
      image: `https:${entry.fields.image.fields.file.url}`,
      imageAlt: entry.fields.imageAlt
    }));
}

export async function getHomeView(): Promise<HomeView> {
  return deliveryClient.getEntry('198PCHsh8MXUQ3CODpIdFy')
    .then((entry: any) => ({
      title: entry.fields.title,
      description: entry.fields.description,
      buttonText: entry.fields.buttonText
    }));
}

/**
 * Components
 */
export async function getImageArticle(): Promise<any> {
  return deliveryClient.getEntries({ content_type: 'imageArticle' })
    .then((entry: any) => entry.items
      .map((item: any) => ({
        title: item.fields.title,
        description: item.fields.description,
        image: `https:${item.fields.image.fields.file.url}`,
        imageAlt: item.fields.imageAlt,
        id: item.sys.id,
        updatedAt: item.sys.updatedAt
      })));
}
