# fsp20255

# 🏦 Alke Wallet (Billetera Digital)

Este proyecto simula la interfaz y las funcionalidades básicas de una billetera digital (Wallet) utilizando **HTML, CSS** y **JavaScript (JQuery)**. El objetivo principal fue crear una experiencia de usuario moderna y consistente, implementando la lógica de control de saldo y registro de transacciones.

## ✨ Características Implementadas

* **Tema Oscuro:** Diseño visual completo en modo oscuro (`wallet-theme.css`) aplicado consistentemente en todas las vistas.
* **Control de Sesión:** Implementación básica de Login/Logout y restricción de acceso a vistas sin autenticación mediante `sessionStorage`.
* **Gestión de Saldo y Persistencia:** El saldo (`$1.500.000` inicial) se gestiona y actualiza a través de `sessionStorage`, manteniéndose entre páginas.
* **Registro de Transacciones:** Se registran movimientos de **Depósito** y **Transferencia**, incluyendo la fecha y el tipo de operación.
* **Formato de Moneda:** Uso de la función `formatToCLP` para asegurar que todos los montos se muestren consistentemente en formato de peso chileno.
* **Estructura Unificada:** Se unificaron las rutas de CSS y JS en todos los archivos HTML (`index.html`, `menu.html`, `deposit.html`, `sendmoney.html`, `transactions.html`).

## 🚀 Cómo Empezar

Para ver el proyecto en funcionamiento, simplemente clona el repositorio y abre el archivo `index.html` en cualquier navegador web.

### 🔑 Credenciales de Acceso

| Campo | Valor |
| :--- | :--- |
| **Email** | `admin@alke.cl` |
| **Contraseña** | `1234` |

## 🛠️ Estructura del Proyecto

alke-wallet/ ├── assets/ │ ├── css/ │ │ └── wallet-theme.css # Estilos CSS unificados │ └── js/ │ └── app.js # Lógica JavaScript (Gestión de Saldo/Transacciones con JQuery) ├── deposit.html # Vista: Depositar Dinero ├── index.html # Vista: Login (Inicio de sesión) ├── menu.html # Vista: Dashboard / Menú Principal ├── sendmoney.html # Vista: Enviar/Transferir Dinero ├── transactions.html # Vista: Historial de Movimientos └── README.md # Documentación del proyecto

## 📝 Resumen del Proceso de Desarrollo

| Etapa | Descripción Concisa del Trabajo |
| :--- | :--- |
| **Configuración** | Migración y unificación de rutas de archivos (`estilo.css` a `wallet-theme.css`, `index.html` a Login, `menu.html` a Dashboard). |
| **Lógica** | Implementación de las funciones de gestión de `sessionStorage` para mantener la sesión, saldo y transacciones a lo largo de las vistas. |
| **Diseño Base** | Aplicación del Tema Oscuro completo en el CSS, definiendo paletas de colores de fondo, texto y elementos de interfaz. |
| **UX/UI Final** | Corrección de espaciados (`padding`) y márgenes en los elementos de transacciones y montos para mejorar la legibilidad y la estética final del tema oscuro. |
| **Sincronización** | Ajuste final de IDs en todos los HTML para asegurar la correcta comunicación y manipulación del DOM por parte de `app.js`. |
