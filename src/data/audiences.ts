export interface Audience {
  slug: string;
  title: string;
  subtitle: string;
  img: string;
}

export const audiences: Audience[] = [
  {
    slug: 'office',
    title: 'Офисные сотрудники',
    subtitle: 'Обеды в офис по подписке, от 390 ₽/день',
    img: '/images/audience/office.jpg',
  },
  {
    slug: 'family',
    title: 'Любимые блюда для всей семьи',
    subtitle: 'Семейный ужин на 4 персоны — от 1990 ₽',
    img: '/images/audience/family.jpg',
  },
  {
    slug: 'private-chef',
    title: 'Шеф на дом',
    subtitle: 'Ужин с шефом у вас на кухне — от 8 900 ₽ за вечер',
    img: '/images/audience/chef.jpg',
  },
  {
    slug: 'business',
    title: 'Бизнес',
    subtitle: 'Питание смены от 50 человек — от 320 ₽/порция',
    img: '/images/audience/business.jpg',
  },
];
