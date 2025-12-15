
$(document).ready(function() {
    
    const STORAGE_KEY_BALANCE = 'walletBalance';
    const STORAGE_KEY_HISTORY = 'walletHistory';
    const INITIAL_BALANCE = 10000;
    const LOCALE = 'es-CL';

    function getBalance() {
        let balance = sessionStorage.getItem(STORAGE_KEY_BALANCE);
        if (balance === null) {
            balance = INITIAL_BALANCE;
            sessionStorage.setItem(STORAGE_KEY_BALANCE, balance.toFixed(2));
        }
        return parseFloat(balance);
    }
    
    function getHistory() {
        let history = sessionStorage.getItem(STORAGE_KEY_HISTORY);
        return history ? JSON.parse(history) : [];
    }

    function updateBalance(newBalance) {
        sessionStorage.setItem(STORAGE_KEY_BALANCE, newBalance.toFixed(2));
        $('#balance').text('$' + newBalance.toLocaleString(LOCALE, { minimumFractionDigits: 2 }));
    }

    function updateHistory(type, amount, currentBalance) {
        const history = getHistory();
        const date = new Date();
        
        const newTransaction = {
            type: type,
            amount: amount,
            date: date.toLocaleString(LOCALE),
            balanceAfter: currentBalance
        };
        
        history.unshift(newTransaction);
        
        sessionStorage.setItem(STORAGE_KEY_HISTORY, JSON.stringify(history));
        
        renderHistoryTable(history);
    }
    
    function renderHistoryTable(history) {
        const $tableBody = $('#transactionHistory');
        $tableBody.empty();

        if (history.length === 0) {
            $tableBody.append('<tr><td colspan="3" class="text-center text-muted">Aún no hay transacciones.</td></tr>');
            return;
        }

        history.forEach(tx => {
            const sign = tx.type === 'Depósito' ? '+' : '-';
            const itemClass = tx.type === 'Depósito' ? 'text-success' : 'text-danger';
            
            const row = `
                <tr>
                    <td><span class="badge ${tx.type === 'Depósito' ? 'badge-success' : 'badge-danger'}">${tx.type}</span></td>
                    <td class="text-right ${itemClass} font-weight-bold">${sign}$${tx.amount.toLocaleString(LOCALE, { minimumFractionDigits: 2 })}</td>
                    <td><small class="text-muted">${tx.date.split(',')[0]}</small></td>
                </tr>
            `;
            $tableBody.append(row);
        });
    }

    function showDynamicMessage(message, isSuccess = true) {
        const messageClass = isSuccess ? 'alert-success' : 'alert-danger';
        const $messageHtml = $(`<div class="alert ${messageClass} fade show" role="alert">${message}</div>`);

        $('#messageArea').empty().append($messageHtml);
        
        $messageHtml.delay(3000).fadeOut(400, function() {
            $(this).remove();
        });
    }

    if ($('#loginForm').length) {
        $('#loginForm').on('submit', function(event) {
            event.preventDefault();
            var username = $('#username').val().trim();
            var password = $('#password').val().trim();

            if (username === 'admin' && password === '12345') {
              
                sessionStorage.setItem('isLoggedIn', 'true');
                getBalance();
                window.location.href = 'wallet.html';
            } else {
                showDynamicMessage('❌ Usuario o contraseña inválida. Inténtalo de nuevo.', false);
            }
        });
    }
    
    if ($('#balance').length) {
        
        if (sessionStorage.getItem('isLoggedIn') !== 'true') {
            window.location.href = 'index.html';
            return;
        }
        
        updateBalance(getBalance());
        renderHistoryTable(getHistory());

        $('#logoutBtn').on('click', function() {
            sessionStorage.removeItem(STORAGE_KEY_BALANCE);
            sessionStorage.removeItem(STORAGE_KEY_HISTORY);
            sessionStorage.removeItem('isLoggedIn');
            window.location.href = 'index.html';
        });

        $('#depositBtn').on('click', function() {
            var amount = parseFloat($('#amount').val());
            
            if (isNaN(amount) || amount <= 0) {
                showDynamicMessage('❌ Monto de depósito inválido. Debe ser un número positivo.', false);
                return;
            }
            
            let currentBalance = getBalance();
            let newBalance = currentBalance + amount;
            
            updateBalance(newBalance);
            updateHistory('Depósito', amount, newBalance);
            
            $('#amount').val('');
            showDynamicMessage(`✅ Depósito de $${amount.toFixed(2)} realizado con éxito.`, true);
        });

        $('#withdrawBtn').on('click', function() {
            var amount = parseFloat($('#amount').val());
            var currentBalance = getBalance();

            if (isNaN(amount) || amount <= 0) {
                showDynamicMessage('❌ Monto de retiro inválido. Debe ser un número positivo.', false);
                return;
            }

            if (amount > currentBalance) {
                showDynamicMessage('⛔ Saldo insuficiente. El monto excede su balance actual.', false);
                return;
            }

            let newBalance = currentBalance - amount;
            
            updateBalance(newBalance);
            updateHistory('Retiro', amount, newBalance);

            $('#amount').val('');
            showDynamicMessage(`💸 Retiro de $${amount.toFixed(2)} realizado con éxito.`, true);
        });
    }
});