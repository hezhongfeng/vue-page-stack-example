module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^([a-z]+)(?:\(([^)]+)\))?:\s(.+)$/,
      headerCorrespondence: ['type', 'scope', 'subject']
    }
  },
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'init',
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'build',
        'ci',
        'chore',
        'revert'
      ]
    ],
    'scope-enum': [2, 'always', ['文档', '资源', '表现']],
    'scope-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'header-max-length': [2, 'always', 100]
  }
};
