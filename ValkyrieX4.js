/*
Jangan Hapus Di Bawah
Valkyrie·Team
ANGGOTA TEAM
メLord Akira⁴̅⁰͍⁴̵
メLord Ozann⁴̅⁰͍⁴̵
メLord Kahfz⁴̅⁰͍⁴̵
メLord Aril⁴̅⁰͍⁴̵l
メLord Pebri⁴̅⁰͍⁴̵
メLord Galih⁴̅⁰͍⁴
*/
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const hx = require('hxz-api')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const imgbb = require('imgbb-uploader')
const toMs = require('ms')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload, formatDate } = require('./lib/ytdl')
const { webp2mp4File} = require('./lib/webp2mp4')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const { webp2gifFile, igDownloader, TiktokDownloader } = require('./lib/gif.js')
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const { addVote, delVote } = require('./lib/vote')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"))
const setting = JSON.parse(fs.readFileSync('./setting.json'))
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
let ValkyrieX4thumb = 'https://telegra.ph/file/f1674683f8d9cb89e015f.jpg'

banChats = true
offline = false
ownerNumber = ["6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net","6287705048235@s.whatsapp.net"]
targetpc = '6287705048235'
owner = '6287705048235'
fake = 'ValkyrieX4·Team'
botName = 'KirBotz×'
numbernye = '0'
waktu = '-'
alasan = '-'
tamnel = fs.readFileSync('./stik/thumb.jpeg')

xchillds = 'XChillDs'
HunterApi = 'Ikyy69'
XteamKey = 'MIMINETBOT'
apikey = 'RizkyxNaqib'
DapApi = 'dappauhuy'
spykey = 'SpyBotApi'
indoapi = 'Fxc7'
botxyz = 'Aprii'
rakukey = 'RakuKeyTod'
apisenku = 'SenkuApi'
valkey = 'rivalgans'

pulsa = setting.pulsa
gopay = setting.gopay
ovo = setting.ovo

harga1bulan = setting.harga1blnsewa
harga2bulan = setting.harga2blnsewa
harga6bulan = setting.harga6blnsewa
hargaperpanjang = setting.panjangsewa

hit_today = []
///database

let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))

//

const getCmd = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return _scommand[position].chats;
  }
};  
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
//=================================================//
module.exports = Valkyrie = async (Valkyrie, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        	const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
                const type = Object.keys(mek.message)[0]        
                const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
                const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
		button = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
		isImage = (type === 'imageMessage')
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
        const q = args.join(' ')
		const botNumber = Valkyrie.user.jid
		const botNumberss = Valkyrie.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		// const isSelfNumber = config.NomorSELF
		// const isOwner = sender.id === isSelfNumber
		const totalchat = await Valkyrie.chats.all()
		const groupMetadata = isGroup ? await Valkyrie.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        const isVote = isGroup ? voting.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : false
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const conts = mek.key.fromMe ? Valkyrie.user.jid : Valkyrie.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Valkyrie.user.name : conts.notify || conts.vname || conts.name || '-'
        const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
let d = new Date
let locale = 'en'
let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })

        //MESS
		mess = {
			wait: 'Otewe',
			success: 'Berhasil!',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'bukan sticker itu:v',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Khusus grup ngab',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = Valkyrie.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "SELECT","footerText": "_*©ValkyrieX4·Team*_","listType": "SINGLE_SELECT","sections": list}}, {})
            return Valkyrie.relayWAMessage(po, {waitForAck: true})
        }
        
        const runtime = function(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " Hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " Jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " Detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
                }
               
                const fakevo = {
  key: {
    fromMe: false,
    participant: '0@s.whatsapp.net',
    remoteJid: 'status@broadcast'
  },
  message: {
    imageMessage: {
      mimetype: 'image/jpeg',
      caption: 'KirBotz',
      jpegThumbnail: fs.readFileSync('./stik/thumb.jpeg'),
      viewOnce: true
    }
  }
}
        const reply = (teks) => {
            Valkyrie.sendMessage(from, teks, text, {quoted:fvid})
        }
//Button
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
            let kma = gam1
            let mhan = await Valkyrie.prepareMessage(from, kma, image)
        const buttonMessages = {
            imageMessage: mhan.message.imageMessage,
            contentText: text1,
            footerText: desc1,
            buttons: but,
            headerType: 4
        }
            Valkyrie.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }
        const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
Valkyrie.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await Valkyrie.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
Valkyrie.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButloc = (from, title, text, desc, button, sen, men, file) => {
return Valkyrie.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: mek, contextInfo: {"mentionedJid": men ? men : []}})
}
        const sendMess = (hehe, teks) => {
            Valkyrie.sendMessage(hehe, teks, text)
        }

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Valkyrie.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Valkyrie.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }

        const fakestatus = (teks) => {
            Valkyrie.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const fakethumb = (teks, yes) => {
            Valkyrie.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./stik/fake.jpeg'),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            Valkyrie.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Valkyrie.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            const sticOwner = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/owner.webp')
			Valkyrie.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
		const sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/notadmin.webp')
			Valkyrie.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
		const sticAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/admin.webp')
			Valkyrie.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
		const sticWait = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/wait.webp')
			Valkyrie.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
		const sticOk = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/ok.webp')
			Valkyrie.sendMessage(hehe, ano, sticker, { quoted: fgi})
		}
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Valkyrie.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
//FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            Valkyrie.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        Valkyrie.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
          }
        }
            }
          }
        }
      }
    }
    const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦🌌'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐞𝐭𝐚𝐧𝐠🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠🏞'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢🌅'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦🏙'
}
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${ucapanWaktu} ${pushname}`, 
                    jpegThumbnail: fs.readFileSync('./stik/thumb.jpeg')
                          }
                        }
                      }
                      const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${ucapanWaktu} ${pushname}`,
                    jpegThumbnail: fs.readFileSync('./stik/thumb.jpeg')
                          }
                        }
                      }
                      const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${ucapanWaktu} ${pushname}`,
                 "h": `${ucapanWaktu} ${pushname}`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
                        }
                       }
	                  } 
                      const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${ucapanWaktu}`,
                 "h": `${ucapanWaktu}`,
                 'duration': '99999', 
                 'caption': `${ucapanWaktu}`,
                 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')
                        }
                       }
	                  }
	                  function clockString(ms) {
      let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
    }
                      if (isGroup && !mek.key.fromMe && isAntiLink) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')
console.log(color('[KICK]', 'red'), color('Received a link!', 'yellow'))
reply(`「 *LINK GRUP TERDETEKSI* 」\n\n_Link Group terdeteksi!!_\n_Kamu akan di kick dari Group!!_`)
setTimeout(() => {
Valkyrie.groupRemove(from, [sender])
}, 2000);
}
}
let settingstatus = 0;
      if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

      await Valkyrie.setStatus(`Aktif Selama: ${runtime(process.uptime())} | Mode: ${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'} || Subrek YT : KirBotz×`).catch((_) => _);
      settingstatus = new Date() * 1;            
          }
    if (!mek.key.fromMe && banChats === true) return;
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
	    if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6287705048235@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6287705048235@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}	

let mengt =`ValkyrieX4·Team`  
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
const isBtMsg = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
const isStMsg = (type == 'listResponseMessage') ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        if (!mek.key.fromMe && banChats === true) return

// Auto 
       Valkyrie.updatePresence(from, Presence.recording)
         Valkyrie.chatRead(from, "read")
        if (!mek.key.fromMe && banChats === true) return
