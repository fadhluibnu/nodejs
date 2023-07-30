# Body Request

Umumnya permintaan dengan method POST dan PUT, memiliki sebuah data yang dikirim pada body request. Data itu bisa berupa teks, JSON, berkas gambar dll. Dan selanytnya diproses untuk disimpan di database

## http.clientRequest

`http.clientRequest` merupakan turunan dari readable stream, dimana untuk mendapatkan data body lebih sulit dibading mendapatkan data header. Data body didapatkan dengan teknik stram yang memanfaatkan `EventEmitter` untuk mengirim bagian datanya. Dalam kasus `http.clientRequest` event `data` dan `end`-lah yang digunakan untuk mendapatkan data body.

```js
const requestListener = (request, response) => {
    let body = [];
 
    request.on('data', (chunk) => {
        body.push(chunk);
    });
 
    request.on('end', () => {
        body = Buffer.concat(body).toString();
    });
};
```
Pertama kode akan membuat variable body dengan array kosong. Lalu saat event `data` terjadi para request, array body diisi dengan potongan data (chunk) yang berasa dari callback function. Terkahir saat stream berakhir, event `end` berjalan dan mengubah variabel `body` yang sebelumnya menampung buffer menjadi data sebenarnya dalam bentuk string.

# Latihan Mendapatkan Body Request

Sekarang kita akan mencoba mendapatkan body request dari method `POST`. Kita akan membuat server merespon saapaan berdasarkan nama yang dikirim pada body

Pertama kita hapus dulu logika untuk method `PUT` dan `DELETE`.

Selanjutnya pada pengkondisian `POST` ubah, sehingga semua menjadi

```js
const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'text/html');

    response.statusCode = 200;

    const { method } = request

    if (method === 'GET') {
        response.end(`<h1>Hello!</h1>`)
    }

    if (method === 'POST') {
        let body = []

        request.on('data', (chunk) => {
            body.push(chunk)
        })

        request.on('end', () => {
            body = Buffer.concat(body).toString()
            const { name } = JSON.parse(body);
            response.end(`<h1>Hai, ${name}!</h1>`)
        })
    }
}
```

*Note :* Diatas kita melihat `response` untuk method post dipindahkan ke event `end`. Ini agar server tidak mengirimkan response saat proses stream atau event `data` belum selesai

Setelah itu kita jalankan dengan perintah

```bash
npm run start
curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"name\": \"Ibnu\"}"

```

maka seharusnya output yang muncul adalah

```html
<h1>Hai, Ibnu!</h1>
```