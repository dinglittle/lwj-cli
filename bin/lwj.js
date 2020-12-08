#! /usr/bin/env node
// console.log('lwj cli')

const { Command } = require('commander');
const program = new Command()
program.version(require('../package.json').version)


program
  .command('init <name>')
  .description('init project ')
  .action(require('../lib/init'))
  // .action(name => {
  //   console.log('完成添加'+name)
  // })


program.parse(process.argv)
