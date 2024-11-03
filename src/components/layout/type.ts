export interface NavbarItemType {
  title: string;
  url: string;
  icon: string;
}

export interface NavbarItemProps extends NavbarItemType {
  onClickItem?: () => void;
}
