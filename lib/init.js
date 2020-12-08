#!/usr/bin/env node
console.log('init ---')
const { promisify } = require('util')
const figlet = promisify(require('figlet'))

const clear = require('clear')
const chalk = require('chalk')
const log = content => console.log(chalk.green(content))
const { clone } = require('./download')
const { spawn } = require('child_process')
module.exports = async name => {
  clear()
  const data = await figlet('lwj welcome')
  log(data)

  //clone
  log(`/_创建项目 ${name}`)
  await clone(`github:lwj/vue-cli-template`,name)

  // 自动安装依赖
  log('🏍 正在安装依赖中...')
  await spawn('npm', ['install'], { cwd: `./${name}` })
  log(`
    👌 安装完成
    可以开始了
    =====================
    cd ${name}

    npm run serve
    =====================

  `)
  open('http://localhost:8080')
  // 启动浏览器
  await spawn('npm',['run','serve'],{cwd:`./${name}`})
}