switch (command) {
    case 'jadibot':
    if (!isOwner) return  sticOwner(from)
    jadibot(reply,Valkyrie,from)
    break
    case 'stopjadibot':
    if (!isOwner) return  sticOwner(from)
    stopjadibot(reply)
    break
    case 'listbot':
    let tekss = '「 *LIST JADIBOT* 」\n'
    for(let i of listjadibot) {
    tekss += `*Nomor* : ${i.jid.split('@')[0]}
*Nama* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
    }
    reply(tekss)
    break
case 'own':
                let ValkyrieX4·Team = Valkyrie.prepareMessageFromContent(from, {
                "listMessage": {
						"title": `Hai kak ${pushname},${ucapanWaktu}\n`,
						"description": "INI CREDITS",
						"buttonText": "SELECT",
						"footerText": `THANKS TO ALL CREATOR`,
						"listType": "SINGLE_SELECT",
						"sections": [
							{
								"title": "◉ OWNER Ke-1",
								"rows": [
									{
										"title": "LordPebri",
										"description": "YT FEBZABOTZ",
										"rowId": `${prefix}owner1`
									}
								]
							},
							{
								"title": "◉ OWNER ke-2",
								"rows": [
									{
										"title": "KahfzBot",
										"description": "YT KAHFZBOTZ",
										"rowId": `${prefix}owner2`
									}
								]
							},
							{
								"title": "◉ OWNER ke-3",
								"rows": [
									{
										"title": "AkiraBot",
										"description": "YT KIRBOTZ",
										"rowId": `${prefix}owner3`
									}
								]
							},
							{
								"title": "◉ OWNER ke-4",
								"rows": [
									{
										"title": "Aril Style",
										"description": "YT ARILBOTZ",
										"rowId": `${prefix}owner4`
									}
								]
							},
							{
								"title": "◉ OWNER ke-5",
								"rows": [
									{
										"title": "FauzanBotz",
										"description": "YT FAUZANBOTZ",
										"rowId": `${prefix}owner5`
									}
								]
							},
							{
								"title": "◉ OWNER ke-6",
								"rows": [
									{
										"title": "Adi Official",
										"description": "YT ADI OFFICIAL",
										"rowId": `${prefix}owner6`
									}
								]
							},
							{
								"title": "◉ OWNER ke-7",
								"rows": [
									{
										"title": "Lord Galih",
										"description": "Galih Aja",
										"rowId": `${prefix}owner7`
									}
								]
							}
								]
							}
						
					
				},
			{}
		)
	    Valkyrie.relayWAMessage(ValkyrieX4·Team, {waitForAck: true})     
                break			
// CREDITS TEAM
     case 'owner1':
         members_ids = []
         for (let mem of groupMembers) {
         members_ids.push(mem.jid)
         }
         vcard2 = 'BEGIN:VCARD\n'
         + 'VERSION:3.0\n'
         + `FN:LordPebri\n`
         + `ORG: Creator Bot ;\n`
         + `TEL;type=CELL;type=VOICE;waid=6285849261085:6285849261085\n`
         + 'END:VCARD'.trim()
         Valkyrie.sendMessage(from, {displayName: `Creator Bot`, vcard: vcard2}, contact, 
         { quoted: mek, 
         })
         reply('*_Jangan Lupa Subscribe_*\nhttps://youtube.com/c/FEBZABOTZ')
         break
     case 'owner2':
         members_ids = []
         for (let mem of groupMembers) {
         members_ids.push(mem.jid)
         }
         vcard2 = 'BEGIN:VCARD\n'
         + 'VERSION:3.0\n'
         + `FN:KahfzBotz\n`
         + `ORG: Creator Bot ;\n`
         + `TEL;type=CELL;type=VOICE;waid=6283127014833:6283127014833\n`
         + 'END:VCARD'.trim()
         Valkyrie.sendMessage(from, {displayName: `Creator Bot`, vcard: vcard2}, contact, 
         { quoted: mek, 
         })
         reply('*_Jangan Lupa Subscribe_*\nhttps://youtube.com/channel/UCLWReaUjBkrRzI-OnGlWskw')
         break
     case 'owner3':
         members_ids = []
         for (let mem of groupMembers) {
         members_ids.push(mem.jid)
         }
         vcard2 = 'BEGIN:VCARD\n'
         + 'VERSION:3.0\n'
         + `FN:AkiraBotz\n`
         + `ORG: Creator Bot ;\n`
         + `TEL;type=CELL;type=VOICE;waid=6287705048235:6287705048235\n`
         + 'END:VCARD'.trim()
         Valkyrie.sendMessage(from, {displayName: `Creator Bot`, vcard: vcard2}, contact, 
         { quoted: mek, 
         })
         reply('*_Jangan Lupa Subscribe_*\nhttps://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg')
         break
     case 'owner4':
         members_ids = []
         for (let mem of groupMembers) {
         members_ids.push(mem.jid)
         }
         vcard2 = 'BEGIN:VCARD\n'
         + 'VERSION:3.0\n'
         + `FN:ArilStyle\n`
         + `ORG: Creator Bot ;\n`
         + `TEL;type=CELL;type=VOICE;waid=62881024358619:62881024358619\n`
         + 'END:VCARD'.trim()
         Valkyrie.sendMessage(from, {displayName: `Creator Bot`, vcard: vcard2}, contact, 
         { quoted: mek, 
         })
         reply('*_Jangan Lupa Subscribe_*\nhttps://youtube.com/channel/UCLPjdfA1WqgHLHc3lsn2kmA')
         break
     case 'owner5':
         members_ids = []
         for (let mem of groupMembers) {
         members_ids.push(mem.jid)
         }
         vcard2 = 'BEGIN:VCARD\n'
         + 'VERSION:3.0\n'
         + `FN:FauzanBot\n`
         + `ORG: Creator Bot ;\n`
         + `TEL;type=CELL;type=VOICE;waid=6289516004292:6289516004292\n`
         + 'END:VCARD'.trim()
         Valkyrie.sendMessage(from, {displayName: `Creator Bot`, vcard: vcard2}, contact, 
         { quoted: mek, 
         })
         reply('*_Jangan Lupa Subscribe_*\nhttps://youtube.com/channel/UCZnor19gyF010anLraDWTTA')
         break
     case 'owner6':
         members_ids = []
         for (let mem of groupMembers) {
         members_ids.push(mem.jid)
         }
         vcard2 = 'BEGIN:VCARD\n'
         + 'VERSION:3.0\n'
         + `FN:Adi OFC\n`
         + `ORG: Creator Bot ;\n`
         + `TEL;type=CELL;type=VOICE;waid=6289504585790:62895-04585790\n`
         + 'END:VCARD'.trim()
         Valkyrie.sendMessage(from, {displayName: `Creator Bot`, vcard: vcard2}, contact, 
         { quoted: mek, 
         })
         reply('*_Jangan Lupa Subscribe_*\nhttps://youtube.com/channel/UCXzxFx9pitmYFLJo4nHrRPg')
         break
     case 'owner7':
         members_ids = []
         for (let mem of groupMembers) {
         members_ids.push(mem.jid)
         }
         vcard2 = 'BEGIN:VCARD\n'
         + 'VERSION:3.0\n'
         + `FN:Lord Galih\n`
         + `ORG: Creator Bot ;\n`
         + `TEL;type=CELL;type=VOICE;waid=6289530863358:6289530863358\n`
         + 'END:VCARD'.trim()
         Valkyrie.sendMessage(from, {displayName: `Creator Bot`, vcard: vcard2}, contact, 
         { quoted: mek, 
         })
         reply('*_Chat aja bang_*')
         break
case 'credit': // fix by Akira Gantenk
stod = `${sender.split('@')[0]}@s.whatsapp.net`
taggg =`
⬣ THANKS TO TEAM
    *ValkyrieX4·Team*
 • メ𝐀𝐤𝐢𝐫𝐚 ⟨ @6287705048235 ⟩
 • メ𝐊𝐚𝐡𝐟𝐳 ⟨ @6283127014833 ⟩
 • メ𝐀𝐫𝐢𝐥 ⟨ @62881024358619 ⟩
 • メ𝐆𝐚𝐥𝐢𝐡 ⟨ @6289530863358 ⟩
 • メ𝐅𝐚𝐮𝐳𝐚𝐧 ⟨ @6289516004292 ⟩
 • メ𝐏𝐞𝐛𝐫𝐢 ⟨ @6285849261085 ⟩
 
⬣ SPECIAL THANKS
 _*• Hexagonz/Base*_
 _*• Penyedia Api*_
 _*• Adiwajshing/Baileys*_
 _*• All User ${botName}*_
 `
mentions(taggg, [`6287705048235@s.whatsapp.net`,`6283127014833@s.whatsapp.net`,`62881024358619@s.whatsapp.net`,`6289530863358@s.whatsapp.net`,`6289516004292@s.whatsapp.net`,`6285849261085@s.whatsapp.net`], true)
break
 case 'menu': case 'help':
 reply('Wait Menampilkan Menu!!!')
 listMsg = {
 buttonText: '𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨',
 footerText: 'Lord KirBotz×',
 description: `Hai kak @${sender.split('@')[0]}, Silahkan pilih menu disini`,
 sections: [
                     {
                      "title": `${ucapanWaktu} - ${date}`,
 rows: [
                          {
                              "title": "MENU PPTX",
                              "rowId": `${prefix}menupptx`
                           },
                           {
                              "title": "MENU XLSX",
                              "rowId": `${prefix}menuxlsx`
                           },
                           {
                              "title": "MENU DOCX",
                              "rowId": `${prefix}menudocx`
                           },
                           {
                              "title": "MENU ZIP",
                              "rowId": `${prefix}menuzip`
                           },
                           {
                              "title": "MENU PDF",
                              "rowId": `${prefix}menupdf`
                           },
                           {
                              "title": "SEWA BOT",
                              "rowId": `${prefix}sewabot`
                           },
                           {
                              "title": "OWNER BOT",
                              "rowId": `${prefix}owner`
                           }
                        ]
                     }],
 listType: 1
}
Valkyrie.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fgi})
break
case 'menupptx':
Valkyrie.sendMessage(from, {"contentText": `Hai Kak *${pushname}* ${ucapanWaktu}

*──────" 𝕭𝖔𝖙 𝕴𝖓𝖋𝖔 "──────*
 👤OWNER : *https://wa.me/6287705048235*
 💌EMAIL : *tesheroku123@gmail.com*
 🔎YT : *https://bit.ly/3BpBe1Z*
 🪀GROUP : *https://bit.ly/3Ene2TO*
`,"footerText": `
Valkyrie·Team
ANGGOTA TEAM
メLord Akira⁴̅⁰͍⁴̵
メLord Ozann⁴̅⁰͍⁴̵
メLord Kahfz⁴̅⁰͍⁴̵
メLord Aril⁴̅⁰͍⁴̵l
メLord Pebri⁴̅⁰͍⁴̵
メLord Galih⁴̅⁰͍⁴

*ꪶ ཻུ۪۪ꦽꦼ̷⸙𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ ཻུ۪۪ꦽꦼ̷⸙ || ${date}*`,
"buttons": [
{buttonId: `.allmenu`, buttonText: {displayText: '🏴‍☠️ 𝕄𝔼ℕ𝕌 🏴‍☠️'}, type: 1},
{buttonId: `.owner`, buttonText: {displayText: '👑 𝕆𝕎ℕ𝔼ℝ 👑‍️'}, type: 1},
{buttonId: `.sc`, buttonText: {displayText: '📄 𝕊ℂℝ𝕀ℙ𝕋 📄'}, type: 1}],
"headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "title": "KirBotz.pptx",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "999999999999",
            "pageCount": 999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg')
  }}, MessageType.buttonsMessage,{ quoted: floc,thumbnail: fs.readFileSync('./stik/thumb.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${ucapanWaktu}`,body:`${pushname}`,mediaType:"2",thumbnail:fs.readFileSync('./stik/thumb.jpeg'),mediaUrl:`https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`}}})
  break
case 'nuliskiri':{
                if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '22',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+140+153',
                    fixHeight,
                    './media/nulis/images/buku/setelahkiri.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    Valkyrie.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {quoted: mek, caption: `Jangan malas pak...`})
                    
                })
            }
                break
case 'nuliskanan':{
                if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', [
                    './media/nulis/images/buku/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '2',
                    '-annotate',
                    '+128+129',
                    fixHeight,
                    './media/nulis/images/buku/setelahkanan.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    Valkyrie.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {quoted: mek, caption: `Jangan malas pak...`})
                    
                })
            }
                break
            case 'foliokiri':{
                if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
                reply(mess.wait)
                const tulisan = body.slice(11)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkiri.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '1720x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '4',
                    '-annotate',
                    '+48+185',
                    fixHeight,
                    './media/nulis/images/folio/setelahkiri.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    Valkyrie.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {quoted: mek, caption: `Jangan malas pak...`})
                    
                })
            }
                break
            case 'foliokanan':{
                if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
                reply(mess.wait)
                const tulisan = body.slice(12)
                const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', [
                    './media/nulis/images/folio/sebelumkanan.jpg',
                    '-font',
                    './media/nulis/font/Indie-Flower.ttf',
                    '-size',
                    '960x1280',
                    '-pointsize',
                    '23',
                    '-interline-spacing',
                    '3',
                    '-annotate',
                    '+89+190',
                    fixHeight,
                    './media/nulis/images/folio/setelahkanan.jpg'
                ])
                .on('error', () => reply(mess.error.api))
                .on('exit', () => {
                    Valkyrie.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {quoted: mek, caption: `Jangan malas pak...`})
                    
                })
            }
                break
