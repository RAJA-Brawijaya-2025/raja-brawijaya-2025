export type TBeritaItem = {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  slug: string;
};

const placeholderImage = ' /assets/berita/card-image-berita.webp';

export const daftarBerita: TBeritaItem[] = [
  {
    id: '1',
    title: 'Raja Brawijaya Dinobatkan Sebagai Ospek Terbaik',
    date: '12 Agustus 2025',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: placeholderImage,
    slug: 'raja-brawijaya-dinobatkan',
  },
  {
    id: '2',
    title: 'Semarakkan Kampanye',
    date: '12 Agustus 2025',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: placeholderImage,
    slug: 'semarakkan-kampanye',
  },
  {
    id: '3',
    title: 'Lorem Ipsum Dolor Sit Amet',
    date: '12 Agustus 2025',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: placeholderImage,
    slug: 'lorem-ipsum-1',
  },
  {
    id: '4',
    title: 'Consectetur Adipiscing Elit',
    date: '12 Agustus 2025',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: placeholderImage,
    slug: 'lorem-ipsum-2',
  },
  {
    id: '5',
    title: 'Sed Do Eiusmod Tempor',
    date: '12 Agustus 2025',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: placeholderImage,
    slug: 'lorem-ipsum-3',
  },
  {
    id: '6',
    title: 'Incididunt ut Labore et Dolore',
    date: '12 Agustus 2025',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    image: placeholderImage,
    slug: 'lorem-ipsum-4',
  },
];
