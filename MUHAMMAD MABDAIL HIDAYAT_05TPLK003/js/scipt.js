// Array untuk menyimpan data setiap halaman
let karyawanData = [];
let jabatanData = [];
let divisiData = [];
let absenData = [];
let izinData = [];
let lemburData = [];

// Fungsi untuk menambah dan menampilkan data di setiap halaman

// Fungsi untuk menambah data Karyawan
function addKaryawan() {
    const namaKaryawan = document.getElementById('namaKaryawan').value;
    const jabatanKaryawan = document.getElementById('jabatanKaryawan').value;
// Array untuk menyimpan data sementara
let karyawanData = [];

function addKaryawan() {
    // Mengambil nilai input dari form
    const namaKaryawan = document.getElementById('namaKaryawan').value;
    const jabatanKaryawan = document.getElementById('jabatanKaryawan').value;
    const divisiKaryawan = document.getElementById('divisiKaryawan').value;

    // Memasukkan data baru ke dalam array
    karyawanData.push({ namaKaryawan, jabatanKaryawan, divisiKaryawan });

    // Memanggil fungsi untuk menampilkan data di tabel
    renderKaryawanTable();

    // Reset form setelah data ditambahkan
    document.querySelector('form').reset();
}

function renderKaryawanTable() {
    const tableBody = document.getElementById('karyawanTableBody');
    tableBody.innerHTML = ''; // Kosongkan isi tabel sebelum memperbarui

    // Menampilkan setiap data di dalam array sebagai baris baru di tabel
    karyawanData.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.namaKaryawan}</td>
            <td>${item.jabatanKaryawan}</td>
            <td>${item.divisiKaryawan}</td>
        `;
        tableBody.appendChild(row);
    });
}
    const divisiKaryawan = document.getElementById('divisiKaryawan').value;

    karyawanData.push({ namaKaryawan, jabatanKaryawan, divisiKaryawan });

    renderKaryawanTable();
    document.querySelector('form').reset();
}

// Fungsi untuk menampilkan data Karyawan dalam tabel
function renderKaryawanTable() {
    const tableBody = document.getElementById('karyawanTableBody');
    tableBody.innerHTML = '';

    karyawanData.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.namaKaryawan}</td>
            <td>${item.jabatanKaryawan}</td>
            <td>${item.divisiKaryawan}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Fungsi untuk menambah data Jabatan
function addJabatan() {
    const kodeJabatan = document.getElementById('kodeJabatan').value;
    const namaJabatan = document.getElementById('namaJabatan').value;

    jabatanData.push({ kodeJabatan, namaJabatan });

    renderJabatanTable();
    document.querySelector('form').reset();
}

// Fungsi untuk menampilkan data Jabatan dalam tabel
function renderJabatanTable() {
    const tableBody = document.getElementById('jabatanTableBody');
    tableBody.innerHTML = '';

    jabatanData.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.kodeJabatan}</td>
            <td>${item.namaJabatan}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Fungsi untuk menambah data Divisi
function addDivisi() {
    const kodeDivisi = document.getElementById('kodeDivisi').value;
    const namaDivisi = document.getElementById('namaDivisi').value;

    divisiData.push({ kodeDivisi, namaDivisi });

    renderDivisiTable();
    document.querySelector('form').reset();
}

// Fungsi untuk menampilkan data Divisi dalam tabel
function renderDivisiTable() {
    const tableBody = document.getElementById('divisiTableBody');
    tableBody.innerHTML = '';

    divisiData.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.kodeDivisi}</td>
            <td>${item.namaDivisi}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Fungsi untuk menambah data Absen
function addAbsen() {
    const tanggalAbsen = document.getElementById('tanggalAbsen').value;
    const namaKaryawan = document.getElementById('namaKaryawan').value;

    absenData.push({ tanggalAbsen, namaKaryawan });

    renderAbsenTable();
    document.querySelector('form').reset();
}

// Fungsi untuk menampilkan data Absen dalam tabel
function renderAbsenTable() {
    const tableBody = document.getElementById('absenTableBody');
    tableBody.innerHTML = '';

    absenData.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.tanggalAbsen}</td>
            <td>${item.namaKaryawan}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Fungsi untuk menambah data Izin
function addIzin() {
    const tanggalIzin = document.getElementById('tanggalIzin').value;
    const namaKaryawan = document.getElementById('namaKaryawan').value;
    const alasanIzin = document.getElementById('alasanIzin').value;

    izinData.push({ tanggalIzin, namaKaryawan, alasanIzin });

    renderIzinTable();
    document.querySelector('form').reset();
}

// Fungsi untuk menampilkan data Izin dalam tabel
function renderIzinTable() {
    const tableBody = document.getElementById('izinTableBody');
    tableBody.innerHTML = '';

    izinData.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.tanggalIzin}</td>
            <td>${item.namaKaryawan}</td>
            <td>${item.alasanIzin}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Fungsi untuk menambah data Lembur
function addLembur() {
    const tanggalLembur = document.getElementById('tanggalLembur').value;
    const namaKaryawan = document.getElementById('namaKaryawan').value;
    const jamLembur = document.getElementById('jamLembur').value;

    lemburData.push({ tanggalLembur, namaKaryawan, jamLembur });

    renderLemburTable();
    document.querySelector('form').reset();
}

// Fungsi untuk menampilkan data Lembur dalam tabel
function renderLemburTable() {
    const tableBody = document.getElementById('lemburTableBody');
    tableBody.innerHTML = '';

    lemburData.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${item.tanggalLembur}</td>
            <td>${item.namaKaryawan}</td>
            <td>${item.jamLembur}</td>
        `;
        tableBody.appendChild(row);
    });
}
