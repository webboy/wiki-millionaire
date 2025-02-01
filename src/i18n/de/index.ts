// Deutsche Übersetzung für Wiki Millionaire
export default {
  common: {
    app_name: 'Wiki Millionär',
    description: 'Ein Quizspiel basierend auf Wikipedia-Artikeln',
    yes: 'Ja',
    no: 'Nein',
  },
  pages: {
    welcome: {
      title: 'Wiki Millionär',
      description: 'Teste dein Wissen und gewinne virtuelle Millionen!',
      select_difficulty: 'Schwierigkeitsgrad wählen',
      how_to_play: 'Spielanleitung',
    },
    game: {
      loading_question: 'Frage wird geladen...',
      hint: 'Hinweis',
      source: 'Quelle',
    },
    game_over: {
      game_over: 'Spiel vorbei',
      congrats: 'Herzlichen Glückwunsch!',
      you_won: 'Du hast gewonnen',
      used_lifelines: 'Verwendete Joker',
      difficulty: 'Schwierigkeitsgrad',
      questions_answered: 'Beantwortete Fragen',
    },
  },
  difficulties: {
    easy: {
      label: 'Einfach',
    },
    medium: {
      label: 'Mittel',
    },
    hard: {
      label: 'Schwer',
    },
    questions: '{count} Fragen',
    time_per_question: '{time} Sekunden',
    choices: '{count} Antwortmöglichkeiten',
  },
  buttons: {
    how_to_play: {
      label: 'Spielanleitung'
    },
    start: {
      label: 'Spiel starten'
    },
    play_again: {
      label: 'Erneut spielen'
    },
    change_difficulty: {
      label: 'Schwierigkeit ändern'
    },
    cancel: {
      label: 'Abbrechen'
    },
    save: {
      label: 'Speichern'
    }
  },
  inputs: {
    user_name: {
      label: 'Gib deinen Namen ein',
      hint: 'Gib den Namen ein, den du im Spiel verwenden möchtest',
    },
    open_ai_key: {
      label: 'Open AI Schlüssel',
      hint: 'Gib deinen Open AI Schlüssel ein',
    }
  },
  game_rules: {
    rule_1: 'Beantworte Fragen aus Wikipedia-Artikeln',
    rule_2: 'Beachte das Zeitlimit für jede Frage',
    rule_3: 'Steige durch zunehmende Gewinnstufen auf',
    rule_4: 'Setze Joker klug ein',
    rule_5: 'Erreiche Sicherheitsstufen, um deinen Gewinn zu sichern',
  },
  lifelines: {
    fifty_fifty: {
      label: '50:50',
      description: 'Eliminiert die Hälfte der falschen Antworten',
    },
    extend_time: {
      label: 'Zeit verlängern',
      description: 'Verlängert die Zeit zum Beantworten der Frage',
    },
    show_hint: {
      label: 'Hinweis anzeigen',
      description: 'Zeigt einen Hinweis zur Frage an',
    },
  },
  settings: {
    settings: 'Einstellungen',
    subtitle: 'Wiki Millionär Einstellungen',
    version: 'Version',
    api_key_description: 'Falls der Standard-Open-AI-Schlüssel nicht funktioniert, kannst du deinen eigenen verwenden. Stelle sicher, dass er Zugriff auf das "gpt-40-mini" Modell hat.',
    language: 'Sprache',
  }
};
