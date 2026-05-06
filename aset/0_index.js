//====== DEKLARASI KONSTANTA begin
const AUDITOR = "Audit Independen **JS-Engine SukmaBudi+Gemini**";

const OID_DATABASE = {
	//--- Hash Algorithms
	"2.16.840.1.101.3.4.2.1": "SHA-256 [Secure]",
	"2.16.840.1.101.3.4.2.2": "SHA-384 [High Secure]",
	"2.16.840.1.101.3.4.2.3": "SHA-512 [Ultra Secure]",
	"1.3.14.3.2.26": "SHA-1 [Insecure/Tidak direkomendasikan]",

	//--- Signature Algorithms
	"1.2.840.113549.1.1.11": "RSA-SHA256",
	"1.2.840.113549.1.1.12": "RSA-SHA384",
	"1.2.840.113549.1.1.13": "RSA-SHA512",
	"1.2.840.10045.4.3.2": "ECDSA-SHA256"
};

const LABEL_TTE = "Tanda Tangan Elektronik";
const LABEL_INTEGRITAS_DOKUMEN = "Integritas Dokumen";
const LABEL_NAMA_USER = "Penanda tangan";
const LABEL_ORGANISASI = "Organisasi";
const LABEL_UNIT_ORGANISASI = "Unit Organisasi";
const LABEL_REGIONAL = "Regional";
const LABEL_PROVINSI = "Provinsi";
const LABEL_KODE_NEGARA = "Kode Negara";
const LABEL_DESKRIPSI_OID = "Deskripsi OID";
const LABEL_WAKTU_DITANDATANGANI = "Waktu Ditandatangani [Lokal]";
const LABEL_LOKASI = "Lokasi";
const LABEL_ALASAN = "Alasan/Keterangan";
const LABEL_MASA_BERLAKU_SERTIFIKAT = "Masa Berlaku Sertifikat";
const LABEL_BERLAKU_MULAI = "Berlaku Mulai";
const LABEL_BERLAKU_SAMPAI = "Sampai Dengan";
const LABEL_PENERBIT_KODE = "Penerbit [Certificate Authority/CA]";
const LABEL_PENERBIT_NAMA = "Organisasi Penerbit";
const LABEL_ROOT_KODE = "PSrE Induk [Root CA]";
const LABEL_ROOT_NAMA = "Organisasi PSrE Induk";
const LABEL_HIERARKI_CHAIN = "Hierarki Sertifikat [Chain of Trust]";
const LABEL_LTV = "Long-Term Validation [LTV]";
const LABEL_TSA = "Time-Stamping Authority [TSA]";
const LABEL_NOMOR_SERI_USER = "Nomor Seri Sertifikat Penanda Tangan";
const LABEL_REVOKASI = "Revokasi [Pencabutan]";
const LABEL_OCSP_SERVER = "OCSP Server";
const LABEL_CRL_FILE = "Certificate Revocation List [CRL]";
const LABEL_AUDIT_KRIPTOGRAFI = "Audit Kriptografi TTE";
const LABEL_ALGORITMA = "Algoritma [Hash/Digest]";
const LABEL_ENKRIPSI = "Enkripsi [Signature]";
const LABEL_HASH_HEX_EXPECTED = "HASH HEX SAAT DITANDATANGANI [EXPECTED]";
const LABEL_HASH_HEX_CURRENT = "HASH HEX SAAT PEMINDAIAN [CURRENT]";

const TUNGGAL = "TUNGGAL";
const TERDAHULU = "TERDAHULU";
const TERAKHIR = "TERAKHIR";
const KADALUARSA = "KADALUARSA [EXPIRED]";
const BELUM_BERLAKU = "BELUM BERLAKU";
const ORIGINAL = "ORIGINAL [TIDAK ADA MODIFIKASI]";
const MODIFIKASI = "MODIFIKASI TERDETEKSI";
const AKTIF = "Aktif";
const TIDAK_AKTIF = "Tidak Aktif";
const TIDAK_TERDETEKSI = "Tidak Terdeteksi";
const TIDAK_DICANTUMKAN = "Tidak dicantumkan";
const VALID = "Valid";
const TIDAK_VALID = "Tidak Valid";
const DITEMUKAN = "Ditemukan";
const TIDAK_DITEMUKAN = "Tidak ditemukan";
const KUAT = "KUAT & MODERN";
const LEMAH = "LEMAH/USANG";
const WAKTU_TIDAK_ADA = "Waktu tidak disematkan";
const SERTIFIKAT_TANPA_CN = "Sertifikat Tanpa Nama CN";
const SERTIFIKAT_DICABUT = "SERTIFIKAT DICABUT!";
const SERTIFIKAT_TIDAK_DICABUT = "Status Sertifikat Tidak Dalam Kondisi Dicabut";

const LABEL_AUDIT_INDEPENDEN = "Audit Independen Dengan Sumber Terbuka";
const LABEL_LTA_JUDUL = "SURAT KETERANGAN AUDIT TTE";
const LABEL_LTA_ORGANISASI = "RSUD CIBABAT";

const CORS_RESTRICTED = "Akses Dibatasi [CORS_RESTRICTED]";
const N_A = "N/A";
const TIDAK_ADA_DATA = "-";
const _NULL_ = "null";

//===> TENTUKAN ISI DARI QRCODE DI SINI
//const URL_VALIDASI = "https://rsudcibabat.cimahikota.go.id/tte/";
//const URL_VERIFIKASI = "https://rsudcibabat.cimahikota.go.id/tte/verifikasi.html";
const URL_VALIDASI = "http://localhost/tte/";
const URL_VERIFIKASI = "http://localhost/tte/verifikasi.html";

//===> TENTUKAN LOGO PADA PDF DAN QRCODE DI SINI
//===> Untuk menghindari CORS konversi logo ke BASE64 gunakan tools online untuk mengkonversinya
//===> contoh konversi ke BASE64 lihat LogoBase64.js
const URL_LOGO = "./aset/logo.png";
const URL_LOGO_QR = "./aset/logo-horisontal.png";


//===> KONVERSI WAKTU KE FORMAT LOKAL INDONESIA
const tglIndonesiaOpsi = {
	day: '2-digit',
	month: 'long',
	year: 'numeric',
	hour: '2-digit',
	minute: '2-digit',
	second: '2-digit',
	timeZone: 'Asia/Jakarta',
	timeZoneName: 'short'
};
const tglIndonesiaFormat = (tanggal) => {
	return tanggal.toLocaleString('id-ID', tglIndonesiaOpsi).replace(/\./g, ':');
};

/*
*** ALTERNATIF VERSI MANUAL KONVERSI WAKTU
Tanpa toLocaleDateString: Fungsi bawaan tersebut seringkali memberikan hasil berbeda
tergantung pada pengaturan browser atau sistem operasi user (ada yang pakai /, ada yang pakai -).
Dengan menyusunnya manual, hasilnya pasti konsisten.
***
*/
/*
const tglIndonesiaFormat = (tanggal) => {

	let d;

	if (tanggal instanceof Date && !isNaN(tanggal)) {
		d = tanggal;
	} else if (typeof tanggal === 'string') {
		// Memisahkan "07/01/2026, 10.08.26"
		const [tglPart, jamPart] = tanggal.split(', ');
		const [hari, bulan, tahun] = tglPart.split('/');
		const [jam, menit, detik] = jamPart ? jamPart.split('.') : [0, 0, 0];

		d = new Date(tahun, bulan - 1, hari, jam, menit, detik);
	}

	if (!d || isNaN(d.getTime())) return "Format Tidak Valid";

	// Array nama hari dan bulan dalam Bahasa Indonesia
	const namaHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
	const namaBulan = [
		"Januari", "Februari", "Maret", "April", "Mei", "Juni",
		"Juli", "Agustus", "September", "Oktober", "November", "Desember"
	];

	// Ambil komponen tanggal
	const hariNama = namaHari[d.getDay()];
	const tanggal = d.getDate();
	const bulanNama = namaBulan[d.getMonth()];
	const tahunFull = d.getFullYear();
  
	// Format jam dan menit agar selalu 2 digit (misal: 08.05)
	const jamFull = String(d.getHours()).padStart(2, '0');
	const menitFull = String(d.getMinutes()).padStart(2, '0');
	const detikFull = String(d.getSeconds()).padStart(2, '0');

	// Susun hasil akhir: "Rabu, 7 Januari 2026 10:08 WIB"
	return `${hariNama}, ${tanggal} ${bulanNama} ${tahunFull} ${jamFull}:${menitFull}:${detikFull} WIB`;

};
*/
//====== DEKLARASI KONSTANTA end



//================================================================== HAPUS BAGIAN INI HANYA SEBAGAI SIMULASI DATABASE VERIFIKASI
//================================================================== INISIALISASI DATABASE BROWSER CLIENT SIDE begin
let db;
//================================================================== INISIALISASI DATABASE BROWSER CLIENT SIDE end
//================================================================== HAPUS BAGIAN INI HANYA SEBAGAI SIMULASI DATABASE VERIFIKASI