case 'menuxlsx':
Valkyrie.sendMessage(from, {"contentText": `Hai Kak *${pushname}* ${ucapanWaktu}

*──────" 𝕭𝖔𝖙 𝕴𝖓𝖋𝖔 "──────*
 👤OWNER : *https://wa.me/6287705048235*
 💌EMAIL : *tesheroku123@gmail.com*
 🔎YT : *https://bit.ly/3BpBe1Z*
 🪀GROUP : *https://bit.ly/3Ene2TO*
`,"footerText": `
Valkyrie·Team
ANGGOTA TEAM
メLord Akira⁴̅⁰͍⁴̵
メLord Ozann⁴̅⁰͍⁴̵
メLord Kahfz⁴̅⁰͍⁴̵
メLord Aril⁴̅⁰͍⁴̵l
メLord Pebri⁴̅⁰͍⁴̵
メLord Galih⁴̅⁰͍⁴

*ꪶ ཻུ۪۪ꦽꦼ̷⸙𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ ཻུ۪۪ꦽꦼ̷⸙ || ${date}*`,
"buttons": [
{buttonId: `.allmenu`, buttonText: {displayText: '🏴‍☠️ 𝕄𝔼ℕ𝕌 🏴‍☠️'}, type: 1},
{buttonId: `.owner`, buttonText: {displayText: '👑 𝕆𝕎ℕ𝔼ℝ 👑‍️'}, type: 1},
{buttonId: `.sc`, buttonText: {displayText: '📄 𝕊ℂℝ𝕀ℙ𝕋 📄'}, type: 1}],
"headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "title": "KirBotz.xlsx",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "999999999999",
            "pageCount": 999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg')
  }}, MessageType.buttonsMessage,{ quoted: floc,thumbnail: fs.readFileSync('./stik/thumb.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${ucapanWaktu}`,body:`${pushname}`,mediaType:"2",thumbnail:fs.readFileSync('./stik/thumb.jpeg'),mediaUrl:`https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`}}})
  break
case 'menudocx':
Valkyrie.sendMessage(from, {"contentText": `Hai Kak *${pushname}* ${ucapanWaktu}

*──────" 𝕭𝖔𝖙 𝕴𝖓𝖋𝖔 "──────*
 👤OWNER : *https://wa.me/6287705048235*
 💌EMAIL : *tesheroku123@gmail.com*
 🔎YT : *https://bit.ly/3BpBe1Z*
 🪀GROUP : *https://bit.ly/3Ene2TO*
`,"footerText": `
Valkyrie·Team
ANGGOTA TEAM
メLord Akira⁴̅⁰͍⁴̵
メLord Ozann⁴̅⁰͍⁴̵
メLord Kahfz⁴̅⁰͍⁴̵
メLord Aril⁴̅⁰͍⁴̵l
メLord Pebri⁴̅⁰͍⁴̵
メLord Galih⁴̅⁰͍⁴

*ꪶ ཻུ۪۪ꦽꦼ̷⸙𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ ཻུ۪۪ꦽꦼ̷⸙ || ${date}*`,
"buttons": [
{buttonId: `.allmenu`, buttonText: {displayText: '🏴‍☠️ 𝕄𝔼ℕ𝕌 🏴‍☠️'}, type: 1},
{buttonId: `.owner`, buttonText: {displayText: '👑 𝕆𝕎ℕ𝔼ℝ 👑‍️'}, type: 1},
{buttonId: `.sc`, buttonText: {displayText: '📄 𝕊ℂℝ𝕀ℙ𝕋 📄'}, type: 1}],
"headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "title": "KirBotz.docx",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "999999999999",
            "pageCount": 999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg')
  }}, MessageType.buttonsMessage,{ quoted: floc,thumbnail: fs.readFileSync('./stik/thumb.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${ucapanWaktu}`,body:`${pushname}`,mediaType:"2",thumbnail:fs.readFileSync('./stik/thumb.jpeg'),mediaUrl:`https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`}}})
  break
case 'menuzip':
Valkyrie.sendMessage(from, {"contentText": `Hai Kak *${pushname}* ${ucapanWaktu}

*──────" 𝕭𝖔𝖙 𝕴𝖓𝖋𝖔 "──────*
 👤OWNER : *https://wa.me/6287705048235*
 💌EMAIL : *tesheroku123@gmail.com*
 🔎YT : *https://bit.ly/3BpBe1Z*
 🪀GROUP : *https://bit.ly/3Ene2TO*
`,"footerText": `
Valkyrie·Team
ANGGOTA TEAM
メLord Akira⁴̅⁰͍⁴̵
メLord Ozann⁴̅⁰͍⁴̵
メLord Kahfz⁴̅⁰͍⁴̵
メLord Aril⁴̅⁰͍⁴̵l
メLord Pebri⁴̅⁰͍⁴̵
メLord Galih⁴̅⁰͍⁴

*ꪶ ཻུ۪۪ꦽꦼ̷⸙𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ ཻུ۪۪ꦽꦼ̷⸙ || ${date}*`,
"buttons": [
{buttonId: `.allmenu`, buttonText: {displayText: '🏴‍☠️ 𝕄𝔼ℕ𝕌 🏴‍☠️'}, type: 1},
{buttonId: `.owner`, buttonText: {displayText: '👑 𝕆𝕎ℕ𝔼ℝ 👑‍️'}, type: 1},
{buttonId: `.sc`, buttonText: {displayText: '📄 𝕊ℂℝ𝕀ℙ𝕋 📄'}, type: 1}],
"headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": "application/zip",
            "title": "KirBotz.zip",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "999999999999",
            "pageCount": 999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg')
  }}, MessageType.buttonsMessage,{ quoted: floc,thumbnail: fs.readFileSync('./stik/thumb.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${ucapanWaktu}`,body:`${pushname}`,mediaType:"2",thumbnail:fs.readFileSync('./stik/thumb.jpeg'),mediaUrl:`https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`}}})
  break
case 'menupdf':
Valkyrie.sendMessage(from, {"contentText": `Hai Kak *${pushname}* ${ucapanWaktu}

*──────" 𝕭𝖔𝖙 𝕴𝖓𝖋𝖔 "──────*
 👤OWNER : *https://wa.me/6287705048235*
 💌EMAIL : *tesheroku123@gmail.com*
 🔎YT : *https://bit.ly/3BpBe1Z*
 🪀GROUP : *https://bit.ly/3Ene2TO*
`,"footerText": `
Valkyrie·Team
ANGGOTA TEAM
メLord Akira⁴̅⁰͍⁴̵
メLord Ozann⁴̅⁰͍⁴̵
メLord Kahfz⁴̅⁰͍⁴̵
メLord Aril⁴̅⁰͍⁴̵l
メLord Pebri⁴̅⁰͍⁴̵
メLord Galih⁴̅⁰͍⁴

*ꪶ ཻུ۪۪ꦽꦼ̷⸙𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ ཻུ۪۪ꦽꦼ̷⸙ || ${date}*`,
"buttons": [
{buttonId: `.allmenu`, buttonText: {displayText: '🏴‍☠️ 𝕄𝔼ℕ𝕌 🏴‍☠️'}, type: 1},
{buttonId: `.owner`, buttonText: {displayText: '👑 𝕆𝕎ℕ𝔼ℝ 👑‍️'}, type: 1},
{buttonId: `.sc`, buttonText: {displayText: '📄 𝕊ℂℝ𝕀ℙ𝕋 📄'}, type: 1}],
"headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": "application/pdf",
            "title": "KirBotz.pdf",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "999999999999",
            "pageCount": 999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg')
  }}, MessageType.buttonsMessage,{ quoted: floc,thumbnail: fs.readFileSync('./stik/thumb.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${ucapanWaktu}`,body:`${pushname}`,mediaType:"2",thumbnail:fs.readFileSync('./stik/thumb.jpeg'),mediaUrl:`https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`}}})
  break
case 'script': case 'sc':
 Valkyrie.sendMessage(from,`
Valkyrie·Team
ANGGOTA TEAM
メLord Akira⁴̅⁰͍⁴̵
メLord Ozann⁴̅⁰͍⁴̵
メLord Kahfz⁴̅⁰͍⁴̵
メLord Aril⁴̅⁰͍⁴̵l
メLord Pebri⁴̅⁰͍⁴̵
メLord Galih⁴̅⁰͍⁴

Script Bot? Cek Yt Link Di Bawah ↓↓
•• https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg
`, text, { thumbnail: tamnel, sendEphemeral: true, quoted: fdoc, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "📄 𝕊ℂℝ𝕀ℙ𝕋 📄",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./stik/thumb.jpeg'),sourceUrl:"https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg"}}} )
break
case 'ssweb':
case 'ss':
                if (args.length < 1) return reply('Urlnya mana om')
					teks = q
					anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
					buff = await getBuffer(anu.screenshot)
					Valkyrie.sendMessage(from, buff, image, {quoted: mek, caption : teks})
					break
case 'infogrup':
       case 'infogrouup':
       case 'grupinfo':
       case 'groupinfo':
              if (!isGroup) return reply(mess.only.group)
              try {
              var pic = await Valkyrie.getProfilePicture(from)
              } catch {
              var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
              let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`
              Valkyrie.sendMessage(from, await getBuffer(pic), image, {quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6288215463787@g.us" }: {})},message:{"orderMessage":{"orderId":"6288215463787","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
              break
		break
case 'allmenu':
thu = await Valkyrie.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split("@")[0]}
「 𝐎𝐖𝐍𝐄𝐑 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}off*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}on*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}status*_

「 𝐌𝐀𝐊𝐄𝐑 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}sticker*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}swm*_ <author|packname>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}take*_ <author|packname>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}fdeface*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}emoji*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}nulis*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}nuliskanan*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}nuliskiri*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}foliokanan*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}foliokiri*_

「 𝐂𝐎𝐍𝐕𝐄𝐑𝐓 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}toimg*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}tomp3*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}tomp4*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}slow*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}fast*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}reverse*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}tourl*_

「 𝐔𝐏 𝐒𝐓𝐎𝐑𝐘 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}upswteks*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}upswimage*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}upswvideo*_

「 18+ 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}chiisaihentai*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}trap*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}blowjob*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}yaoi*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}ecchi*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}hentai*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}ahegao*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}hololewd*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}sideoppai*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}animefeets*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}animebooty*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}animethighss*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}hentaiparadise*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}animearmpits*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}hentaifemdom*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}lewdanimegirls*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}biganimetiddies*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}animebellybutton*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}hentai4everyone*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}loli*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}husbu*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}milf*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}cosplay*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}wallml*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}pornhub*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}glitch*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}avenger*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}space*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}ninjalogo*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}marvelstudio*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}lionlogo*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}wolflogo*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}steel3d*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}wallgravity*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}tiktok*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}arcade8bit*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}battlefield4*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}pubg*_

「 RANDOM 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}ppcouple*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}anime*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}wallpaper*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}neko*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}meme*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}quotes*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}quotesimage*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}randomnama*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}faktaunik*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}katabijak*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}pantun*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}bucin*_

「 TEXTPROME 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}blackpink*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}neon*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}greenneon*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}advanceglow*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}futureneon*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}sandwriting*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}sandsummer*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}sandengraved*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}metaldark*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}neonlight*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}holographic*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}text1917*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}minion*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}deluxesilver*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}newyearcard*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}bloodfrosted*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}halloween*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}jokerlogo*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}fireworksparkle*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}natureleaves*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}bokeh*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}toxic*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}strawberry*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}box3d*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}roadwarning*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}breakwall*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}icecold*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}luxury*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}cloud*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}summersand*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}horrorblood*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}thunder*_


「 EPHOTO 360 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}wetglass*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}multicolor3d*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}watercolor*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}luxurygold*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}galaxywallpaper*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}lighttext*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}beautifulflower*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}puppycute*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}royaltext*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}heartshaped*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}birthdaycake*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}galaxystyle*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}hologram3d*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}greenneon*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}glossychrome*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}greenbush*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}metallogo*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}noeltext*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}glittergold*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}textcake*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}starsnight*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}wooden3d*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}textbyname*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}writegalacy*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}galaxybat*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}snow3d*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}birthdayday*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}freefire*_

「 PHOTO OXY 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}shadow*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}cup*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}cup1*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}romance*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}smoke*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}burnpaper*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}lovemessage*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}undergrass*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}love*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}coffe*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}woodheart*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}woodenboard*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}summer3d*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}wolfmetal*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}nature3d*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}underwater*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}golderrose*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}summernature*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}letterleaves*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}glowingneon*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}fallleaves*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}flamming*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}harrypotter*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}carvedwood*_

「 𝐅𝐔𝐍 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}fitnah*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}fitnahpc*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}kontak*_

「 𝐓𝐀𝐆 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}hidetag*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}kontag*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}sticktag*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}totag*_

「 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}ytsearch*_ <query>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}igstalk*_ <query>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}play*_ <query>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}video*_ <query>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}ytmp3*_ <link>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}ytmp4*_ <link>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}ig*_ <link>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}igstory*_ <username>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}twitter*_ <link>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}tiktokwm*_ <link>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}tiktoknowm*_ <link>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}fb*_ <link>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}brainly*_ <query>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}image*_ <query>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}anime*_ <random>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}pinterest*_ <query>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}komiku*_ <query>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}lirik*_ <query>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}chara*_ <query>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}playstore*_ <query>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}otaku*_ <query>

「 𝐎𝐓𝐇𝐄𝐑 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}self*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}public*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}setthumb*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}settarget*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}setfakeimg*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}setreply*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}ping*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}inspect*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}join*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}caripesan*_ <query>
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}get*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}term*_ <code>
ꪶ ཻུ۪۪ꦽꦼ̷ _*x*_ <code>

「 𝐉𝐀𝐃𝐈𝐁𝐎𝐓 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}jadibot*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}stopjadibot*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}listbot*_

「 𝐕𝐎𝐓𝐄 」
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}voting*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*${prefix}delvote*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*vote*_
ꪶ ཻུ۪۪ꦽꦼ̷ _*devote*_`
Valkyrie.sendMessage(from, { contentText: `${menuh}`, footerText: `
*──────" 𝕭𝖔𝖙 𝕴𝖓𝖋𝖔 "──────*
 👤OWNER : *https://wa.me/6287705048235*
 💌EMAIL : *tesheroku123@gmail.com*
 🔎YT : *https://bit.ly/3BpBe1Z*
 🪀GROUP : *https://bit.ly/3Ene2TO*

Runtime : *${runtime(process.uptime())}*
Tanggal *${date}*

Valkyrie·Team
ANGGOTA TEAM
メLord Akira⁴̅⁰͍⁴̵
メLord Ozann⁴̅⁰͍⁴̵
メLord Kahfz⁴̅⁰͍⁴̵
メLord AriL⁴̅⁰͍⁴̵l
メLord Pebri⁴̅⁰͍⁴̵
メLord Galih⁴̅⁰͍⁴
̵`, buttons: [{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'メ Donasi' }, type: 1 },{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'メ Sewabot' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender, owner]}}}, 'buttonsMessage')
break
case "astetick":
    case "videoanime":
    case "storyanime2":
    sticWait(from)
     Iki = await getBuffer (`https://megayaa.herokuapp.com/api/randomaesthetic`)
     Valkyrie.sendMessage(from, Iki, video, {quoted: mek, thumbnail: tamnel })
     break
case 'sewabot':
thu = await Valkyrie.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
menuh = `${ucapanWaktu} 𝐊𝐚𝐤 @${sender.split("@")[0]}
Yakin Nih Mau Sewa Bot ? 🤔 Boong Auto Banned >_<`
Valkyrie.sendMessage(from, { contentText: `${menuh}`, footerText: `Tanggal:  *${date}*\nJam: *${time}*\nRuntime : *${runtime(process.uptime())}*\n𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ`, buttons: [{ buttonId: `${prefix}sewa1`, buttonText: { displayText: '🗿Ya' }, type: 1 },{ buttonId: `${prefix}gk`, buttonText: { displayText: '👀Tidak' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: tamnel, contextInfo: {mentionedJid: [sender, ownerNumber]}}}, 'buttonsMessage')
break
case 'sewa1':
               list = []
               listmenu = [`waktu 1bulan`,`waktu 2bulan`,`waktu 6bulan`,`waktu panjang`]
               listmenuu = [`1 BULAN`,`2 BULAN`,`6 BULAN`,`PERPANJANG SEWA`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'LIST KE ' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: ``,
                        rowId: `${prefix}${x}`
                      }
                    ]
                   }
                        list.push(yy)
           }
               listmsg(from, `Silahkan Pilih List Yang Mau Di Sewa\n\n\n_*×××*_ KirBotz`,`  `, list)
               break
case 'waktu':
            if (args.length < 1) return reply('bukan gitu\n\nada dua pilihan\nvn\nngetik\n\ncontoh: !setbug ngetik')
            if((args[0]) == '1bulan'){
            saa =`${harga1bulan}`            
            const buttonpulsa = [{buttonId: `${prefix}via pulsa`, buttonText: {displayText: 'PULSA'}, type: 1},
                                {buttonId: `${prefix}via gopay`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `${prefix}via ovo`, buttonText: {displayText: 'OVO'}, type: 1}
                                ]
            const buttonMessagep = {
			headerType: "IMAGE",
			contentText: `${saa}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttonpulsa,
			headerType: 1
			}
            Valkyrie.sendMessage(from, buttonMessagep, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            } else
if ((args[0]) == '2bulan'){
            pay =`${harga2bulan}`            
            const buttongopay = [{buttonId: `${prefix}via pulsa`, buttonText: {displayText: 'PULSA'}, type: 1},
                                {buttonId: `${prefix}via gopay`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `${prefix}via ovo`, buttonText: {displayText: 'OVO'}, type: 1}
                                ]
            const buttonMessageg = {
			headerType: "IMAGE",
			contentText: `${pay}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttongopay,
			headerType: 1
			}
            Valkyrie.sendMessage(from, buttonMessageg, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            } else
if ((args[0]) == '6bulan'){
            voo =`${harga6bulan}`            
            const buttonovo = [{buttonId: `${prefix}via pulsa`, buttonText: {displayText: 'PULSA'}, type: 1},
                                {buttonId: `${prefix}via gopay`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `${prefix}via ovo`, buttonText: {displayText: 'OVO'}, type: 1}
                                ]
            const buttonMessageo = {
			headerType: "IMAGE",
			contentText: `${voo}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttonovo,
			headerType: 1
			}
            Valkyrie.sendMessage(from, buttonMessageo, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            } else
if ((args[0]) == 'panjang'){
            voo =`${hargaperpanjang}`            
            const buttonovo = [{buttonId: `${prefix}via pulsa`, buttonText: {displayText: 'PULSA'}, type: 1},
                                {buttonId: `${prefix}via gopay`, buttonText: {displayText: 'GOPAY'}, type: 1},
                                {buttonId: `${prefix}via ovo`, buttonText: {displayText: 'OVO'}, type: 1}
                                ]
            const buttonMessageo = {
			headerType: "IMAGE",
			contentText: `${voo}`,
			footerText: 'Pencet Salah Satu Payment Untuk Membayar',
			buttons: buttonovo,
			headerType: 1
			}
            Valkyrie.sendMessage(from, buttonMessageo, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            }
            break
case 'via':
            if (args.length < 1) return reply('bukan gitu\n\nada dua pilihan\nvn\nngetik\n\ncontoh: !setbug ngetik')
            if((args[0]) == 'pulsa'){
            saai =`${pulsa}`            
            const buttonpulsa = [{buttonId: `${prefix}owner`, buttonText: {displayText: 'ᴄᴏɴᴛᴀᴄᴛ owner'}, type: 1}]
            const buttonMessagep = {
			headerType: "IMAGE",
			contentText: `${saai}`,
			footerText: 'Jika Sudah Bayar Langsung Pencet Owner Di Bawah',
			buttons: buttonpulsa,
			headerType: 1
			}
            Valkyrie.sendMessage(from, buttonMessagep, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            } else
if ((args[0]) == 'gopay'){
            payu =`${gopay}`            
            const buttongopay = [{buttonId: `${prefix}owner`, buttonText: {displayText: 'ᴄᴏɴᴛᴀᴄᴛ owner'}, type: 1}]
            const buttonMessageg = {
			headerType: "IMAGE",
			contentText: `${payu}`,
			footerText: 'Jika Sudah Bayar Langsung Pencet Owner Di Bawah',
			buttons: buttongopay,
			headerType: 1
			}
            Valkyrie.sendMessage(from, buttonMessageg, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
            } else
if ((args[0]) == 'ovo'){
            voto =`${ovo}`            
            const buttonovo = [{buttonId: `${prefix}owner`, buttonText: {displayText: 'ᴄᴏɴᴛᴀᴄᴛ owner'}, type: 1}]
            const buttonMessageo = {
			headerType: "IMAGE",
			contentText: `${voto}`,
			footerText: 'Jika Sudah Bayar Langsung Pencet Owner Di Bawah',
			buttons: buttonovo,
			headerType: 1
			}
            Valkyrie.sendMessage(from, buttonMessageo, MessageType.buttonsMessage, 
            {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `6287705048235@s.whatsapp.net`, 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": `©KirBotz`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}})
                   
            }
            break
case 'donasi':
case 'payment':
               list = []
               listmenu = [`via gopay`,`via pulsa`,`via ovo`,`via ovo`]
               listmenuu = [`GOPAY`,`DANA`,`OVO`,`PULSA`]
               nombor = 1
               startnum = 0
               for (let x of listmenu) {
               const yy = {title: 'PayMent Ke ·' + nombor++,
    rows: [
       {
        title: `${listmenuu[startnum++]}`,
        description: ``,
        rowId: `${prefix}${x}`
      }
    ]
   }
        list.push(yy)
           }
               listmsg(from, `hai kak ${pushname} \n\nSilahkan pilih metode pembayaran di bawah ya !`,`  `, list)
               break
 case 'kir':
	menunyai = `
	
	
	
	
	
	
	
	
	
	
	
	`
var imgs = await Valkyrie.prepareMessage('0@c.us', tamnel, image, { thumbnail: tamnel })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await Valkyrie.prepareMessageFromContent(from, {
                "productMessage": {
                    "product": {
                        "productImage": imgCatalog,
                        "productId": "4457725420906655",
                        "title": `𝒜𝓁𝓁 𝑀𝑒𝓃𝓊`,
                        "description": menunyai,
                        "footerText": `©KirBotz`,
                        "currencyCode": "IDR",
                        "priceAmount1000": "100000000",
                        "productImageCount": 1,
                        "firstImageId": 1,
                        "salePriceAmount1000": "35000000",
                        "retailerId": `SUBSCRIBE YT : KirBotz×`,
                        "url": "https://wa.me/6287705048235"
                    },
                    "businessOwnerJid": "6287705048235@s.whatsapp.net",
                }
            }, { quoted: mek, mimetype: 'image/jpeg' })
            Valkyrie.relayWAMessage(ctlg)
            break

    case 'delvote':
            if(!mek.key.remoteJid) return
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
    case 'voting':
            if(!isGroupAdmins && !mek.key.fromMe) return 
            if(!isGroup) return reply(mess.only.group)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
    case 'linkwa':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
    case 'igstory': 
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    Valkyrie.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    Valkyrie.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
case 'bay':
      reply('Sayonara Buat Yang Pergi😔\n Semoga Amal Ibadahnya Di Terima Tapi Kalo Lu Balik Harus Donasi')
      break
      case 'selamatdatang':
      reply('Welcome Kak Jangan Lupa Patuhi Peraturan  Grup Ya Kaka \n Semoga Betah👏')
      break      
    case 'caripesan':
            if(!q)return reply('pesannya apa bang?')
            let v = await Valkyrie.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await Valkyrie.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
    case 'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
    case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            Valkyrie.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
    case 'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
    case 'chara':
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await Valkyrie.sendMessage(from,li,image,{quoted: mek})
            break
    case 'pinterest':
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await Valkyrie.sendMessage(from,di,image,{quoted: mek})
            break
    case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
    case 'on':
            if (!mek.key.fromMe) return 
            offline = false
            fakestatus(' ```ANDA TELAH ONLINE``` ')
            break       
    case 'status':
            fakestatus(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
            break
    case 'off':
            if (!mek.key.fromMe) return 
            offline = true
            waktu = Date.now()
            anuu = q ? q : '-'
            alasan = anuu
            fakestatus(' ```ANDA TELAH OFFLINE``` ')
            break   
    case 'get':
            if(!q) return reply('linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            fakestatus(bu)
            })   
            break
    case 'kontag':
            if (!mek.key.fromMe) return reply('SELF-BOT')
            pe = args.join('')
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            members_ids = []
            for (let mem of groupMembers) {
            members_ids.push(mem.jid)
            }
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            Valkyrie.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
            break
    case 'sticktag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Valkyrie.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Valkyrie.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Valkyrie.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else {
            reply(`*Reply sticker yang sudah dikirim*`)
            }
            break
case 'cerpen':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=KurrXd`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Creator : ${get_result.creator}\n`
                    ini_txt += `Story :\n${get_result.cerpen}`
                    titid = ini_txt
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `⬡ NEXT `,
            },
            type: 1,
          },]);
        break;
        case 'ceritahoror':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=KurrXd`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\n`
                    ini_txt += `Desc : ${get_result.desc}\n`
                    ini_txt += `Story :\n${get_result.story}\n`
                    buff = await getBuffer(get_result.thumbnail)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await Valkyrie.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'KirBotz', imageMessage: imageMsg,
              contentText: ini_txt,buttons,headerType:4}
              prep = await Valkyrie.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              Valkyrie.relayWAMessage(prep)
        break
case 'quotes':
    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=KurrXd`)
    quotes = quotes.result
    author = quotes.by
    quotes = quotes.quote
    reply(`_${quotes}_\n\n*â€• ${author}*`)
    break
case 'quotesanime':
    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=KurrXd`)
    quotes = quotes.result
    quote = quotes.quote
    char = quotes.character
    episode = quotes.episode
    reply(`_${quote}_\n\n*• ${char}*\n*${episode}*`)
    break
    case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Valkyrie.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Valkyrie.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Valkyrie.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Valkyrie.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Valkyrie.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Valkyrie.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Valkyrie.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Valkyrie.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'audio/mp4',
            	ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Valkyrie.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Valkyrie.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Valkyrie.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
            	mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Valkyrie.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'fitnah':
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            Valkyrie.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'settarget':
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'fitnahpc':
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await Valkyrie.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await Valkyrie.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'tomp3':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Valkyrie.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Valkyrie.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'fast':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Valkyrie.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Valkyrie.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'slow':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            fakegroup(mess.wait)
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Valkyrie.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Valkyrie.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'reverse':
            if (!isQuotedVideo) return fakegroup('Reply videonya!')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
            media = await Valkyrie.downloadAndSaveMediaMessage(encmedia)
            ran = getRandom('.mp4')
            exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
            fs.unlinkSync(media)
            if (err) return fakegroup(`Err: ${err}`)
            buffer453 = fs.readFileSync(ran)
            Valkyrie.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
            fs.unlinkSync(ran)
            })
            break
    case 'anime':
            sticWait(from)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            Valkyrie.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
case 'maker3d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
					makell = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no4?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					Valkyrie.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg')})
					break
			case 'transformer': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
					makell = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker/special/transformer?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					Valkyrie.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg')})
					break
               case 'googletxt':
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz|chan|kawai`)
             makell = args.join(" ")
             ll1 = makell.split("|")[0];
             ll2 = makell.split("|")[1];
             ll3 = makell.split("|")[0];
             sticWait(from)
             anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker?text=${ll1}&text2=${ll2}&text3=${ll3}&theme=google-suggestion&apikey=${xchillds}`)
             buffer1 = await getBuffer(anu.result.url)
             Valkyrie.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg')})
             break
       case 'battlefield': 
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
             makell = args.join(" ")
             ll1 = makell.split("|")[0];
             ll2 = makell.split("|")[1];
             sticWait(from)
             anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/game?text=${ll1}&text2=${ll2}&theme=battlefield&apikey=${xchillds}`)
             buffer1 = await getBuffer(anu.result.url)
             Valkyrie.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg')})
             break
       case 'coffeecup': 
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
             makell = args.join(" ")
             sticWait(from)
             anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup&apikey=${xchillds}`)
             buffer1 = await getBuffer(anu.result.url)
             Valkyrie.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg')})
             break
       case 'coffeecup2': 
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
             makell = args.join(" ")
             sticWait(from)
             anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/senja?text=${makell}&theme=coffee-cup2&apikey=${xchillds}`)
             buffer1 = await getBuffer(anu.result.url)
             Valkyrie.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg')})
             break
case 'maker2d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
					makell = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker2?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					Valkyrie.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg')})
					break
		case 'maker2d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
					makell = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					Valkyrie.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg')})
					break
		case 'maker2d4': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
					makell = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker4?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					Valkyrie.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg')})
					break
			case 'maker3d': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
					makell = body.slice(8)
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					Valkyrie.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg')})
					break
			case 'maker3d2': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
					makell = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no2?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					Valkyrie.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg')})
					break
			case 'maker3d3': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
					makell = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/maker3d/no3?text=${makell}&apikey=${xchillds}`)
					buffer1 = await getBuffer(anu.result.results)
					Valkyrie.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg')})
					break
case 'wasted':
		    var imgbb = require('imgbb-uploader')
		    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			owgi = await Valkyrie.downloadAndSaveMediaMessage(ger)
			data = await imgbb("91904762b2cd230ce1d861279bd6bf1d", owgi)
			buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/wasted?url=${data.display_url}&apikey=IkyOgiwara`)
			Valkyrie.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
		    } else {
			reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}wasted`)
		    }
		    break
case 'joke':
		    var imgbb = require('imgbb-uploader')
		    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			owgi = await Valkyrie.downloadAndSaveMediaMessage(ger)
			data = await imgbb("91904762b2cd230ce1d861279bd6bf1d", owgi)
			buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/joke?url=${data.display_url}&apikey=IkyOgiwara`)
			Valkyrie.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
		    } else {
			reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}joke`)
		    }
		    break
case 'picture':l
		    var imgbb = require('imgbb-uploader')
		    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			owgi = await Valkyrie.downloadAndSaveMediaMessage(ger)
			data = await imgbb("91904762b2cd230ce1d861279bd6bf1d", owgi)
			buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/picture?url=${data.display_url}&apikey=IkyOgiwara`)
			Valkyrie.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
		    } else {
			reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}picture`)
		    }
		    break
		    
case 'invert':
		    var imgbb = require('imgbb-uploader')
		    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			owgi = await Valkyrie.downloadAndSaveMediaMessage(ger)
			data = await imgbb("91904762b2cd230ce1d861279bd6bf1d", owgi)
			buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/invert?url=${data.display_url}&apikey=IkyOgiwara`)
			Valkyrie.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
		    } else {
			reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}invert`)
		    }
		    break
		case 'sepia':
		    var imgbb = require('imgbb-uploader')
		    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			owgi = await Valkyrie.downloadAndSaveMediaMessage(ger)
			data = await imgbb("91904762b2cd230ce1d861279bd6bf1d", owgi)
			buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/sepia?url=${data.display_url}&apikey=IkyOgiwara`)
			Valkyrie.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
		    } else {
			reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}sepia`)
		    }
		    break
	    case 'blur':
		    var imgbb = require('imgbb-uploader')
		    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			owgi = await Valkyrie.downloadAndSaveMediaMessage(ger)
			data = await imgbb("91904762b2cd230ce1d861279bd6bf1d", owgi)
			buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/blur?url=${data.display_url}&level=20&apikey=IkyOgiwara`)
			Valkyrie.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
		    } else {
			reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}blur`)
		    }
		    break
		case 'circle':
		    var imgbb = require('imgbb-uploader')
		    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			owgi = await Valkyrie.downloadAndSaveMediaMessage(ger)
			data = await imgbb("91904762b2cd230ce1d861279bd6bf1d", owgi)
			buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/circle?url=${data.display_url}&apikey=IkyOgiwara`)
			Valkyrie.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
		    } else {
			reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}circle`)
		    }
		    break
                  case 'trash':
		    var imgbb = require('imgbb-uploader')
		    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			owgi = await Valkyrie.downloadAndSaveMediaMessage(ger)
			data = await imgbb("91904762b2cd230ce1d861279bd6bf1d", owgi)
			buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/trash?url=${data.display_url}&apikey=IkyOgiwara`)
			Valkyrie.sendMessage(from, buff, image, {quoted: mek, caption: mess.success})
		    } else {
			reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}trash`)
		    }
		    break
		    case 'tahta':
		    if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}tahta KirBotz`)
		    buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${q}&apikey=IkyOgiwara`)
	      buttons = [{buttonId: `!infoig`,buttonText:{displayText: `Subrek YT : KirBotz×`},type:1}]
              imageMsg = (await Valkyrie.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'©KirBotz×', imageMessage: imageMsg,
              contentText:`Nih Kak!!!`,buttons,headerType:4}
              prep = await Valkyrie.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              Valkyrie.relayWAMessage(prep)
break
					case 'epepserti': 
                    if (args.length < 1) return reply(`*Example :*\n${prefix + command} KirBotz`)
					teksnya = args.join(" ")
					sticWait(from)
					anu = await fetchJson(`https://xnxxapi.herokuapp.com/api/maker/special/epep?text=${teksnya}&apikey=xnxx`)
					buffer1 = await getBuffer(anu.result.results)
					Valkyrie.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg')})
					break
       case 'neonn': 
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
             makell = args.join(" ")
             sticWait(from)
             anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=neon&apikey=${xchillds}`)
             buffer1 = await getBuffer(anu.result.url)
             Valkyrie.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg')})
             break
case 'glow': 
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
             makell = args.join(" ")
             sticWait(from)
             anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/metallic?text=${makell}&theme=glow&apikey=${xchillds}`)
             buffer1 = await getBuffer(anu.result.url)
             Valkyrie.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg')})
             break
