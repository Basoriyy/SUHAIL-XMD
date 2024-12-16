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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_58_12_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxODgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjEyLFxuICAgICAgICA3OCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTkyLFxuICAgICAgICA3NixcbiAgICAgICAgODMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDg2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDgsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDkzLFxuICAgICAgICA4NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDk0LFxuICAgICAgICAzMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTgsXG4gICAgICAgIDMwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTc0LFxuICAgICAgICA4NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE1LFxuICAgICAgICAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDI2LFxuICAgICAgICA1MyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE4LFxuICAgICAgICAxMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDk0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDU1LFxuICAgICAgICA1MixcbiAgICAgICAgOSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDg0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDYxLFxuICAgICAgICA3NixcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDMzLFxuICAgICAgICA4OSxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMDksXG4gICAgICAgIDM5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NixcbiAgICAgICAgNCxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4LFxuICAgICAgICA4MixcbiAgICAgICAgNDQsXG4gICAgICAgIDM3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMyxcbiAgICAgICAgOTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY3LFxuICAgICAgICA1MixcbiAgICAgICAgOTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExLFxuICAgICAgICA3LFxuICAgICAgICAyNDksXG4gICAgICAgIDc2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjI1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NixcbiAgICAgICAgMjEwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA4LFxuICAgICAgICAxODIsXG4gICAgICAgIDg2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMwLFxuICAgICAgICA5OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgNCxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImRXeHdYa2VmRHRVeGJVMzNpcDVFV0E3Zngzc2J5eWY2amFDQWRZZlZNdE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJBSWZJbl9LVGotQnlkZURGT042a1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjA5NmI0NjMtNDIzMi00Mzk0LWEzMmEtMDdlY2VjYWE0Y2U3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkxLFxuICAgICAgMTg1LFxuICAgICAgNjMsXG4gICAgICAxNzEsXG4gICAgICA2MSxcbiAgICAgIDc2LFxuICAgICAgNjEsXG4gICAgICA3OCxcbiAgICAgIDE0OCxcbiAgICAgIDIyOCxcbiAgICAgIDIxNixcbiAgICAgIDIyNixcbiAgICAgIDMxLFxuICAgICAgMzUsXG4gICAgICA1NixcbiAgICAgIDE5MyxcbiAgICAgIDIwNCxcbiAgICAgIDE2OCxcbiAgICAgIDEyNyxcbiAgICAgIDE0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NSxcbiAgICAgIDI1MSxcbiAgICAgIDEyNSxcbiAgICAgIDE5OCxcbiAgICAgIDE2MCxcbiAgICAgIDI1MSxcbiAgICAgIDEyNCxcbiAgICAgIDU0LFxuICAgICAgMTE3LFxuICAgICAgMTM4LFxuICAgICAgODAsXG4gICAgICAxNjcsXG4gICAgICAxODAsXG4gICAgICA1NyxcbiAgICAgIDE4NSxcbiAgICAgIDE2MSxcbiAgICAgIDE4OCxcbiAgICAgIDU1LFxuICAgICAgMjQ0LFxuICAgICAgMjAzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpFTjREUzdWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTMyMTI2OTA3Ojg0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQWxheW9tbyBUZWNoIEluc3RpdHV0ZVwiLFxuICAgIFwibGlkXCI6IFwiNjAyMDcxODcxMjAyMDc6ODRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkhIM1AwSEVLbWNnYnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKYkxGZzhOc2NtMzhZd0kzS3ZIRE1XeEErSENDYTFMVXZ0dUIxQlJaZzFrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIndzM1N3K0ZIa3JGQlBoOXRjZmFoc3NVRWljTll4cU84U1ZxOUcwSElZbVl1ODBWTmFuTUxzVnUyN1k1V0RuM0UxeE51eGs4eUVYeUorTG1salE5SUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVtSEFhTkliMDh1dS82V28xK3I5MlQ0ZWdBVTJmbHFKNU9Za0ExK1FTSjFUS2loNVgxdjgxNWtxWm5MeXpTSDY0cHowNzJ4QTlDTkFHVXY3MlVKeWhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzIxMjY5MDc6ODRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQzNjQ3MTdcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
