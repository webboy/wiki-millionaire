import axios from 'axios';
import type { WikiClient, WikiPage } from 'src/services/wiki/types'

export class MediaWikiClient implements WikiClient {
  private readonly API_BASE = 'https://en.wikipedia.org/w/api.php';

  async getRandomPage(): Promise<WikiPage> {
    const params = {
      action: 'query',
      format: 'json',
      list: 'random',
      rnnamespace: 0,
      rnlimit: 1,
      origin: '*'
    };

    const randomResponse = await axios.get(this.API_BASE, { params });
    const pageId = randomResponse.data.query.random[0].id;

    const pageParams = {
      action: 'query',
      format: 'json',
      pageids: pageId,
      prop: 'extracts|info',
      exintro: true,
      explaintext: true,
      inprop: 'url',
      origin: '*'
    };

    const pageResponse = await axios.get(this.API_BASE, { params: pageParams });
    const page = pageResponse.data.query.pages[pageId];

    return {
      pageId: pageId.toString(),
      title: page.title,
      summary: page.extract,
      url: page.fullurl
    };
  }
}
