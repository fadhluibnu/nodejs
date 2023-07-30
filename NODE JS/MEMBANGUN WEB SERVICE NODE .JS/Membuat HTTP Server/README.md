# Membuat HTTP Server

Node.js menyediakan core modules http untuk membangun web server yang dapat menangani dan menanggapi permintaan dari client.

```js
const http = require('http'); 
```

HTTP module memiliki banyak member seperti objek, properti, atau method. Salah satu member yang penting untuk kita ketahui sekarang adalah method `http.createServer()`.

Sesuai namanya, method ini berfungsi untuk membuat HTTP server yang merupakan instance dari `http.server`. Method ini menerima satu parameter custom callback yang digunakan sebagai request listener. Di dalam request listener inilah logika untuk menangani dan menanggapi sebuah request dituliskan.

```js
const http = require('http');
 
/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 */
const requestListener = (request, response) => {
    
};
 
const server = http.createServer(requestListener);
```

Penjelasan

- Parameter `request` = objek yang berisikan informasi terkait permintaan

- Parameter `response` = objek yang digunakan untuk menanggapi permintaan

Melalui parameter `response` kita bisa menentukan data yang diberikan, format dokumen, status code atau infrmasi response lainyan

```js
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');
 
    response.statusCode = 200;
    response.end('<h1>Halo HTTP Server!</h1>');
};
```

## Listen()

bagaimana caranya agar server selalu sedia menangani permintaan yang masuk? menggunakan method `listen()`. Method ini membuat `http.server` selalu standby utuk menangani permintaan yang masuk dari client. jadi setiap ada permintaan request listener akan tereksekusi

Method listen() dapat menerima 4 parameter, berikut detailnya:

- port (number) : jalur yang digunakan untuk mengakses HTTP server.
- hostname (string) : nama domain yang digunakan oleh HTTP server.
- backlog (number) : maksimal koneksi yang dapat ditunda (pending) pada HTTP server.
- listeningListener (function) : callback yang akan terpanggil ketika HTTP server sedang bekerja (listening).

Namun, keempat parameter di atas bersifat opsional. Kita bisa memberikan nilai port saja, atau kombinasi apa pun dari keempatnya. Hal itu tergantung terhadap kebutuhan Anda. Namun lazimnya, ketika memanggil method listen() kita memberikan nilai port, hostname, dan listeningListener.

```js
const port = 5000;
const host = 'localhost';
 
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
})
```

# Latihan Membuat HTTP Server

Hapus kode di `server.js` yang perah kita buat, dan ganti dengan

```js
const http = require('http');

const requestListener = (request, response) =>{
    response.setHeader('Content-Type', 'text/html');

    response.statusCode = 200;
    response.end(`<h1>Hallo HTTP Server!</h1>`)
}

const server = http.createServer(requestListener);

const port = 5000;
const host  = 'localhost';

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
```

selanjutnya jalankan dengan perintah 

```bash
npm run start
```

Selanjutnya kita buka `http://localhost:5000/` di browser kita

maka akan muncul `Hallo HTTP Server!`