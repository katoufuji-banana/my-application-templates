const path = require("path");
const { merge } = require('webpack-merge');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: path.resolve("dist"),
        before: (app, server, compiler) => {
            const header = {
                'Content-Type': 'application/json',
                'charset': 'utf-8',
            };

            app.get('/api/proverb', (req, res) => {
                const proverbs = [
                    "After a storm comes a calm.",
                    "When you are in Rome do as the Romans do.",
                    "Example is better than precept.",
                    "Better late than never."
                ]
                const proverb = proverbs[Math.floor(Math.random() * 4)]
                res.writeHead(200, header).end(JSON.stringify({ proverb }))
            })
        }
    }
});

