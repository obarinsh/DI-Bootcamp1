const chalk = require('chalk');

// console.log(chalk.yellow('Yellow submarine'))
console.log('\x1b[33m%s\x1b[0m', 'Yellow submarine');
console.log(chalk.yellow('Yellow submarine'), { level: 3 });