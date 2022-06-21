export type ContentType = {
  title: string;
  posts:PostType[];
}

export type PopupType = {
    description:string;
    tagTitle?: string;
    tags?: string[];
    company?: string;
    button?: {
      link: string;
      label: string;
    }
}

export type PostType = {
  background: string;
  title: string;
  type?: 'popup' | 'link';
  popup?: PopupType;
  link?: string;
}
