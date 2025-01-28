export interface WikiPage {
  pageId: string;
  title: string;
  summary: string;
  url: string;
}

export interface WikiClient {
  getRandomPage(): Promise<WikiPage>;
}
