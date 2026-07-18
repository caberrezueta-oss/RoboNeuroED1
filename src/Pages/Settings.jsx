import Navbar from "../components/Navbar";

import {
  FaCog,
  FaBell,
  FaRobot,
  FaPalette,
  FaUserCog,
  FaVolumeUp,
  FaWifi,
  FaMoon
} from "react-icons/fa";

function Settings() {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-8">

        {/* HEADER */}
        <div className="mb-10">

          <h1 className="text-4xl font-bold text-gray-800">
            Configuración del Sistema
          </h1>

          <p className="text-gray-500 mt-2">
            Personalización y administración de la plataforma
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {/* TARJETA 1 */}
          <div className="bg-white rounded-3xl shadow-md p-8 hover:scale-105 transition-all">

            <div className="bg-purple-100 w-fit p-5 rounded-2xl mb-6">

              <FaUserCog className="text-4xl text-purple-600" />

            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              Preferencias de Usuario
            </h2>

            <p className="text-gray-500 mt-3">
              Configura idioma, perfil y preferencias del sistema.
            </p>

            <button className="mt-8 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all">

              Configurar

            </button>

          </div>

          {/* TARJETA 2 */}
          <div className="bg-white rounded-3xl shadow-md p-8 hover:scale-105 transition-all">

            <div className="bg-blue-100 w-fit p-5 rounded-2xl mb-6">

              <FaRobot className="text-4xl text-blue-600" />

            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              Configuración del Robot
            </h2>

            <p className="text-gray-500 mt-3">
              Administra sensores, pantalla y conexión del robot.
            </p>

            <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all">

              Administrar

            </button>

          </div>

          {/* TARJETA 3 */}
          <div className="bg-white rounded-3xl shadow-md p-8 hover:scale-105 transition-all">

            <div className="bg-orange-100 w-fit p-5 rounded-2xl mb-6">

              <FaBell className="text-4xl text-orange-500" />

            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              Notificaciones
            </h2>

            <p className="text-gray-500 mt-3">
              Controla alertas y recordatorios del sistema.
            </p>

            <button className="mt-8 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-2xl font-semibold transition-all">

              Ajustar

            </button>

          </div>

          {/* TARJETA 4 */}
          <div className="bg-white rounded-3xl shadow-md p-8 hover:scale-105 transition-all">

            <div className="bg-pink-100 w-fit p-5 rounded-2xl mb-6">

              <FaPalette className="text-4xl text-pink-500" />

            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              Accesibilidad
            </h2>

            <p className="text-gray-500 mt-3">
              Opciones visuales y de inclusión educativa.
            </p>

            <button className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-2xl font-semibold transition-all">

              Personalizar

            </button>

          </div>

          {/* TARJETA 5 */}
          <div className="bg-white rounded-3xl shadow-md p-8 hover:scale-105 transition-all">

            <div className="bg-green-100 w-fit p-5 rounded-2xl mb-6">

              <FaWifi className="text-4xl text-green-600" />

            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              Conectividad
            </h2>

            <p className="text-gray-500 mt-3">
              Estado WiFi y sincronización con el robot ESP32.
            </p>

            <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all">

              Revisar

            </button>

          </div>

          {/* TARJETA 6 */}
          <div className="bg-white rounded-3xl shadow-md p-8 hover:scale-105 transition-all">

            <div className="bg-gray-200 w-fit p-5 rounded-2xl mb-6">

              <FaMoon className="text-4xl text-gray-700" />

            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              Apariencia
            </h2>

            <p className="text-gray-500 mt-3">
              Cambia el tema visual y colores de la plataforma.
            </p>

            <button className="mt-8 bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-2xl font-semibold transition-all">

              Cambiar

            </button>

          </div>

        </div>

        {/* PANEL INFERIOR */}
        <div className="bg-white rounded-3xl shadow-md p-8 mt-10">

          <div className="flex items-center gap-4 mb-6">

            <FaCog className="text-4xl text-purple-600" />

            <h2 className="text-3xl font-bold">
              Estado General del Sistema
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-gray-100 rounded-2xl p-6">

              <h3 className="text-xl font-bold text-gray-700">
                Servidor
              </h3>

              <p className="text-green-600 text-2xl font-bold mt-3">
                Online
              </p>

            </div>

            <div className="bg-gray-100 rounded-2xl p-6">

              <h3 className="text-xl font-bold text-gray-700">
                Base de Datos
              </h3>

              <p className="text-green-600 text-2xl font-bold mt-3">
                Conectada
              </p>

            </div>

            <div className="bg-gray-100 rounded-2xl p-6">

              <h3 className="text-xl font-bold text-gray-700">
                Robot ESP32
              </h3>

              <p className="text-yellow-500 text-2xl font-bold mt-3">
                En Espera
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Settings;