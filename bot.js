const Discord = require("discord.js");
const client = new Discord.Client();
const nombreCanal = process.env.CHANNEL_TOKEN;
const nombreCanal2 = process.env.CHANNEL2_TOKEN;
const nombreCom = process.env.COM_TOKEN;
const macacoProtection = process.env.PASS_TOKEN;
const tiempoActualizacion = 5 * 60 * 1000;
const thumbnail = process.env.TNAIL_TOKEN;
const nombreLog = process.env.LOG_TOKEN;
var logMsg = "";
var idMain = 0;
var idNotif = 0;
var limiteTiempo = 6 * 60 * 60;
var limiteTiempoExtendido = 11 * 60 * 60;
var limiteFree = 35 * 60 ;
var syh_vel1= ["?","",new Date()];var syh_vel2= ["?","",new Date()];var syh_bal1= ["?","",new Date()];var syh_bal2= ["?","",new Date()];
var syh_ser1= ["?","",new Date()];var syh_ser2= ["?","",new Date()];var syh_cal1= ["?","",new Date()];var syh_cal2= ["?","",new Date()];
var syh_med1= ["?","",new Date()];var syh_med2= ["?","",new Date()];var syh_val1= ["?","",new Date()];var syh_val2= ["?","",new Date()];
var syh_kam1= ["?","",new Date()];var syh_dri1= ["?","",new Date()];var syh_ars = ["?","",new Date()];var kaa_vel1= ["?","",new Date()];
var kaa_vel2= ["?","",new Date()];var kaa_bal1= ["?","",new Date()];var kaa_bal2= ["?","",new Date()];var kaa_ser1= ["?","",new Date()];
var kaa_ser2= ["?","",new Date()];var kaa_cal1= ["?","",new Date()];var kaa_cal2= ["?","",new Date()];var kaa_med1= ["?","",new Date()];
var kaa_med2= ["?","",new Date()];var kaa_val1= ["?","",new Date()];var kaa_val2= ["?","",new Date()];var kaa_kam1= ["?","",new Date()];
var kaa_dri1= ["?","",new Date()];var kaa_ars = ["?","",new Date()];

client.on("ready", () => {
	const pass = client.channels.find('name', macacoProtection);
	var channel = null;
	if(pass !== null) {channel = pass.guild.channels.find('name', nombreCanal);};
	logMsg = client.channels.find('name', nombreLog); 
	if(pass !== null && channel  !== null){    	
		actualizar(channel, 2);
		setInterval (function () {actualizar(channel,0) }, tiempoActualizacion);   
    console.log("Listo!", client.guilds.map(function(item) { return item["name"]; }));
	} else {
		console.log("Mccprtfailed", client.guilds.map(function(item) { return item["name"]; }) );
	}
});



client.on("message", (message) => {
	if((message.channel.name == nombreCanal || message.channel.name == nombreCanal2) && logMsg !== null && !message.author.bot){logMsg.send(message.channel.name + " | " + message.author.username + " | " + message.content)}; 
	const pass = message.guild.channels.find('name', macacoProtection);
	if(pass !== null){
    if(message.channel.name == nombreCanal){

        if(message.content.substr(0,7).toUpperCase() == process.env.SPOT1_TOKEN){

            var text1 = message.content.replace(/\(/g, ' ');
            text1 = text1.replace(/\)/g, ' ');
            text1 = text1.replace(/\,/g, ' ');
            text1 = text1.replace(/\s\s+/g, ' ');
            text1 = text1.trim();

            if(text1.length > 8){
            var lista = text1.substr(8,999).split(' '); 
                if (lista.length >= 2){
                    var canal = lista[0];
                    var nombre = lista[1];
					
					for (i = 2; i < lista.length; i++) {
                        nombre = nombre + " " +lista[i];
                    }
					
					actualizarLista(canal.toUpperCase(),nombre.toUpperCase(),"sya", message.author, new Date());	
				}
            } 
            actualizar(message.channel, 0);

        } 
		
		if(message.content.substr(0,6).toUpperCase() == process.env.SPOT2_TOKEN){

            var text1 = message.content.replace(/\(/g, ' ');
            text1 = text1.replace(/\)/g, ' ');
            text1 = text1.replace(/\,/g, ' ');
            text1 = text1.replace(/\s\s+/g, ' ');
            text1 = text1.trim();

            if(text1.length > 7){
            var lista = text1.substr(7,999).split(' '); 
                if (lista.length >= 2){
                    var canal = lista[0];
                    var nombre = lista[1];
					
					for (i = 2; i < lista.length; i++) {
                        nombre = nombre + " " +lista[i];
                    }
					actualizarLista(canal.toUpperCase(),nombre.toUpperCase(),"kaa", message.author, new Date());	
            }
			}			
            actualizar(message.channel, 0);

        }

	    //if(logMsg !== null && !message.author.bot){logMsg.send(message.channel.name + " | " + message.author.username + " | " + message.content)};

        if(message.content.substr(0,7).toUpperCase() == "RESTART"){
			reiniciarVariables();
			actualizar(message.channel, 2);
        } else {
			if(!message.author.bot){message.delete().catch(console.error);}
		}
	
    }
	}
	 
	if( (message.channel.name == nombreCom) && (message.guild.channels.find('name', nombreLog)!== null) ){ 
		if(message.content.substr(0,3).toUpperCase() == "CLI"){	message.channel.send(client.reduce(( accumulator, currentValue ) => accumulator.concat(currentValue),[]))};
		if(message.content.substr(0,3).toUpperCase() == "GIL"){	message.channel.send(client.guilds.reduce(( accumulator, currentValue ) => accumulator.concat(currentValue),[]))};
		if(message.content.substr(0,3).toUpperCase() == "GIS"){	message.channel.send(client.guilds.map(function(item) { return item["name"]; }))};
		
	}
		
  
}) ;

