const Discord = require("discord.js");
const YTDL = require("ytdl-core");

const TOKEN = "INSERTTOKENHERE";
const PREFIX = "vic!";

var memes = [
"https://twitter.com/nickisonlinet/status/1008450545428914176",
"https://twitter.com/CursedVideos/status/1008057277058834433",
"https://twitter.com/CursedVideos/status/1006960375877783561",
"https://twitter.com/CursedVideos/status/1005932642628403202",
"https://twitter.com/EZ_bartkuip/status/1003015077505716224",
"https://twitter.com/ShitpostBot5000/status/1009118675155156994",
"https://twitter.com/ShitpostBot5000/status/1008816685539905537",
"https://twitter.com/maniac_zn/status/1021957851307106304",
"https://twitter.com/Bootleg_Stuff/status/1008468845798019077",
"https://twitter.com/JeffirsonB/status/1008481922870403073",
"https://twitter.com/meua_migo/status/1008436255753940994",
"https://twitter.com/ShitpostBot5000/status/1008378795487789061",
"https://twitter.com/df_porto/status/1008097400681041920",
"https://twitter.com/PicturesFoIder/status/1009080539075305472",
"https://twitter.com/PicturesFoIder/status/1009013625581907969",
"https://twitter.com/PicturesFoIder/status/1009021992622854144",
"https://www.youtube.com/watch?v=haftdShWI1Y",
"https://twitter.com/CursedVideos/status/1023006343102431233",
"https://twitter.com/CursedVideos/status/1020756378628083714",
"https://www.youtube.com/watch?v=jd1wXf1C3Ng",
"https://twitter.com/0Luansacanabot/status/1021896608760438784",
"https://pbs.twimg.com/media/DjLjjTsXsAITR87.jpg",
"https://twitter.com/fabriciodaorakk/status/1029073488722767872",
"https://twitter.com/cnt_pr/status/1028440603414155264",
"https://twitter.com/CursedAds/status/1028690862405050369",
"https://twitter.com/CursedAds/status/1028081800332161025",
"https://twitter.com/CursedAds/status/1028533952389242880"
];

var siouna = [
"si",
"na",
"se fode"
];

function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function() {
if (server.queue[0]) play(connection, message);
else connection.disconnect();
    });
}

var bot = new Discord.Client();

var servers = {};

bot.on("ready",function(){   

    console.log("ESTOU PRONTO!");    
   
   bot.user.setPresence({ game: { name: "Matheus Canella" , type: 3 } });
   
   });
   

bot.on("message", function(message) {
if (message.author.equals(bot.user)) return;

if (!message.content.startsWith(PREFIX)) return;

var args = message.content.substring(PREFIX.length).split(" ");

switch (args[0].toLowerCase()) {
    case "ping":
    message.channel.send(new Date().getTime() - message.createdTimestamp + "ms ok :+1:");
    break;
    case "pinga":
number = 8
imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
message.author.send ( {files: ["./pinga/" + imageNumber + ".jpg"]} )
break;
case "shiparkaick":
message.channel.sendMessage("https://image.prntscr.com/image/jzWh3FPSRjqx4juy1V6yHQ.png")
break;
case "randommeme":
message.channel.sendMessage(memes[Math.floor(Math.random() * memes.length)]);
break;
case "torresponde":
if (args[1]) {
    message.channel.sendMessage(siouna[Math.floor(Math.random() * siouna.length)]);
}
break;
    case "comandos":
message.channel.sendMessage("**vic!ping - da coisa de ping \nvic!play - toca musica (só link do youcu) \nvic!skip - pyla o gemidao \nvic!stop - tira tudo pq o adm ta pistola \nvic!volume - aumente ou abaixa o volume do corn \nvic!comandos - eza pora seu gei burro \nvic!pinga - me da pinga koroi \nvic!shiparkaick - filme com Kaick que enfrenta sua webnamorada made by grupo do zop\nvic!randommeme - memes aleatorios e fidas ok\nvic!legal - você fez minha vida maluca ficar mais legal :+1:\nvic!novidades - incriveis novidades desse lindo bot ok\nvic!torresponde - victor respondendo sua pergunta só com si ou na\ncriado pelo <@!304670445532348416> ok <:okdofrozaumok:435835365836718080>**")
    break;
    case "play":
if (!args[1]) {
message.channel.sendMessage("o corn, só link do youcu ok");
return;
};

if (!message.member.voiceChannel) {
    message.channel.sendMessage("entra no xat gei");
    return;
};

if (!servers[message.guild.id]) servers[message.guild.id] = {
    queue: []
};

var server = servers[message.guild.id]

server.queue.push(args[1]);

if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
play(connection, message);
});

message.delete();
    break;
    case "skip":
var server = servers[message.guild.id];

if (server.dispatcher) server.dispatcher.end();
    break;
    case "stop":
    var server = servers[message.guild.id];

    if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
    message.channel.sendMessage("ok parei :+1:");
    break;
    case "legal":
    message.channel.sendMessage(":+1:", {files: ["./coisaslegais/maislegal.mp4"]});
    break;
    case "novidades":
    message.channel.sendMessage("**novidades ok** (versão 0.2.1.0|13/08/2018) \n\n● **NOVO COMANDO: vic!torresponde**\n● **vic!randommeme de volta \o/**\n\nsó ok <:okdofrozaumok:435835365836718080>");
    break;
	case "volume":
	message.channel.sendMessage("infelizmente, esse comando não existe por limitações da api do ytdl, mas você pode abaixar o volume diretamente no discord vendo essa imagem abaixo :+1:", {files: ["./coisaslegais/tutorial.png"]});
    break;
	default:
    message.channel.sendMessage("o seu gei arombido se analfabato ou o kaiak falo q existe isso, pois é, não existe seu corn");
}
});

bot.login(TOKEN);
