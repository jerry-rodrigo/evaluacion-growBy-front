# AngularApp

# Proyecto de Frontend para Gestión de Clientes, Productos y Órdenes
Este es un proyecto de frontend desarrollado en Angular que permite la gestión de clientes, productos y órdenes. Incluye varias vistas y formularios para realizar operaciones CRUD y visualizar datos.


Antes de comenzar, asegúrate de tener instalado:

Node.js y npm
Angular CLI 15.2.7
Instalación

# Clona el repositorio en tu máquina local:

bash
git clone (https://github.com/jerry-rodrigo/evaluacion-growBy-front.git)

# Instala las dependencias del proyecto:

bash
npm install
Configuración

Este proyecto necesita una API de backend para funcionar correctamente. Configura el archivo environment.ts en la carpeta src/environments para incluir la URL base de la API:

# Ejecución
Para iniciar el servidor de desarrollo, usa el siguiente comando:

bash
ng serve
Luego, abre tu navegador y navega a http://localhost:4200 para ver la aplicación en funcionamiento.

# Estructura de Rutas
El proyecto cuenta con las siguientes rutas principales:

/dashboard: Muestra la vista principal del panel de control.
/clientes: Muestra la lista de clientes.
/clientes/crear: Formulario para crear un nuevo cliente.
/clientes/editar/:id: Formulario para editar un cliente existente.
/productos: Muestra la lista de productos.
/productos/crear: Formulario para crear un nuevo producto.
/productos/editar/:id: Formulario para editar un producto existente.
/ordenes: Muestra la lista de órdenes.
/ordenes/crear: Formulario para crear una nueva orden.
/ordenes/editar/:id: Formulario para editar una orden existente.

# Redirección por defecto: Si no se ingresa una ruta válida, se redirige a /clientes.

# Componentes Principales
# DashboardComponent
Descripción: Muestra una vista general del estado de la aplicación.

# ClienteListComponent y ClienteFormComponent
Descripción: Permiten listar, crear y editar clientes.

# ProductListComponent y ProductFormComponent
Descripción: Permiten listar, crear y editar productos.

# OrdenListComponent y OrdenFormComponent
Descripción: Permiten listar, crear y editar órdenes.