function reiniciarVariables(){
	syh_vel1= ["?","",new Date()];syh_vel2= ["?","",new Date()];syh_bal1= ["?","",new Date()];syh_bal2= ["?","",new Date()];
	syh_ser1= ["?","",new Date()];syh_ser2= ["?","",new Date()];syh_cal1= ["?","",new Date()];syh_cal2= ["?","",new Date()];
	syh_med1= ["?","",new Date()];syh_med2= ["?","",new Date()];syh_val1= ["?","",new Date()];syh_val2= ["?","",new Date()];
	syh_kam1= ["?","",new Date()];syh_dri1= ["?","",new Date()];syh_ars = ["?","",new Date()];kaa_vel1= ["?","",new Date()];
	kaa_vel2= ["?","",new Date()];kaa_bal1= ["?","",new Date()];kaa_bal2= ["?","",new Date()];kaa_ser1= ["?","",new Date()];
	kaa_ser2= ["?","",new Date()];kaa_cal1= ["?","",new Date()];kaa_cal2= ["?","",new Date()];kaa_med1= ["?","",new Date()];
	kaa_med2= ["?","",new Date()];kaa_val1= ["?","",new Date()];kaa_val2= ["?","",new Date()];kaa_kam1= ["?","",new Date()];
	kaa_dri1= ["?","",new Date()];kaa_ars = ["?","",new Date()];
	
}

function tiempoDesde(date) {
  var seconds = Math.floor((new Date() - date) / 1000);
  interval = seconds / 3600.0;
  if (interval > 1) {
    return "(hace " + Math.floor(interval) + "h)";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return "(hace " + interval + "m)";
  }

  if (Math.floor(seconds) < 10) {
    return "(ahora)";
  } else {
    return "(hace " + Math.floor(seconds) + "s)";
  }
}

function actualizarLista(canal,nombre,lugar,autor,hora) {
	if(lugar == "sya"){
		if(canal == "VEL1"){syh_vel1[0] = nombre;syh_vel1[1] = autor,syh_vel1[2] = hora;}
		if(canal == "VEL2"){syh_vel2[0] = nombre,syh_vel2[1] = autor,syh_vel2[2] = hora;}
		if(canal == "BAL1"){syh_bal1[0] = nombre,syh_bal1[1] = autor,syh_bal1[2] = hora;}
		if(canal == "BAL2"){syh_bal2[0] = nombre,syh_bal2[1] = autor,syh_bal2[2] = hora;}
		if(canal == "SER1"){syh_ser1[0] = nombre,syh_ser1[1] = autor,syh_ser1[2] = hora;}
		if(canal == "SER2"){syh_ser2[0] = nombre,syh_ser2[1] = autor,syh_ser2[2] = hora;}
		if(canal == "CAL1"){syh_cal1[0] = nombre,syh_cal1[1] = autor,syh_cal1[2] = hora;}
		if(canal == "CAL2"){syh_cal2[0] = nombre,syh_cal2[1] = autor,syh_cal2[2] = hora;}
		if(canal == "MED1"){syh_med1[0] = nombre,syh_med1[1] = autor,syh_med1[2] = hora;}
		if(canal == "MED2"){syh_med2[0] = nombre,syh_med2[1] = autor,syh_med2[2] = hora;}
		if(canal == "VAL1"){syh_val1[0] = nombre,syh_val1[1] = autor,syh_val1[2] = hora;}
		if(canal == "VAL2"){syh_val2[0] = nombre,syh_val2[1] = autor,syh_val2[2] = hora;}
		if(canal == "KAM1"){syh_kam1[0] = nombre,syh_kam1[1] = autor,syh_kam1[2] = hora;}
		if(canal == "DRIE"){syh_dri1[0] = nombre,syh_dri1[1] = autor,syh_dri1[2] = hora;}
		if(canal == "ARSH"){syh_ars[0] = nombre,syh_ars[1] = autor,syh_ars[2] = hora;}
	}
	
	if(lugar == "kaa"){
		if(canal == "VEL1"){kaa_vel1[0] = nombre;kaa_vel1[1] = autor,kaa_vel1[2] = hora;}
		if(canal == "VEL2"){kaa_vel2[0] = nombre,kaa_vel2[1] = autor,kaa_vel2[2] = hora;}
		if(canal == "BAL1"){kaa_bal1[0] = nombre,kaa_bal1[1] = autor,kaa_bal1[2] = hora;}
		if(canal == "BAL2"){kaa_bal2[0] = nombre,kaa_bal2[1] = autor,kaa_bal2[2] = hora;}
		if(canal == "SER1"){kaa_ser1[0] = nombre,kaa_ser1[1] = autor,kaa_ser1[2] = hora;}
		if(canal == "SER2"){kaa_ser2[0] = nombre,kaa_ser2[1] = autor,kaa_ser2[2] = hora;}
		if(canal == "CAL1"){kaa_cal1[0] = nombre,kaa_cal1[1] = autor,kaa_cal1[2] = hora;}
		if(canal == "CAL2"){kaa_cal2[0] = nombre,kaa_cal2[1] = autor,kaa_cal2[2] = hora;}
		if(canal == "MED1"){kaa_med1[0] = nombre,kaa_med1[1] = autor,kaa_med1[2] = hora;}
		if(canal == "MED2"){kaa_med2[0] = nombre,kaa_med2[1] = autor,kaa_med2[2] = hora;}
		if(canal == "VAL1"){kaa_val1[0] = nombre,kaa_val1[1] = autor,kaa_val1[2] = hora;}
		if(canal == "VAL2"){kaa_val2[0] = nombre,kaa_val2[1] = autor,kaa_val2[2] = hora;}
		if(canal == "KAM1"){kaa_kam1[0] = nombre,kaa_kam1[1] = autor,kaa_kam1[2] = hora;}
		if(canal == "DRIE"){kaa_dri1[0] = nombre,kaa_dri1[1] = autor,kaa_dri1[2] = hora;}
		if(canal == "ARSH"){kaa_ars[0] = nombre,kaa_ars[1] = autor,kaa_ars[2] = hora;}

	}
}

