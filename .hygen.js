const { join, parse } = require('path')
const {
  pascalCase,
  camelCase,
  sentenceCase,
  paramCase,
} = require('change-case')

const camelizePath = (name) => camelCase(name, lower).replace(/::/g, '/')

const pascalizeName = (name) => pascalCase(name)
const capitalizeName = (name) => sentenceCase(name)
const dashedName = (name) => paramCase(name)

module.exports = {
  templates: `${__dirname}/templates`,
  helpers: {
    pascalize: (name) => pascalizeName(name),
    capitalize: (name) => capitalizeName(name),
    dasherize: (name) => dashedName(name),
    camelizedPathName: (name, lower = true) => camelizePath(name, lower),
    camelizedBaseName: (name, lower = false) =>
      parse(camelizePath(name, lower)).base,
    baseName: (name) => parse(name).base,
    dirName: (name) => parse(name).dir,
    prependPackagePath: (name, file) =>
      join('packages', dashedName(name), file),
  },
}
