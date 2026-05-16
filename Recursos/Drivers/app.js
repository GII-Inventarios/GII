// 🔹 IMPORTAR FIREBASE (OBLIGATORIO)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";

// 🔹 CONFIGURACIÓN DE FIREBASE (LA TUYA)
const firebaseConfig = {
  apiKey: "AIzaSyBDGiW7dmnu0TKgLkJa04zKoH0dyxV60NM",
  authDomain: "inventarios-5d199.firebaseapp.com",
  databaseURL: "https://inventarios-5d199-default-rtdb.firebaseio.com",
  projectId: "inventarios-5d199",
  storageBucket: "inventarios-5d199.firebasestorage.app",
  messagingSenderId: "140811884259",
  appId: "1:140811884259:web:8e4ae4ecb760657779756"
};

// 🔹 INICIALIZAR
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// 🔹 ELEMENTOS
const form = document.getElementById("form");
const titulo = document.getElementById("titulo");

// 🔹 TÍTULO DINÁMICO
if (titulo) {
    titulo.innerText = "Registro de " + config.tipo;
}

// 🔹 FORM DINÁMICO
if (form) {
    config.campos.forEach(campo => {
        const div = document.createElement("div");
        div.innerHTML = `
            <label>${campo.label}</label>
            <input type="${campo.type}" name="${campo.name}" />
        `;
        form.appendChild(div);
    });
}

// ✅ GUARDAR EN FIREBASE
function guardar() {
    let data = {};

    config.campos.forEach(campo => {
        const value = document.querySelector(`[name="${campo.name}"]`).value;
        data[campo.name] = value;
    });

    push(ref(db, config.tipo), data);

    alert("Guardado correctamente");
    window.location.href = "index.html";
}

// ✅ LISTAR DESDE FIREBASE (TABLA)
if (document.getElementById("tbody")) {

    const tbody = document.getElementById("tbody");

    onValue(ref(db, config.tipo), (snapshot) => {
        tbody.innerHTML = "";

        if (!snapshot.exists()) {
            tbody.innerHTML = `<tr><td colspan="100%">No hay registros</td></tr>`;
            return;
        }

        snapshot.forEach(child => {
            let item = child.val();

            let tr = document.createElement("tr");

            config.campos.forEach(campo => {
                let td = document.createElement("td");
                td.innerText = item[campo.name] || "";
                tr.appendChild(td);
            });

            tbody.appendChild(tr);
        });
    });
}

// 🔐 LOGOUT (igual que antes)
function logout() {
    window.location.href = "login.html";
}
