export type Item = {
  icon: any;
  title: string;
  description: string;
  callToAction: string;
  link: string;
};

export type Technology = {
  icon: any;
  title: string;
  description: string;
  tools: string[];
};

export type GithubRepo = {
  name: string;
  url: string;
  description: string;
  language: string;
};

export type MenuItemProps = {
  item: Item;
};

export type TechnologyItemProps = {
  item: Technology;
};
