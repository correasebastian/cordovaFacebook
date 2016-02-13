
no instalar ngopenfb desde bower
sino coger el archivo desde conraets 
https://raw.githubusercontent.com/ccoenraets/OpenFB/master/ngopenfb.js , lo puse en www/ngopenfb.js


---seguir el tutoril con este 
https://github.com/ccoenraets/OpenFB/blob/master/indexng.html

--tengo un error en cordova que me dice que no estoy conectado

puedo abrir el inspect, mirar el inaapbromwser, usar la consola y ver cual url me esta dando con el error
window.location.href

de ahi puedo extraer informacion

de ahi pude ver que me faltaba agregar la oauthURL "https://www.facebook.com/connect/login_success.html"

la agregue y se soluciono



-------
ionic  plugin add https://github.com/Wizcorp/phonegap-facebook-plugin.git --variable APP_ID="439018516302355" --variable APP_NAME="cordovaFaze"

----agregando keyhas
keytool -exportcert -alias androiddebugkey -keystore %HOMEPATH%\.android\debug.keystore | openssl sha1 -binary | openssl base64

NO ME TENGO QUE PREOCUPAR MUCHO POR ESTO, SI por casualidad el keyhash que sua ionic es distinto al que yo cree, me voy a dar cuenta cuando utilice la aplicacion, por que me saldra un leterero de eeror que dice que mi hash no coincida y me da el hash que usa ionic para que yo lo registre
+FE9GyFyw2PbQltTx/t/M/LQChM=