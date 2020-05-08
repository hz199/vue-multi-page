const glob = require('glob')
const pageConfig = require('./pages')

let entries

try {
    entries = glob('src/views/*/index.js', { sync: true })
} catch (err) {
    entries = []
    console.log('读取目录出错！')
    throw err
}


let pages = {}
let commonConfig = {
    template: 'public/index.html',
}

entries.forEach(page => {
    let name = page.split('/')[2]
    pages[name] = {
        entry: 'src/views/' + name + '/index.js',
        filename: name + '.html',
        // eslint-disable-next-line no-prototype-builtins
        title: pageConfig.hasOwnProperty(name) ? pageConfig[name].title : '',
        ...commonConfig
    }
})

// console.log(pages)

module.exports = pages
