# Method/Verb Request

sebelumnya sudah berhasil merespons dan menampilkan data dalam dokumen HTML. Namun web server kita saat ini belum mengenali sepenuhnya permintaan yang diberikan oleh client?

meskipun client meminta dengan path atau method yang berbeda, server akan merespons dengan data yang sama. Server kita saat ini tidak peduli permintaan datang seperti apa, dia akan mengembalikan data yang sama.

Kita bisa mecoba dengan menjalankan kode berikut

```bash
curl -X POST http://localhost:5000
curl -X PUT http://localhost:5000
curl -X DELETE http://localhost:5000
curl -X GET http://localhost:5000
```

jika perintah diatas dijalakan, meraka hanya akan menampilkan output yang sama yaitu

```html
<h1> Halo HTTP Server!</h1>
```

Hal ini dikarenakan kita belum memberikan logika untuk menangani setaiap permintaan dari method yang berbeda.

Untuk menyelesaikan itu kita gunakan Fungsi request listener yg menyediakan dua parameter yakni `request` dan `response`. Fokus ke parameter `request`, parameter ini merupakan instance dari `http.ClientRequest` yang memiliki banyak properti di dalamnya. 

Dengan properti diatas kita bisa mengetahui method, path, data, dan informasi pada permintaan HTTP.

Dan untuk mendapatkan nilai request method kita gunakan `request.method`

```js
const requestListener = (request, response) => {
    const method = request.method;
};
```

atau biar lebih elegan gunakan tehnik destructuring

```js
const requestListener = (request, response) => {
    const { method } = request;
};
```

Tipe data dari `method` itu string berupa "GET", "POST", "PUT", "DELETE" dll.

# Latihan

Kita akan membuat server mengembalikan response yang berbeda untuk stiap methodnya

Buka `server.js` lalu ganti `requestListener` menjadi 

```js
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');

    response.statusCode = 200;

    const { method } = request

    if (method === 'GET') {
        response.end(`<h1>Hello!</h1>`)
    }

    if (method === 'POST') {
        response.end(`<h1>Hai!</h1>`)
    }

    
    if (method === 'PUT') {
        response.end(`<h1>Bonjour!</h1>`)
    }

    
    if (method === 'DELETE') {
        response.end(`<h1>Salam!</h1>`)
    }
}
```

lalu jalankan dengan perintah

```bash
npm run start
```

dan jalankan perintah berikut pada terminal

```bash
curl -X POST http://localhost:5000
curl -X PUT http://localhost:5000
curl -X DELETE http://localhost:5000
curl -X GET http://localhost:5000
```

maka kita akan menemukan output yang berbeda untuk setiap request method