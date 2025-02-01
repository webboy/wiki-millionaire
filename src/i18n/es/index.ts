// Traducción al español para Wiki Millionaire
export default {
  common: {
    app_name: 'Wiki Millonario',
    description: 'Un juego de preguntas basado en artículos de Wikipedia',
    yes: 'Sí',
    no: 'No',
  },
  pages: {
    welcome: {
      title: 'Wiki Millonario',
      description: '¡Pon a prueba tus conocimientos y gana millones virtuales!',
      select_difficulty: 'Seleccionar dificultad',
      how_to_play: 'Cómo jugar',
    },
    game: {
      loading_question: 'Cargando pregunta...',
      hint: 'Pista',
      source: 'Fuente',
    },
    game_over: {
      game_over: 'Fin del juego',
      congrats: '¡Felicitaciones!',
      you_won: 'Has ganado',
      used_lifelines: 'Comodines usados',
      difficulty: 'Dificultad',
      questions_answered: 'Preguntas respondidas',
    },
  },
  difficulties: {
    easy: {
      label: 'Fácil',
    },
    medium: {
      label: 'Medio',
    },
    hard: {
      label: 'Difícil',
    },
    questions: '{count} preguntas',
    time_per_question: '{time} segundos',
    choices: '{count} opciones',
  },
  buttons: {
    how_to_play: {
      label: 'Cómo jugar'
    },
    start: {
      label: 'Comenzar juego'
    },
    play_again: {
      label: 'Jugar de nuevo'
    },
    change_difficulty: {
      label: 'Cambiar dificultad'
    },
    cancel: {
      label: 'Cancelar'
    },
    save: {
      label: 'Guardar'
    }
  },
  inputs: {
    user_name: {
      label: 'Ingresa tu nombre',
      hint: 'Ingresa el nombre que deseas usar en el juego',
    },
    open_ai_key: {
      label: 'Clave de Open AI',
      hint: 'Ingresa tu clave de Open AI',
    }
  },
  game_rules: {
    rule_1: 'Responde preguntas generadas de artículos de Wikipedia',
    rule_2: 'Compite contra el tiempo en cada pregunta',
    rule_3: 'Avanza a través de niveles de premio crecientes',
    rule_4: 'Usa los comodines sabiamente cuando los necesites',
    rule_5: 'Alcanza hitos para asegurar tus ganancias',
  },
  lifelines: {
    fifty_fifty: {
      label: '50:50',
      description: 'Elimina la mitad de las respuestas incorrectas',
    },
    extend_time: {
      label: 'Extender tiempo',
      description: 'Extiende el tiempo para responder la pregunta',
    },
    show_hint: {
      label: 'Mostrar pista',
      description: 'Muestra una pista para la pregunta',
    },
  },
  settings: {
    settings: 'Configuración',
    subtitle: 'Configuración de Wiki Millonario',
    version: 'Versión',
    api_key_description: 'Si la clave predeterminada de Open AI no funciona, puedes usar la tuya. Asegúrate de que tenga acceso al modelo "gpt-40-mini".',
    language: 'Idioma',
  }
};
