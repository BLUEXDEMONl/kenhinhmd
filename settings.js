const version = require("@whiskeysockets/baileys/package.json").version


global.language = "id"
//connecting 
global.sessionName = "session"
global.pairingCode = true // true / false
global.pairingNumber = "2347041039367" // masukin nomor bot
global.runWith = "Panel Only"
global.newsletterJid = "120363185390263663@newsletter"
global.newsletterName = "𝐊𝐄𝐍𝐒𝐇𝐈𝐍 𝐃.𝐗𝐎"
//owner
global.ownerName = "𝗞𝗲𝗻𝘀𝗵𝗶𝗻 𝗛𝗮𝗺𝗮𝗱𝗮"
global.nomerOwner = ["2347041039367"]
//sosmed
global.syt = 'https://www.youtube.com/@Kenshin'
global.sgc = 'https://chat.whatsapp.com'
global.sig = 'https://instagram.com/KenshinHmd'
global.web = 'https://pornhub.com'
//setbot
global.botName = "𝐊𝐄𝐍𝐒𝐇𝐈𝐍 𝐃.𝐗𝐎" 
global.wm = "𝐊𝐄𝐍𝐒𝐇𝐈𝐍 𝐃.𝐗𝐎"
global.setmenu = "image" 
global.docType = "application/vnd.ms-excel"
global.public = true
global.baileysMd = true
global.antiSpam = true
global.multi = true
global.prefa = "!"
global.fake = botName
global.Console = false
global.autorespon = true
global.copyright = `Bot WhatsApp⁰⁵`
global.baileysVersion = `Baileys ${version}`
global.On = "On"
global.Off ="Off"
global.autoblockcmd = false
global.fake1 ="Bot WhatsApp"
global.packName = `ehanz pwn ngentod\neh SUKSES:)`
global.authorName = "wa : 62956768"
global.replyType = "web"
global.setwelcome = "type1"
global.autoblockcmd = false
global.autoReport = true
global.autoLevel = true
global.autoSticker = true
global.autoBio = true
global.gamewaktu = 60
global.limitCount = 30
global.Intervalmsg = 1000 //detik
//hiasan
global.gris = '`' // Jangan di ubah
global.fileStackApi ="AVKHbeyXsT0G9IKI01qenz" //daftar di filestack
global.fotoRandom = [
"https://i.ibb.co.com/Hhjg91n/b90fc448aada689dab4011cb79dd11e4.jpg",
"https://i.ibb.co.com/DMzNJ8r/53a2ca232a45c4ccbf80dc033d252494.jpg"]


//Apikey Nya
global.skizo = 'memberaja'
global.Betabotz = 'LSd7Lq9S'
global.Lolhuman = '652c7664865e2b0e70929768',
global.FilestackApi = 'AJgyzwz0FQk67sTuplYoiz'


    
global.gcounti = {
'prem' : 1000,
'user' : 5
} 
 



let d = new Date();
      let locale = "id";
      let gmt = new Date(0).getTime() - new Date("1 Januari 2021").getTime();
      let week = d.toLocaleDateString(locale, { weekday: "long" });
      const calender = d.toLocaleDateString("id", {
      day: "numeric",
      month: "long",
      year: "numeric",
      });

global.calender = calender;

const fs = require("fs");
const { color } = require("./lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})






