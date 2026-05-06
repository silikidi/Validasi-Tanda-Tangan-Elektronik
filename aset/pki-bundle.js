// pki-bundle.js
import * as asn1js from "asn1js";
import * as pkijs from "pkijs";

window.asn1js = asn1js;
window.pkijs = pkijs;

// Inisialisasi Engine langsung di dalam bundle agar lebih praktis
const crypto = window.crypto || window.msCrypto;
pkijs.setEngine(
    "browserEngine", 
    crypto, 
    new pkijs.CryptoEngine({ name: "browserEngine", crypto, subtle: crypto.subtle })
);