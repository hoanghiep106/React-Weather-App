var webpack = require('webpack')

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './src/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main: 'src/components/Main.jsx',
            Nav: 'src/components/Nav.jsx',
            Weather: 'src/components/Weather.jsx',
            WeatherForm: 'src/components/WeatherForm.jsx',
            WeatherMessage: 'src/components/WeatherMessage.jsx',
            About: 'src/components/About.jsx',
            Examples: 'src/components/Examples.jsx',
            OpenWeatherMap: 'src/api/OpenWeatherMap.jsx',
            ErrorModal: 'src/components/ErrorModal.jsx',
            applicationStyle: 'src/styles/app.css'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_compnents)/
        }]
    },
    devtools: 'cheap-module-eval-source-map'
}