case 'ppcp':
           case 'ppcouple':
           anu = await fetchJson(`https://api.caliph71.xyz/api/ppcouple?apikey=PvDArEz6`)
           buff1 = await getBuffer (anu.result.male)
           Valkyrie.sendMessage(from, buff1, image, {quoted: mek, caption: 'COWOK'})
           buff2 =await getBuffer (anu.result.female)
           Valkyrie.sendMessage(from, buff2, image, {quoted: mek, caption: 'CEWEK'})
           break    
       case 'summer': 
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
             makell = args.join(" ")
             sticWait(from)
             anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=summer&apikey=${xchillds}`)
             buffer1 = await getBuffer(anu.result.url)
             Valkyrie.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg')})
             break
       case 'flower': 
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
             makell = args.join(" ")
             sticWait(from)
             anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/alam?text=${makell}&theme=flower&apikey=${xchillds}`)
             buffer1 = await getBuffer(anu.result.url)
             Valkyrie.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg')})
             break
       case 'burn': 
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
             makell = args.join(" ")
             sticWait(from)
             anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=text-burn&apikey=${xchillds}`)
             buffer1 = await getBuffer(anu.result.url)
             Valkyrie.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg')})
             break
case 'quote': 
                  if (args.length < 1) return reply(`*Example :*\n${prefix}${command} KirBotz`)
             makell = args.join(" ")
             sticWait(from)
             anu = await fetchJson(`https://api-xchillds.herokuapp.com/api/textmaker/random?text=${makell}&theme=art-quote&apikey=${xchillds}`)
             buffer1 = await getBuffer(anu.result.url)
             Valkyrie.sendMessage(from, buffer1, image, {quoted: mek, thumbnail: fs.readFileSync('./stik/thumb.jpeg')})
             break
