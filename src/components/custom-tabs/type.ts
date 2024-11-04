import { ReactNode } from 'react';

export interface TabsType {
  id: number;
  title: string;
  icon?: string;
  content: ReactNode;
}

export interface CustomTabsProps {
  tabs: TabsType[];
}
