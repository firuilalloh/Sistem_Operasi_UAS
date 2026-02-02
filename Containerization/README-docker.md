# Implementasi Containerization

Dokumen ini mendemonstrasikan cara melakukan containerization pada aplikasi web statis menggunakan **Nginx** dan manajemen multi-container menggunakan **Docker Compose**.

## Struktur Folder
```text
Containerization
|-- app
|   |-- app.js         # Logika frontend (Waktu & Status)
|   |-- index.html     # Tampilan utama aplikasi
|-- Dockerfile         # Instruksi build image Nginx
|-- docker-compose.yml # Konfigurasi multi-container (Web & DB)
|-- README-docker.md   # Dokumentasi project
```

### **Docker file**
Untuk instruksi build image Nginx 

### **docker-compose.yml**
Di gunakan untuk konfigurasi multi-container di sini saya menggunakan contoh (Web & db)

### **app/index.html**
Tampilan utama website yang akan di tampilkan.

### **app/app.js**
Logika frontend di sini saya menggunakan (Waktu & Status)