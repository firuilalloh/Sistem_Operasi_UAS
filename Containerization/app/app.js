function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById('timestamp').innerText = "Waktu akses: " + timeString;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('status').innerText = "Aktif & Responsif";
    updateTime();
    
    console.log("Aplikasi dalam container berhasil dijalankan!");
});