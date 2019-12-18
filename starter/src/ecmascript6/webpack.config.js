// sintaxe do webpack
// propriedades..
module.exports = {
    entry: './src/main.js', // arquivo principal // onde iremos escrever o codigo com es6+
    output: { // pra qual lugar e arquivo devo enviar o código convertido
        path: __dirname + '/public', // variável global que se refere ao diretorio onde está o arquivo de configuração do webpack (raiz) 
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/public' // caminho onde deve abrir o servidor da aplicação
    },
    module: {
        rules: [// Propriedade obrigatória // Regras // Como o webpack deve se comportar quando o usuário estiver tentando importar novos arquivos .js
            // Loaders
            {
                test: /\.js$/, // expressão regular // arquivos com final .js
                exclude: /node_modules/, // excluir a pasta node_modules, pra o js não executar nada de dentro dos modulos
                use: {
                    loader: 'babel-loader', // yarn add babel-loader -D
                }
            }
        ],
    },
}