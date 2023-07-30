# Menyiapkan Project

Pertama jalankan 

```bash
npm init --y
```

untuk menginisialisasi 

Kedua, buat file `server.js` dan masukkan kode berikut

```js
console.log("Hallo, Kita akan belajar membuat server");
```

selanjutny buka `package.json` dan tambahkan runner secript di bawah

```json
"scripts": {
    "start": "node server.js"
}
```

Selanjutnya jalankan dengan pertintah

```bash
npm run start
```