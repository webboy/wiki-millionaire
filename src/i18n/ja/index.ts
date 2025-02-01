// Wiki Millionaireの日本語訳
export default {
  common: {
    app_name: 'ウィキミリオネア',
    description: 'ウィキペディアの記事を基にしたクイズゲーム',
    yes: 'はい',
    no: 'いいえ',
  },
  pages: {
    welcome: {
      title: 'ウィキミリオネア',
      description: '知識を試して、バーチャルな百万長者を目指そう！',
      select_difficulty: '難易度を選択',
      how_to_play: '遊び方',
    },
    game: {
      loading_question: '問題を読み込み中...',
      hint: 'ヒント',
      source: '出典',
    },
    game_over: {
      game_over: 'ゲーム終了',
      congrats: 'おめでとうございます！',
      you_won: '獲得賞金',
      used_lifelines: '使用したヘルプ',
      difficulty: '難易度',
      questions_answered: '回答した問題数',
    },
  },
  difficulties: {
    easy: {
      label: '初級',
    },
    medium: {
      label: '中級',
    },
    hard: {
      label: '上級',
    },
    questions: '問題数：{count}問',
    time_per_question: '制限時間：{time}秒',
    choices: '選択肢：{count}個',
  },
  buttons: {
    how_to_play: {
      label: '遊び方'
    },
    start: {
      label: 'ゲーム開始'
    },
    play_again: {
      label: 'もう一度プレイ'
    },
    change_difficulty: {
      label: '難易度変更'
    },
    cancel: {
      label: 'キャンセル'
    },
    save: {
      label: '保存'
    }
  },
  inputs: {
    user_name: {
      label: 'お名前を入力',
      hint: 'ゲームで使用する名前を入力してください',
    },
    open_ai_key: {
      label: 'Open AIキー',
      hint: 'Open AIキーを入力してください',
    }
  },
  game_rules: {
    rule_1: 'ウィキペディアの記事から生成された問題に答えます',
    rule_2: '各問題には制限時間があります',
    rule_3: '賞金額は段階的に上がっていきます',
    rule_4: 'ヘルプは必要な時に賢く使いましょう',
    rule_5: 'セーフティマークに到達すると獲得賞金が確定します',
  },
  lifelines: {
    fifty_fifty: {
      label: 'フィフティ・フィフティ',
      description: '誤答を半分除外します',
    },
    extend_time: {
      label: '時間延長',
      description: '制限時間を延長します',
    },
    show_hint: {
      label: 'ヒント表示',
      description: '問題のヒントを表示します',
    },
  },
  settings: {
    settings: '設定',
    subtitle: 'ウィキミリオネア設定',
    version: 'バージョン',
    api_key_description: 'デフォルトのOpen AIキーが機能しない場合は、独自のキーを使用できます。"gpt-40-mini"モデルにアクセスできることを確認してください。',
    language: '言語',
  }
};
