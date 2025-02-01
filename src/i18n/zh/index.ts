// Wiki Millionaire 的中文翻译
export default {
  common: {
    app_name: '维基百万富翁',
    description: '基于维基百科文章的问答游戏',
    yes: '是',
    no: '否',
  },
  pages: {
    welcome: {
      title: '维基百万富翁',
      description: '测试你的知识，赢取虚拟百万！',
      select_difficulty: '选择难度',
      how_to_play: '游戏说明',
    },
    game: {
      loading_question: '加载问题中...',
      hint: '提示',
      source: '来源',
    },
    game_over: {
      game_over: '游戏结束',
      congrats: '恭喜！',
      you_won: '您赢得了',
      used_lifelines: '已使用的求助',
      difficulty: '难度',
      questions_answered: '已答问题',
    },
  },
  difficulties: {
    easy: {
      label: '简单',
    },
    medium: {
      label: '中等',
    },
    hard: {
      label: '困难',
    },
    questions: '{count}个问题',
    time_per_question: '{time}秒',
    choices: '{count}个选项',
  },
  buttons: {
    how_to_play: {
      label: '游戏说明'
    },
    start: {
      label: '开始游戏'
    },
    play_again: {
      label: '再玩一次'
    },
    change_difficulty: {
      label: '更改难度'
    },
    cancel: {
      label: '取消'
    },
    save: {
      label: '保存'
    }
  },
  inputs: {
    user_name: {
      label: '输入您的名字',
      hint: '输入您想在游戏中使用的名字',
    },
    open_ai_key: {
      label: 'Open AI密钥',
      hint: '输入您的Open AI密钥',
    }
  },
  game_rules: {
    rule_1: '回答由维基百科文章生成的问题',
    rule_2: '每个问题都有时间限制',
    rule_3: '通过不断增加的奖金等级前进',
    rule_4: '在需要时明智地使用求助',
    rule_5: '达到保底点可以确保奖金',
  },
  lifelines: {
    fifty_fifty: {
      label: '50:50',
      description: '删除一半错误答案',
    },
    extend_time: {
      label: '延长时间',
      description: '延长回答问题的时间',
    },
    show_hint: {
      label: '显示提示',
      description: '显示问题的提示',
    },
  },
  settings: {
    settings: '设置',
    subtitle: '维基百万富翁设置',
    version: '版本',
    api_key_description: '如果默认的Open AI密钥不起作用，您可以使用自己的密钥。请确保它有权访问"gpt-40-mini"模型。',
    language: '语言',
  }
};
