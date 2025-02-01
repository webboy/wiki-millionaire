// Српски превод (ћирилица)

export default {
  common: {
    app_name: 'Вики Милионер',
    description: 'Квиз игра базирана на чланцима са Википедије',
    yes: 'Да',
    no: 'Не',
  },
  pages: {
    welcome: {
      title: 'Вики Милионер',
      description: 'Тестирајте своје знање и освојите виртуелне милионе!',
      select_difficulty: 'Изаберите тежину',
      how_to_play: 'Како се игра',
    },
    game: {
      loading_question: 'Учитавање питања...',
      hint: 'Помоћ',
      source: 'Извор',
    },
    game_over: {
      game_over: 'Крај игре',
      congrats: 'Честитамо!',
      you_won: 'Освојили сте',
      used_lifelines: 'Искоришћене помоћи',
      difficulty: 'Тежина',
      questions_answered: 'Одговорена питања',
    },
  },
  difficulties: {
    easy: {
      label: 'Лако',
    },
    medium: {
      label: 'Средње',
    },
    hard: {
      label: 'Тешко',
    },
    questions: '{count} питања',
    time_per_question: '{time} секунди',
    choices: '{count} понуђених одговора',
  },
  buttons: {
    how_to_play: {
      label: 'Како се игра'
    },
    start: {
      label: 'Започни игру'
    },
    play_again: {
      label: 'Играј поново'
    },
    change_difficulty: {
      label: 'Промени тежину'
    },
    cancel: {
      label: 'Откажи'
    },
    save: {
      label: 'Сачувај'
    }
  },
  inputs: {
    user_name: {
      label: 'Унесите ваше име',
      hint: 'Унесите име које желите да користите у игри',
    },
    open_ai_key: {
      label: 'Open AI кључ',
      hint: 'Унесите ваш Open AI кључ',
    }
  },
  game_rules: {
    rule_1: 'Одговарајте на питања генерисана из чланака са Википедије',
    rule_2: 'Такмичите се против времена за свако питање',
    rule_3: 'Напредујте кроз све веће нивое награда',
    rule_4: 'Мудро користите помоћи када су вам потребне',
    rule_5: 'Достигните прекретнице да осигурате своје добитке',
  },
  lifelines: {
    fifty_fifty: {
      label: '50:50',
      description: 'Уклања половину нетачних одговора',
    },
    extend_time: {
      label: 'Продужи време',
      description: 'Продужава време за одговор на питање',
    },
    show_hint: {
      label: 'Прикажи помоћ',
      description: 'Приказује помоћ за питање',
    },
  },
  settings: {
    settings: 'Подешавања',
    subtitle: 'Подешавања Вики Милионера',
    version: 'Верзија',
    api_key_description: 'Ако подразумевани Open AI кључ не ради, можете користити свој, само проверите да ли има\n' +
      '            приступ "gpt-4o-mini" моделу.',
    language: 'Језик',
  }
};
