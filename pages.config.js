const glob = require('glob')

const npmConfig = {
    fileName: ''
}

// 获取 命令变量
function getNpmConfigArgv() {
    const configArgv = JSON.parse(process.env.npm_config_argv)
    const original = configArgv.original
    // const stage = original[1] ? original[1].replace(/-/g, '') : ''

    // const status = original.erery(item => item === 'run')
    let fileName = original.find(item => {
        return /--file/.test(item)
    })

    if (!fileName) {
        throw new Error('请先配置 --file=  参数')
    } else {
        fileName = fileName.replace(/--file=/g, '')
    }

    npmConfig['fileName'] = fileName
}

getNpmConfigArgv()

// 获取打包入口文件
let entries
try {
    entries = glob(`src/views/${npmConfig.fileName}/*/index.js`, { sync: true })
} catch (err) {
    entries = []
    console.log('读取目录出错！')
    throw err
}

let pages = {}
let commonConfig = {
    template: 'public/index.html',
}

// 也就 pages的配置项
const pageTitles = require(`./src/views/${npmConfig.fileName}/pages.js`)

entries.forEach(page => {
    let name = page.split('/')[3]
    pages[name] = {
        entry: `src/views/${npmConfig.fileName}/${name}/index.js`,
        filename:  `${name}.html`,
        // eslint-disable-next-line no-prototype-builtins
        title: pageTitles.hasOwnProperty(name) ? pageTitles[name].title : '',
        ...commonConfig
    }
})

// console.log(pages)

module.exports = {
    pages,
    fileName: npmConfig.fileName
}