case 'attp':
					if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}attp KirBotz`)
					atetepe = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
					Valkyrie.sendMessage(from, atetepe, sticker, { quoted: mek })
					break
//
case 'cogan':
reply(`✍️Tunggu Sebentar....`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cogan?apikey=KurrXd`)
wmn = `🐧KirBotz`
trans = `Subrek YT : KirBotz×`
but = [
          { buttonId: `${prefix}cogan`, buttonText: { displayText: '🔖 Next' }, type: 1 }, { buttonId: `${prefix}owner`, buttonText: { displayText: '🌹 Owner' }, type: 1 },       { buttonId: `${prefix}sewabot`, buttonText: { displayText: '💰 Sewabot' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
case 'cecan':
reply(`✍️Tunggu Sebentar....`)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/cecan?apikey=KurrXd`)
wmn = `🐧KirBotz`
trans = `Subrek YT : KirBotz×`
but = [
          { buttonId: `${prefix}cecan`, buttonText: { displayText: '🔖 Next' }, type: 1 },
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: '💰 Sewabot' }, type: 1 }
        ]
        sendButImage(from, wmn, trans, buff, but)
break
case 'cecanvietnam':
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/vietnam?apikey=ZeroYT7`)
sticWait(from)
goo = await getBuffer(huft.result.url)
Valkyrie.sendMessage(from, goo, image, {quoted: fvid, caption: 'Nih Jangan Lupa Subscribe YT : KirBotz×'})
break
case 'cecanrandom':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=ZeroYT7`)
sticWait(from)
buffer = await getBuffer(ini.result.url)
Valkyrie.sendMessage(from, buffer, image, {quoted: fvid, caption: ''})
break
case 'hijaber':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=ZeroYT7`)
sticWait(from)
buffer = await getBuffer(ini.result.url)
Valkyrie.sendMessage(from, buffer, image, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'santuy':
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=ZeroYT7`)
sticWait(from)
buffer = await getBuffer(ini.result.url)
Valkyrie.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'ukhti':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=ZeroYT7`)
sticWait(from)
buffer = await getBuffer(ini.result.url)
Valkyrie.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'bocil':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=ZeroYT7`)
sticWait(from)
buffer = await getBuffer(ini.result.url)
Valkyrie.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'ghea':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=ZeroYT7`)
sticWait(from)
buffer = await getBuffer(ini.result.url)
Valkyrie.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'rika':

ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=ZeroYT7`)
sticWait(from)
buffer = await getBuffer(ini.result.url)
Valkyrie.sendMessage(from, buffer, video, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanmalaysia':
huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/malaysia?apikey=ZeroYT7`)
sticWait(from)
goo = await getBuffer(huft.result.url)
Valkyrie.sendMessage(from, goo, image, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecankorea':

huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/korea?apikey=ZeroYT7`)
sticWait(from)
goo = await getBuffer(huft.result.url)
Valkyrie.sendMessage(from, goo, image, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanindonesia':

huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/indonesia?apikey=ZeroYT7`)
sticWait(from)
goo = await getBuffer(huft.result.url)
Valkyrie.sendMessage(from, goo, image, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanjapan':

huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/japan?apikey=ZeroYT7`)
sticWait(from)
goo = await getBuffer(huft.result.url)
Valkyrie.sendMessage(from, goo, image, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
case 'cecanthailand':

huft = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/thailand?apikey=ZeroYT7`)
sticWait(from)
goo = await getBuffer(huft.result.url)
Valkyrie.sendMessage(from, goo, image, {quoted: fvid, caption: 'Nih Jangan Sampe Berdiri yah anunya (≧▽≦)'})
break
//
    case 'kontak':
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            Valkyrie.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    
    case 'take':
    case 'colong':
    		if (!isQuotedSticker) return reply('Stiker aja om')
            encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		    media = await Valkyrie.downloadAndSaveMediaMessage(encmedia)
            anu = args.join(' ').split('|')
            satu = anu[0] !== '' ? anu[0] : `SELF`
            dua = typeof anu[1] !== 'undefined' ? anu[1] : `BOT`
            require('./lib/fetcher.js').createExif(satu, dua)
			require('./lib/fetcher.js').modStick(media, Valkyrie, mek, from)
			break
	case 'stikerwm':
	case 'stickerwm':
    case 'swm':
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
            const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             media = await Valkyrie.downloadAndSaveMediaMessage(encmedia)
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            Valkyrie.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            Valkyrie.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out) 
            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
            const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const media = await Valkyrie.downloadAndSaveMediaMessage(encmedia)
            pe = args.join('')
            var a = pe.split("|")[0];
            var b = pe.split("|")[1];
            await createExif(a,b)
            out = getRandom('.webp')
            ffmpeg(media)
            .on('error', (e) => {
            console.log(e)
            Valkyrie.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
            fs.unlinkSync(media)
            })
            .on('end', () => {
            _out = getRandom('.webp')
            spawn('webpmux', ['-set','exif','./stik/data.exif', out, '-o', _out])
            .on('exit', () => {
            Valkyrie.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
            fs.unlinkSync(out)
            fs.unlinkSync(_out)
            fs.unlinkSync(media)
            })
            })
            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
            .toFormat('webp')
            .save(out)       
            } else {
            reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
            }
            break
    case 'upswteks':
            if (!q) return fakestatus('Isi teksnya!')
            Valkyrie.sendMessage('status@broadcast', `${q}`, extendedText)
            fakegroup(`Sukses Up story wea teks ${q}`)
            break
    case 'upswimage':
            if (isQuotedImage) {
            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await Valkyrie.downloadMediaMessage(swsw)
            Valkyrie.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
            bur = `Sukses Upload Story Image dengan Caption: ${q}`
            Valkyrie.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('Reply gambarnya!')
            }
            break
    case 'upswvideo':
            if (isQuotedVideo) {
            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            cihcih = await Valkyrie.downloadMediaMessage(swsw)
            Valkyrie.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
            bur = `Sukses Upload Story Video dengan Caption: ${q}`
            Valkyrie.sendMessage(from, bur, text, { quoted: mek })
            } else {
            fakestatus('reply videonya!')
            }
            break
    case 'fdeface':
            ge = args.join('')           
            var pe = ge.split("|")[0];
            var pen = ge.split("|")[1];
            var pn = ge.split("|")[2];
            var be = ge.split("|")[3];
            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
            if (args.length < 1) return reply (fde)
            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            const tipes = await Valkyrie.downloadAndSaveMediaMessage(dipes)        
            const bufer = fs.readFileSync(tipes)
            const desc = `${pn}`
            const title = `${pen}`
            const url = `${pe}`
            const buu = `https://${be}`
    		var anu = {
        	detectLinks: false
    		}
    		var mat = await Valkyrie.generateLinkPreview(url)
    		mat.title = title;
    		mat.description = desc;
    		mat.jpegThumbnail = bufer;
   			mat.canonicalUrl = buu; 
    		Valkyrie.sendMessage(from, mat, MessageType.extendedText, anu)
            break
    case 'public':
          	if (!mek.key.fromMe) return fakestatus('SELF-BOT')
          	if (banChats === false) return
          	// var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
          	banChats = false
          	fakestatus(`「 *PUBLIC-MODE* 」`)
          	break
	case 'self':
          	if (!mek.key.fromMe) return fakestatus('SELF-BOT')
          	if (banChats === true) return
          	uptime = process.uptime()
         	 // var taged = ben.message.extendedTextMessage.contextInfo.mentionedJid[0]
         	banChats = true
          	fakestatus(`「 *SELF-MODE* 」`)
          	break
 	case 'hidetag':
			if (!mek.key.fromMe) return fakestatus('SELF-BOT')
			if (!isGroup) return reply(mess.only.group)
			var value = args.join(' ')
			var group = await Valkyrie.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map(async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var optionshidetag = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			Valkyrie.sendMessage(from, optionshidetag, text)
			break
case 'tagall':
       if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
case 'play':
             if (args.length < 1) return reply(`Kirim perintah *${prefix}play query`)
             sticWait(from)
             let yut = await yts(q)
             yta(yut.videos[0].url)             
             .then(async(res) => {
             const { thumb, title, filesizeF, filesize } = res
             const capti = `𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬🍁
		     
•💬 Judul : ${yut.all[0].title}
•🎥 ID Video : ${yut.all[0].videoId}
•⏰️ Diupload Pada : ${yut.all[0].ago}
•👁️️ Views : ${yut.all[0].views}
•▶️ Durasi : ${yut.all[0].timestamp}
•📍 Channel : ${yut.all[0].author.name}
•🔗 Link Channel : ${yut.all[0].author.url}`
             ya = await getBuffer(thumb)
             py =await Valkyrie.prepareMessage(from, ya, image)
             gbutsan = [{buttonId: `${prefix}buttonmusic ${yut.all[0].url}`, buttonText: {displayText: '🎵AUDIO'}, type: 1},{buttonId: `${prefix}buttonvideo ${yut.all[0].url}`, buttonText: {displayText: '🎥VIDEO'}, type: 1}]
             gbuttonan = {
             imageMessage: py.message.imageMessage,
             contentText: capti,
             footerText: 'Silahkan Pilih Jenis File Dibawah Ini☕',
             buttons: gbutsan,
             headerType: 4
}
             await Valkyrie.sendMessage(from, gbuttonan, MessageType.buttonsMessage)})
             break                
             case 'buttonmusic':
             if(!q) return reply('linknya?')              
             res = await yta(`${q}`).catch(e => {
             reply('```[ ! ] Error Saat Mengirim Audio```')})
             sendMediaURL(from, `${res.dl_link}`,{quoted:mek})
             break         
case 'buttonvideo':
             if(!q) return reply('linknya?')            
             res = await ytv(`${q}`).catch(e => {
             reply('```[ ! ] Error Saat Mengirim Video```')})
             sendMediaURL(from, `${res.dl_link}`,'Nih Kack')
             break
	case 'music':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
    		aramas = await yts(srch);
    		aramat = aramas.all 
   			var mulaikah = aramat[0].url							
                  try {
                    yta(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break  
        case 'video':
            if (args.length === 0) return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
            var srch = args.join('')
            aramas = await yts(srch);
            aramat = aramas.all 
            var mulaikah = aramat[0].url                            
                  try {
                    ytv(mulaikah)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then(async (a) => {
                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
                        const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                        sendMediaURL(from, thumb, captions)
                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
                        })                
                        })
                        } catch (err) {
                        reply(mess.error.api)
                        }
                   break      
                   //
                   case 'faktaunik':
                case 'katabijak':
                case 'pantun':
                case 'bucin':
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=KurrXd`)
                   titid = get_result.result
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `➡️ NEXT`,
            },
            type: 1,
          },]);
        break
case 'randomnama':
                    anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=KurrXd`)
                    dasi = anu.result
                   sendButMessage(from, dasi, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `➡️ NEXT `,
            },
            type: 1,
          },]);
        break;
        case 'quotes':
                    anjy = await fetchJson(`https://spybot-api.herokuapp.com/api/randomquote?apikey=${spykey}`)
                   titid = `${anjy.result.quotes}`
                   sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [
          {
            buttonId: `${prefix + command}`,
            buttonText: {
              displayText: `➡️ NEXT`,
            },
            type: 1,
          },]);
        break
                    
                case 'quotesimage':
                    get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=KurrXd`)
                    await Valkyrie.sendMessage(from, get_result, image)
                    break
case 'meme':
ano = await fetchJson(`https://spybot-api.herokuapp.com/api/random/meme?apikey=${spykey}`)
inibaf = await getBuffer(`${ano.result.url}`, {method: 'get'})
inicapt = `${ano.result.title}`
trrans = `KirTod`
but = [
          { buttonId: `${prefix}meme`, buttonText: { displayText: '🔖 Next' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '🌹 Owner' }, type: 1 },
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: '💰 Sewabot' }, type: 1 }
        ]
        sendButImage(from, inicapt, trrans, inibaf, but)
