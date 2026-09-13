export interface FooterLink {
  title: string;
  href: string;
  action?: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const footerNav: FooterColumn[] = [
  {
    title: 'О сервисе',
    links: [
      { title: 'О нас', href: '#' },
      { title: 'Наши шефы', href: '#' },
      { title: 'Гарантия вкуса', href: '#', action: 'guarantee' },
      { title: 'Отзывы', href: '#' },
      { title: 'Сотрудничество для шефов', href: '#' },
    ],
  },
  {
    title: 'Клиентам',
    links: [
      { title: 'Подписка на питание', href: '/subscription' },
      { title: 'Шеф-меню', href: '/menu' },
      { title: 'Доставка и оплата', href: '#' },
      { title: 'Часто задаваемые вопросы', href: '#' },
      { title: 'Обратная связь', href: '#' },
    ],
  },
];

export const contacts = {
  address: 'ул. Профессора Попова, 23, Санкт-Петербург',
  phone: '+7 (812) 409-35-90',
  phoneHref: 'tel:+78124093590',
  email: 'info@personalchef.ru',
  hours: 'Пн-Вс 09:00–21:00',
};

export const legalLinks: FooterLink[] = [
  { title: 'Политика конфиденциальности', href: '#' },
  { title: 'Публичная оферта', href: '#' },
  { title: 'Согласие на обработку персональных данных', href: '#' },
];
