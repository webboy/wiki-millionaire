// Tradução em português para Wiki Millionaire
export default {
  common: {
    app_name: 'Wiki Milionário',
    description: 'Um jogo de perguntas baseado em artigos da Wikipédia',
    yes: 'Sim',
    no: 'Não',
  },
  pages: {
    welcome: {
      title: 'Wiki Milionário',
      description: 'Teste seus conhecimentos e ganhe milhões virtuais!',
      select_difficulty: 'Selecionar dificuldade',
      how_to_play: 'Como jogar',
    },
    game: {
      loading_question: 'Carregando pergunta...',
      hint: 'Dica',
      source: 'Fonte',
    },
    game_over: {
      game_over: 'Fim de jogo',
      congrats: 'Parabéns!',
      you_won: 'Você ganhou',
      used_lifelines: 'Ajudas usadas',
      difficulty: 'Dificuldade',
      questions_answered: 'Perguntas respondidas',
    },
  },
  difficulties: {
    easy: {
      label: 'Fácil',
    },
    medium: {
      label: 'Médio',
    },
    hard: {
      label: 'Difícil',
    },
    questions: '{count} perguntas',
    time_per_question: '{time} segundos',
    choices: '{count} opções',
  },
  buttons: {
    how_to_play: {
      label: 'Como jogar'
    },
    start: {
      label: 'Iniciar jogo'
    },
    play_again: {
      label: 'Jogar novamente'
    },
    change_difficulty: {
      label: 'Mudar dificuldade'
    },
    cancel: {
      label: 'Cancelar'
    },
    save: {
      label: 'Salvar'
    }
  },
  inputs: {
    user_name: {
      label: 'Digite seu nome',
      hint: 'Digite o nome que deseja usar no jogo',
    },
    open_ai_key: {
      label: 'Chave Open AI',
      hint: 'Digite sua chave Open AI',
    }
  },
  game_rules: {
    rule_1: 'Responda perguntas geradas de artigos da Wikipédia',
    rule_2: 'Corra contra o tempo em cada pergunta',
    rule_3: 'Avance através de níveis crescentes de prêmios',
    rule_4: 'Use as ajudas com sabedoria quando necessário',
    rule_5: 'Alcance marcos para garantir seus ganhos',
  },
  lifelines: {
    fifty_fifty: {
      label: '50:50',
      description: 'Elimina metade das respostas incorretas',
    },
    extend_time: {
      label: 'Aumentar tempo',
      description: 'Aumenta o tempo para responder a pergunta',
    },
    show_hint: {
      label: 'Mostrar dica',
      description: 'Mostra uma dica para a pergunta',
    },
  },
  settings: {
    settings: 'Configurações',
    subtitle: 'Configurações do Wiki Milionário',
    version: 'Versão',
    api_key_description: 'Se a chave Open AI padrão não funcionar, você pode usar a sua própria. Certifique-se de que ela tenha acesso ao modelo "gpt-40-mini".',
    language: 'Idioma',
  }
};
