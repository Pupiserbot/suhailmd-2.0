const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


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
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_20_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDkzLFxuICAgICAgICAwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOCxcbiAgICAgICAgMjEwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTksXG4gICAgICAgIDY5LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDcwLFxuICAgICAgICA0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDk0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc4LFxuICAgICAgICAxOCxcbiAgICAgICAgNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDkwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDU0LFxuICAgICAgICA5NyxcbiAgICAgICAgNTksXG4gICAgICAgIDQ5LFxuICAgICAgICA2NCxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExLFxuICAgICAgICA3NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDkwLFxuICAgICAgICA4MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDgsXG4gICAgICAgIDExMixcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDg0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDU2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTksXG4gICAgICAgIDgxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDY3LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTEyLFxuICAgICAgICA4MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDMzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDM2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyLFxuICAgICAgICA4NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDc3LFxuICAgICAgICAzNixcbiAgICAgICAgMTE0LFxuICAgICAgICA0NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDUxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2NixcbiAgICAgICAgMTQsXG4gICAgICAgIDIxLFxuICAgICAgICAzMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNyxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzksXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDc0LFxuICAgICAgICA4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiK3lzU3ZBM3ZhOEpiV1krYTV3NkR4SGc1cy9WTUdzYU1hOExMOFZhTzYvZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiNU1UYjMyb2JSOFdYQVdJNXl0YU1XQVwiLFxuICBcInBob25lSWRcIjogXCJmYWVmNzkyYS1hMjA5LTRmNDgtODQ0YS04MGI5NDJmMGFlNGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTgsXG4gICAgICAzOCxcbiAgICAgIDE1MyxcbiAgICAgIDIxMixcbiAgICAgIDAsXG4gICAgICAxNTgsXG4gICAgICA0NSxcbiAgICAgIDE2NyxcbiAgICAgIDE5NyxcbiAgICAgIDIwOCxcbiAgICAgIDQsXG4gICAgICA4NSxcbiAgICAgIDc2LFxuICAgICAgMTAzLFxuICAgICAgODcsXG4gICAgICAzOSxcbiAgICAgIDEzMixcbiAgICAgIDQwLFxuICAgICAgMTYzLFxuICAgICAgN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NyxcbiAgICAgIDE4MCxcbiAgICAgIDIzNixcbiAgICAgIDYzLFxuICAgICAgMjI0LFxuICAgICAgNTIsXG4gICAgICAxODcsXG4gICAgICAyMTIsXG4gICAgICAxMDAsXG4gICAgICAxMjAsXG4gICAgICAxOCxcbiAgICAgIDE2OSxcbiAgICAgIDk2LFxuICAgICAgMTc3LFxuICAgICAgMjQzLFxuICAgICAgNjgsXG4gICAgICAyMjcsXG4gICAgICA5OCxcbiAgICAgIDgxLFxuICAgICAgMTU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlQ0QlBLVFNXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MTg4NDg2MzY4MTk6NzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZCWypzhtI/JquqcsS7wnZCNyarhtIThtIs/ISFcIixcbiAgICBcImxpZFwiOiBcIjg0MDA1NzUxODk4MjUwOjc4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pPWXo2c0RFT3JNb2JzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRm1YZ3FyaUdFR1k4ZDgyeVAxSW9KV0JEMnJWNnZ4VDFhVmtuMjRteE9Ebz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFK0g1ZnlJV1dtY3FLZWplZXVkR3Vxb2xPKzY2WUROR3ZIRTJuWUtMbDcwMzQwa0hueTlzYjQwMnpCaTFGai9Ta0RWaFNLcXRETU8wbUpaSFRSVUJCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFb215L1dsRFd3NXgvQkJTVDFrUHZRSjNUcFVVOGxoNGVuOVc2ZWhFd2lPR2FFclFMczVhcDFpNzBZcE1mR1BUWmxSKzFBdHZ0UHR4UStWSXhYeHZDUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTg4NDg2MzY4MTk6NzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA1OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0ODk1MjE0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR2E5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHYTkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIxUWhqOVZXa3FZZFFrNlpOZHd4L3F3Z1FOb0R3VHZhQmF6TEpoUkhSVXowPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjg5Njc4MTMzMCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczNDg3ODk5MTQzNFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "« 𝐌ᴏɴᴊᴀɴ 𝐍ɪᴄᴋ !!↺🤍🐼",
  packname: process.env.PACK_NAME || "⍣⃟‣₈₈ⷫ₄₈ͥ₆₃ⷭ₆₈ⷦ₁₉<3★",
  botname : process.env.BOT_NAME  || "NICK-MD",
  ownername:process.env.OWNER_NAME|| "Nick-Md",


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
