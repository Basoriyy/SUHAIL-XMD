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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_23_11_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDQyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA3OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc4LFxuICAgICAgICA1NixcbiAgICAgICAgODEsXG4gICAgICAgIDY1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4NixcbiAgICAgICAgOTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDUyLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMixcbiAgICAgICAgNzksXG4gICAgICAgIDAsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzksXG4gICAgICAgIDg4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDcyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDczLFxuICAgICAgICA2MyxcbiAgICAgICAgMTA2LFxuICAgICAgICA0MyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNixcbiAgICAgICAgMTc4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDgyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY3LFxuICAgICAgICA2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDY2LFxuICAgICAgICA1NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDY4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTA2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA5MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgOTIsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTgyLFxuICAgICAgICA5MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDksXG4gICAgICAgIDExOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjIyLFxuICAgICAgICA2NyxcbiAgICAgICAgMzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDMwLFxuICAgICAgICAyNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDAsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDc3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlJOR3pqTHVqMUNWQi90WU9XOHU4MTJiVjRlcUdNU3hBZElSVDhiVGQ4eGc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTEzMjEyNjkwN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODU3MDhEOTk5RDJFNDQwOUQzQjdBMjdCMTVFNjM3OEZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMxOTE0NjAzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlFsV0R3VEtPUThHQzNnSnRMRmNHWEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDc2ZTc3OGUtZDBjNC00MmQ0LWIyYjYtNmMzNWE4ZjFhNjAwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI1MSxcbiAgICAgIDI0OSxcbiAgICAgIDE4MSxcbiAgICAgIDE3NixcbiAgICAgIDcsXG4gICAgICAxMjksXG4gICAgICA5NyxcbiAgICAgIDcyLFxuICAgICAgOTQsXG4gICAgICAxNjMsXG4gICAgICAzNyxcbiAgICAgIDQ0LFxuICAgICAgMTI1LFxuICAgICAgMTUzLFxuICAgICAgMjQ3LFxuICAgICAgNjIsXG4gICAgICAxNDMsXG4gICAgICA5OCxcbiAgICAgIDE2MixcbiAgICAgIDU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NCxcbiAgICAgIDI0LFxuICAgICAgMzAsXG4gICAgICA4NixcbiAgICAgIDQ1LFxuICAgICAgNTQsXG4gICAgICA4MixcbiAgICAgIDIzNyxcbiAgICAgIDk2LFxuICAgICAgMTU5LFxuICAgICAgNjIsXG4gICAgICAxMTUsXG4gICAgICAxNzAsXG4gICAgICAxNzMsXG4gICAgICAxMjEsXG4gICAgICAxNzMsXG4gICAgICAyMzUsXG4gICAgICAxODAsXG4gICAgICAxODAsXG4gICAgICA2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5SEpaOUZZS1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTEzMjEyNjkwNzo3OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkFsYXlvbW8gVGVjaCBJbnN0aXR1dGVcIixcbiAgICBcImxpZFwiOiBcIjYwMjA3MTg3MTIwMjA3Ojc4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0plUzV3c1E0TmJydVFZWUN5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiamJ0Umxkcnc4dXArdlNET1d3YSs0U0ZTQTNyRUJobTRmemVYNTlGeUFRbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvRm1USDVvb2lCTURxQ1pPczlNRGsyNFdSb2E3ZHVTbWdqR1VqWVc4WWF2TEVBYUpSd1NNckkvQytRQVRGVWluNUVOZ3FrbHZwdTg4V0orSlJETDRCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3ck5hYW14eTMxdHBReDJKWTJsSW9YUVhrOEFVSVpRNm9Tb3ljdGdLc0p3QU9saHJsYTdiR09NRVZPYXVEc21zb2Z4SEZXY2NBWnJlSVpHcTloRmRDdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTMyMTI2OTA3Ojc4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE5MTQ1OTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGTCtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZMKy5qc29uIjogIntcImtleURhdGFcIjpcImRseEJaOXlhK0tLZ2lBRkxRb2RGQXE4bnE2dk9wOUpja0h2OXVQanA2VWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjQ3NTg1NTEsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDJdfSxcInRpbWVzdGFtcFwiOlwiMTczMTg3NDI0MDg3OVwifSIKfQ=="  // PUT your SESSION_ID 


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
