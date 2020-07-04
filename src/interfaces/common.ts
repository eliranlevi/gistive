export interface Gist {
  id: string;
  title: string;
  files: GistFile;
  public: boolean;
}

export interface ApiRequest {
  url: string;
  options?: RequestInit;
}

export interface GistFile {
  [prop: string]: GistFileProps;
}

export interface GistFileProps {
  filename: string;
  type: string;
  language: string;
  raw_url: string;
  size: string;
}
