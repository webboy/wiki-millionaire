// This is just an example,
// so you can safely delete all default props below

export default {
  common: {
    app_name: 'Wiki Millionaire',
    description: 'A quiz game based on Wikipedia articles',
    yes: 'Yes',
    no: 'No',
  },
  pages: {
    welcome: {
      title: 'Wiki Millionaire',
      description: 'Test your knowledge and win virtual millions!',
      select_difficulty: 'Select difficulty',
      how_to_play: 'How to play',
    },
    game:{
      loading_question: 'Loading question...',
      hint: 'Hint',
      source: 'Source',
    },
    game_over:{
      game_over: 'Game Over',
      congrats: 'Congratulations!',
      you_won: 'You won',
      used_lifelines: 'Used lifelines',
      difficulty: 'Difficulty',
      questions_answered: 'Questions answered',
    },
  },
  difficulties: {
    easy: {
      label: 'Easy',
    },
    medium: {
      label: 'Medium',
    },
    hard: {
      label: 'Hard',
    },
    questions: '{count} questions',
    time_per_question: '{time} seconds',
    choices: '{count} choices',
  },
  buttons: {
    how_to_play: {
      label: 'How to play'
    },
    start: {
      label: 'Start Game'
    },
    play_again:{
      label: 'Play Again'
    },
    change_difficulty:{
      label: 'Change Difficulty'
    },
    cancel:{
      label: 'Cancel'
    },
    save:{
      label: 'Save'
    }
  },
  inputs: {
    user_name: {
      label: 'Enter your name',
      hint: 'Enter the name you want to use in the game',
    },
    open_ai_key: {
      label: 'Open AI key',
      hint: 'Enter your Open AI key',
    }
  },
  game_rules:{
    rule_1: 'Answer questions generated from Wikipedia articles',
    rule_2: 'Race against time for each question',
    rule_3: 'Progress through increasing prize levels',
    rule_4: 'Use lifelines wisely when needed',
    rule_5: 'Reach milestones to secure your winnings',
  },
  lifelines: {
    fifty_fifty: {
      label: '50:50',
      description: 'Eliminate half of the incorrect answers',
    },
    extend_time: {
      label: 'Extend time',
      description: 'Extend the time to answer the question',
    },
    show_hint: {
      label: 'Show hint',
      description: 'Show a hint for the question',
    },
  },
  settings: {
    settings: 'Settings',
    subtitle: 'Wiki Millionaire settings',
    version: 'Version',
    api_key_description: 'If the default Open AI key does not work. You can use your own, just make sure it has\n' +
      '            access to "gpt-4o-mini" model.',
    language: 'Language',
  }
};