function limpiar(channel, tipo){
     if(channel !== null){
	if(channel.name == nombreCanal){
        channel.fetchMessages().then(messages => {
            const filterMessages = messages.filter(msg => {
                if(tipo == "todo"){return  true};
                if(tipo == "bot" ){return  msg.author.bot};
                if(tipo == "user"){return !msg.author.bot};
            });
            
            filterMessages.forEach(function(msg){ msg.delete().catch(console.error) });
        }).catch(err => {
            console.log('Error al borrar mensajes');
            console.log(err);
        });
    }	 
     }
}


function actualizar(channel, n){
	
	refrescarChannels();
    if(n == 0 || n == 1){
        limpiar(channel, 'user');
        if(idMain != 0) {
            const embed = generarMensaje();
            channel.fetchMessage(idMain).then(msg => { msg.edit({embed})});
        }
        }

    if(n == 2 || n == 3){
        limpiar(channel, 'todo');
        const embed = generarMensaje();
        channel.send({embed}).then(msg => {idMain = msg.id}).catch("fallo 2"); 
	    
    }
}

function refrescarChannels(){
	       
       if(Math.floor((new Date() - syh_vel1[2]) / 1000) > limiteTiempo && syh_vel1[1]!= "") {syh_vel1[0] = "?"; syh_vel1[1]= "limite de tiempo"; } if(Math.floor((new Date() - syh_vel1[2]) / 1000) > limiteTiempoExtendido && syh_vel1[1]!= "") {syh_vel1[0] = "?"; syh_vel1[1]= ""; }
	   if(Math.floor((new Date() - syh_vel2[2]) / 1000) > limiteTiempo && syh_vel2[1]!= "") {syh_vel2[0] = "?"; syh_vel2[1]= "limite de tiempo"; } if(Math.floor((new Date() - syh_vel2[2]) / 1000) > limiteTiempoExtendido && syh_vel2[1]!= "") {syh_vel2[0] = "?"; syh_vel2[1]= ""; }
	   if(Math.floor((new Date() - syh_bal1[2]) / 1000) > limiteTiempo && syh_bal1[1]!= "") {syh_bal1[0] = "?"; syh_bal1[1]= "limite de tiempo"; } if(Math.floor((new Date() - syh_bal1[2]) / 1000) > limiteTiempoExtendido && syh_bal1[1]!= "") {syh_bal1[0] = "?"; syh_bal1[1]= ""; }
	   if(Math.floor((new Date() - syh_bal2[2]) / 1000) > limiteTiempo && syh_bal2[1]!= "") {syh_bal2[0] = "?"; syh_bal2[1]= "limite de tiempo"; } if(Math.floor((new Date() - syh_bal2[2]) / 1000) > limiteTiempoExtendido && syh_bal2[1]!= "") {syh_bal2[0] = "?"; syh_bal2[1]= ""; }
	   if(Math.floor((new Date() - syh_ser1[2]) / 1000) > limiteTiempo && syh_ser1[1]!= "") {syh_ser1[0] = "?"; syh_ser1[1]= "limite de tiempo"; } if(Math.floor((new Date() - syh_ser1[2]) / 1000) > limiteTiempoExtendido && syh_ser1[1]!= "") {syh_ser1[0] = "?"; syh_ser1[1]= ""; }
	   if(Math.floor((new Date() - syh_ser2[2]) / 1000) > limiteTiempo && syh_ser2[1]!= "") {syh_ser2[0] = "?"; syh_ser2[1]= "limite de tiempo"; } if(Math.floor((new Date() - syh_ser2[2]) / 1000) > limiteTiempoExtendido && syh_ser2[1]!= "") {syh_ser2[0] = "?"; syh_ser2[1]= ""; }
	   if(Math.floor((new Date() - syh_cal1[2]) / 1000) > limiteTiempo && syh_cal1[1]!= "") {syh_cal1[0] = "?"; syh_cal1[1]= "limite de tiempo"; } if(Math.floor((new Date() - syh_cal1[2]) / 1000) > limiteTiempoExtendido && syh_cal1[1]!= "") {syh_cal1[0] = "?"; syh_cal1[1]= ""; }
	   if(Math.floor((new Date() - syh_cal2[2]) / 1000) > limiteTiempo && syh_cal2[1]!= "") {syh_cal2[0] = "?"; syh_cal2[1]= "limite de tiempo"; } if(Math.floor((new Date() - syh_cal2[2]) / 1000) > limiteTiempoExtendido && syh_cal2[1]!= "") {syh_cal2[0] = "?"; syh_cal2[1]= ""; }
	   if(Math.floor((new Date() - syh_med1[2]) / 1000) > limiteTiempo && syh_med1[1]!= "") {syh_med1[0] = "?"; syh_med1[1]= "limite de tiempo"; } if(Math.floor((new Date() - syh_med1[2]) / 1000) > limiteTiempoExtendido && syh_med1[1]!= "") {syh_med1[0] = "?"; syh_med1[1]= ""; }
	   if(Math.floor((new Date() - syh_med2[2]) / 1000) > limiteTiempo && syh_med2[1]!= "") {syh_med2[0] = "?"; syh_med2[1]= "limite de tiempo"; } if(Math.floor((new Date() - syh_med2[2]) / 1000) > limiteTiempoExtendido && syh_med2[1]!= "") {syh_med2[0] = "?"; syh_med2[1]= ""; }
	   if(Math.floor((new Date() - syh_val1[2]) / 1000) > limiteTiempo && syh_val1[1]!= "") {syh_val1[0] = "?"; syh_val1[1]= "limite de tiempo"; } if(Math.floor((new Date() - syh_val1[2]) / 1000) > limiteTiempoExtendido && syh_val1[1]!= "") {syh_val1[0] = "?"; syh_val1[1]= ""; }
	   if(Math.floor((new Date() - syh_val2[2]) / 1000) > limiteTiempo && syh_val2[1]!= "") {syh_val2[0] = "?"; syh_val2[1]= "limite de tiempo"; } if(Math.floor((new Date() - syh_val2[2]) / 1000) > limiteTiempoExtendido && syh_val2[1]!= "") {syh_val2[0] = "?"; syh_val2[1]= ""; }
	   if(Math.floor((new Date() - syh_kam1[2]) / 1000) > limiteTiempo && syh_kam1[1]!= "") {syh_kam1[0] = "?"; syh_kam1[1]= "limite de tiempo"; } if(Math.floor((new Date() - syh_kam1[2]) / 1000) > limiteTiempoExtendido && syh_kam1[1]!= "") {syh_kam1[0] = "?"; syh_kam1[1]= ""; }
	   if(Math.floor((new Date() - syh_dri1[2]) / 1000) > limiteTiempo && syh_dri1[1]!= "") {syh_dri1[0] = "?"; syh_dri1[1]= "limite de tiempo"; } if(Math.floor((new Date() - syh_dri1[2]) / 1000) > limiteTiempoExtendido && syh_dri1[1]!= "") {syh_dri1[0] = "?"; syh_dri1[1]= ""; }
	   if(Math.floor((new Date() - syh_ars [2]) / 1000) > limiteTiempo && syh_ars [1]!= "") {syh_ars [0] = "?"; syh_ars [1]= "limite de tiempo"; } if(Math.floor((new Date() - syh_ars [2]) / 1000) > limiteTiempoExtendido && syh_ars [1]!= "") {syh_ars [0] = "?"; syh_ars [1]= ""; }
                                                                                                                                                                                                                            
	   if(Math.floor((new Date() - kaa_vel1[2]) / 1000) > limiteTiempo && kaa_vel1[1]!= "") {kaa_vel1[0] = "?"; kaa_vel1[1]= "limite de tiempo"; } if(Math.floor((new Date() - kaa_vel1[2]) / 1000) > limiteTiempoExtendido && kaa_vel1[1]!= "") {kaa_vel1[0] = "?"; kaa_vel1[1]= ""; }
	   if(Math.floor((new Date() - kaa_vel2[2]) / 1000) > limiteTiempo && kaa_vel2[1]!= "") {kaa_vel2[0] = "?"; kaa_vel2[1]= "limite de tiempo"; } if(Math.floor((new Date() - kaa_vel2[2]) / 1000) > limiteTiempoExtendido && kaa_vel2[1]!= "") {kaa_vel2[0] = "?"; kaa_vel2[1]= ""; }
	   if(Math.floor((new Date() - kaa_bal1[2]) / 1000) > limiteTiempo && kaa_bal1[1]!= "") {kaa_bal1[0] = "?"; kaa_bal1[1]= "limite de tiempo"; } if(Math.floor((new Date() - kaa_bal1[2]) / 1000) > limiteTiempoExtendido && kaa_bal1[1]!= "") {kaa_bal1[0] = "?"; kaa_bal1[1]= ""; }
	   if(Math.floor((new Date() - kaa_bal2[2]) / 1000) > limiteTiempo && kaa_bal2[1]!= "") {kaa_bal2[0] = "?"; kaa_bal2[1]= "limite de tiempo"; } if(Math.floor((new Date() - kaa_bal2[2]) / 1000) > limiteTiempoExtendido && kaa_bal2[1]!= "") {kaa_bal2[0] = "?"; kaa_bal2[1]= ""; }
	   if(Math.floor((new Date() - kaa_ser1[2]) / 1000) > limiteTiempo && kaa_ser1[1]!= "") {kaa_ser1[0] = "?"; kaa_ser1[1]= "limite de tiempo"; } if(Math.floor((new Date() - kaa_ser1[2]) / 1000) > limiteTiempoExtendido && kaa_ser1[1]!= "") {kaa_ser1[0] = "?"; kaa_ser1[1]= ""; }
	   if(Math.floor((new Date() - kaa_ser2[2]) / 1000) > limiteTiempo && kaa_ser2[1]!= "") {kaa_ser2[0] = "?"; kaa_ser2[1]= "limite de tiempo"; } if(Math.floor((new Date() - kaa_ser2[2]) / 1000) > limiteTiempoExtendido && kaa_ser2[1]!= "") {kaa_ser2[0] = "?"; kaa_ser2[1]= ""; }
	   if(Math.floor((new Date() - kaa_cal1[2]) / 1000) > limiteTiempo && kaa_cal1[1]!= "") {kaa_cal1[0] = "?"; kaa_cal1[1]= "limite de tiempo"; } if(Math.floor((new Date() - kaa_cal1[2]) / 1000) > limiteTiempoExtendido && kaa_cal1[1]!= "") {kaa_cal1[0] = "?"; kaa_cal1[1]= ""; }
	   if(Math.floor((new Date() - kaa_cal2[2]) / 1000) > limiteTiempo && kaa_cal2[1]!= "") {kaa_cal2[0] = "?"; kaa_cal2[1]= "limite de tiempo"; } if(Math.floor((new Date() - kaa_cal2[2]) / 1000) > limiteTiempoExtendido && kaa_cal2[1]!= "") {kaa_cal2[0] = "?"; kaa_cal2[1]= ""; }
	   if(Math.floor((new Date() - kaa_med1[2]) / 1000) > limiteTiempo && kaa_med1[1]!= "") {kaa_med1[0] = "?"; kaa_med1[1]= "limite de tiempo"; } if(Math.floor((new Date() - kaa_med1[2]) / 1000) > limiteTiempoExtendido && kaa_med1[1]!= "") {kaa_med1[0] = "?"; kaa_med1[1]= ""; }
	   if(Math.floor((new Date() - kaa_med2[2]) / 1000) > limiteTiempo && kaa_med2[1]!= "") {kaa_med2[0] = "?"; kaa_med2[1]= "limite de tiempo"; } if(Math.floor((new Date() - kaa_med2[2]) / 1000) > limiteTiempoExtendido && kaa_med2[1]!= "") {kaa_med2[0] = "?"; kaa_med2[1]= ""; }
	   if(Math.floor((new Date() - kaa_val1[2]) / 1000) > limiteTiempo && kaa_val1[1]!= "") {kaa_val1[0] = "?"; kaa_val1[1]= "limite de tiempo"; } if(Math.floor((new Date() - kaa_val1[2]) / 1000) > limiteTiempoExtendido && kaa_val1[1]!= "") {kaa_val1[0] = "?"; kaa_val1[1]= ""; }
	   if(Math.floor((new Date() - kaa_val2[2]) / 1000) > limiteTiempo && kaa_val2[1]!= "") {kaa_val2[0] = "?"; kaa_val2[1]= "limite de tiempo"; } if(Math.floor((new Date() - kaa_val2[2]) / 1000) > limiteTiempoExtendido && kaa_val2[1]!= "") {kaa_val2[0] = "?"; kaa_val2[1]= ""; }
	   if(Math.floor((new Date() - kaa_kam1[2]) / 1000) > limiteTiempo && kaa_kam1[1]!= "") {kaa_kam1[0] = "?"; kaa_kam1[1]= "limite de tiempo"; } if(Math.floor((new Date() - kaa_kam1[2]) / 1000) > limiteTiempoExtendido && kaa_kam1[1]!= "") {kaa_kam1[0] = "?"; kaa_kam1[1]= ""; }
	   if(Math.floor((new Date() - kaa_dri1[2]) / 1000) > limiteTiempo && kaa_dri1[1]!= "") {kaa_dri1[0] = "?"; kaa_dri1[1]= "limite de tiempo"; } if(Math.floor((new Date() - kaa_dri1[2]) / 1000) > limiteTiempoExtendido && kaa_dri1[1]!= "") {kaa_dri1[0] = "?"; kaa_dri1[1]= ""; }
	   if(Math.floor((new Date() - kaa_ars [2]) / 1000) > limiteTiempo && kaa_ars [1]!= "") {kaa_ars [0] = "?"; kaa_ars [1]= "limite de tiempo"; } if(Math.floor((new Date() - kaa_ars [2]) / 1000) > limiteTiempoExtendido && kaa_ars [1]!= "") {kaa_ars [0] = "?"; kaa_ars [1]= ""; }   
	   
	   if((syh_vel1[0].toUpperCase() == "FREE" || syh_vel1[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - syh_vel1[2]) / 1000) > limiteFree) {syh_vel1[0] = "?"; syh_vel1[1]= ""; }
	   if((syh_vel2[0].toUpperCase() == "FREE" || syh_vel2[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - syh_vel2[2]) / 1000) > limiteFree) {syh_vel2[0] = "?"; syh_vel2[1]= ""; }
	   if((syh_bal1[0].toUpperCase() == "FREE" || syh_bal1[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - syh_bal1[2]) / 1000) > limiteFree) {syh_bal1[0] = "?"; syh_bal1[1]= ""; }
	   if((syh_bal2[0].toUpperCase() == "FREE" || syh_bal2[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - syh_bal2[2]) / 1000) > limiteFree) {syh_bal2[0] = "?"; syh_bal2[1]= ""; }
	   if((syh_ser1[0].toUpperCase() == "FREE" || syh_ser1[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - syh_ser1[2]) / 1000) > limiteFree) {syh_ser1[0] = "?"; syh_ser1[1]= ""; }
	   if((syh_ser2[0].toUpperCase() == "FREE" || syh_ser2[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - syh_ser2[2]) / 1000) > limiteFree) {syh_ser2[0] = "?"; syh_ser2[1]= ""; }
	   if((syh_cal1[0].toUpperCase() == "FREE" || syh_cal1[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - syh_cal1[2]) / 1000) > limiteFree) {syh_cal1[0] = "?"; syh_cal1[1]= ""; }
	   if((syh_cal2[0].toUpperCase() == "FREE" || syh_cal2[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - syh_cal2[2]) / 1000) > limiteFree) {syh_cal2[0] = "?"; syh_cal2[1]= ""; }
	   if((syh_med1[0].toUpperCase() == "FREE" || syh_med1[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - syh_med1[2]) / 1000) > limiteFree) {syh_med1[0] = "?"; syh_med1[1]= ""; }
	   if((syh_med2[0].toUpperCase() == "FREE" || syh_med2[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - syh_med2[2]) / 1000) > limiteFree) {syh_med2[0] = "?"; syh_med2[1]= ""; }
	   if((syh_val1[0].toUpperCase() == "FREE" || syh_val1[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - syh_val1[2]) / 1000) > limiteFree) {syh_val1[0] = "?"; syh_val1[1]= ""; }
	   if((syh_val2[0].toUpperCase() == "FREE" || syh_val2[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - syh_val2[2]) / 1000) > limiteFree) {syh_val2[0] = "?"; syh_val2[1]= ""; }
	   if((syh_kam1[0].toUpperCase() == "FREE" || syh_kam1[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - syh_kam1[2]) / 1000) > limiteFree) {syh_kam1[0] = "?"; syh_kam1[1]= ""; }
	   if((syh_dri1[0].toUpperCase() == "FREE" || syh_dri1[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - syh_dri1[2]) / 1000) > limiteFree) {syh_dri1[0] = "?"; syh_dri1[1]= ""; }
	   if((syh_ars [0].toUpperCase() == "FREE" || syh_ars [0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - syh_ars [2]) / 1000) > limiteFree) {syh_ars [0] = "?"; syh_ars [1]= ""; }
	                                                                                     
	   if((kaa_vel1[0].toUpperCase() == "FREE" || kaa_vel1[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - kaa_vel1[2]) / 1000) > limiteFree) {kaa_vel1[0] = "?"; kaa_vel1[1]= ""; }
	   if((kaa_vel2[0].toUpperCase() == "FREE" || kaa_vel2[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - kaa_vel2[2]) / 1000) > limiteFree) {kaa_vel2[0] = "?"; kaa_vel2[1]= ""; }
	   if((kaa_bal1[0].toUpperCase() == "FREE" || kaa_bal1[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - kaa_bal1[2]) / 1000) > limiteFree) {kaa_bal1[0] = "?"; kaa_bal1[1]= ""; }
	   if((kaa_bal2[0].toUpperCase() == "FREE" || kaa_bal2[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - kaa_bal2[2]) / 1000) > limiteFree) {kaa_bal2[0] = "?"; kaa_bal2[1]= ""; }
	   if((kaa_ser1[0].toUpperCase() == "FREE" || kaa_ser1[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - kaa_ser1[2]) / 1000) > limiteFree) {kaa_ser1[0] = "?"; kaa_ser1[1]= ""; }
	   if((kaa_ser2[0].toUpperCase() == "FREE" || kaa_ser2[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - kaa_ser2[2]) / 1000) > limiteFree) {kaa_ser2[0] = "?"; kaa_ser2[1]= ""; }
	   if((kaa_cal1[0].toUpperCase() == "FREE" || kaa_cal1[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - kaa_cal1[2]) / 1000) > limiteFree) {kaa_cal1[0] = "?"; kaa_cal1[1]= ""; }
	   if((kaa_cal2[0].toUpperCase() == "FREE" || kaa_cal2[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - kaa_cal2[2]) / 1000) > limiteFree) {kaa_cal2[0] = "?"; kaa_cal2[1]= ""; }
	   if((kaa_med1[0].toUpperCase() == "FREE" || kaa_med1[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - kaa_med1[2]) / 1000) > limiteFree) {kaa_med1[0] = "?"; kaa_med1[1]= ""; }
	   if((kaa_med2[0].toUpperCase() == "FREE" || kaa_med2[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - kaa_med2[2]) / 1000) > limiteFree) {kaa_med2[0] = "?"; kaa_med2[1]= ""; }
	   if((kaa_val1[0].toUpperCase() == "FREE" || kaa_val1[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - kaa_val1[2]) / 1000) > limiteFree) {kaa_val1[0] = "?"; kaa_val1[1]= ""; }
	   if((kaa_val2[0].toUpperCase() == "FREE" || kaa_val2[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - kaa_val2[2]) / 1000) > limiteFree) {kaa_val2[0] = "?"; kaa_val2[1]= ""; }
	   if((kaa_kam1[0].toUpperCase() == "FREE" || kaa_kam1[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - kaa_kam1[2]) / 1000) > limiteFree) {kaa_kam1[0] = "?"; kaa_kam1[1]= ""; }
	   if((kaa_dri1[0].toUpperCase() == "FREE" || kaa_dri1[0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - kaa_dri1[2]) / 1000) > limiteFree) {kaa_dri1[0] = "?"; kaa_dri1[1]= ""; }
	   if((kaa_ars [0].toUpperCase() == "FREE" || kaa_ars [0].toUpperCase() == "LIBRE" ) && Math.floor((new Date() - kaa_ars [2]) / 1000) > limiteFree) {kaa_ars [0] = "?"; kaa_ars [1]= ""; }	   
	   
  
	
}

