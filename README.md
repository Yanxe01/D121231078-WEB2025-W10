# Task Manager CLI

Aplikasi CLI (Command Line Interface) sederhana untuk mengelola daftar tugas (task manager) menggunakan Node.js.

## Deskripsi

Task Manager CLI adalah aplikasi berbasis terminal yang memungkinkan pengguna untuk mengelola tugas-tugas mereka dengan mudah. Data tugas disimpan dalam file JSON lokal sehingga data tetap tersimpan meskipun aplikasi ditutup.

## Fitur Utama

### 1. Menambah Tugas (Add Task)
Menambahkan tugas baru ke dalam daftar tugas.

**Perintah:**
```bash
node index.js add "nama tugas"
```

**Fitur:**
- Setiap tugas memiliki ID unik yang otomatis di-generate
- Tugas baru memiliki status "belum selesai" secara default
- Validasi input untuk memastikan tugas tidak kosong

**Contoh:**
```bash
node index.js add "Belajar Node.js"
# Output: [+] Tugas ditambahkan: "Belajar Node.js" (ID: 1)
```

### 2. Melihat Daftar Tugas (List Tasks)
Menampilkan semua tugas yang ada dalam daftar.

**Perintah:**
```bash
node index.js list
```

**Fitur:**
- Menampilkan semua tugas dengan ID dan status
- Indikator visual: ✓ untuk tugas selesai, ○ untuk tugas belum selesai
- Label "(Selesai)" untuk tugas yang sudah dikomplitkan
- Pesan informatif jika belum ada tugas

**Contoh Output:**
```
DAFTAR TUGAS:
[1] ○ Belajar Node.js
[2] ✓ Membuat project CLI (Selesai)
```

### 3. Menandai Tugas Selesai (Mark Complete)
Menandai tugas tertentu sebagai sudah selesai berdasarkan ID.

**Perintah:**
```bash
node index.js complete <id>
# atau
node index.js done <id>
```

**Fitur:**
- Mengubah status tugas menjadi "selesai"
- Validasi ID tugas
- Konfirmasi setelah tugas berhasil ditandai selesai
- Dua alias perintah: `complete` dan `done`

**Contoh:**
```bash
node index.js done 1
# Output: [✓] Tugas ditandai selesai: "Belajar Node.js"
```

### 4. Menghapus Tugas (Remove Task)
Menghapus tugas dari daftar berdasarkan ID.

**Perintah:**
```bash
node index.js remove <id>
```

**Fitur:**
- Menghapus tugas secara permanen dari daftar
- Validasi ID tugas
- Konfirmasi setelah tugas berhasil dihapus
- Error handling jika ID tidak ditemukan

**Contoh:**
```bash
node index.js remove 2
# Output: [-] Tugas dengan ID 2 telah dihapus.
```

## Struktur File

```
task-manager/
├── index.js       # File utama untuk CLI interface
├── tasks.js       # Modul untuk operasi CRUD tugas
├── tasks.json     # Database JSON untuk menyimpan tugas
├── package.json   # Konfigurasi npm
└── README.md      # Dokumentasi proyek
```

## Cara Penggunaan

### Instalasi
```bash
# Clone atau download repository
cd D121231078-WEB2025-W10

# Pastikan Node.js sudah terinstall
node --version
```

### Menjalankan Aplikasi

**Menambah tugas:**
```bash
node index.js add "Mengerjakan tugas kuliah"
```

**Melihat semua tugas:**
```bash
node index.js list
```

**Menandai tugas selesai:**
```bash
node index.js done 1
```

**Menghapus tugas:**
```bash
node index.js remove 1
```

**Melihat bantuan:**
```bash
node index.js
# atau
node index.js help
```

## Teknologi yang Digunakan

- **Node.js** - Runtime JavaScript
- **File System (fs/promises)** - Untuk operasi file asinkron
- **JSON** - Format penyimpanan data

## Fitur Teknis

### Async/Await
Semua operasi file menggunakan async/await untuk menghindari blocking I/O.

### Error Handling
- Validasi input pengguna
- Penanganan file tidak ditemukan
- Penanganan ID tugas tidak valid

### Data Persistence
Data disimpan dalam file `tasks.json` dengan struktur:
```json
{
  "lastId": 2,
  "tasks": [
    {
      "id": 1,
      "title": "Belajar Node.js",
      "completed": false
    }
  ]
}
```

### Auto-increment ID
Sistem ID otomatis yang memastikan setiap tugas memiliki ID unik.

## Keunggulan

1. **Sederhana dan Mudah Digunakan** - Interface CLI yang intuitif
2. **Lightweight** - Tidak memerlukan dependencies eksternal
3. **Data Persistence** - Data tersimpan dalam file lokal
4. **Error Handling** - Penanganan error yang baik
5. **Modular** - Kode terpisah antara CLI dan business logic

## Pengembangan Lebih Lanjut

Beberapa ide pengembangan yang bisa ditambahkan:

- Fitur edit tugas
- Kategori atau tag untuk tugas
- Due date untuk tugas
- Prioritas tugas (high, medium, low)
- Filter dan sort tugas
- Export/import data
- Warna pada output CLI
- Search tugas

## Lisensi

MIT License

## Author

Dibuat sebagai tugas Pemrograman Web 2025 - Week 10
