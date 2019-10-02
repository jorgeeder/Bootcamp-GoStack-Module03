module.exports = {
  presets: [
    "@babel/preset-env",  // responsavel por alterar as funcionalidades do javascript que o navegador não entende
    "@babel/preset-react" // transformar as funcionalidades que o navegador não entende do react, exemplo: jsx 
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
}