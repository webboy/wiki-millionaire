// Русский перевод для Wiki Millionaire
export default {
  common: {
    app_name: 'Вики Миллионер',
    description: 'Викторина на основе статей Википедии',
    yes: 'Да',
    no: 'Нет',
  },
  pages: {
    welcome: {
      title: 'Вики Миллионер',
      description: 'Проверьте свои знания и выиграйте виртуальные миллионы!',
      select_difficulty: 'Выберите сложность',
      how_to_play: 'Как играть',
    },
    game: {
      loading_question: 'Загрузка вопроса...',
      hint: 'Подсказка',
      source: 'Источник',
    },
    game_over: {
      game_over: 'Игра окончена',
      congrats: 'Поздравляем!',
      you_won: 'Вы выиграли',
      used_lifelines: 'Использованные подсказки',
      difficulty: 'Сложность',
      questions_answered: 'Отвечено вопросов',
    },
  },
  difficulties: {
    easy: {
      label: 'Лёгкий',
    },
    medium: {
      label: 'Средний',
    },
    hard: {
      label: 'Сложный',
    },
    questions: '{count} вопросов',
    time_per_question: '{time} секунд',
    choices: '{count} вариантов',
  },
  buttons: {
    how_to_play: {
      label: 'Как играть'
    },
    start: {
      label: 'Начать игру'
    },
    play_again: {
      label: 'Играть снова'
    },
    change_difficulty: {
      label: 'Изменить сложность'
    },
    cancel: {
      label: 'Отмена'
    },
    save: {
      label: 'Сохранить'
    }
  },
  inputs: {
    user_name: {
      label: 'Введите ваше имя',
      hint: 'Введите имя, которое хотите использовать в игре',
    },
    open_ai_key: {
      label: 'Ключ Open AI',
      hint: 'Введите ваш ключ Open AI',
    }
  },
  game_rules: {
    rule_1: 'Отвечайте на вопросы, созданные из статей Википедии',
    rule_2: 'Соревнуйтесь со временем на каждый вопрос',
    rule_3: 'Продвигайтесь по возрастающим уровням призов',
    rule_4: 'Разумно используйте подсказки, когда они нужны',
    rule_5: 'Достигайте рубежей для закрепления выигрыша',
  },
  lifelines: {
    fifty_fifty: {
      label: '50:50',
      description: 'Убирает половину неправильных ответов',
    },
    extend_time: {
      label: 'Продлить время',
      description: 'Увеличивает время на ответ',
    },
    show_hint: {
      label: 'Показать подсказку',
      description: 'Показывает подсказку к вопросу',
    },
  },
  settings: {
    settings: 'Настройки',
    subtitle: 'Настройки Вики Миллионера',
    version: 'Версия',
    api_key_description: 'Если стандартный ключ Open AI не работает, вы можете использовать свой. Убедитесь, что он имеет доступ к модели "gpt-40-mini".',
    language: 'Язык',
  }
};
