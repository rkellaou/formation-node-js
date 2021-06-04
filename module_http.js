const http = require('http');
const fs = require('fs')

//module HTTP
//permet de créer un serveur permettant de recevoir des requêtes HTTP
http.createServer((req, res) => {
    //req.url possède la sous-partie URL dédiée à la requête.
    //si on est à la racine, on renvoie en headers un 200 et du contenu.
    if (req.url == '/') {
        res.writeHead(200, {'Content-type' : 'text/html'})
        res.write("<h1>Accueil</h1>\n")
        res.end()
    //sinon si /test alors on renvoi le contenu du fichier test.txt
    } else if (req.url == '/test') {
        
        fs.readFile('test.txt','utf-8', (err,data) => {
            if(err){
                //fichier non trouvé, erreur 404
                send404(res)           
            } else {
                res.writeHead(200, {'Content-type' : 'text/html'})
                res.write(data) 
                res.end()
            }
        })
    } else{
        //sinon erreur 404
        send404(res)
    }
}).listen(8080) //port d'écoute


//fonction permettant de factoriser l'envoi d'un 404
function send404(res){
    res.writeHead(404, {'Content-type' : 'text/html'})
    res.write("<span style='color: red'>Erreur 404</span>")
    res.end()
}

