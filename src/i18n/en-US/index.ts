// This is just an example,
// so you can safely delete all default props below

export default {
  common: {
    app_name: 'Wiki Millionaire',
    description: 'A quiz game based on Wikipedia articles',
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
    }
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
  },
  inputs: {
    user_name: {
      label: 'Enter your name',
      hint: 'Enter the name you want to use in the game',
    }
  },
  game_rules:{
    rule_1: 'Answer questions generated from Wikipedia articles',
    rule_2: 'Race against time for each question',
    rule_3: 'Progress through increasing prize levels',
    rule_4: 'Use lifelines wisely when needed',
    rule_5: 'Reach milestones to secure your winnings',
  }
};
