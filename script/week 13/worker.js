// File ini adalah BACKGROUND WORKER yang berjalan di thread terpisah
// Worker TIDAK bisa mengakses DOM (document, window, dll)
// Komunikasi hanya melalui postMessage() dan addEventListener("message")

// Mendaftarkan event listener untuk menerima pesan dari thread utama
// Dipanggil setiap kali thread utama memanggil worker.postMessage(data)
addEventListener("message", function (message){

    // Mengambil data yang dikirim thread utama (angka 100000)
    // message.data berisi nilai yang dikirim via postMessage()
    const total = message.data;

    // Melakukan loop sebanyak 'total' kali (proses berat)
    // Karena berjalan di background thread, UI tetap TIDAK FREEZE
    for (let i = 0; i < total; i++) {
        // Mengirim hasil (nilai i) kembali ke thread utama
        // postMessage() di dalam worker → mengirim data ke halaman utama
        postMessage(i);
    }

});
