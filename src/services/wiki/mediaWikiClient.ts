import axios from 'axios';
import type { WikiClient, WikiPage } from 'src/services/wiki/types'

export class MediaWikiClient implements WikiClient {

  // Map to store API bases for different languages
  private readonly WIKI_LANGUAGES = {
    en: 'https://en.wikipedia.org/w/api.php',
    es: 'https://es.wikipedia.org/w/api.php',
    fr: 'https://fr.wikipedia.org/w/api.php',
    de: 'https://de.wikipedia.org/w/api.php',
    it: 'https://it.wikipedia.org/w/api.php',
    pt: 'https://pt.wikipedia.org/w/api.php',
    ru: 'https://ru.wikipedia.org/w/api.php',
    ja: 'https://ja.wikipedia.org/w/api.php',
    zh: 'https://zh.wikipedia.org/w/api.php',
    sr: 'https://sr.wikipedia.org/w/api.php',
    // Add more languages as needed
  };


  private getApiBase(language: string): string {
    // Default to English if language not supported
    return this.WIKI_LANGUAGES[language as keyof typeof this.WIKI_LANGUAGES] || this.WIKI_LANGUAGES.en;
  }

  async getRandomPage(language: string = 'en'): Promise<WikiPage> {

    const apiBase = this.getApiBase(language);

    const params = {
      action: 'query',
      format: 'json',
      list: 'random',
      rnnamespace: 0,
      rnlimit: 1,
      origin: '*'
    };

    const randomResponse = await axios.get(apiBase, { params });
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

    const pageResponse = await axios.get(apiBase, { params: pageParams });
    const page = pageResponse.data.query.pages[pageId];

    return {
      pageId: pageId.toString(),
      title: page.title,
      summary: page.extract,
      url: page.fullurl,
      language: 'en'
    };
  }
}
