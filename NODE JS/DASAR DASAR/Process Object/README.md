# Process Object

Salah satu global objek yang penting untuk diketahui adalah process. process adalah sebuah program yang dijalankan pada satu atau lebih thread.

Pada Node.js, global objek process memiliki fungsi dan properti yang dapat memberikan informasi mengenai proses yang sedang berjalan.

Anda juga bisa secara manual menyimpan nilai di dalam `process.env`. Hal ini berguna untuk menentukan alur code seperti if-else dalam program berdasarkan environment yang Anda berikan. Contohnya, ketika Anda ingin nilai variabel `host` berbeda di kala pengembangan (development) dan produksi (production), Anda bisa membuat properti `NODE_ENV` pada `process.env`. Jadi, Anda bisa menentukan nilai host berdasarkan kondisi `NODE_ENV`.

```js
const server = new Server({
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'dicoding.com',
});
```

Untuk memberikan nilai pada properti `process.env`, kita dapat memberikannya ketika mengeksekusi berkas JavaScript. Caranya seperti ini:

```bash
SET NODE_ENV=production && node app.js
```

Objek `process` memiliki kegunaan lain. Salah satunya adalah mendapatkan informasi tentang penggunaan memory ketika proses berjalan. Anda dapat mengakses informasi tersebut melalui fungsi `process.memoryUsage()`.

```js
const memoryInformation = process.memoryUsage();
 
console.log(memoryInformation);
```

# Tantangan: Process Object

Untuk tantangan kali ini, buatlah berkas index.js baru di dalam folder baru process-object pada proyek nodejs-basic.

Kemudian, tuliskan starter code berikut pada index.js.

```js
const initialMemoryUsage = process.memoryUsage.heapUsed;
const yourName = process.env.NODE_ENV
const environment = process.memoryUsage.heapUsed
 
for(let i = 0; i <= 10000; i++) {
// Proses looping ini akan membuat penggunaan memori naik
}
 
const currentMemoryUsage = // TODO 4
 
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);
```