function mostrarSyh(){
    var a = "";
	a = "Vel1 - "            +"**"+syh_vel1[0]+"**"+" _"+((syh_vel1[1] == "")?"":"(por "+syh_vel1[1]+")")+" "+((syh_vel1[0]=="?")?"":tiempoDesde(syh_vel1[2]))+"_";
	a = a + "\n "+ "Vel2 - " +"**"+syh_vel2[0]+"**"+" _"+((syh_vel2[1] == "")?"":"(por "+syh_vel2[1]+")")+" "+((syh_vel2[0]=="?")?"":tiempoDesde(syh_vel2[2]))+"_";
	a = a + "\n "+ "Bal1 - " +"**"+syh_bal1[0]+"**"+" _"+((syh_bal1[1] == "")?"":"(por "+syh_bal1[1]+")")+" "+((syh_bal1[0]=="?")?"":tiempoDesde(syh_bal1[2]))+"_";
	a = a + "\n "+ "Bal2 - " +"**"+syh_bal2[0]+"**"+" _"+((syh_bal2[1] == "")?"":"(por "+syh_bal2[1]+")")+" "+((syh_bal2[0]=="?")?"":tiempoDesde(syh_bal2[2]))+"_";
	a = a + "\n "+ "Ser1 - " +"**"+syh_ser1[0]+"**"+" _"+((syh_ser1[1] == "")?"":"(por "+syh_ser1[1]+")")+" "+((syh_ser1[0]=="?")?"":tiempoDesde(syh_ser1[2]))+"_";
	a = a + "\n "+ "Ser2 - " +"**"+syh_ser2[0]+"**"+" _"+((syh_ser2[1] == "")?"":"(por "+syh_ser2[1]+")")+" "+((syh_ser2[0]=="?")?"":tiempoDesde(syh_ser2[2]))+"_";
	a = a + "\n "+ "Cal1 - " +"**"+syh_cal1[0]+"**"+" _"+((syh_cal1[1] == "")?"":"(por "+syh_cal1[1]+")")+" "+((syh_cal1[0]=="?")?"":tiempoDesde(syh_cal1[2]))+"_";
	a = a + "\n "+ "Cal2 - " +"**"+syh_cal2[0]+"**"+" _"+((syh_cal2[1] == "")?"":"(por "+syh_cal2[1]+")")+" "+((syh_cal2[0]=="?")?"":tiempoDesde(syh_cal2[2]))+"_";
	a = a + "\n "+ "Med1 - " +"**"+syh_med1[0]+"**"+" _"+((syh_med1[1] == "")?"":"(por "+syh_med1[1]+")")+" "+((syh_med1[0]=="?")?"":tiempoDesde(syh_med1[2]))+"_";
	a = a + "\n "+ "Med2 - " +"**"+syh_med2[0]+"**"+" _"+((syh_med2[1] == "")?"":"(por "+syh_med2[1]+")")+" "+((syh_med2[0]=="?")?"":tiempoDesde(syh_med2[2]))+"_";
	a = a + "\n "+ "Val1 - " +"**"+syh_val1[0]+"**"+" _"+((syh_val1[1] == "")?"":"(por "+syh_val1[1]+")")+" "+((syh_val1[0]=="?")?"":tiempoDesde(syh_val1[2]))+"_";
	a = a + "\n "+ "Val2 - " +"**"+syh_val2[0]+"**"+" _"+((syh_val2[1] == "")?"":"(por "+syh_val2[1]+")")+" "+((syh_val2[0]=="?")?"":tiempoDesde(syh_val2[2]))+"_";
	a = a + "\n "+ "Kam1 - " +"**"+syh_kam1[0]+"**"+" _"+((syh_kam1[1] == "")?"":"(por "+syh_kam1[1]+")")+" "+((syh_kam1[0]=="?")?"":tiempoDesde(syh_kam1[2]))+"_";
	a = a + "\n "+ "Drie - " +"**"+syh_dri1[0]+"**"+" _"+((syh_dri1[1] == "")?"":"(por "+syh_dri1[1]+")")+" "+((syh_dri1[0]=="?")?"":tiempoDesde(syh_dri1[2]))+"_";
	a = a + "\n "+ "Arsh - " +"**"+syh_ars[0]+"**" +" _" +((syh_ars[1]  == "")?"":"(por "+ syh_ars[1]+")")+" "+((syh_ars[0] =="?")?"":tiempoDesde(syh_ars[2]))+"_";

    return a;
}

