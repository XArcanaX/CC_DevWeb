Question 1.1 donner la liste des en-têtes de la réponse HTTP du serveur.

HTTP/1.1 200 OK
Date: Sun, 15 Sep 2024 22:26:35 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked


Question 1.2. Lire le contenu d'un en-tête de la requête.

HTTP/1.1 200 OK
Content-Type: application/json
Date: Sun, 15 Sep 2024 22:24:52 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Content-Length: 20

Question 1.3. que contient la réponse reçue par le client ?


Error: ENOENT: no such file or directory, open 'C:\Users\Utilisateur\Documents\DevWeb\devweb_tp5\index.html'
    at async open (node:internal/fs/promises:639:25)
    at async Object.readFile (node:internal/fs/promises:1242:14) {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'open',
  path: 'C:\\Users\\Utilisateur\\Documents\\DevWeb\\devweb_tp5\\index.html'
}