break
case 'neko':
sticWait(from)
amnnuu = await fetchJson(`https://spybot-api.herokuapp.com/api/nsfw/nsfwNeko?apikey=${spykey}`)
buff = await getBuffer(`${amnnuu.result}`, {method: 'get'})
tekkss = `Siapkan Sabun:v`
ttrans = `KirTod`
but = [
          { buttonId: `${prefix}neko`, buttonText: { displayText: '🔖 Next' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '🌹 Owner' }, type: 1 },
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: '💰 Sewabot' }, type: 1 }
        ]
        sendButImage(from, tekkss, ttrans, buff, but)
break
case 'wallpaper':
sticWait(from)
anoh = await fetchJson(`https://spybot-api.herokuapp.com/api/random/wallpaper?apikey=${spykey}`)
nahbaff = await getBuffer(`${anoh.result.url}`, {method: 'get'})
teksss = `Ini Bang Jan Lupa Subrek  KirBotz×`
trans = `KirTod`
but = [
          { buttonId: `${prefix}wallpaper`, buttonText: { displayText: '🔖 Next' }, type: 1 },
          { buttonId: `${prefix}owner`, buttonText: { displayText: '🌹 Owner' }, type: 1 },
          { buttonId: `${prefix}sewabot`, buttonText: { displayText: '💰 Sewabot' }, type: 1 }
        ]
        sendButImage(from, teksss, trans, nahbaff, but)
