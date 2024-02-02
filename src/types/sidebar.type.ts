import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};
export type TUsePaths = {
  name?: string;
  path?: string;
  children?: ReactNode;
};

export type TSidebarItem = {
  path: string;
  label: ReactNode;
  key: string;
  element?: ReactNode;
};
