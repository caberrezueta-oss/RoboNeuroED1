import Navbar from "../components/Navbar";

import {
  FaUsers,
  FaBrain,
  FaRobot,
  FaHeartbeat
} from "react-icons/fa";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-8">

        {/* TITULO */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            Dashboard Pedagógico
          </h1>

          <p className="text-gray-500 mt-2">
            Monitoreo del sistema educativo robótico
          </p>
        </div>

        {/* TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

          {/* CARD 1 */}
          <div className="bg-white rounded-3xl shadow-md p-6 border-l-4 border-blue-500">

            <div className="flex justify-between items-center">

              <div>
                <p className="text-gray-500">
                  Estudiantes Activos
                </p>

                <h2 className="text-5xl font-bold mt-4">
                  24
                </h2>

                <p className="text-green-500 mt-3">
                  +12% esta semana
                </p>
              </div>

              <FaUsers className="text-5xl text-blue-500" />
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-3xl shadow-md p-6 border-l-4 border-purple-500">

            <div className="flex justify-between items-center">

              <div>
                <p className="text-gray-500">
                  Atención Promedio
                </p>

                <h2 className="text-5xl font-bold mt-4">
                  87%
                </h2>

                <p className="text-green-500 mt-3">
                  +5% esta semana
                </p>
              </div>

              <FaBrain className="text-5xl text-purple-500" />
            </div>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-3xl shadow-md p-6 border-l-4 border-green-500">

            <div className="flex justify-between items-center">

              <div>
                <p className="text-gray-500">
                  Estado del Robot
                </p>

                <h2 className="text-5xl font-bold mt-4 text-green-600">
                  Activo
                </h2>

                <p className="text-green-500 mt-3">
                  Batería 85%
                </p>
              </div>

              <FaRobot className="text-5xl text-green-500" />
            </div>
          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-3xl shadow-md p-6 border-l-4 border-orange-500">

            <div className="flex justify-between items-center">

              <div>
                <p className="text-gray-500">
                  Sesiones Hoy
                </p>

                <h2 className="text-5xl font-bold mt-4">
                  16
                </h2>

                <p className="text-green-500 mt-3">
                  +3 vs ayer
                </p>
              </div>

              <FaHeartbeat className="text-5xl text-orange-500" />
            </div>
          </div>

        </div>

        {/* GRAFICO SIMULADO */}
        <div className="bg-white rounded-3xl shadow-md p-8 mt-10">

          <h2 className="text-3xl font-bold mb-8">
            Progreso por Estudiante
          </h2>

          <div className="flex items-end gap-6 h-80">

            <div className="bg-green-500 w-20 h-64 rounded-t-xl"></div>

            <div className="bg-green-500 w-20 h-56 rounded-t-xl"></div>

            <div className="bg-green-500 w-20 h-60 rounded-t-xl"></div>

            <div className="bg-green-500 w-20 h-72 rounded-t-xl"></div>

            <div className="bg-green-500 w-20 h-48 rounded-t-xl"></div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;