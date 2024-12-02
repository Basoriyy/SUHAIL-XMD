const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_12_12_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAzNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDk0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMixcbiAgICAgICAgODAsXG4gICAgICAgIDYyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzQsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDkwLFxuICAgICAgICAzNyxcbiAgICAgICAgMTMzLFxuICAgICAgICA3NyxcbiAgICAgICAgODksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjExLFxuICAgICAgICAzOSxcbiAgICAgICAgNTksXG4gICAgICAgIDc3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0MixcbiAgICAgICAgMTk3LFxuICAgICAgICAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NixcbiAgICAgICAgMTE0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyLFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDksXG4gICAgICAgIDM1LFxuICAgICAgICAxODYsXG4gICAgICAgIDQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDg4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTksXG4gICAgICAgIDMwLFxuICAgICAgICAyNDksXG4gICAgICAgIDgyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNCxcbiAgICAgICAgMjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODAsXG4gICAgICAgIDgzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDY1LFxuICAgICAgICA2NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDkyLFxuICAgICAgICA5MCxcbiAgICAgICAgOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE4LFxuICAgICAgICA5OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTUsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg2LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDg0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIklDeC9tQ3IxV1hIUk1ZLzNxWmxWZ0JyT2phdFhYL1IvS1o1QWlXRnRrY0U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIldFNS11OWNyVEZLZ1hEMldlcmxXTGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiOGYwMmNiN2UtNWM3OC00NjBkLWE3ZTEtYjllZGE3MzY3ZWQxXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg5LFxuICAgICAgMjM5LFxuICAgICAgMTIzLFxuICAgICAgODksXG4gICAgICAxMixcbiAgICAgIDIyNSxcbiAgICAgIDEzOSxcbiAgICAgIDE0MSxcbiAgICAgIDE1OCxcbiAgICAgIDE1MSxcbiAgICAgIDIyNyxcbiAgICAgIDIyNSxcbiAgICAgIDk3LFxuICAgICAgNTQsXG4gICAgICAxNDIsXG4gICAgICAxNDksXG4gICAgICAxODUsXG4gICAgICA3MCxcbiAgICAgIDE3MyxcbiAgICAgIDIyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMyxcbiAgICAgIDc0LFxuICAgICAgMTUsXG4gICAgICA2OSxcbiAgICAgIDY5LFxuICAgICAgMjUwLFxuICAgICAgNzQsXG4gICAgICAyNSxcbiAgICAgIDExMCxcbiAgICAgIDg2LFxuICAgICAgNzksXG4gICAgICAyOCxcbiAgICAgIDEwLFxuICAgICAgNjcsXG4gICAgICAyNTQsXG4gICAgICAyNTQsXG4gICAgICAyNCxcbiAgICAgIDEwMixcbiAgICAgIDE2NSxcbiAgICAgIDE4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMWkJOTTVGRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzMjEyNjkwNzo4M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFsYXlvbW8gVGVjaCBJbnN0aXR1dGVcIixcbiAgICBcImxpZFwiOiBcIjYwMjA3MTg3MTIwMjA3OjgzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0plUzV3c1F0cCsxdWdZWUVDQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiamJ0Umxkcnc4dXArdlNET1d3YSs0U0ZTQTNyRUJobTRmemVYNTlGeUFRbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxbTNlZ1ZLKzZac0hGY0VXbk4xYUhtQmU3WUdqbEttOUtVSEErb3JTQXJyMVUzRm1XVThxZGN1NUtmZ1U5ZVBrbDdha0tkYldXQ21Qd2pMRUJKNUVEZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRUGhZZG5xdEU5VlA2T1FnRnpMdEVHc29yajR0R3lnSWt4eGpFeFlZRHE4bVNjY1R2OTUrYmxFYzVicUNuL055bU94TGZ6VDdLU21ZSmhoWFZObVBnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTMyMTI2OTA3OjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMxMTk5MjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGTCtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZMKy5qc29uIjogIntcImtleURhdGFcIjpcImRseEJaOXlhK0tLZ2lBRkxRb2RGQXE4bnE2dk9wOUpja0h2OXVQanA2VWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjQ3NTg1NTEsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTczMTg3NDI0MDg3OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
