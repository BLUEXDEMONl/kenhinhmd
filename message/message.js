

module.exports = async (senderNumber, prefix,command, setReply) => {


global.mess = {
wait: '*_Tunggu sebentar ya Kak._*',
game : 'Game tidak aktip di Group ini,Beritahu Admin Untuk Mengaktifkan Fitur Game\n.game on',

nsfw : 'nsfw tidak aktip di chat ini,Beritahu Admin Untuk Mengaktifkan nsfw',
query: 'Masukan query',
search: 'Searching...',
scrap: '*Scrapping...*',
success: 'Berhasil!',
limit: `[❕] Limit kamu sudah habis nihh\nKalau kamu mau unlimited limit, kamu bisa membeli premium, hanya 10 ribu sudah bisa membeli unlimited limit selama 3 bulan,\nSilahkan ketik ${prefix}owner untuk mengetahui pemilik bot ini dan melanjutkan pembayaran nya, makasih sudah memakai bot`,
claimOn: `Kamu sudah melakukan claim sebelumnya, Harap claim lagi pada jam `,
wrongFormat: 'Format salah, coba liat lagi di menu',

error: {
stick: 'bukan sticker itu:v',
api: 'Error api atau linkya mungkin',
Iv: 'Linknya error:v',
link : "Link error!"
},

block:{
Bowner: `Maaf kak command 「 *${command}* 」 telah di block oleh owner`,
Bsystem: `Command 「 *${command}* 」telah di block oleh system karena terjadi error`
},

 only: {
prem : 'Fitur Khusus User Premium, Silahkan Ketik .buyprem Untuk Beli',
group: 'Fitur ini dapat digunakan di Dalam Group!',
ownerB: 'Fitur Khusus Owner Bot!',
owner: 'Fitur Khusus Owner Bot!',
admin: 'Fitur dapat Digunakan oleh Admin Group!',
Badmin: 'Fitur dapat Digunakan Setelah Bot menjadi ADMIN!'
 }
    }
  
global.dfail = (type) => {
let msg = {
    
rowner: "*Owner Only* - Command ini hanya untuk owner bot!",
owner: "*Owner Only* - Command ini hanya untuk owner bot!",
mods: "*Owner Only* - Command ini hanya untuk owner bot!",
premium: "*Premium Only* - Command ini hanya untuk member premium!",
group: "*Group Only* - Command ini hanya dapat digunakan di grup!",
private: "*Private Only* - Command ini hanya dapat digunakan di chat pribadi!",
admin: "*Admin Only* - Command ini hanya untuk admin grup!",
botAdmin: "Jadikan bot sebagai admin untuk menggunakan command ini",
onlyprem: "Hanya user *premium* yang dapat menggunakan fitur ini di *private chat*!!",
nsfw: "Admin menonaktifkan fitur *NSFW* di grup ini!",
rpg: "Admin menonaktifkan fitur *RPG Game* di grup ini!",
game: "Admin menonaktifkan fitur *Game* di grup ini!",
limitExp: "Limit kamu habis! Beberapa command tidak dapat diakses!\n\nKamu bisa beli limit caranya dengan mengetik *.buy limit 5*",
restrict: "Fitur ini tidak dapat digunakan!!",
unreg: "Silahkan daftar ke *database* bot terlebih dahulu jika ingin menggunakan fitur ini!\n\nketik:\n#daftar namamu.umurmu\nContoh: #daftar Teguh.15\n",

}[type];

if (msg)
return setReply(msg)
};
 

}





const fs = require("fs");
const { color } = require("../lib/color");
const chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})