const CREDENCIALES_FIJAS = {
    email: "admin@alke.cl",
    password: "1234"
};

const CONTACTS_LIST = [
    { label: "Chico Trujillo (Amigo)", value: "chico.trujillo@contacto.cl" },
    { label: "María Lola (Trabajo)", value: "maria.lola@empresa.cl" },
    { label: "Luisito Comunica (Familiar)", value: "luisito.comunica@familiar.cl" },
    { label: "Cuenta Propia (Ahorro)", value: "otra.cuenta@alke.cl" }
];

function getBalance() {
    let saldo = sessionStorage.getItem("userBalance");
    if (!saldo) {
        saldo = 1500000;
        sessionStorage.setItem("userBalance", saldo);
    }
    return parseFloat(saldo);
}

function updateBalance(newBalance) {
    sessionStorage.setItem("userBalance", newBalance);
}

function formatToCLP(amount) {
    return amount.toLocaleString("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0
    });
}

function getTransactions() {
    const data = sessionStorage.getItem("transactions");

    if (!data) {
        const initial = [
            {
                date: new Date().toLocaleDateString("es-CL"),
                type: "Inicial",
                description: "Saldo inicial de la cuenta",
                amount: 1500000
            }
        ];
        sessionStorage.setItem("transactions", JSON.stringify(initial));
        return initial;
    }

    return JSON.parse(data);
}

function addTransaction(type, description, amount) {
    const tx = getTransactions();
    tx.unshift({
        date: new Date().toLocaleDateString("es-CL"),
        type,
        description,
        amount
    });
    sessionStorage.setItem("transactions", JSON.stringify(tx));
}

$(document).ready(function () {

    const currentPage = window.location.pathname.split("/").pop() || "index.html"; 
    
    // === LOGIN (index.html) ===
    if (currentPage === "index.html") { 
        
        if (sessionStorage.getItem("isLoggedIn")) {
            window.location.href = "menu.html"; 
            return;
        }

        $("#loginForm").on("submit", function (e) {
            e.preventDefault();

            const email = $("#emailInput").val().trim();
            const pass = $("#passwordInput").val().trim();
            const $loginMsg = $("#loginMessage"); 

            if (email === CREDENCIALES_FIJAS.email && pass === CREDENCIALES_FIJAS.password) {

                sessionStorage.setItem("isLoggedIn", "true"); 
                $loginMsg.hide();

                getBalance();
                
                window.location.href = "menu.html"; 
            } else {
                $("#passwordInput").val("");
                $loginMsg.html(`Datos de acceso incorrectos.`).show(); 
            }
        });
    }

    if (sessionStorage.getItem("isLoggedIn")) {

        $("#logoutBtn").on("click", function () {
            sessionStorage.removeItem("isLoggedIn");
            sessionStorage.clear();
            window.location.href = "index.html";
        });
    } else if (currentPage !== "index.html") {
        window.location.href = "index.html"; 
        return;
    }

    // 1. MENU.HTML (Dashboard)
    if (currentPage === "menu.html") {
        // Mostrar saldo actual
        $("#currentBalance").text(formatToCLP(getBalance()));

        const ultimas = getTransactions().slice(0, 3);
        const $list = $("#recentTransactions").empty();

        if (ultimas.length === 0) {
            $list.append(`<li class="transaction-item text-muted">Aún no hay transacciones recientes para mostrar.</li>`);
        } else {
            ultimas.forEach(tx => {
                const color = tx.amount >= 0 ? "text-success" : "text-danger";
                const signo = tx.amount >= 0 ? "+" : "";
                
                $list.append(`
                    <li class="transaction-item">
                        <div>
                            <span class="transaction-type">${tx.type}</span>
                            ${tx.description}
                        </div>
                        <span class="transaction-amount ${color}">${signo}${formatToCLP(Math.abs(tx.amount))}</span>
                    </li>
                `);
            });
        }
    }

    // 2. DEPOSIT.HTML
    if (currentPage === "deposit.html") {
        
        $("#balanceDisplayDeposit").text(formatToCLP(getBalance()));

        $("#depositForm").on("submit", function (e) {
            e.preventDefault();

            const amount = parseFloat($("#depositAmount").val());
            const $msg = $("#depositMessage");

            if (isNaN(amount) || amount < 1000) {
                $msg.html(`<div class="alert-danger">El monto mínimo es ${formatToCLP(1000)}.</div>`);
                return;
            }

            const balance = getBalance() + amount;

            updateBalance(balance);
            addTransaction("Depósito", `Depósito de fondos`, amount);

            $("#balanceDisplayDeposit").text(formatToCLP(balance));
            $msg.html(`<div class="alert-success">Depositados ${formatToCLP(amount)} correctamente.</div>`);

            $("#depositAmount").val("");
        });
    }

    // 3. SENDMONEY.HTML
    if (currentPage === "sendmoney.html") {
        
        if (typeof $.ui !== 'undefined' && $.ui.autocomplete) {
            $("#recipientEmail").autocomplete({
                source: CONTACTS_LIST.map(c => c.value),
                minLength: 0
            });
        }

        $("#balanceDisplaySend").text(formatToCLP(getBalance()));

        $("#transferForm").on("submit", function (e) {
            e.preventDefault();

            const email = $("#recipientEmail").val().trim();
            const amount = parseFloat($("#transferAmount").val());
            const balance = getBalance();
            const $msg = $("#transferMessage");

            if (!email.includes("@")) {
                $msg.html(`<div class="alert-danger">Correo del destinatario inválido.</div>`);
                return;
            }
            if (isNaN(amount) || amount < 1000) {
                $msg.html(`<div class="alert-danger">Monto mínimo ${formatToCLP(1000)}.</div>`);
                return;
            }
            if (amount > balance) {
                $msg.html(`<div class="alert-danger">Saldo insuficiente. Disponible: ${formatToCLP(balance)}.</div>`);
                return;
            }

            const newBalance = balance - amount;

            updateBalance(newBalance);
            addTransaction("Transferencia", `Transferencia a ${email}`, -amount);

            $("#balanceDisplaySend").text(formatToCLP(newBalance));
            $msg.html(`<div class="alert-success">Transferidos ${formatToCLP(amount)} a ${email}.</div>`);

            $("#recipientEmail").val("");
            $("#transferAmount").val("");
        });
    }

    // 4. TRANSACTIONS.HTML (Movimientos)
    if (currentPage === "transactions.html") {

        $("#balanceDisplayTransactions").text(formatToCLP(getBalance())); 

        const txs = getTransactions();
        const $tbody = $("#transactionsTableBody").empty();

        if (txs.length === 0) {
            $tbody.append(`<tr><td colspan="4" style="text-align:center; color:#c7c7c7;">Sin transacciones.</td></tr>`);
            return;
        }

        txs.forEach(tx => {
            const color = tx.amount >= 0 ? "text-success" : "text-danger";
            const signo = tx.amount >= 0 ? "+" : "";
            
            $tbody.append(`
                <tr>
                    <td>${tx.date}</td>
                    <td><span class="transaction-type">${tx.type}</span></td>
                    <td>${tx.description}</td>
                    <td style="text-align:right;" class="${color}">${signo}${formatToCLP(Math.abs(tx.amount))}</td>
                </tr>
            `);
        });
    }

});