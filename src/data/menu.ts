// Описываем форму объекта "Категория"
export interface Category {
  slug: string;           // латинское имя для URL (zavtraki)
  title: string;          // как показывать (Завтраки)
  img: string;            // путь к картинке (/images/menu/zavtraki.jpg)
  subcategories: string[]; // список подкатегорий
}

export const categories: Category[] = [
  {
    slug: 'zavtraki',
    title: 'Завтраки',
    img: 'public/images/menu/breakfast.jpg',
    subcategories: ['Каши и гранола', 'Яйца и скрэмбл', 'Сырники и панкейки'],
  },
  {
    slug: 'salaty',
    title: 'Салаты',
    img: 'public/images/menu/salads.jpg',
    subcategories: ['С рыбой', 'С мясом', 'Вегетарианские'],
  },
  {
    slug: 'supy',
    title: 'Супы',
    img: 'public/images/menu/soup.jpg',
    subcategories: ['Крем-супы', 'Классические', 'Сезонные'],
  },
  {
    slug: 'goryachie-blyuda',
    title: 'Горячие блюда',
    img: 'public/images/menu/hot.jpg',
    subcategories: ['Мясо', 'Рыба и морепродукты', 'Птица'],
  },
  {
    slug: 'holodnye-zakuski',
    title: 'Холодные закуски',
    img: 'public/images/menu/cold-snack.jpg',
    subcategories: ['Брускетты', 'Тартары', 'Ассорти'],
  },
  {
    slug: 'goryachie-zakuski',
    title: 'Горячие закуски',
    img: 'public/images/menu/hot-snack.jpg',
    subcategories: ['Спринг-роллы', 'Киш', 'Хумус и овощи'],
  },
  {
    slug: 'vegetarian',
    title: 'Вегетарианские',
    img: 'public/images/menu/vegan.jpg',
    subcategories: ['Боулы', 'Основные', 'Закуски'],
  },
  {
    slug: 'deserty',
    title: 'Десерты',
    img: 'public/images/menu/deserts.jpg',
    subcategories: ['Тарты', 'Муссы', 'Макарон'],
  },
  {
    slug: 'napitki',
    title: 'Напитки',
    img: 'public/images/menu/new.jpg',
    subcategories: ['Смузи', 'Кофе и чай', 'Лимонады'],
  },
  {
    slug: 'dobavki',
    title: 'Добавки',
    img: 'public/images/menu/add.jpg',
    subcategories: ['Соусы', 'Снеки', 'Хлеб'],
  },
  {
    slug: 'sezonnoe',
    title: 'Сезонное меню',
    img: 'public/images/menu/season.jpg',
    subcategories: ['Лето', 'Осень'],
  },
  {
    slug: 'novinki',
    title: 'Новинки',
    img: 'public/images/menu/new.jpg',
    subcategories: ['Этого месяца', 'Архив'],
  },
];
