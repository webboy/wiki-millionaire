// Traduzione italiana per Wiki Millionaire
export default {
  common: {
    app_name: 'Wiki Milionario',
    description: 'Un quiz basato sugli articoli di Wikipedia',
    yes: 'Sì',
    no: 'No',
  },
  pages: {
    welcome: {
      title: 'Wiki Milionario',
      description: 'Metti alla prova le tue conoscenze e vinci milioni virtuali!',
      select_difficulty: 'Seleziona difficoltà',
      how_to_play: 'Come si gioca',
    },
    game: {
      loading_question: 'Caricamento domanda...',
      hint: 'Suggerimento',
      source: 'Fonte',
    },
    game_over: {
      game_over: 'Partita finita',
      congrats: 'Congratulazioni!',
      you_won: 'Hai vinto',
      used_lifelines: 'Aiuti utilizzati',
      difficulty: 'Difficoltà',
      questions_answered: 'Domande risposte',
    },
  },
  difficulties: {
    easy: {
      label: 'Facile',
    },
    medium: {
      label: 'Medio',
    },
    hard: {
      label: 'Difficile',
    },
    questions: '{count} domande',
    time_per_question: '{time} secondi',
    choices: '{count} scelte',
  },
  buttons: {
    how_to_play: {
      label: 'Come si gioca'
    },
    start: {
      label: 'Inizia partita'
    },
    play_again: {
      label: 'Gioca ancora'
    },
    change_difficulty: {
      label: 'Cambia difficoltà'
    },
    cancel: {
      label: 'Annulla'
    },
    save: {
      label: 'Salva'
    }
  },
  inputs: {
    user_name: {
      label: 'Inserisci il tuo nome',
      hint: 'Inserisci il nome che vuoi usare nel gioco',
    },
    open_ai_key: {
      label: 'Chiave Open AI',
      hint: 'Inserisci la tua chiave Open AI',
    }
  },
  game_rules: {
    rule_1: 'Rispondi alle domande generate dagli articoli di Wikipedia',
    rule_2: 'Gareggia contro il tempo per ogni domanda',
    rule_3: 'Avanza attraverso livelli di premio crescenti',
    rule_4: 'Usa gli aiuti con saggezza quando necessario',
    rule_5: 'Raggiungi traguardi per assicurare le tue vincite',
  },
  lifelines: {
    fifty_fifty: {
      label: '50:50',
      description: 'Elimina la metà delle risposte sbagliate',
    },
    extend_time: {
      label: 'Estendi tempo',
      description: 'Estende il tempo per rispondere alla domanda',
    },
    show_hint: {
      label: 'Mostra suggerimento',
      description: 'Mostra un suggerimento per la domanda',
    },
  },
  settings: {
    settings: 'Impostazioni',
    subtitle: 'Impostazioni di Wiki Milionario',
    version: 'Versione',
    api_key_description: 'Se la chiave Open AI predefinita non funziona, puoi usare la tua. Assicurati che abbia accesso al modello "gpt-40-mini".',
    language: 'Lingua',
  }
};