break
//18+
case 'chiisaihentai':
                case 'trap':
                case 'blowjob':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=KurrXd`)
              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await Valkyrie.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'✗✗✗ Akira', imageMessage: imageMsg,
              contentText:`Subrek : KirBotz×`,buttons,headerType:4}
              prep = await Valkyrie.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              Valkyrie.relayWAMessage(prep)
       
                    break
case 'bj':
                case 'ero':
                case 'cum':
                case 'feet':
                case 'yuri':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'pussy':
                case 'femdom':
                case 'waifu':
                case 'cuddle':
                case 'hentai':
                case 'eroyuri':
                case 'cum_jpg':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
               buff = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=KurrXd`)
                buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await Valkyrie.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'✗✗✗ Akira', imageMessage: imageMsg,
              contentText:`Subrek : KirBotz×`,buttons,headerType:4}
              prep = await Valkyrie.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              Valkyrie.relayWAMessage(prep)
        
                    break
case 'loli':
       case 'husbu':
       case 'milf':
       case 'cosplay':
       case 'wallml':
      let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = ( await Valkyrie.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await Valkyrie.prepareMessageFromContent(from,{buttonsMessage},{quoted:{key:{fromMe:false,participant:`0@s.whatsapp.net`, ...(from ? {remoteJid :"6288215463787@g.us" }: {})},message:{"orderMessage":{"orderId":"6288215463787","thumbnail":``,"itemCount":281005,"status":"INQUIRY","surface":"CATALOG","message":` `,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}})
              Valkyrie.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              breakl
//Maker

case 'anime':
            sticWait(from)
            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
            .then(res => res.text())
            .then(body => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
            .then((response) => {
            media =  Buffer.from(response, 'base64');
            Valkyrie.sendMessage(from,media,image,{quoted:mek,caption:'NIH'})
            }
            )
            .catch((error) => {
            console.log(error); 
            }
            )
            });
            break
case 'darkjokes': 
              sticWait(from)
              anu = await fetchJson(`https://api.zeks.me/api/darkjokes?apikey=${setting.zekskey}`)
              anu1 = await getBuffer(anu.result)
              Valkyrie.sendMessage(from, anu1, image, {caption: `OK it's done`, quoted: mek})
              break
case 'ytgold':  
              if (args.length < 1) return reply(`*${prefix}${command} Valkyrie*`)
              F = body.slice(8)
              reply(mess.wait)
              anu = await getBuffer(`https://api.zeks.me/api/gplaybutton?text=${F}&apikey=${setting.zekskey}`)
              Valkyrie.sendMessage(from, anu, image, {caption: `OK it's Done`, quoted: mek})
              break
   case 'ytsilver':  
              if (args.length < 1) return reply(`*${prefix}${command} Valkyrie*`)
              F = body.slice(10)
              reply(mess.wait)
              anu = await getBuffer(`https://api.zeks.me/api/splaybutton?text=${F}&apikey=${setting.zekskey}`)
              Valkyrie.sendMessage(from, anu, image, {caption: `OK it's Done`, quoted: mek})
              break
case 'blackpink':
   case 'neon':
   case 'greenneon':
   case 'advanceglow':
   case 'futureneon':
   case 'sandwriting':
   case 'sandsummer':
   case 'sandengraved':
   case 'metaldark':
   case 'neonlight':
   case 'holographic':
   case 'text1917':
   case 'minion':
   case 'deluxesilver':
   case 'newyearcard':
   case 'bloodfrosted':
   case 'halloween':
   case 'jokerlogo':
   case 'fireworksparkle':
   case 'natureleaves':
   case 'bokeh':
   case 'toxic':
   case 'strawberry':
   case 'box3d':
   case 'roadwarning':
   case 'breakwall':
   case 'icecold':
   case 'luxury':
   case 'cloud':
   case 'summersand':
   case 'horrorblood':
   case 'thunder':
              if (args.length == 0) return reply(`Example: ${prefix + command} text`)
              kipass = args.join(" ")
              kontolmu = await getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=KurrXd&text=${kipass}`)
              Valkyrie.sendMessage(from, kontolmu, image, { quoted: mek})
              break
case 'wetglass':
   case 'multicolor3d':
   case 'watercolor':
   case 'luxurygold':
   case 'galaxywallpaper':
   case 'lighttext':
   case 'beautifulflower':
   case 'puppycute':
   case 'royaltext':
   case 'heartshaped':
   case 'birthdaycake':
   case 'galaxystyle':
   case 'hologram3d':
   case 'greenneon':
   case 'glossychrome':
   case 'greenbush':
   case 'metallogo':
   case 'noeltext':
   case 'glittergold':
   case 'textcake':
   case 'starsnight':
   case 'wooden3d':
   case 'textbyname':
   case 'writegalacy':
   case 'galaxybat':    
   case 'snow3d':
   case 'birthdayday':
   case 'freefire':
              if (args.length == 0) return reply(`Example: ${prefix + command} text`)
              ini_txt = args.join(" ")
              ini_buffer = await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=KurrXd&text=${ini_txt}`)
              Valkyrie.sendMessage(from, ini_buffer, image, { quoted: mek})
              break
case 'shadow':
    case 'cup':
    case 'cup1':
    case 'romance':
    case 'smoke':
    case 'burnpaper':
    case 'lovemessage':
    case 'undergrass':
    case 'love':
    case 'coffe':
    case 'woodheart':
    case 'woodenboard':
    case 'summer3d':
    case 'wolfmetal':
    case 'nature3d':
    case 'underwater':
    case 'golderrose':
    case 'summernature':
    case 'letterleaves':
    case 'glowingneon':
    case 'fallleaves':
    case 'flamming':
    case 'harrypotter':
    case 'carvedwood':
               if (args.length == 0) return reply(`Example: ${prefix + command} text`)
               lemari = args.join(" ")
               ndasmu = await getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=KurrXd&text=${lemari}`)
               Valkyrie.sendMessage(from, ndasmu, image, { quoted: mek})
               break
case 'pornhub':
                case 'glitch':
                case 'avenger':
                case 'space':
                case 'ninjalogo':
                case 'marvelstudio':
                case 'lionlogo':
                case 'wolflogo':
                case 'steel3d':
                case 'wallgravity':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=KurrXd&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        Valkyrie.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : KirBotz×`, quoted : mek})
                    })
                    break
case 'tiktok':
                case 'arcade8bit':
                case 'battlefield4':
                case 'pubg':
                    if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
                    txt1 = args[0]
                    txt2 = args[1]
                    getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=KurrXd&text1=${txt1}&text2=${txt2}`).then((gambar) => {
                        Valkyrie.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : KirBotz×`, quoted : mek})
                    })
                    break
                    case 'xnxxsearch':
    if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=KurrXd&query=${query}`)
    get_result = get_result.result
    ini_txt = ""
    for (var x of get_result) {
        ini_txt += `Title : ${x.title}\n`
        ini_txt += `Views : ${x.views}\n`
        ini_txt += `Duration : ${x.duration}\n`
        ini_txt += `Uploader : ${x.uploader}\n`
        ini_txt += `Link : ${x.link}\n`
        ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
    }
    reply(ini_txt)
    break
    case 'xnxx':
    if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=KurrXd&url=${query}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Duration : ${get_result.duration}\n`
    ini_txt += `View : ${get_result.view}\n`
    ini_txt += `Rating : ${get_result.rating}\n`
    ini_txt += `Like : ${get_result.like}\n`
    ini_txt += `Dislike : ${get_result.dislike}\n`
    ini_txt += `Comment : ${get_result.comment}\n`
    ini_txt += `Tag : ${get_result.tag.join(", ")}\n`
    ini_txt += `Description : ${get_result.description}\n`
    ini_txt += "Link : \n"
    ini_link = get_result.link
    for (var x of ini_link) {
        ini_txt += `${x.type} - ${x.link}\n\n`
    }
    thumbnail = await getBuffer(get_result.thumbnail)
    await Valkyrie.sendMessage(from, thumbnail, image, { quoted: mek , caption: ini_txt })
    break
                    case 'nulis':
        case 'tulis':
               if (args.length < 1) return reply('Yang mau di tulis apaan?')
               teks = args.join(' ')
               sticWait(from)
               nulis = encodeURIComponent(teks)
               res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
               if (res.data.error) return reply(res.data.error)
               buff = Buffer.from(res.data.result.split(',')[1], 'base64')
               Valkyrie.sendMessage(from, buff, image, {quoted: mek, caption: mess.success}).catch(e => {
               return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
})
               break
