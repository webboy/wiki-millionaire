// Traduction française pour Wiki Millionaire
export default {
  common: {
    app_name: 'Wiki Million',
    description: 'Un jeu-questionnaire basé sur les articles Wikipédia',
    yes: 'Oui',
    no: 'Non',
  },
  pages: {
    welcome: {
      title: 'Wiki Million',
      description: 'Testez vos connaissances et gagnez des millions virtuels !',
      select_difficulty: 'Sélectionner la difficulté',
      how_to_play: 'Comment jouer',
    },
    game: {
      loading_question: 'Chargement de la question...',
      hint: 'Indice',
      source: 'Source',
    },
    game_over: {
      game_over: 'Partie terminée',
      congrats: 'Félicitations !',
      you_won: 'Vous avez gagné',
      used_lifelines: 'Jokers utilisés',
      difficulty: 'Difficulté',
      questions_answered: 'Questions répondues',
    },
  },
  difficulties: {
    easy: {
      label: 'Facile',
    },
    medium: {
      label: 'Moyen',
    },
    hard: {
      label: 'Difficile',
    },
    questions: '{count} questions',
    time_per_question: '{time} secondes',
    choices: '{count} choix',
  },
  buttons: {
    how_to_play: {
      label: 'Comment jouer'
    },
    start: {
      label: 'Commencer la partie'
    },
    play_again: {
      label: 'Rejouer'
    },
    change_difficulty: {
      label: 'Changer la difficulté'
    },
    cancel: {
      label: 'Annuler'
    },
    save: {
      label: 'Enregistrer'
    }
  },
  inputs: {
    user_name: {
      label: 'Entrez votre nom',
      hint: 'Entrez le nom que vous souhaitez utiliser dans le jeu',
    },
    open_ai_key: {
      label: 'Clé Open AI',
      hint: 'Entrez votre clé Open AI',
    }
  },
  game_rules: {
    rule_1: 'Répondez aux questions générées à partir des articles Wikipédia',
    rule_2: 'Jouez contre la montre pour chaque question',
    rule_3: 'Progressez à travers des paliers de gains croissants',
    rule_4: 'Utilisez vos jokers judicieusement',
    rule_5: 'Atteignez des paliers pour sécuriser vos gains',
  },
  lifelines: {
    fifty_fifty: {
      label: '50:50',
      description: 'Élimine la moitié des mauvaises réponses',
    },
    extend_time: {
      label: 'Extension de temps',
      description: 'Prolonge le temps pour répondre à la question',
    },
    show_hint: {
      label: 'Afficher un indice',
      description: 'Affiche un indice pour la question',
    },
  },
  settings: {
    settings: 'Paramètres',
    subtitle: 'Paramètres de Wiki Million',
    version: 'Version',
    api_key_description: 'Si la clé Open AI par défaut ne fonctionne pas, vous pouvez utiliser la vôtre. Assurez-vous qu\'elle a accès au modèle "gpt-40-mini".',
    language: 'Langue',
  }
};