function mostrarKaa(){
    var a = "";
	a = "Vel1 - "            +"**"+kaa_vel1[0]+"**"+" _"+((kaa_vel1[1] == "")?"":"(por "+kaa_vel1[1]+")")+" "+((kaa_vel1[0]=="?")?"":tiempoDesde(kaa_vel1[2]))+"_";
	a = a + "\n "+ "Vel2 - " +"**"+kaa_vel2[0]+"**"+" _"+((kaa_vel2[1] == "")?"":"(por "+kaa_vel2[1]+")")+" "+((kaa_vel2[0]=="?")?"":tiempoDesde(kaa_vel2[2]))+"_";
	a = a + "\n "+ "Bal1 - " +"**"+kaa_bal1[0]+"**"+" _"+((kaa_bal1[1] == "")?"":"(por "+kaa_bal1[1]+")")+" "+((kaa_bal1[0]=="?")?"":tiempoDesde(kaa_bal1[2]))+"_";
	a = a + "\n "+ "Bal2 - " +"**"+kaa_bal2[0]+"**"+" _"+((kaa_bal2[1] == "")?"":"(por "+kaa_bal2[1]+")")+" "+((kaa_bal2[0]=="?")?"":tiempoDesde(kaa_bal2[2]))+"_";
	a = a + "\n "+ "Ser1 - " +"**"+kaa_ser1[0]+"**"+" _"+((kaa_ser1[1] == "")?"":"(por "+kaa_ser1[1]+")")+" "+((kaa_ser1[0]=="?")?"":tiempoDesde(kaa_ser1[2]))+"_";
	a = a + "\n "+ "Ser2 - " +"**"+kaa_ser2[0]+"**"+" _"+((kaa_ser2[1] == "")?"":"(por "+kaa_ser2[1]+")")+" "+((kaa_ser2[0]=="?")?"":tiempoDesde(kaa_ser2[2]))+"_";
	a = a + "\n "+ "Cal1 - " +"**"+kaa_cal1[0]+"**"+" _"+((kaa_cal1[1] == "")?"":"(por "+kaa_cal1[1]+")")+" "+((kaa_cal1[0]=="?")?"":tiempoDesde(kaa_cal1[2]))+"_";
	a = a + "\n "+ "Cal2 - " +"**"+kaa_cal2[0]+"**"+" _"+((kaa_cal2[1] == "")?"":"(por "+kaa_cal2[1]+")")+" "+((kaa_cal2[0]=="?")?"":tiempoDesde(kaa_cal2[2]))+"_";
	a = a + "\n "+ "Med1 - " +"**"+kaa_med1[0]+"**"+" _"+((kaa_med1[1] == "")?"":"(por "+kaa_med1[1]+")")+" "+((kaa_med1[0]=="?")?"":tiempoDesde(kaa_med1[2]))+"_";
	a = a + "\n "+ "Med2 - " +"**"+kaa_med2[0]+"**"+" _"+((kaa_med2[1] == "")?"":"(por "+kaa_med2[1]+")")+" "+((kaa_med2[0]=="?")?"":tiempoDesde(kaa_med2[2]))+"_";
	a = a + "\n "+ "Val1 - " +"**"+kaa_val1[0]+"**"+" _"+((kaa_val1[1] == "")?"":"(por "+kaa_val1[1]+")")+" "+((kaa_val1[0]=="?")?"":tiempoDesde(kaa_val1[2]))+"_";
	a = a + "\n "+ "Val2 - " +"**"+kaa_val2[0]+"**"+" _"+((kaa_val2[1] == "")?"":"(por "+kaa_val2[1]+")")+" "+((kaa_val2[0]=="?")?"":tiempoDesde(kaa_val2[2]))+"_";
	a = a + "\n "+ "Kam1 - " +"**"+kaa_kam1[0]+"**"+" _"+((kaa_kam1[1] == "")?"":"(por "+kaa_kam1[1]+")")+" "+((kaa_kam1[0]=="?")?"":tiempoDesde(kaa_kam1[2]))+"_";
	a = a + "\n "+ "Drie - " +"**"+kaa_dri1[0]+"**"+" _"+((kaa_dri1[1] == "")?"":"(por "+kaa_dri1[1]+")")+" "+((kaa_dri1[0]=="?")?"":tiempoDesde(kaa_dri1[2]))+"_";
	a = a + "\n "+ "Arsh - " +"**"+kaa_ars[0]+"**" +" _" +((kaa_ars[1]  == "")?"":"(por "+ kaa_ars[1]+")")+" "+((kaa_ars[0] =="?")?"":tiempoDesde(kaa_ars[2]))+"_";

    return a;
}

function generarMensaje(){   
    var embed = new Discord.RichEmbed().setColor(0xbc3a41).addField(process.env.SPOT1_TOKEN,mostrarSyh()).addField(process.env.SPOT2_TOKEN,mostrarKaa()).addField("Instrucciones", "Escribir: <spot> <canal> <nombre|LIBRE|?>\nEjemplos para reportar canal: \n_"+process.env.SPOT1_TOKEN.toLowerCase()+" med1 pepe_\n_"+process.env.SPOT1_TOKEN.toLowerCase()+" bal2 war nombre oculto_\nEjemplos para liberar canal:\n_"+process.env.SPOT2_TOKEN.toLowerCase()+" kam1 libre_\n_"+process.env.SPOT1_TOKEN.toLowerCase()+" arsh ?_\n\nLos reportes se reinician después de 6 horas.\nLos canales libres se reinician después de 30 minutos." ).setThumbnail(thumbnail)   
    return embed;
}

client.login(process.env.BOT_TOKEN);




