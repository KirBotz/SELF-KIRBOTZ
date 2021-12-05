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
        	console.log(color(`🌹Welcome To KirBotz`, 'red'))
        	
	    	console.log(color('━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n𝐍𝐞𝐰 𝐁𝐚𝐬𝐞 𝐊𝐢𝐫𝐁𝐨𝐭𝐳\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━','white'))

	        console.log(color('𝐍𝐨𝐭𝐞 :'), color('\n𝗝𝗮𝗻𝗴𝗮𝗻 𝗟𝘂𝗽𝗮 𝗦𝘂𝗯𝘀𝗰𝗿𝗶𝗯𝗲 𝗞𝗶𝗿𝗕𝗼𝘁𝘇\n𝗚𝗮𝗸 𝗦𝘂𝗯𝘀𝗰𝗿𝗶𝗯𝗲 𝗚𝗮𝗸 𝗪𝗼𝗿𝗸 :)\n𝗝𝗮𝗻𝗴𝗮𝗻 𝗛𝗮𝗽𝘂𝘀 𝗡𝗮𝗺𝗮 𝗚𝘄 𝗕𝗮𝗻𝗴\n𝗛𝗮𝗿𝗴𝗮𝗶 𝗡𝗮𝗽𝗮︎', 'aqua'))

	        console.log(color('━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━','yellow'))

            console.log(color('𝐏𝐞𝐬𝐚𝐧 𝐊𝐢𝐫𝐁𝐨𝐭𝐳 :'), color('\n𝗕𝘂𝗮𝘁 𝗞𝗮𝗹𝗶𝗮𝗻 𝗬𝗮𝗻𝗴 𝗠𝗮𝗸𝗲𝗸 𝗦𝗰 𝗚𝘄\n𝗧𝗼𝗹𝗼𝗻𝗴 𝗟𝗮𝗵 𝗝𝗮𝗻𝗴𝗮𝗻 𝗗𝗶 𝗝𝘂𝗮𝗹 𝗨𝗹𝗮𝗻𝗴\n𝗟𝘂𝗵 𝗝𝘂𝗮𝗹 𝗨𝗹𝗮𝗻𝗴 𝗛𝗮𝘁𝗶² 𝗟𝘂𝗵 𝗕𝗮𝗻𝗴\n𝗬𝗮𝗻𝗴 𝗞𝗲 𝗘𝗻𝗰 𝗕𝗶𝗹𝗲𝗸 :\n𝗦𝗰 𝗗𝗶 𝗘𝗻𝗰 𝗠𝗮𝗻𝗮 𝗕𝗶𝘀𝗮 𝗗𝗶 𝗝𝘂𝗮𝗹 𝗕𝗮𝗻𝗴 🗿', 'aqua'))

            console.log(color('━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━','magenta'))

            console.log(color('𝐏𝐞𝐬𝐚𝐧 𝐁𝐨𝐭𝐳 :'), color('\n𝗦𝗶𝗹𝗮𝗸𝗮𝗻 𝗞𝗲𝘁𝗶𝗸 .𝗽𝘂𝗯𝗹𝗶𝗰 𝗗𝗶 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝗕𝗼𝘁 𝗗𝗮𝗻 𝗡𝗶𝗸𝗺𝗮𝘁𝗶 𝗙𝗶𝘁𝘂𝗿𝗻𝘆𝗮', 'aqua'))

            console.log(color('━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━','red'))
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
