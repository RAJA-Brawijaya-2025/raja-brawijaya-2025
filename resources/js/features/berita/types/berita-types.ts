export type TBeritaItem = {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  slug: string;
};
export interface BeritaPaginationProps {
  current?: number;
  total?: number;
  onChange?: (page: number) => void;
}
