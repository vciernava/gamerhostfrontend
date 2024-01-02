type Products = Product[];

type Product = {
  title: string;
  price: number;
  features: Feature[];
  image: string;
  featured: boolean;
};

type Feature = {
  icon?: (props: TablerIconsProps) => JSX.Element;
  title: string;
  value: string;
};