//
    case 'sticker': 
    case 'stiker':
    case 'sg':
    case 's':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            const media = await Valkyrie.downloadAndSaveMediaMessage(encmedia)
                ran = '666.webp'
                await ffmpeg(`./${media}`)
                .input(media)
                .on('start', function (cmd) {
                     console.log(`Started : ${cmd}`)
                })
                .on('error', function (err) {
                 console.log(`Error : ${err}`)
                fs.unlinkSync(media)
                reply('error')
                })
                .on('end', function () {
                console.log('Finish')
                Valkyrie.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
                 fs.unlinkSync(media)
                fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
                } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                const media = await Valkyrie.downloadAndSaveMediaMessage(encmedia)
            ran = '999.webp'
            sticWait(from)
            await ffmpeg(`./${media}`)
            .inputFormat(media.split('.')[1])
            .on('start', function (cmd) {
            console.log(`Started : ${cmd}`)
            })
            .on('error', function (err) {
            console.log(`Error : ${err}`)
            fs.unlinkSync(media)
            tipe = media.endsWith('.mp4') ? 'video' : 'gif'
            reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
            })
            .on('end', function () {
            console.log('Finish')
            Valkyrie.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
            fs.unlinkSync(media)
            fs.unlinkSync(ran)
                })
                .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                .toFormat('webp')
                .save(ran)
            } else {
                reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)
            }
            break               
    case 'toimg':
			if (!isQuotedSticker) return reply('𝗥𝗲𝗽𝗹𝘆/𝘁𝗮𝗴 𝘀𝘁𝗶𝗰𝗸𝗲𝗿 !')
			sticWait(from)
			encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
			media = await Valkyrie.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.png')
			exec(`ffmpeg -i ${media} ${ran}`, (err) => {
			fs.unlinkSync(media)
			if (err) return reply('Yah gagal, coba ulangi ^_^')
			buffer = fs.readFileSync(ran)
			fakethumb(buffer,'NIH')
			fs.unlinkSync(ran)
			})
			break
	case 'ytsearch':
			if (args.length < 1) return Valkyrie('Tolong masukan query!')
			var srch = args.join('');
			try {
        	var aramas = await yts(srch);
   			} catch {
        	return await Valkyrie.sendMessage(from, 'Error!', MessageType.text, dload)
    		}
    		aramat = aramas.all 
    		var tbuff = await getBuffer(aramat[0].image)
    		var ytresult = '';
    		ytresult += '「 *YOUTUBE SEARCH* 」'
    		ytresult += '\n________________________\n\n'
   			aramas.all.map((video) => {
        	ytresult += '❏ Title: ' + video.title + '\n'
            ytresult += '❏ Link: ' + video.url + '\n'
            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
    		});
    		ytresult += '◩ *SELF-BOT*'
    		await fakethumb(tbuff,ytresult)
			break
	case 'setreply':
	case 'setfake':
			if (!q) return fakegroup(mess.wrongFormat)
			fake = q
			fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
			break
	case 'setfakeimg':
        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await Valkyrie.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/fake.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'setthumb':
	        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
			delb = await Valkyrie.downloadMediaMessage(boij)
			fs.writeFileSync(`./stik/thumb.jpeg`, delb)
			fakestatus('Sukses')
        	} else {
            reply(`Kirim gambar dengan caption ${prefix}sethumb`)
          	}
			break	
	case 'ytmp4':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
			let isLinks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks2) return reply(mess.error.Iv)
				try {
				sticWait(from)
				ytv(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
				if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*YTMP 4!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captionsYtmp4 = `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captionsYtmp4)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})		
				})
				} catch (err) {
			    reply(mess.error.api)
				}
				break
	case 'emoji':
			if (!q) return fakegroup('emojinya?')
			qes = args.join(' ')
			emoji.get(`${qes}`).then(emoji => {
			teks = `${emoji.images[4].url}`
    		sendStickerFromUrl(from,`${teks}`)	
    		console.log(teks)
   			})
    		break
	case 'ytmp3':
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
			let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
			if (!isLinks) return reply(mess.error.Iv)
				try {
				sticWait(from)
				yta(args[0])
				.then((res) => {
				const { dl_link, thumb, title, filesizeF, filesize } = res
				axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
				.then((a) => {
			    if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*Data Berhasil Didapatkan!*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
				const captions = `*YTMP3*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
				sendMediaURL(from, thumb, captions)
				sendMediaURL(from, dl_link).catch(() => reply(mess.error.api))
				})
				})
				} catch (err) {
				reply(mess.error.api)
				}
				break
    case 'image':
            if (args.length < 1) return reply('Masukan teks!')
            const gimg = args.join('');
            sticWait(from)
            gis(gimg, async (error, result) => {
            n = result
            images = n[Math.floor(Math.random() * n.length)].url
            Valkyrie.sendMessage(from,{url:images},image,{quoted:mek})
            });
            break
 	case 'tiktokwm':
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.watermark) })
            .catch((err) => { reply(String(err)) })
             break
    case 'tiktoknowm': 
             if (!q) return reply('Linknya?')
             if (!q.includes('tiktok')) return reply(mess.error.Iv)
             reply(mess.wait)
             anu = await TiktokDownloader(`${q}`)
            .then((data) => { sendMediaURL(from, data.result.nowatermark) })
            .catch((err) => { reply(String(err)) })
             break
    case 'brainly':
			if (args.length < 1) return reply('Pertanyaan apa')
          	brien = args.join(' ')
			brainly(`${brien}`).then(res => {
			teks = '❉───────────────────────❉\n'
			for (let Y of res.data) {
			teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
			}
			Valkyrie.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
            })              
			break
    case 'ig':
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Linknya?')
        sticWait(from)
	    hx.igdl(args[0])
	    .then(async(result) => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    Valkyrie.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    Valkyrie.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
	    break
    case 'igstalk':
            if (!q) return fakegroup('Usernamenya?')
            ig.fetchUser(`${args.join(' ')}`).then(Y => {
            console.log(`${args.join(' ')}`)
            ten = `${Y.profile_pic_url_hd}`
            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.followers}\n*Following* : ${Y.following}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
            sendMediaURL(from,ten,teks) 
            })      
            break    
    case 'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            sticWait(from)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*Link video_normal* : ${G.Normal_video}`)
            })
            break    
	case 'term':
			if (!q) return fakegroup(mess.wrongFormat)
			exec(q, (err, stdout) => {
			if (err) return fakegroup(`SELF-BOT:~ ${err}`)
			if (stdout) {
			fakegroup(stdout)
			}
			})
		    break 
		    case 'bc':
             if (!isOwner) return  sticOwner(from)
             if (args.length < 1) return reply('teks?')
             anu = await Valkyrie.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await Valkyrie.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             	tes = `${body.slice(4)}`
             	Valkyrie.sendMessage(_.jid, bc, { contentText: `${tes}`, footerText: `Tanggal:  *${date}*\nJam: *${time}*\nBroadcast By *ValkyrieX4·Teamꪶ𖣂ꫂ*`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1},{buttonId: `${prefix}sewabot`,buttonText:{displayText:'SEWABOT'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: image, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
             	textt = `${body.slice(4)}`
             Valkyrie.sendMessage(_.jid, { contentText: `${textt}`, footerText: `Tanggal:  *${date}*\nJam: *${time}*\nBroadcast By *ValkyrieX4·Teamꪶ𖣂ꫂ*`, buttons: [{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1},{buttonId: `${prefix}sewabot`,buttonText:{displayText:'SEWABOT'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fs.readFileSync('./stik/thumb.jpeg'), contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
             reply('Suksess broadcast')
}
             break
case 'bcc':
             if (!isOwner) return  sticOwner(from)

             if (args.length < 1) return reply('teks?')

             anu100 = await Valkyrie.chats.all()

             if (isMedia && !Valkyrie.message.videoMessage || isQuotedImage) {

             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(kyy).replace('quotedM','m')).message.extendedTextMessage.contextInfo : Kahfz

             bc1000 = await Valkyrie.downloadMediaMessage(encmedia)

             for (let _ of anu1000) {

             Valkyrie.sendMessage(_.jid, bc1000, image, {quoted: mek, caption: `*「 KAHFZ GAMTENG 」*\n\n${body.slice(4)}`})

}

             reply('Suksess broadcast')

             } else {

             for (let _ of anu100) {

             Valkyrie.sendMessage(_.jid, 

			{"contentText": `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`,

			"footerText": '©𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ',

			"buttons": [{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1},{buttonId: `${prefix}sewabot`,buttonText:{displayText:'SEWABOT'},type:1}], "headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "title": "𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ.pptx",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "999999999999",
            "pageCount": 999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": fs.readFileSync('./stik/thumb.jpeg'),
  }}, MessageType.buttonsMessage,{ quoted: floc,thumbnail: fs.readFileSync('./stik/thumb.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `BroadCast 𝕶𝖎𝖗𝕭𝖔𝖙𝖟ꪶ𖣂ꫂ`,body:"",mediaType:"2",thumbnail:fs.readFileSync('./stik/thumb.jpeg'),mediaUrl:`https://youtube.com/channel/UC7NslQroUqQYzo2wDFBOUMg`}}})

}

             reply('Suksess broadcast')

}

             break
    case 'join':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await Valkyrie.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
    case'twitter':
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await hx.twitter(`${ten}`)
            ren = `${g.HD}`
            sendMediaURL(from,ren,'DONE')
            break
    case 'runtime':
    case 'test':
            run = process.uptime() 
            teks = `${kyun(run)}`
            fakegroup(teks)
            break  
	case 'speed':
	case 'ping':
			const timestamp = speed();
			const latensi = speed() - timestamp
			exec(`neofetch --stdout`, (error, stdout, stderr) => {
			const child = stdout.toString('utf-8')
			const teks = child.replace(/Memory:/, "Ram:")
			const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
			fakegroup(pingnya)
			})
			break  
    case 'totag':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Valkyrie.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Valkyrie.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Valkyrie.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Valkyrie.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Valkyrie.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Valkyrie.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Valkyrie.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Valkyrie.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4',
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Valkyrie.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Valkyrie.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
            value = args.join(" ")
            var group = await Valkyrie.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Valkyrie.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
    case 'tomp4':
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            owgi = await Valkyrie.downloadAndSaveMediaMessage(ger)
            webp2mp4File(owgi).then(res=>{
            sendMediaURL(from,res.result,'Done')
            })
            }else {
            reply('reply stiker')
            }
            fs.unlinkSync(owgi)
            break
            
case 'owner':
let inilist = []
for (let i of ownerNumber) {
const vname = Valkyrie.contacts[i] != undefined ? Valkyrie.contacts[i].vname || Valkyrie.contacts[i].notify : undefined
inilist.push({
"displayName": 'Akira',
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${Valkyrie.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
hehe = await Valkyrie.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: floc })
button = [
  {buttonId: '.menu', buttonText: {displayText: 'MENU'}, type: 1}
]
 buttons = {
    contentText: 'Nih Kak Owner ku ><',
    footerText: `*©ValkyrieX4·Team*`,
    buttons: button,
    headerType: 1
}
await Valkyrie.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: floc})
break
    case 'tourl':
            if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await Valkyrie.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('kirim/reply gambar/video')
            }
            break	
    case 'inspect':
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            if (!q) return reply('masukan link wa')
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
            jids = []
            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await Valkyrie.query({ 
            json: ["query", "invite",net],
            expect200:true })
            let par = `*Id* : ${id}
${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
*Nama Gc* : ${subject}
*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
*Jumlah Member* : ${size}
${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
*Id desc* : ${descId}
${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
           for ( let y of participants) {
             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
             }
             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
             Valkyrie.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
             } catch {
             reply('Link error')
             }
             break
//group
case 'welcome':
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome enable/disable')
               if ((args[0]) === 'enable') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'disable') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
case 'antilink':
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
              if (!q) return reply(`Pilih enable atau disable`)
              if (args[0].toLowerCase() === 'enable'){
              if (isAntiLink) return reply(`Udah aktif`)
              antilink.push(from)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')
              } else if (args[0].toLowerCase() === 'disable'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
              reply('*「 ANTILINK DI NONAKTIFKAN 」*')
              } else {
              reply(`Pilih enable atau disable`)
}
              break
default:
if (budy.startsWith('x')){
try {
return Valkyrie.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'red'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    