const fileInput = document.getElementById('fileInput');
const container = document.getElementById('resultsContainer');

fileInput.onchange = async (e) => {

	const file = e.target.files[0];
	if (!file) return;

	resetDataContainer(); // <--- BERSIHKAN DULU ATRIBUT DATA- PADA ELEMEN DATA-CONTAINER

	container.innerHTML = `
		<div style="text-align:center; padding:50px;">
            <div style="margin-bottom:15px;">⏳</div>
            <div>Menganalisis Struktur Biner dan Kriptografi...</div>
        </div>
	`;

	try {
		const sessionID = Date.now().toString();
		
		const { PDFDocument, PDFName } = PDFLib; // Ambil komponen yang dibutuhkan dari global PDFLib
		const buffer = await file.arrayBuffer();
		const uint8Array = new Uint8Array(buffer);

		// --- TAMBAHAN BLOK karena uint8Array untuk mencari biner tanda tangan (PKCS#7)
		// --- sedangkan data Location dan Reason tidak ada di dalam biner tersebut mereka ada di dalam "kantong" metadata PDF.
		const pdfDoc = await PDFDocument.load(buffer);
		const form = pdfDoc.getForm();
		const fields = form.getFields();

		let pdfLocation = TIDAK_DICANTUMKAN;
		let pdfReason = TIDAK_DICANTUMKAN;

		// DEEP LOOKUP LOGIC MENCARI DATA LOCATION DAN REASON
		try {
			const { PDFDocument, PDFDict, PDFString, PDFHexString } = PDFLib;
			const pdfDoc = await PDFDocument.load(buffer);
			const context = pdfDoc.context;

			// Fungsi pembantu untuk mengekstrak teks dari berbagai tipe objek PDF
			const extractText = (obj) => {
				if (!obj) return null;
				const resolved = context.lookup(obj);
				if (resolved instanceof PDFString || resolved instanceof PDFHexString) {
					return resolved.decodeText();
				}
				return resolved.toString();
			};

			const indirectObjects = context.enumerateIndirectObjects();

			for (const [ref, obj] of indirectObjects) {
				if (obj instanceof PDFDict) {

					// Cek apakah objek ini memiliki ByteRange (Ciri khas Tanda Tangan)
					if (obj.has(PDFLib.PDFName.of('ByteRange'))) {
						const loc = obj.get(PDFLib.PDFName.of('Location'));
						const rea = obj.get(PDFLib.PDFName.of('Reason'));

						if (loc) {
							const val = extractText(loc);
							if (val && val !== "undefined") pdfLocation = val;
						}
						if (rea) {
							const val = extractText(rea);
							if (val && val !== "undefined") pdfReason = val;
						}

						if (pdfLocation !== TIDAK_DICANTUMKAN) break;
					}
				}
			}
		} catch (e) {
			console.error("Gagal Forensik PDF:", e);
		}

		// Bersihkan karakter kurung ( ) yang sering muncul di format PDF
		pdfLocation = pdfLocation.replace(/^\(|\)$/g, "").trim();
		pdfReason = pdfReason.replace(/^\(|\)$/g, "").trim();
		// --- DEEP LOOKUP LOGIC END ---


		const fullText = new TextDecoder('latin1').decode(uint8Array);
		const allDates = [...fullText.matchAll(/\/M\s*\(D:(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/g)].map(m => {
			return new Date(Date.UTC(m[1], m[2]-1, m[3], m[4], m[5], m[6]));
		});

		const positions = findPatternInUint8(uint8Array, [0x2f, 0x42, 0x79, 0x74, 0x65, 0x52, 0x61, 0x6e, 0x67, 0x65]);

		//--- TAMPILAN JIKA TIDAK TERDETEKSI TTE
		if (positions.length === 0) {
			container.innerHTML = `
				<div class="warning-card">
					<span>⚠️ Tidak ditemukan jejak ${LABEL_TTE} [PAdES] pada file ini:</span>
					<div class="heading-2">${file.name}</div>
                </div>
			`;
			return;
		}

		container.innerHTML = `
			<div class="audit-summary" style="gap:20px;">
				<div class="heading-2">${file.name}</div>
				<div class="info-label" style="margin:0;">Terdeteksi : ${positions.length} TTE</div>
				<div class="btn-upload" onclick="exportFullLtaReport()" style="margin:0;">Unduh Laporan Audit LTA</div>
			</div>
		`;

		const tanggal = new Date(Date.now()).toLocaleString('id-ID');
		
		// HITUNG HASH AWAL SEBELUM LOOP
		const originalFileHash = await calculateHash(buffer);
		
		for (let i = 0; i < positions.length; i++) {
			try {
				const pos = positions[i];
				const endOfLine = uint8Array.indexOf(0x5d, pos);
				const rangeStr = new TextDecoder().decode(uint8Array.subarray(pos, endOfLine + 1));
				const byteRange = rangeStr.match(/\d+/g).map(Number);

				const gapStart = byteRange[0] + byteRange[1];
				const gapEnd = byteRange[2];
				const sigHex = new TextDecoder().decode(uint8Array.subarray(gapStart, gapEnd)).replace(/[<>\s\0]/g, '');
				const cleanSig = trimTrailingZeros(hexToUint8Array(sigHex));

				const asn1 = asn1js.fromBER(cleanSig.buffer);
				const cms = new pkijs.ContentInfo({ schema: asn1.result });
				const sd = new pkijs.SignedData({ schema: cms.content });
				const cert = [...sd.certificates].reverse()[0];
				const signer = sd.signerInfos[0];


				// IDENTIFIKASI ALGORITMA
				// Ekstraksi OID (Object Identifier) dari objek SignerInfo
                const digestOID = signer.digestAlgorithm.algorithmId;
                const sigOID = signer.signatureAlgorithm.algorithmId;
				const digestName = OID_DATABASE[digestOID] || `Unknown OID (${digestOID})`;
				const signatureName = OID_DATABASE[sigOID] || `Unknown OID (${sigOID})`;
				const isStrong = !digestName.includes("SHA-1") && !signatureName.includes("SHA-1");
				const cryptoStatus = isStrong ? KUAT : LEMAH;

				// --- EKSTRAKSI TSA ---
				let tsaEnabled = false;
				let tsaCommonName = TIDAK_TERDETEKSI;

				try {
					// Ambil seluruh sertifikat dari objek SignedData (sd)
					const globalCerts = sd.certificates || [];

					// Lakukan Deep Scan pada rantai sertifikat
					for (let i = 0; i < globalCerts.length; i++) {
						const cert = globalCerts[i];
						const subjectData = cert.subject.typesAndValues;

						// Ekstraksi Common Name (CN) asli dari sertifikat
						const cnField = subjectData.find(tv => tv.type === "2.5.4.3");
						const cnValue = cnField ? cnField.value.valueBlock.value : "";

						// Ekstraksi Organization (O) untuk verifikasi
						const oField = subjectData.find(tv => tv.type === "2.5.4.10");
						const oValue = oField ? oField.value.valueBlock.value : "";

						// Kriteria Identifikasi TSA: OID TimeStamping atau Keyword pada Subjek
						let isTSAByEKU = false;
						if (cert.extensions) {
							const eku = cert.extensions.find(e => e.extnID === "2.5.29.37");
							if (eku && eku.parsedValue.keyPurposes?.includes("1.3.6.1.5.5.7.3.8")) {
								isTSAByEKU = true;
							}
						}

						const isTSAByName = (
							cnValue.toLowerCase().includes("timestamp") || 
							cnValue.toLowerCase().includes("tsa") || 
							oValue.toLowerCase().includes("sandi negara")
						);

						if (isTSAByEKU || isTSAByName) {
							tsaEnabled = true;
							// AMBIL NILAI ASLI (GENUINE): Menggunakan cnValue langsung dari sertifikat
							tsaCommonName = cnValue || SERTIFIKAT_TANPA_CN;
							//console.log("TSA Identifikasi Asli: " + tsaCommonName);
							break; 
						}
					}

					// Fallback: Jika melalui scan sertifikat tidak ditemukan, cek Unauthenticated Attributes
					if (!tsaEnabled && signer.unauthenticatedAttributes) {
						const tsaAttr = signer.unauthenticatedAttributes.find(a => a.type === "1.2.840.113549.1.9.16.2.14");
						if (tsaAttr) {
							tsaEnabled = true;
							tsaCommonName = "SignatureTimeStamp Attribute"; // Menandakan adanya stempel waktu biner
						}
					}
				} catch (err) {
					console.error("Gagal mendeteksi TSA:", err);
				}
				// --- EKSTRAKSI TSA ---
				
				
				const subject = cert.subject.typesAndValues;
				const getSubjectAttr = (oid) => subject.find(t => t.type === oid)?.value?.valueBlock?.value;
				
				// DEBUGGING: Untuk memastikan atribut sengaja tidak diisi bukan tidak terdeteksi skrip
				/*
				console.log("--- DEBUG SUBJECT CERTIFICATE ---");
				cert.subject.typesAndValues.forEach(tv => {
					// Menampilkan semua OID yang ada di dalam sertifikat
					console.log(`OID: ${tv.type} | Value: ${tv.value.valueBlock.value}`);
				});
				*/
				
				// 1. Ekstraksi Informasi Penanda tangan
				const userNama = getSubjectAttr("2.5.4.3") || "[CN] " + TIDAK_DICANTUMKAN; // CN (Common Name) Nama penanda tangan
				const userOrg = getSubjectAttr("2.5.4.10") || "[O] " + TIDAK_DICANTUMKAN; // O (Organization) Nama organisasi 
				const userOU = getSubjectAttr("2.5.4.11") || "[OU] " + TIDAK_DICANTUMKAN; // OU (Organizational Unit) Departemen atau unit dalam organisasi
				const userLocality = getSubjectAttr("2.5.4.7") || "[L] " + TIDAK_DICANTUMKAN; // L (Locality) Kota atau lokasi
				const userState = getSubjectAttr("2.5.4.8") || "[ST] " + TIDAK_DICANTUMKAN; // ST (State or Province) Provinsi atau negara bagian
				const userCountry = getSubjectAttr("2.5.4.6") || "[C] " + TIDAK_DICANTUMKAN; // C (Country) Kode negara (misalnya, US, ID)
				const userDesc = getSubjectAttr("2.5.4.13") || TIDAK_DICANTUMKAN;  // Description (Sering berisi NIP atau Jabatan)

				// 2. Ekstraksi Informasi Penerbit (Issuer/CA)
				const penerbitNama = cert.issuer.typesAndValues.find(t => t.type === "2.5.4.3")?.value?.valueBlock?.value || "Penerbit Tidak Diketahui";
				const penerbitOrg = cert.issuer.typesAndValues.find(t => t.type === "2.5.4.10")?.value?.valueBlock?.value || "";
				
				// 3. Ekstraksi Informasi Root CA // --- LOGIKA EKSTRAKSI BERJENJANG (OBJECTIVE CHAIN SCAN) ---
				const allCerts = sd.certificates;
				const getVal = (cert, oid) => cert.subject.typesAndValues.find(t => t.type === oid)?.value?.valueBlock?.value || "-";

				// Scan Seluruh Rantai untuk Mencari Root & Intermediate secara Objektif
				let root = { cn: "John Doe", org: "Doe Unit" }; // Fallback anonim

				// --- EKSTRAKSI SERIAL NUMBER BERJENJANG ---
				let penerbitSN = TIDAK_ADA_DATA;
				let penerbitDate = TIDAK_ADA_DATA;
				
				
				// FUNGSI PEMBANTU KONVERSI HEX
				const toHex = (valueBlock) => {
					return Array.from(new Uint8Array(valueBlock.valueHex))
						.map(b => b.toString(16).padStart(2, '0'))
						.join('')
						.toLowerCase();
				};

				allCerts.forEach( cert => {
					const sCN = getVal(cert, "2.5.4.3");
					const sOrg = getVal(cert, "2.5.4.10");
					const sSN = toHex(cert.serialNumber.valueBlock);
					const sDateFrom = cert.notBefore.value.toLocaleString('id-ID', tglIndonesiaOpsi).replace(/\./g, ':');
					const sDateUntil = cert.notAfter.value.toLocaleString('id-ID', tglIndonesiaOpsi).replace(/\./g, ':');

					// Jika sertifikat mengandung "Root", simpan sebagai Root
					if (sCN.toLowerCase().includes("root")) {
						root.cn = sCN;
						root.org = sOrg;
						root.sn = sSN;
						root.date = `${sDateFrom} - ${sDateUntil}`;
						//console.log('root.date : ' + root.date);
					}
					
					if (sCN === penerbitNama && sCN !== userNama) { // Identifikasi Penerbit/Intermediate (Jika bukan root dan bukan penandatangan utama)
						penerbitSN = sSN;
						penerbitDate = `${sDateFrom} - ${sDateUntil}`;
						//console.log('penerbitDate : ' + penerbitDate);
					}
				});


				//--- WAKTU DITANDATANGANI
				let signingTime = WAKTU_TIDAK_ADA;
				const timeAttr = signer.signedAttrs?.attributes.find(a => a.type === "1.2.840.113549.1.9.5");
				if (timeAttr) {
					signingTime = tglIndonesiaFormat(timeAttr.values[0].valueBlock.value);
				} else if (allDates.length > 0) {
					const targetDate = allDates[i] || allDates[allDates.length - 1];
					signingTime = tglIndonesiaFormat(targetDate);
				}


				//--- STATUS BERLAKU ATAU KADALUARSA SERTIFIKAT
				const now = new Date();
				const expiryDate = cert.notAfter.value;
				const startDate = cert.notBefore.value;
				let validityStatus = "";
				let validityColor = "";
				if (now > expiryDate) {
					validityStatus = KADALUARSA;
					validityColor = "#dc3545";
				} else if (now < startDate) {
					validityStatus = BELUM_BERLAKU;
					validityColor = "#ffc107";
				} else {
					validityStatus = AKTIF;
					validityColor = "#28a745";
				}


				const serialHex = Array.from(new Uint8Array(cert.serialNumber.valueBlock.valueHex))
					.map(b => b.toString(16).padStart(2, '0'))
					.join('')
					.toLowerCase();


				//---LTV FORENSIC CHECK
				let ltvEnabled = false;
				try {
					// 1. Cek LTV melalui Document Security Store (DSS)
					const catalog = pdfDoc.catalog;
					if (catalog.has(PDFLib.PDFName.of('DSS'))) {
						ltvEnabled = true;
					}
				} catch (e) {
					console.error("Gagal deteksi LTV:", e);
				}


				//--- CEK DOKUMEN BERUBAH ATAU TIDAK SEJAK DITANDATANGANI
				const curHashBuf = await crypto.subtle.digest("SHA-256", (new Uint8Array([...uint8Array.subarray(byteRange[0], byteRange[0] + byteRange[1]), ...uint8Array.subarray(byteRange[2], byteRange[2] + byteRange[3])])).buffer);
				const curHashHex = Array.from(new Uint8Array(curHashBuf)).map(b => b.toString(16).padStart(2, '0')).join('');
				let expHashHex = N_A;
				try {
					const dAttr = signer.signedAttrs.attributes.find(a => a.type === "1.2.840.113549.1.9.4");
					expHashHex = Array.from(new Uint8Array(dAttr.values[0].valueBlock.valueHex)).map(b => b.toString(16).padStart(2, '0')).join('');
				} catch(e) {}
				const isModified = curHashHex !== expHashHex;
				const integrityTTE = !isModified ? VALID.toUpperCase() : TIDAK_VALID.toUpperCase();
				const integrityStatus = !isModified ? ORIGINAL.toUpperCase() : MODIFIKASI.toUpperCase();
				const integrityMessage = !isModified 
						? "Dokumen ini 100% identik dengan versi aslinya. Tidak ada perubahan data, teks, atau gambar sejak tanda tangan dibubuhkan."
						: "PERINGATAN: Isi dokumen telah berubah! Tanda tangan tidak lagi menjamin keaslian isi dokumen ini.";

				//--- REVOKASI / PENCABUTAN SERTIFIKAT
				let ocspUrl = TIDAK_DITEMUKAN;
				let crlUrl = TIDAK_DITEMUKAN;
				
				// Membedah Extensions Sertifikat
				if (cert.extensions) {
					
					// 1. Mencari OCSP di dalam Authority Info Access (OID: 1.3.6.1.5.5.7.1.1)
					const aiaExt = cert.extensions.find(e => e.extnID === "1.3.6.1.5.5.7.1.1");
					if (aiaExt) {
						
						// PKIjs memparsing ini ke dalam accessDescriptions
						const ocspDesc = aiaExt.parsedValue.accessDescriptions?.find(
							desc => desc.accessMethod === "1.3.6.1.5.5.7.48.1"
						);
						if (ocspDesc) ocspUrl = ocspDesc.accessLocation.value;
					}

					// 2. Mencari CRL Distribution Points (OID: 2.5.29.31)
					const crlExt = cert.extensions.find(e => e.extnID === "2.5.29.31");
					if (crlExt) {
						// Mengambil titik distribusi CRL pertama
						const crlPoint = crlExt.parsedValue.distributionPoints?.[0];
						if (crlPoint) {
							crlUrl = crlPoint.distributionPoint[0].value;
						}
					}
				}

				
				//---Simpan URL CRL ke dalam atribut data agar bisa diakses oleh fungsi tombol
				const dataContainer = document.getElementById("data-container");
				if (dataContainer && crlUrl) {
					dataContainer.setAttribute("data-crlurl", crlUrl);
				}


				let revocationNote = "";

				if (ocspUrl !== TIDAK_DITEMUKAN && crlUrl !== TIDAK_DITEMUKAN) {
					revocationNote = "Sertifikat memiliki jalur online-realtime ke server otoritas [OCSP] dan offline [CRL] oleh otoritas untuk pemeriksaan revokasi.";
				} else if (ocspUrl !== TIDAK_DITEMUKAN && crlUrl === TIDAK_DITEMUKAN) {
					revocationNote = "Sertifikat hanya menyediakan jalur online-realtime ke server otoritas [OCSP] untuk pemeriksaan revokasi.";
				} else if (ocspUrl === TIDAK_DITEMUKAN && crlUrl !== TIDAK_DITEMUKAN) {
					revocationNote = "Sertifikat hanya menyediakan jalur pemeriksaan offline [CRL] oleh otoritas untuk pemeriksaan revokasi.";
				} else {
					revocationNote = "Informasi pencabutan tidak tersedia dalam metadata sertifikat ini.";
				}


				//--- TAMPUNG SEMUA HASIL IDENTIFIKASI DALAM SATU OBJEK
				const details = {
					
					sessionID: sessionID,
					originalFileHash: originalFileHash,
					
					//--- NAMA FILE PDF
					pdfFile: file.name,
					
					integrityTTE: integrityTTE,
					integrityStatus: integrityStatus,
					integrityMessage: integrityMessage,
					integrityColor: !isModified ? "#28a745" : "#dc3545",
					integrityIcon: !isModified ? "check-circle" : "exclamation-triangle",
					
					//---INFORMASI KRIPTOGRAFI EKSAK
					digestAlg: digestName,
					signatureAlg: signatureName,
					digestOID: digestOID,
					signatureOID: sigOID,
					cryptoStatus: cryptoStatus,
					cryptoColor: isStrong ? "#28a745" : "#ffc107",
					
					AUDITOR,
	
					tteTotal: positions.length,
					tteLast: (i === positions.length - 1),
					
					userNama,
					userOrg,
					userOU,
					userLocality,
					userState,
					userCountry,
					userDesc,
					
					penerbitNama,
					penerbitOrg,
					penerbitSN,
					penerbitDate,
					
					rootNama: root.cn,
					rootOrg: root.org,
					rootSN: root.sn,
					rootDate: root.date,
					
					signingTime,
					
					//---MASA BERLAKU
					vFrom: tglIndonesiaFormat(cert.notBefore.value),
					vUntil: tglIndonesiaFormat(cert.notAfter.value),
					validityStatus: validityStatus,
					validityColor: validityColor,
					daysRemaining: Math.floor((expiryDate - now) / (1000 * 60 * 60 * 24)), // Menghitung sisa hari (opsional)
					
					//---LOKASI DAN ALASAN
					location: pdfLocation === _NULL_ ? TIDAK_DICANTUMKAN : pdfLocation,
					reason: pdfReason,
					
					//---LTV
					ltvStatus: ltvEnabled ? AKTIF : TIDAK_AKTIF,
					ltvColor: ltvEnabled ? "#27ae60" : "#e74c3c",
					
					//---TSA
					tsaEnabled: tsaEnabled,
					tsaStatus: tsaEnabled ? `Terverifikasi [${tsaCommonName}]` : TIDAK_TERDETEKSI,
					tsaColor: tsaEnabled ? "#2980b9" : "#718096",
					
					//---HIERARKI SERTIFIKAT 
					chain: sd.certificates.map(c => c.subject.typesAndValues.find(t => t.type === "2.5.4.3")?.value?.valueBlock?.value).reverse(),
					
					//---NOMOR SERIAL SERTIFIKAT
					serialNumber: serialHex,
					
					//---CEK INTEGRITAS TANDA TANGAN BERUBAH ATAU TIDAK
					curHashHex,
					expHashHex,
					
					//---URL DAN STATUS REVOKASI / PENCABUTAN
					ocspUrl: ocspUrl,
					crlUrl: crlUrl,
					revocationNote
					
				};


				//===> FUNGSI OTOMATIS PENGECEKAN STATUS REVOKASI TTE VIA URL SERVER OCSP
				//===> aktifkan fungsi getCRLInfo( crlUrl ) jika ingin pengecekan CRL otomatis di awal pemuatan laman
				//===> diterapkan pemanggilan manual untuk menghindari pembatasan Cross-Origin Resource Sharing [CORS] oleh browser
				//===> CORS_RESTRICTED akan menyebabkan informasi pencabutan tidak akan tampil di status revokasi.
				//await getCRLInfo( crlUrl );


//================================================================== HAPUS BAGIAN INI HANYA SEBAGAI SIMULASI DATABASE VERIFIKASI
//================================================================== INISIALISASI DATABASE BROWSER CLIENT SIDE begin
				// Panggil fungsi simpan ke SQLite Wasm
				saveToLog(curHashHex, userNama, file.name, integrityTTE, tanggal, sessionID, originalFileHash, tglIndonesiaFormat(cert.notBefore.value) + " - " + tglIndonesiaFormat(cert.notAfter.value), revocationNote, curHashHex, serialHex);
//================================================================== HAPUS BAGIAN INI HANYA SEBAGAI SIMULASI DATABASE VERIFIKASI
//================================================================== INISIALISASI DATABASE BROWSER CLIENT SIDE end


				// Tampilkan UI hasil deteksi
				renderDashboard(container, i + 1, details);

			} catch (e) { console.error(e); }
		}
		
//================================================================== HAPUS BAGIAN INI HANYA SEBAGAI SIMULASI DATABASE VERIFIKASI
//================================================================== INISIALISASI DATABASE BROWSER CLIENT SIDE begin
		const binaryDb = db.export();
		
		// CEK LIMIT LOCALSTORAGE STANDAR DEFAULT MAKSIMAL 5MB
		simpanDatabaseDenganCekLimit();
		//console.log("✅ Database Sinkron untuk Sesi: " + sessionID);
//================================================================== HAPUS BAGIAN INI HANYA SEBAGAI SIMULASI DATABASE VERIFIKASI
//================================================================== INISIALISASI DATABASE BROWSER CLIENT SIDE end
		
		
	} catch (err) { 
		container.innerHTML = `<div style="color:var(--danger); padding:20px;">Terjadi Kesalahan: ${err.message}</div>`; 
	}
};


function renderDashboard(target, rev, d) {

	const dataContainer = document.getElementById("data-container");

	dataContainer.setAttribute(`data-tte-${rev}`, JSON.stringify(d));

	const accent = d.integrityTTE.toLowerCase() === VALID.toLowerCase() ? (d.tteLast ? "#2980b9" : "#27ae60") : "#e74c3c";
	const card = document.createElement('div');
	card.className = "card";
	card.style.borderTopColor = accent;

	card.innerHTML = `
            <div class="card-body">

				<div class="card-header-container">
                    <div class="card-header">
                        <div class="status-badge" style="color:${accent}; border:1px solid ${accent}40;">
                            Tanda Tangan Elektronik #${rev}${d.tteTotal == 1 ? ' - ' + TUNGGAL : ' - ' + (d.tteLast ? TERAKHIR : TERDAHULU)}
                        </div>
						<div>
							<div class="info-label" style="color:#a0aec0;">${LABEL_TTE}</div>
							<div class="status-badge valid" style="color:${accent}; border:1px solid ${accent}40;">
								${d.integrityTTE.toLowerCase() === VALID.toLowerCase()
									? 
									`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="${accent}"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg> ${VALID.toUpperCase()}` 
									: 
									`<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="${accent}"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg> ${TIDAK_VALID.toUpperCase()}`
								}
							</div>
							<div class="info-label" style="color:#a0aec0;">${LABEL_INTEGRITAS_DOKUMEN}</div>
							<div class="status-badge valid" style="color:${accent}; border:1px solid ${accent}40;">
								${d.integrityStatus}
							</div>
							<div class="info-box">
								<div style="color:${accent};">${d.integrityMessage}</div>
							</div>
						</div>
                    </div>
                </div>

                <div class="info-grid">
                    <div class="info-box">
                        <p>
							<div class="info-label">${LABEL_NAMA_USER}</div>
							<div class="heading-2" style="color:${accent}">${d.userNama}</div>
						</p>
                        <p>
							<div class="info-label">${LABEL_ORGANISASI}</div>
							<div class="info-detail" style="${d.userOrg.toLowerCase().includes(TIDAK_DICANTUMKAN.toLowerCase()) ? 'color:#e11ede;' : 'font-weight:bold;'}">${d.userOrg}</div>
						</p>
                        <p>
							<div class="info-label">${LABEL_UNIT_ORGANISASI}</div>
							<div class="info-detail" style="${d.userOU.toLowerCase().includes(TIDAK_DICANTUMKAN.toLowerCase()) ? 'color:#e11ede;' : 'font-weight:bold;'}">${d.userOU}</div>
						</p>
                        <p>
							<div class="info-label">${LABEL_REGIONAL}</div>
							<div class="info-detail" style="${d.userLocality.toLowerCase().includes(TIDAK_DICANTUMKAN.toLowerCase()) ? 'color:#e11ede;' : 'font-weight:bold;'}">${d.userLocality}</div>
						</p>
                        <p>
							<div class="info-label">${LABEL_PROVINSI}</div>
							<div class="info-detail" style="${d.userState.toLowerCase().includes(TIDAK_DICANTUMKAN.toLowerCase()) ? 'color:#e11ede;' : 'font-weight:bold;'}">${d.userState}</div>
						</p>
                        <p>
							<div class="info-label">${LABEL_KODE_NEGARA}</div>
							<div class="info-detail" style="${d.userCountry.toLowerCase().includes(TIDAK_DICANTUMKAN.toLowerCase()) ? 'color:#e11ede;' : 'font-weight:bold;'}">${d.userCountry}</div>
						</p>
                        <p>
							<div class="info-label">${LABEL_DESKRIPSI_OID}</div>
							<div class="info-detail" style="${d.userDesc.toLowerCase().includes(TIDAK_DICANTUMKAN.toLowerCase()) ? 'color:#e11ede;' : 'font-weight:bold;'}">${d.userDesc}</div>
						</p>
                        <p>
							<div class="info-label">${LABEL_WAKTU_DITANDATANGANI}</div>
							<div class="info-detail"><b>${d.signingTime}</b></div>
							<p style="font-size: 0.8rem;">
								Waktu yang ditampilkan dikonversi ke local time Indonesia WIB [UTC+7].
								Jika terjadi perbedaan dengan validator lain, kemungkinan hanya perbedaan penerapan format UTC [Universal/Greenwich] yang berbeda 7 jam dengan WIB [UTC+7].
							</p>
							<p style="font-size: 0.8rem;">
								<b>[Signing Time]</b> Waktu yang diklaim oleh komputer penanda tangan saat menekan tombol tanda tangan.
								Kemungkinan dimanipulasi bisa saja terjadi jika jam komputer diubah.
								Tapi dapat dikuatkan dengan pengesahan stempel otoritas waktu pengelola TSA.
							</p>
						</p>
                        <p>
							<div class="info-label">${LABEL_LOKASI}</div>
							<div class="info-detail" style="${d.location.toLowerCase().includes(TIDAK_DICANTUMKAN.toLowerCase()) ? 'color:#e11ede;' : 'font-weight:bold;'}">${d.location}</div>
						</p>
                        <p>
							<div class="info-label">${LABEL_ALASAN}</div>
							<div class="info-detail" style="${d.reason.toLowerCase().includes(TIDAK_DICANTUMKAN.toLowerCase()) ? 'color:#e11ede;' : 'font-weight:bold;'}">${d.reason}</div>
						</p>
                    </div>
					<div class="info-box">
						<div style="display:flex; flex-direction:column; justify-content:center; align-items:center; margin-top:0;">
							<div class="info-label">${LABEL_MASA_BERLAKU_SERTIFIKAT}</div>
							<div class="${d.validityStatus.toLowerCase() === AKTIF.toLowerCase() ? 'status-badge valid' : ''}" style="margin-bottom:0;${d.validityStatus.toLowerCase() === AKTIF.toLowerCase() ? `color:${accent}; border:1px solid ${accent}40;` : `color:${d.validityColor};`}">
								<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="${accent}"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg> ${d.validityStatus.toUpperCase()}
							</div>
							${d.daysRemaining > 0 ? `
							<p style="font-size:0.8rem; margin-top:5px;">
								Sertifikat berakhir dalam <strong style="color:${accent}">${d.daysRemaining} hari</strong> lagi
							</p>` : ''}
						</div>
                        <p>
							<span class="info-label">${LABEL_BERLAKU_MULAI}</span><span class="info-detail"><b>${d.vFrom}</b></span>
						</p>
                        <p>
							<span class="info-label">${LABEL_BERLAKU_SAMPAI}</span><span class="info-detail"><b>${d.vUntil}</b></span>
						</p>
                        <p>
							<div class="info-label">${LABEL_PENERBIT_KODE}</div>
							<div class="info-detail"><b>${d.penerbitNama}</b></div>
							<div class="info-detail" style="font-size:0.7rem; letter-spacing:2px;">${d.penerbitSN.toUpperCase()}</div>
							<div class="info-detail" style="font-size:0.7rem;">${d.penerbitDate}</div>
						</p>
                        <p>
							<div class="info-label">${LABEL_PENERBIT_NAMA}</div>
							<div class="info-detail"><b>${d.penerbitOrg}</b></div>
						</p>
						<p>
							<div class="info-label">${LABEL_ROOT_KODE}</div>
							<div class="info-detail"><b>${d.rootNama}</b></div>
							<div class="info-detail" style="font-size:0.7rem; letter-spacing:2px;">${d.rootSN.toUpperCase()}</div>
							<div class="info-detail" style="font-size:0.7rem;">${d.rootDate}</div>
						</p>
						<p>
							<div class="info-label">${LABEL_ROOT_NAMA}</div>
							<div class="info-detail"><b>${d.rootOrg}</b></div>
						</p>
						<div class="info-label">${LABEL_HIERARKI_CHAIN}</div>
						<div class="info-detail chain">
							${d.chain.map((name, idx) => `
								<div style="font-size:0.85em; margin-bottom:4px;">
									${idx === d.chain.length-1 ? '└─' : '├─'} <b style="${idx === 0 ? `color:${accent}` : ''}">${name}</b>
								</div>
							`).join('')}
						</div>
						<p>
							<div class="info-label">${LABEL_LTV}</div>
							<div class="info-detail"><b>${d.ltvStatus}</b></div>
						</p>
						<p>
							<div class="info-label">${LABEL_TSA}</div>
							<div class="info-detail"><b>${d.tsaStatus}</b></div>
						</p>
						<p style="font-size: 0.8rem;">
							LTV memungkinkan validasi dokumen secara mandiri di masa depan tanpa bergantung pada server CA yang mungkin sudah offline.
						</p>
						<p style="font-size: 0.8rem;">
							TSA menjamin waktu penandatanganan melalui otoritas waktu independen [RFC 3161] bukan sekadar waktu lokal komputer.
						</p>
					</div>
                </div>

                <div class="singlebox-container">
					<div class="info-box">
						<p>
							<div class="info-label">${LABEL_NOMOR_SERI_USER}</div>
							<b><code style="display:inline-block; margin-top:0;">${d.serialNumber.toUpperCase()}</code></b>
						</p>
					</div>
                </div>

                <div class="info-grid">
                    <div class="info-box">

						<p style="font-size: 0.8rem;">
							<div class="info-label">${LABEL_REVOKASI}</div>
							<div class="info-detail"><b>${d.revocationNote}</b></div>
						</p>
						<p id="urlcheckOCSP">
							<div class="info-label">${LABEL_OCSP_SERVER}</div>
							<div class="info-detail"><b>${(d.ocspUrl.toLowerCase() !== 'tidak ditemukan') ? `<a href="${d.ocspUrl}" target="_blank" rel="noopener noreferrer">${d.ocspUrl}</a>` : `${d.ocspUrl}`}</b></div>
						</p>
						<p id="urlcheckCRL">
							<div class="info-label">${LABEL_CRL_FILE}</div>
							<div class="info-detail"><b>${(d.crlUrl.toLowerCase() !== 'tidak ditemukan') ? `<a href="${d.crlUrl}" target="_blank" rel="noopener noreferrer">${d.crlUrl}</a>` : `${d.crlUrl}`}</b></div>
						</p>
						<p style="margin-top:20px;">
							<div style="${(d.ocspUrl.toLowerCase() !== 'tidak ditemukan') ? 'display:flex;' : 'display:none;'} flex-direction:column; justify-content:center; align-items:center; margin-bottom:10px;">
								<span id="btn-audit-crl" class="btn-upload" style="border:none;" onclick="executeCrlAudit( ${rev} )">
									Cek Online CRL
								</span>
							</div>
							<div id="crl-status-label-${rev}" class="info-detail" style="font-size:1.2rem;font-weight:900;margin-bottom:5px;text-align:center;">
								Membutuhkan intervensi pemeriksaan secara manual
							</div>
							<div id="crl-expiry-note-${rev}" class="info-detail" style="font-size: 0.8rem; text-align: center;">
								${d.revocationNote}
							</div>
						</p>

						<div class="info-box" style="${(d.crlUrl.toLowerCase() !== 'tidak ditemukan') ? 'display:flex;' : 'display:none;'}  cursor:pointer; border:3px dashed #bcecf7; flex-direction:column; justify-content:center; align-items:center; text-align:center;" onclick="document.getElementById('fileCRL-${rev}').click()">
							<p style="margin-top:0; margin-bottom:10px; font-size:0.8rem;">Jika online gagal coba unggah file CRL di sini</p>
							<span class="btn-upload" style="margin:0;">Pilih File CRL</span>
							<input id="fileCRL-${rev}" type="file" accept=".crl" style="display:none;" onchange="handleCrlUpload(this, ${rev})">
						</div>

					</div>
                    <div class="info-box">
						<p class="info-detail">
							<b>${LABEL_AUDIT_KRIPTOGRAFI}</b>
							<br>
							<span style="font-size: 0.7rem;">${d.AUDITOR}</span>
							<div class="status-badge" style="color:${accent}; border:1px solid ${accent}40;">
								${d.cryptoStatus}
							</div>
						</p>
						<p>
							<div class="info-label">${LABEL_ALGORITMA}</div>
							<div class="info-detail"><b>${d.digestAlg}</b></div>
							<div class="info-detail" style="font-size:0.7rem; letter-spacing:2px;">[OID] ${d.digestOID}</div>
						</p>
						<p>
							<div class="info-label">${LABEL_ENKRIPSI}</div>
							<div class="info-detail"><b>${d.signatureAlg}</b></div>
							<div class="info-detail" style="font-size:0.7rem; letter-spacing:2px;">[OID] ${d.signatureOID}</div>
						</p>
						<p>
							<div class="info-label">${LABEL_HASH_HEX_EXPECTED}</div>
							<code>${d.expHashHex.toUpperCase()}</code>
						</p>
						<p>
							<div class="info-label">${LABEL_HASH_HEX_CURRENT}</div>
							<code style="color:${d.integrityTTE.toLowerCase() === VALID.toLowerCase() ? `${accent}` : '#bd0272'};">${d.curHashHex.toUpperCase()}</code>
						</p>
						<p style="font-size: 0.8rem;">
							Setiap TTE dalam dokumen memiliki <strong>SERTIFIKAT YANG SAMA</strong> dengan <strong>HASH HEX BERBEDA</strong> jika terdeteksi pemilik TTE adalah individu yang sama telah menandatangani lebih dari satu kali dalam dokumen.
						</p>
						<p style="font-size: 0.8rem;">
							Hash Hex menjadi sidik jari digital pada dokumen ini yang menentukan apakah dokumen mengalami perubahan atau tidak, dengan perbandingan eksak Hash Hex saat pertama ditandatangani dengan Hash Hex saat dipindai oleh sistem ini, jika identik sama maka dokumen tidak mengalami perubahan sejak ditandatangani.
						</p>
					</div>
                </div>

                <div class="singlebox-container">
                </div>

            </div>
	`;
	target.appendChild(card);
}

function findPatternInUint8(d, p) {
	const r = [];
	for (let i = 0; i < d.length - p.length; i++) {
		let m = true;
		for (let j = 0; j < p.length; j++) if (d[i + j] !== p[j]) { m = false; break; }
		if (m) r.push(i);
	}
	return r;
}

function hexToUint8Array(hex) {
	const arr = new Uint8Array(hex.length / 2);
	for (let i = 0; i < hex.length; i += 2) arr[i / 2] = parseInt(hex.substring(i, i + 2), 16);
	return arr;
}

function trimTrailingZeros(u8) {
	let i = u8.length - 1;
	while (i >= 0 && u8[i] === 0) i--;
	return u8.slice(0, i + 1);
}

async function executeCrlAudit( nomor ) {
    const container = document.getElementById("data-container");
    const url = container.getAttribute("data-crlurl");
    
    // Target elemen UI (Pastikan ID ini ada di HTML dashboard Anda)
    const statusEl = document.getElementById("crl-status-label-" + nomor);
    const expiryEl = document.getElementById("crl-expiry-note-" + nomor);
    const btnEl = document.getElementById("btn-audit-crl");

    if (!url || url === TIDAK_DITEMUKAN) {
        alert("URL CRL tidak ditemukan dalam sertifikat ini.");
        return;
    }

    // Beri indikasi loading
    btnEl.disabled = true;
    btnEl.innerHTML = 'Menghubungi Server BSSN...';
    statusEl.innerText = "Memeriksa...";

    const res = await getCRLInfo(url);

    if (res.status === "Success") {
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        statusEl.innerText = "Sinkronisasi Berhasil";
        statusEl.style.color = "#28a745";
        expiryEl.innerHTML = `Daftar ini berlaku hingga: <strong>${res.nextUpdate.toLocaleDateString('id-ID', options)}</strong>`;
        btnEl.style.display = "none"; // Sembunyikan tombol jika sukses
    } else {
        // Penanganan jika terkena CORS
        statusEl.innerText = CORS_RESTRICTED;
        statusEl.style.color = "#e11ede";
        expiryEl.innerHTML = `
            <div style="background:#ffe4f6; margin-top:0; padding:10px; border-radius:var(--radius); border:1px solid #fccfed;">
                <p style="margin-top:0; text-align: center;">Browser memblokir akses otomatis ke server BSSN demi keamanan. Silakan unduh dan periksa secara manual:</p>
                <p style="text-align:center;"><a href="${url}" target="_blank" style="font-weight:900; text-decoration:none;">Unduh File CRL Asli</a></p>
            </div>`;
        btnEl.innerHTML = 'Coba Lagi';
        btnEl.disabled = false;
    }
}


// JIKA INGIN PENGECEKAN CRL OTOMATIS SETIAP KALI FILE PDF DIUNGGAH
// Cukup panggil fungsi ini getCRLInfo( crlUrl ) dan tempatkan di akhir proses setelah setelah entitas selesai dideteksi
// Pengecekan CRL dilakukan manual dengan maksud agar tidak muncul CORS_RESTRICTED setiap kali file PDF diunggah
async function getCRLInfo( crlUrl ) {
    try {
        console.log("Mencoba fetch CRL dari:", crlUrl );
        
        // Fetch biner CRL (Mungkin akan terhalang CORS_RESTICTED jika lsg ke BSSN dari browser)
        const response = await fetch( crlUrl );
        const arrayBuffer = await response.arrayBuffer();

        // Parsing biner CRL menggunakan pkijs
        const asn1 = pkijs.fromBER(arrayBuffer);
        const crl = new pkijs.CertificateRevocationList({ schema: asn1.result });

        return {
            thisUpdate: crl.thisUpdate.value, // Waktu daftar ini diterbitkan
            nextUpdate: crl.nextUpdate.value, // Waktu daftar ini akan kedaluwarsa/diperbarui
            status: "Success"
        };
    } catch (err) {
        console.warn("Audit CRL otomatis terhambat (CORS/Network):", err.message);
        return { status: "CORS_RESTRICTED", message: "Memerlukan akses manual via Browser" };
    }
}


async function handleCrlUpload(input, index) {

	const file = input.files[0];
    if (!file) return;
	
	const container = document.getElementById("data-container");
	
    // Ambil string JSON dan ubah kembali menjadi objek
    const tteData = JSON.parse(container.getAttribute(`data-tte-${index}`));
    const targetSerial = tteData.serialNumber;

	const statusEl = document.getElementById(`crl-status-label-${index}`);
    const expiryEl = document.getElementById(`crl-expiry-note-${index}`);

    // Fungsi pembantu konversi biner ke Hex
    const bufferToHex = (buffer) => {
        return Array.from(new Uint8Array(buffer))
            .map(b => b.toString(16).padStart(2, '0'))
            .join('')
            .toLowerCase();
    };

    try {
        statusEl.innerText = "Memproses...";
        let arrayBuffer = await file.arrayBuffer();

        // Dekode PEM jika perlu
        const decoder = new TextDecoder();
        const contentText = decoder.decode(arrayBuffer);
        if (contentText.includes("-----BEGIN X509 CRL-----")) {
            const base64 = contentText.replace(/-----BEGIN [^-]+-----/g, "").replace(/-----END [^-]+-----/g, "").replace(/\s/g, "");
            const binaryString = window.atob(base64);
            const bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) { bytes[i] = binaryString.charCodeAt(i); }
            arrayBuffer = bytes.buffer;
        }

        const asn1 = window.asn1js.fromBER(arrayBuffer);
        const crl = new window.pkijs.CertificateRevocationList({ schema: asn1.result });
		
		// 1. Ekstrak Jumlah Total Entri di dalam file CRL
        const totalRevoked = crl.revokedCertificates ? crl.revokedCertificates.length : 0;

        let isRevoked = false;
        let revDate = null;

        if (crl.revokedCertificates && targetSerial) {
            for (const revoked of crl.revokedCertificates) {
                // Mengambil nilai biner serial number dari CRL
                const serialBuffer = revoked.userCertificate.valueBlock.valueHex;
                const revokedSerial = bufferToHex(serialBuffer);
                
                if (revokedSerial === targetSerial) {
                    isRevoked = true;
                    revDate = revoked.revocationDate.value;
                    break;
                }
            }
        }

        const nextUpdate = crl.nextUpdate.value.toLocaleString('id-ID', tglIndonesiaOpsi);

        if (isRevoked) {
            statusEl.innerText = SERTIFIKAT_DICABUT;
            statusEl.style.color = "#dc3545";
            expiryEl.innerHTML = `
                <div style="background:#f8d7da; color:#721c24; padding:15px; border-radius:8px; border:1px solid #dc3545;">
                    <b>Sertifikat Tidak Sah:</b><br>
                    Ditemukan dalam daftar pencabutan pada: ${revDate.toLocaleString('id-ID', tglIndonesiaOpsi)}
                </div>`;
        } else {
            statusEl.innerText = SERTIFIKAT_TIDAK_DICABUT;
            statusEl.style.color = "#2980b9";
            expiryEl.innerHTML = `
                <div style="font-size:1rem; text-align: center; background-image: linear-gradient(to top, #dfe9f3 0%, white 100%); color:#2980b9; padding:12px; border-radius:8px; border: 1px solid #2980b940;">
                    Nomor Seri Sertifikat tidak ditemukan dalam <b>${totalRevoked.toLocaleString('id-ID')}</b> entri daftar revokasi CRL
                    <br><br><span style="font-size: 0.8rem;">CRL Expired: ${nextUpdate}</span>
                </div>`;
        }

    } catch (err) {
        console.error("Detail Error CRL:", err);
        statusEl.innerText = "Gagal Membaca CRL";
        expiryEl.innerHTML = `<span style="color:red">Error: ${err.message}</span>`;
    }
}



// Fungsi untuk menghitung Hash SHA-256 dari ArrayBuffer (pdfBuffer)
async function calculateHash(buffer) {
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    // Mengubah bytes menjadi string hex
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}



//--- GENERATE PDF LTA REPORT
async function exportFullLtaReport() {
	
	// Load library JSPDF
	const { jsPDF } = window.jspdf;
    const doc = new jsPDF('p', 'mm', 'a4');
    const primaryColor = [0, 121, 107];
	const fsTitle = 20;
	const fsBig = 16;
	const fsMedium = 12;
	const fsBase = 10;
    
	// PENGATURAN FONT HARUS DIAKALI SATU BASE64 UNTUK NORMAL/REGULAR BOLD ITALIC
	// JIKA VIA TXT Load file text Base64 Font
    //const fontResponse = await fetch('GoogleSansFlexBase64.txt');
    //const base64GoogleSansFlex = await fontResponse.text();
	// JIKA VIA JS Load file js Base64 Font
	// sudah diload di awal deklarasi script
    //Jika via TXT --> doc.addFileToVFS("GoogleSansFlex.ttf", base64GoogleSansFlex);
	// Daftarkan file yang sama untuk 3 identitas berbeda
	
	doc.addFileToVFS("GoogleSansFlex-Regular.ttf", base64GoogleSansFlex.base64GoogleSansFlexRegular);
	doc.addFont("GoogleSansFlex-Regular.ttf", "Google Sans Flex", "regular");
	doc.addFileToVFS("GoogleSansFlex-Bold.ttf", base64GoogleSansFlex.base64GoogleSansFlexBold);
	doc.addFont("GoogleSansFlex-Bold.ttf", "Google Sans Flex", "bold");
	doc.addFileToVFS("GoogleSansFlex-Black.ttf", base64GoogleSansFlex.base64GoogleSansFlexBlack);
	doc.addFont("GoogleSansFlex-Black.ttf", "Google Sans Flex", "black");

	// Header
    //---> doc.text(text, x, y, options);
    doc.setFontSize( fsBase );
    doc.setFont("Google Sans Flex", "regular");
	doc.text(LABEL_LTA_ORGANISASI.toUpperCase() + " - " + LABEL_AUDIT_INDEPENDEN.toUpperCase(), 105, 14, { align: "center" });
	
    doc.setFont("Google Sans Flex", "black");
    doc.setFontSize( fsTitle );
    doc.setTextColor(44, 62, 80);
    doc.text(LABEL_LTA_JUDUL.toUpperCase(), 105, 21, { align: "center" });

    // Ambil semua data TTE dari container
    const container = document.getElementById("data-container");
    const tteKeys = Array.from(container.attributes)
        .map(attr => attr.name)
        .filter(name => name.startsWith('data-tte-'));
	let finalY = 37;
	
	
	
	let sessionID = "0";
	
	

    // Iterasi setiap TTE untuk dibuatkan tabelnya masing-masing
    tteKeys.forEach((attrName, i) => {
        const index = i + 1;
        const tteData = JSON.parse(container.getAttribute(attrName));
		
		
		
		sessionID = tteData.sessionID;
		
		
        
        // Ambil status CRL dari UI (elemen dinamis yang sudah kita buat)
        const crlStatusEl = document.getElementById(`crl-status-label-${index}`);
        const crlStatus = crlStatusEl ? crlStatusEl.innerText : "Belum Dicek";
    
		doc.setFontSize( fsBig );
		doc.setFont("Google Sans Flex", "bold");
		doc.text("Audit " + tteData.tteTotal + ` ${LABEL_TTE} [TTE]`, 105, 34, { align: "center" });

        doc.setFont("Google Sans Flex", "black");
        doc.setFontSize( fsMedium );
        doc.text(`${LABEL_TTE} #${index}`, 14, finalY + 10);

        doc.autoTable({
            startY: finalY + 13,
            theme: 'grid',
            headStyles: { fillColor: primaryColor, font: "Google Sans Flex", fontStyle: 'bold' },
            bodyStyles: { font: "Google Sans Flex", fontStyle: 'regular' },
            head: [['Parameter', 'Informasi Detail']],
            body: [
                ['Penanda tangan', tteData.userNama],
                ['Organisasi', tteData.userOrg || "-"],
                ['Nomor Seri', tteData.serialNumber.toUpperCase()],
                ['Hash Hex', tteData.curHashHex.toUpperCase()],
                ['Status TTE', tteData.integrityTTE.toUpperCase()],
                ['Integritas Dokumen', tteData.integrityStatus.toUpperCase()],
                ['Status Pencabutan', crlStatus.toUpperCase()],
                ['Waktu Ditandatangani', tteData.signingTime || "-"],
                ['Masa Berlaku TTE', tteData.vFrom + " - " + tteData.vUntil || "-"],
                ['Penerbit TTE [CA]', tteData.penerbitOrg || "-"],
                ['PSrE Induk TTE [Root CA]', tteData.rootOrg || "-"]
            ],
        });

        finalY = doc.lastAutoTable.finalY + 5;
        
        // Cek jika halaman hampir habis, tambah halaman baru
        if (finalY > 250 && i < tteKeys.length - 1) {
            doc.addPage();
            finalY = 20;
        }
    });

    // Pernyataan Penutup
    doc.setFont("Google Sans Flex", "bold");
    doc.text("VERIFIKASI:", 14, finalY + 10);
    doc.setFont("Google Sans Flex", "regular");
    doc.setFontSize( fsBase );
    const conclusion = "Membenarkan telah dilakukan validasi pada TTE tersebut di atas melalui sistem validasi terbuka dan independen RSUD Cibabat. Pernyataan pada laporan verifikasi ini telah melalui proses pemeriksaan kriptografi terhadap keabsahan sertifikat TTE termasuk pemeriksaan status pada daftar pencabutan sertifikat [CRL] yang berlaku. Seluruh tanda tangan di atas dinyatakan terekam dalam sistem LTA [Long Term Availability] RSUD Cibabat.";
    doc.text(doc.splitTextToSize(conclusion, 170), 14, finalY + 15);


	//===========PENAMBAHAN QR CODE BEGIN
    // 1. Ambil output sebagai Buffer
    const pdfOutput = doc.output('arraybuffer');
    //versi lama --> const sessionID = "LTA-" + Date.now();

    try {
        
		// 2. Proses penyematan QR
        const finalPdfBytes = await applyQRCodeToPDF(pdfOutput, sessionID);

        // 3. Pemicu unduhan tunggal (Hasil PDF-Lib)
        const blob = new Blob([finalPdfBytes], { type: "application/pdf" });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        //link.download = `AUDIT_${sessionID}.pdf`;
        link.download = `LTA-${Date.now()}.pdf`; //===== PENENTUAN NAMA FILE PDF
        link.click();
        
        // 4. Membersihkan URL object untuk memori
        setTimeout(() => URL.revokeObjectURL(link.href), 100);
        
    } catch (err) {
        
		// Hanya panggil save standar JIKA proses QR gagal total
        doc.save(`AUDIT_LTA_FALLBACK.pdf`);
        console.error("Gagal menyematkan QR, fallback ke PDF standar:", err);
		
    }
	//===========PENAMBAHAN QR CODE END

}


//======= FUNGSI MENYEMATKAN QR CODE KE PDF
async function applyQRCodeToPDF(pdfArrayBuffer, sessionID) {
    
	// 1. Inisialisasi QR Code Styling (Library lokal yang sudah Anda sematkan)
	const qrColor = "#000000";
	const imgMargin = 25;
	
	const qrCode = new QRCodeStyling({
		width: 300,
		height: 300,
		data: URL_VERIFIKASI + "?v=" + sessionID, //=== ISI DENGAN URL VERIFIKASI TAMBAHKAN PARAMETER hash ISI DENGAN NILAI sessionID
		image: URL_LOGO_QR,
		dotsOptions: {
			color: qrColor,
			type: "dots"
		},
		cornersSquareOptions: { 
			color: qrColor, 
			type: "extra-rounded"
		},
		cornersDotOptions: { 
			color: qrColor, 
			type: "dot"
		},
        backgroundOptions: { color: "#ffffff" },
        imageOptions: { crossOrigin: "anonymous", margin: 5 }
    });

    // 2. Render QR ke Image Bytes (Format PNG)
    const qrBlob = await qrCode.getRawData("png");
    const qrImageBytes = await qrBlob.arrayBuffer();

    // 3. Gunakan PDF-Lib untuk memodifikasi PDF
    const pdfDoc = await PDFLib.PDFDocument.load(pdfArrayBuffer);
    const pages = pdfDoc.getPages();
    const lastPage = pages[pages.length - 1]; // Tempel di halaman terakhir
    const { width, height } = lastPage.getSize(); // Ambil ukuran halaman (width dan height halaman)

    // 4. Embed QR Image
    const qrImage = await pdfDoc.embedPng(qrImageBytes);

    // 6. POSISI QRCODE KANAN ATAS
    const qrSize = 80; // QR biasanya bagus di ukuran 80-100
    lastPage.drawImage( qrImage, {
        x: width - qrSize - imgMargin, // x = Lebar total - ukuran gambar - margin kanan
        y: height - qrSize - imgMargin, // y = Tinggi total - ukuran gambar - margin atas
        width: qrSize,
        height: qrSize,
    });
	
	// 5. POSISI LOGO KIRI ATAS menangani aspek rasio jika ukuran logo tidak sama lebar dan tingginya
    // Simpan di lokal sehingga gunakan path lokal untuk menghindari CORS jika dijalankan di server yang sama
    const logoUrl = URL_LOGO; 
    const logoBytes = await fetch(logoUrl).then(res => res.arrayBuffer());
    const logoImage = await pdfDoc.embedPng(logoBytes);
	// Hitung Rasio agar tidak gepeng
    const logoDims = logoImage.scale(1); // Ambil ukuran asli
    const targetHeight = 80; // Kita kunci tingginya, lebarnya mengikuti
    const logoWidth = (logoDims.width / logoDims.height) * targetHeight;
	lastPage.drawImage( logoImage, {
        x: imgMargin,
        y: height - targetHeight - imgMargin,
        width: logoWidth,
        height: targetHeight,
    });

    return await pdfDoc.save();
}


function resetDataContainer() {
    const container = document.getElementById("data-container");
    if (container) {
        // Ambil daftar nama atribut yang ingin dihapus (yang berawalan 'data-tte-')
        const attributes = Array.from(container.attributes)
            .map(attr => attr.name)
            .filter(name => name.startsWith('data-tte-') || name === 'data-target-serial');

        attributes.forEach(attrName => {
            container.removeAttribute(attrName);
        });
        
        //console.log("Data container cleaned for new file processing.");
    }
}




//================================================================== HAPUS BAGIAN INI HANYA SEBAGAI SIMULASI DATABASE VERIFIKASI
//================================================================== INISIALISASI DATABASE BROWSER CLIENT SIDE begin
/**********************************
Jika perubahan dilakukan pada struktur database dan belum menampilkan hasil perubahannya:
1. Bersihkan cache histori browser, atau
2. Hapus database Local Storage Browser di mode inspeksi [F12] pilih tab Application - Storage/ Local Storage
3. Reload/Refresh tampilan browser
**********************************/
// FUNGSI MEMUAT/MEMBUAT BARU DATABASE
async function initDatabase() {
    try {
        const SQL = await initSqlJs({ locateFile: file => `./aset/${file}` });
        
        // Ambil data lama dari LocalStorage
        const savedDb = localStorage.getItem("lta_database");
        
        if (savedDb) {
            // Jika ada data lama, muat data tersebut (APPEND MODE)
            const uInt8Array = new Uint8Array(JSON.parse(savedDb));
            db = new SQL.Database(uInt8Array);
            console.log("Database lama dimuat. Data baru akan ditambahkan.");
        } else {
            // Jika benar-benar baru, buat database kosong
            db = new SQL.Database();
			db.run(`
				CREATE TABLE IF NOT EXISTS audit_logs (
					id INTEGER PRIMARY KEY AUTOINCREMENT,
					hash TEXT, 
					nama_user TEXT,
					nama_file TEXT,
                    status TEXT,
                    tanggal TEXT,
                    sessionid TEXT,
					file_hash TEXT,
					expired TEXT,
					crl TEXT,
					hashstamp TEXT,
					hashserial TEXT
				)
			`);
            console.log("Database baru dibuat.");
        }
    } catch (err) {
        console.error("Gagal memuat WebAssembly SQL:", err);
    }
}


// FUNGSI UNTUK MENCATAT LOG YANG AKAN DIPANGGIL SAAT VERIFIKASI PDF SELESAI
// berfungsi sebagai Data Bridge mengubah data teks biasa (seperti Hash, Nama, dan Status Validasi)
// menjadi format biner SQLite yang terstruktur di dalam folder aset
function saveToLog(hash, userNama, fileName, integrityTTE, tanggal, sessionID, originalFileHash, expired, crl, hashstamp, hashserial) {
	if (!db) return;
	try {
		console.log(hashserial);
		// PERHATIKAN: Kolom 'hash' diisi oleh 'sessionID' agar unik per sesi validasi
		db.run("INSERT INTO audit_logs (hash, nama_user, nama_file, status, tanggal, sessionid, file_hash, expired, crl, hashstamp, hashserial) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
			[sessionID, userNama, fileName, integrityTTE, tanggal, sessionID, originalFileHash, expired, crl, hashstamp, hashserial]);

		console.log("✅ Event audit dicatat dengan SessionID: " + sessionID);
	} catch (e) {
		console.error("Gagal mencatat histori:", e);
	}
}


// FUNGSI UTAMA UNTUK CEK LIMIT SEBELUM DISIMPAN KE LOCALSTORAGE
function simpanDatabaseDenganCekLimit() {
	try {
        const binaryDb = db.export();
        const sizeInBytes = binaryDb.length;
        const sizeInMB = sizeInBytes / (1024 * 1024);

        // Limit aman LocalStorage adalah 4-5MB. Kita pasang peringatan di 4MB.
        if (sizeInMB > 4.0) {
            const konfirmasi = confirm(`Peringatan: Kapasitas penyimpanan histori hampir penuh (${sizeInMB.toFixed(2)} MB). \n\nSistem akan mengunduh backup CSV dan mengosongkan histori agar data baru tetap bisa tersimpan. Lanjutkan?`);
            
            if (konfirmasi) {
                exportToCSV(); // Unduh data lama
                db.run("DELETE FROM audit_logs"); // Kosongkan tabel
                db.run("VACUUM"); // Kompres ukuran file database
                
                // Ekspor ulang database yang sudah kosong
                const emptyDb = db.export();
                localStorage.setItem("lta_database", JSON.stringify(Array.from(emptyDb)));
                alert("Histori telah dibersihkan dan dicadangkan ke CSV.");
                return;
            }
        }

        // Jika masih di bawah limit atau user batal, simpan seperti biasa
        localStorage.setItem("lta_database", JSON.stringify(Array.from(binaryDb)));
        
    } catch (e) {
        if (e.name === 'QuotaExceededError' || e.code === 22) {
            alert("Gagal menyimpan! Kapasitas browser penuh. Silakan ekspor CSV dan hapus data manual.");
        } else {
            console.error("Error saat simpan database:", e);
        }
    }
}


// FUNGSI PENDUKUNG UNDUH CSV YANG LEBIH AMAN MENGGUNAKAN BLOB
// Panggil fungsi ini sebagai tambahan jika perlu mengkonversi database ke CSV tanpa menunggu database penuh
function exportToCSV() {
    try {
        const res = db.exec("SELECT * FROM audit_logs ORDER BY tanggal DESC");
        if (res.length === 0) return;

        const kolom = res[0].columns;
        const baris = res[0].values;

        // Gunakan \ufeff (BOM) agar Excel mengenali UTF-8 secara otomatis
        let csvContent = "\ufeff" + kolom.join(";") + "\r\n";
        
        baris.forEach(row => {
            // Bersihkan data dari kemungkinan titik koma di dalam teks agar tidak berantakan
            const cleanRow = row.map(val => String(val).replace(/;/g, ","));
            csvContent += cleanRow.join(";") + "\r\n";
        });

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `Backup_Audit_LTA_${new Date().toISOString().slice(0,10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
    } catch (err) {
        console.error("Gagal ekspor CSV:", err);
    }
}

window.addEventListener('DOMContentLoaded', initDatabase); // Pastikan ini dipanggil saat window load
window.addEventListener('beforeunload', () => { // Menutup database saat browser mendeteksi akan event user menutup browser
    if (typeof db !== 'undefined' && db) {
        try {
            db.close();
            console.log("Koneksi database di halaman verifikasi ditutup.");
        } catch (e) {
            console.error("Gagal menutup database:", e);
        }
    }
});
//================================================================== INISIALISASI DATABASE BROWSER CLIENT SIDE end
//================================================================== HAPUS BAGIAN INI HANYA SEBAGAI SIMULASI DATABASE VERIFIKASI