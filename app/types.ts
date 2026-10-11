import type { ReactNode } from "react";

export type Item = {
  icon: ReactNode;
  title: string;
  description: string;
  callToAction: string;
  link: string;
};

export type Technology = {
  icon: ReactNode;
  title: string;
  description: string;
  tools: string[];
};

export type GithubRepo = {
  name: string;
  url: string;
  description: string | null;
  language: string | null;
};

export type MenuItemProps = {
  item: Item;
};

export type TechnologyItemProps = {
  item: Technology;
};
