require('shelljs/global')
const path = require('path')

exports.command = 'build <way> <source_path>'
exports.desc = 'build component'

exports.builder = function (yargs) {
  // yargs
    // .option('group', {
    //   alias: 'g'
    // })
    // .option('framework', {
    //   alias: 'f',
    //   desc: 'use frontend framework "vue", "react", "angular"'
    // })
}

exports.handler = function (argv) {
  echo(argv)
  const { source_path, way } = argv
  const p = argv.path || './'

  if (way === 'component') {
    cp('-R', source_path, 'lib')
    exec(
    `${path.resolve(__dirname, '../../node_modules/.bin/tsc')} --rootDir ./lib --declarationDir ./types`
    )
    exec(`find ./lib -name "*.ts" -o -name "*.tsx" | xargs rm -rf`)
    exec(`npx yarn build`)
  }
  
  else if (way === 'container') {
    cp('-R', source_path, 'lib')
    exec(
    `${path.resolve(__dirname, '../../node_modules/.bin/tsc')} --rootDir ./lib --declarationDir ./types`
    )
    exec(`find ./lib -name "*.ts" -o -name "*.tsx" | xargs rm -rf`)
    exec(`npx yarn build`)
  }

}