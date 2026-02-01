# Implementasi Containerization - UAS Sistem Operasi

Dokumen ini mendemonstrasikan cara melakukan containerization pada aplikasi web statis menggunakan **Nginx** dan manajemen multi-container menggunakan **Docker Compose**.

## 📂 Struktur Folder
Berdasarkan struktur project saat ini:
```text
Containerization/
├── app/
│   ├── app.js         # Logika frontend (Waktu & Status)
│   └── index.html     # Tampilan utama aplikasi
├── Dockerfile         # Instruksi build image Nginx
├── docker-compose.yml # Konfigurasi multi-container (Web & DB)
└── README-docker.md   # Dokumentasi project