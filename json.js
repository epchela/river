const state = {
  // Общие данные, которые могут присутствовать на всех страницах
  // В целом это относится к контактам, возможно что то еще
  default: {
    телефон,
    адрес,
    соцсети,
    email,
    времяРаботы // ?
  },

  особенности: {
    эелементыСлайдера: [
      {
        id,
        заголовок,
        текст,
        путьИзображения
      }
    ]
  },
  индивидуальноДляВас: {
    эелементыСлайдера: [
      {
        id,
        заголовок,
        текст,
        путьИзображения, // Нужно ли?
        url // если нужен динамический путь
      }
    ]
  },
  услуги: {
    эелементыСлайдера: [
      {
        заголовок,
        htmlРазметка, 
        список: [{ id, название, url }], // Так понимаю ссылки на внутрение страницы
        путьИзображения
      }
    ]
  },
  карты: {
    // Данные карт
    cardItems: [
      {
        заголовок,
        возраст,
        срокДействия,
        заморозка,
        цена,
        htmlРазметка,
        список: [{ id, название, url }], // Так понимаю ссылки на внутрение страницы
        путьИзображения
      }
    ]
  },
  галерея: {
    фильтр: ["название фильтра"],
    imgItems: [
      {
        путьИзображения,
        тип, // тег
        заголовок // описание\подпись
      }
    ]
  },
  персонал: {
    фильтр: ['тип тренера'],
    teamItems: [
      {
        тип, // тег
        имя,
        цитата: { заголовок, text }, // Елси цитата имеет заголовок (имя)
        короткоеОписание, // ?
        htmlРазметка,
        списокДопУслуг: [{ id, название }]
      }
    ]
  },
  новости: {
    фильтр: [],
    закрепленныеНовости: [{...свойства новости}], // недолжна быть всписокНовостей
    списокНовостей: [
      {
        id,
        тип,
        дата,
        путьИзображенияПревью,
        заголовок,
        htmlРазметка,
        url // ?
      }
    ]
  },
  расписание: {
    фильтр: {
      направление: [],
      время: [],
      группыМышц: [],
      эффекты: [],
      длительность: [],
    },
    itemsList: [
      {
        направление,
        время: ['начало', 'конец'], // Можно разбить на отдельные свойства
        группыМышц,
        эффекты,
        длительность,
        дата,
        название,
        имяТренера,
        фотоТренера,
        htmlРазметка
      }
    ]
  }
};