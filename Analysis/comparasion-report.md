# Perbandingan Virtual Machine (VM) vs Docker

Ini report yang menjelaskan perbedaan utama antara Virtual Machine dan Docker berdasarkan waktu booting, penggunaan sumber daya, dan isolasi keamanan.

---

## Tabel Perbandingan Utama

| Kategori | Virtual Machine (VM) | Docker (Container) |
| :--- | :--- | :--- |
| **Waktu Booting** | Cukup lama (2-4 menit) karena inisialisasi hardware & load kernel. | Sangat cepat (hitungan detik) karena langsung menjalankan proses aplikasi. |
| **Resource (RAM & CPU)** | Overhead tinggi. RAM dipotong secara statis sesuai pengaturan hypervisor. | Sangat efisien. Penggunaan RAM & CPU bersifat dinamis sesuai kebutuhan. |
| **Isolasi Keamanan** | Sangat tinggi. Terisolasi hingga level hardware oleh hypervisor. | Isolasi tidak sekuat VM karena berbagi kernel yang sama antar container. |

---

## Analisis Mendalam

### 1. Waktu Booting
* **VM**: Membutuhkan waktu lama karena sistem harus melakukan simulasi hardware, memuat kernel OS tamu, dan menjalankan berbagai layanan sistem (services) dari nol.
* **Docker**: Jauh lebih ringan karena Docker tidak melakukan booting OS. Ia hanya membungkus aplikasi dan dependensinya, lalu berjalan di atas kernel OS host.

### 2. Penggunaan Resource (RAM & CPU)
* **VM**: Memiliki *overhead* yang besar karena setiap VM membawa Operating System sendiri. Jika Anda mengalokasikan 2GB RAM di VirtualBox, maka 2GB tersebut akan langsung terkunci.
* **Docker**: Container hanya menggunakan resource yang memang sedang dibutuhkan. Jika aplikasi hanya butuh 100MB, maka hanya itu yang diambil dari host.

### 3. Isolasi Keamanan
> **Penting untuk diperhatikan:**
> Meskipun Docker sangat efisien, faktor keamanan tetap menjadi pertimbangan utama.
* **VM**: Jika satu VM terkena malware, sangat sulit bagi malware tersebut untuk menembus ke VM lain atau ke Host karena dipisahkan oleh lapisan hardware virtual.
* **Docker**: Karena semua container berbagi kernel yang sama, celah keamanan pada satu container (atau kernel itu sendiri) berpotensi berdampak pada seluruh container yang berjalan di host tersebut.