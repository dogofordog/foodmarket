export interface Chef {
  slug: string;
  name: string;
  role: string;
  experience: string;
  description: string;
  img: string;
}

export const chefs: Chef[] = [
  {
    slug: 'belova',
    name: 'Анна Белова',
    role: 'Шеф-кондитер',
    experience: 'Опыт: 12 лет, 500+ тортов на заказ',
    description: 'Торты, десерты и выпечка на заказ. Натуральные ингредиенты, авторские рецепты.',
    img: '/images/chefs/belova.jpg',
  },
  {
    slug: 'orlov',
    name: 'Михаил Орлов',
    role: 'Шеф-кейтеринг',
    experience: 'Опыт: 8 лет, 200+ мероприятий',
    description: 'Организация банкетов и фуршетов любого масштаба. Авторское меню для вашего мероприятия.',
    img: '/images/chefs/orlov.jpg',
  },
  {
    slug: 'krasnova',
    name: 'Елена Краснова',
    role: 'Шеф-пекарь',
    experience: 'Опыт: 10 лет, фермерская закваска',
    description: 'Ремесленный хлеб и выпечка на закваске. Свежая выпечка каждое утро с доставкой к завтраку.',
    img: '/images/chefs/krasnova.jpg',
  },
];
