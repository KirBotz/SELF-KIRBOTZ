const {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const simple = require('./lib/simple')
let WAConnection = simple.WAConnection(_WAConnection)
let Hotcode = new WAConnection()
const fs = require('fs')
const { banner, start, success } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const welcome = require('./message/group')
const chalk = require('chalk');
const colors = require('colors');
const spin = require('spinnies');
const async = require('async');
const CFonts = require('cfonts');
const os = require('os');

require('./ValkyrieX4.js')
nocache('./ValkyrieX4.js', module => console.log(`${module} is now updated!`))

const starts = async (Valkyrie = new WAConnection()) => {
    Valkyrie.logger.level = 'warn'
    Valkyrie.version = [2, 2143, 3]
    Valkyrie.browserDescription = [ 'KirBotz', 'Chrome', '3.0' ]
    
    Valkyrie.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan bang'))
    })

    fs.existsSync('./session.json') && Valkyrie.loadAuthInfo('./session.json')
    Valkyrie.on('connecting', () => {
        start('2', 'Connecting...')
    })
    Valkyrie.on('open', () => {
        success('2', 'Connected')
        setTimeout( () => {
        	console.log(color(`๐นWelcome To KirBotz`, 'red'))
        	
	    	console.log(color('โโโโโโโโโโโโโโโโโโโโโโโโโโโโ\nโโโโโโโโโโโโโโโโโโโโโโโโโโโโ\n๐๐๐ฐ ๐๐๐ฌ๐ ๐๐ข๐ซ๐๐จ๐ญ๐ณ\nโโโโโโโโโโโโโโโโโโโโโโโโโโโโ\nโโโโโโโโโโโโโโโโโโโโโโโโโโโโ','white'))

	        console.log(color('๐๐จ๐ญ๐ :'), color('\n๐๐ฎ๐ป๐ด๐ฎ๐ป ๐๐๐ฝ๐ฎ ๐ฆ๐๐ฏ๐๐ฐ๐ฟ๐ถ๐ฏ๐ฒ ๐๐ถ๐ฟ๐๐ผ๐๐\n๐๐ฎ๐ธ ๐ฆ๐๐ฏ๐๐ฐ๐ฟ๐ถ๐ฏ๐ฒ ๐๐ฎ๐ธ ๐ช๐ผ๐ฟ๐ธ :)\n๐๐ฎ๐ป๐ด๐ฎ๐ป ๐๐ฎ๐ฝ๐๐ ๐ก๐ฎ๐บ๐ฎ ๐๐ ๐๐ฎ๐ป๐ด\n๐๐ฎ๐ฟ๐ด๐ฎ๐ถ ๐ก๐ฎ๐ฝ๐ฎ๏ธ', 'aqua'))

	        console.log(color('โโโโโโโโโโโโโโโโโโโโโโโโโโโโ\nโโโโโโโโโโโโโโโโโโโโโโโโโโโโ','yellow'))

            console.log(color('๐๐๐ฌ๐๐ง ๐๐ข๐ซ๐๐จ๐ญ๐ณ :'), color('\n๐๐๐ฎ๐ ๐๐ฎ๐น๐ถ๐ฎ๐ป ๐ฌ๐ฎ๐ป๐ด ๐?๐ฎ๐ธ๐ฒ๐ธ ๐ฆ๐ฐ ๐๐\n๐ง๐ผ๐น๐ผ๐ป๐ด ๐๐ฎ๐ต ๐๐ฎ๐ป๐ด๐ฎ๐ป ๐๐ถ ๐๐๐ฎ๐น ๐จ๐น๐ฎ๐ป๐ด\n๐๐๐ต ๐๐๐ฎ๐น ๐จ๐น๐ฎ๐ป๐ด ๐๐ฎ๐๐ถยฒ ๐๐๐ต ๐๐ฎ๐ป๐ด\n๐ฌ๐ฎ๐ป๐ด ๐๐ฒ ๐๐ป๐ฐ ๐๐ถ๐น๐ฒ๐ธ :\n๐ฆ๐ฐ ๐๐ถ ๐๐ป๐ฐ ๐?๐ฎ๐ป๐ฎ ๐๐ถ๐๐ฎ ๐๐ถ ๐๐๐ฎ๐น ๐๐ฎ๐ป๐ด ๐ฟ', 'aqua'))

            console.log(color('โโโโโโโโโโโโโโโโโโโโโโโโโโโโ\nโโโโโโโโโโโโโโโโโโโโโโโโโโโโ','magenta'))

            console.log(color('๐๐๐ฌ๐๐ง ๐๐จ๐ญ๐ณ :'), color('\n๐ฆ๐ถ๐น๐ฎ๐ธ๐ฎ๐ป ๐๐ฒ๐๐ถ๐ธ .๐ฝ๐๐ฏ๐น๐ถ๐ฐ ๐๐ถ ๐ช๐ต๐ฎ๐๐๐๐ฝ๐ฝ ๐๐ผ๐ ๐๐ฎ๐ป ๐ก๐ถ๐ธ๐บ๐ฎ๐๐ถ ๐๐ถ๐๐๐ฟ๐ป๐๐ฎ', 'aqua'))

            console.log(color('โโโโโโโโโโโโโโโโโโโโโโโโโโโโ\nโโโโโโโโโโโโโโโโโโโโโโโโโโโโ','red'))
	    	}, 1000)    		    	     	
    })
    await Valkyrie.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(Valkyrie.base64EncodedAuthInfo(), null, '\t'))
        
Valkyrie.on('group-participants-update', async (anu) => {
		await welcome(Valkyrie, anu)
	})
    Valkyrie.on('chat-update', async (message) => {
        require('./ValkyrieX4.js')(Valkyrie, message)
    })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
