
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