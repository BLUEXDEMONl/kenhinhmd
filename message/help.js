const version = require("@whiskeysockets/baileys/package.json").version
const moment = require("moment-timezone");
const fs = require("fs");
const chalk = require('chalk')
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
const { color, bgcolor } = require('../lib/color')
const {kyun} = require("../lib/myfunc");
moment.tz.setDefault("Asia/Jakarta").locale("id");

const Ehztext = (text, style = 1) => {
  var abc = 'abcdefghijklmnopqrstuvwxyz1234567890'.split('');
  var ehz = {
    1: 'abcdefghijklmnopqrstuvwxyz1234567890'
  };
  var replacer = [];
  abc.map((v, i) =>
    replacer.push({
      original: v,
      convert: ehz[style].split('')[i]
    })
  );
  var str = text.split('');
  var output = [];
  str.map((v) => {
    if (v.toUpperCase() !== v.toLowerCase() && v === v.toUpperCase()) {
      // If the character is uppercase, push it unchanged
      output.push(v);
    } else {
      // If the character is lowercase or not a letter, find and convert it
      const find = replacer.find((x) => x.original == v.toLowerCase());
      find ? output.push(find.convert) : output.push(v);
    }
  });
  return output.join('');
};

let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString("id", {
day: 'numeric',
month: 'long',
year: 'numeric'
})

////Total fitur by Official Dittaz
const totalFitur = () =>{
var mytext = fs.readFileSync("./message/case.js").toString()
var numUpper = (mytext.match(/case/g) || []).length;
return numUpper
}

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 


let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)

let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)

/*
let yes = "*「 _Error_ * ❌"
let no =""

const feat = (q) => {
    let status = false
    Object.keys(db.data.listerror).forEach((i) => {
        if (db.data.listerror[i].cmd === q) {
            status = true
        }
    })
    return status
}
*/



exports.allmenu =  ( limitCount, isPremium,thisHit, publik, sender, prefix, pushname) => {
try{ 
var saldo = db.data.users[sender].balance.toLocaleString() 
} catch{ 
var saldo = db.data.users[sender].balance
}
return Ehztext(`
┏━━━\`𝐊𝐄𝐍𝐒𝐇𝐈𝐍 𝐃.𝐗𝐎\`
┃⟐ 𝐔𝐒𝐄𝐑  :  ${pushname}
┃⟐ 𝐒𝐓𝐀𝐓𝐔𝐒 :  ${isPremium ? 'Premium':'Free'}
┃⟐ 𝐌𝐎𝐃𝐄 : ${publik ? "Public" : "Self"}
┃⟐ 𝐑𝐔𝐍 𝐈𝐍 : ${runWith} 
┃⟐ 𝐃𝐀𝐓𝐄 :  *${week}, ${calender}*
┃⟐ 𝐃𝐀𝐓𝐄 :  *${timeWib} WIB*
┗━━━━━━━━━━━━━━
 ${readmore}`)}

exports.fitur = (prefix) => {
return Ehztext(`
    \`𝐎𝐖𝐍𝐄𝐑 𝐅𝐔𝐍𝐂\`
➻ addprem
➻ delprem
➻ cekprem
➻ listprem
➻ public
➻ self
➻ runtime
➻ status
➻ dec doc (𝖱𝖾𝗉𝗅𝗒 𝖣𝗈𝖼𝗎𝗆𝖾𝗇𝗍)

    \`𝐁𝐔𝐆 𝐌𝐄𝐍𝐔 𝐕𝐕𝐈𝐏 𝐃.𝐗𝐎\`
➻ xcrash
➻ vbug
➻ inviz
➻ xios
➻ carousel

    \`𝐍𝐒𝐅𝐖 𝐅𝐔𝐍𝐂\`
➻ paptt (foto/video)
➻ nsfw (on/off)
➻ blowjob 
➻ nwaifu
➻ gifblowjob

𝐓𝐡𝐚𝐧𝐤𝐬 𝐓𝐨
𝐊𝐞𝐧𝐬𝐡𝐢𝐧 𝐇𝐚𝐦𝐚𝐝𝐚 (𝐝𝐞𝐯)
𝐒𝐚𝐠𝐚𝐫𝐚 𝐊𝐞𝐧𝐨𝐬𝐮𝐤𝐞 (𝐁𝐞𝐬𝐭)
𝐁𝐫𝐮𝐱𝐨 𝐬𝐫 (𝐅𝐮𝐧𝐜)

`
)}
  //BIG THANKS JANGAN DI HAPUS KLO MAU TAMBAHIN NAMA LU AJA PEPEK




let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
console.log(chalk.bgGreen(color("[  UPDATE ]", "black")),chalk.white(`${__filename}`) )
	delete require.cache[file]
	require(file)
})
