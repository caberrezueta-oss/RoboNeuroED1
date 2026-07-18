import { useState } from "react";

import Navbar from "../components/Navbar";

import {
  FaPlay,
  FaClock,
  FaBrain,
  FaUserGraduate,
  FaCalendarAlt,
  FaBookOpen
} from "react-icons/fa";

function Sessions() {

  // ESTUDIANTES
  const students = [
    "María González",
    "Carlos Rodríguez",
    "Luis Pérez",
    "Ana Torres"
  ];

  // FORMULARIO
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [topic, setTopic] = useState("");
  const [date, setDate] = useState("");
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");
  const [mode, setMode] = useState("Hoy");

  // SESIONES
  const [sessions, setSessions] = useState([
    {
      student: "María González",
      topic: "Matemáticas básicas",
      date: "2026-05-13",
      startHour: "14:00",
      endHour: "15:00",
      mode: "Hoy"
    }
  ]);

  // CREAR SESION
  const createSession = () => {

    if (
      !student ||
      !topic ||
      !date ||
      !startHour ||
      !endHour
    ) {
      return;
    }

    const newSession = {
      student,
      topic,
      date,
      startHour,
      endHour,
      mode
    };

    setSessions([newSession, ...sessions]);

    // LIMPIAR
    setStudent("");
    setTopic("");
    setDate("");
    setStartHour("");
    setEndHour("");
    setMode("Hoy");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-8">

        {/* HEADER */}
        <div className="mb-10">

          <h1 className="text-4xl font-bold text-gray-800">
            Gestión de Sesiones
          </h1>

          <p className="text-gray-500 mt-2">
            Planificación y monitoreo pedagógico
          </p>

        </div>

        {/* TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">

          {/* SESIONES */}
          <div className="bg-white rounded-3xl shadow-md p-6">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">
                  Sesiones Totales
                </p>

                <h2 className="text-5xl font-bold mt-4">
                  {sessions.length}
                </h2>

              </div>

              <FaClock className="text-5xl text-blue-500" />

            </div>

          </div>

          {/* ATENCION */}
          <div className="bg-white rounded-3xl shadow-md p-6">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">
                  Atención Promedio
                </p>

                <h2 className="text-5xl font-bold mt-4">
                  78%
                </h2>

              </div>

              <FaBrain className="text-5xl text-purple-500" />

            </div>

          </div>

          {/* ESTUDIANTES */}
          <div className="bg-white rounded-3xl shadow-md p-6">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">
                  Estudiantes Activos
                </p>

                <h2 className="text-5xl font-bold mt-4">
                  {students.length}
                </h2>

              </div>

              <FaUserGraduate className="text-5xl text-green-500" />

            </div>

          </div>

          {/* HORAS */}
          <div className="bg-white rounded-3xl shadow-md p-6">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">
                  Horas de Uso
                </p>

                <h2 className="text-5xl font-bold mt-4">
                  42h
                </h2>

              </div>

              <FaPlay className="text-5xl text-orange-500" />

            </div>

          </div>

        </div>

        {/* FORMULARIO */}
        <div className="bg-white rounded-3xl shadow-md p-8 mb-10">

          <h2 className="text-3xl font-bold mb-8">
            Registrar Nueva Sesión
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* ESTUDIANTE */}
            <div>

              <label className="font-semibold block mb-3">
                Estudiante
              </label>

              <select
                value={student}
                onChange={(e) => setStudent(e.target.value)}
                className="w-full border border-gray-300 rounded-2xl p-4"
              >

                <option value="">
                  Seleccionar estudiante
                </option>

                {students.map((student, index) => (

                  <option key={index} value={student}>
                    {student}
                  </option>

                ))}

              </select>

            </div>

            {/* TEMA */}
            <div>

              <label className="font-semibold block mb-3">
                Tema
              </label>

              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Ej: Matemáticas básicas"
                className="w-full border border-gray-300 rounded-2xl p-4"
              />

            </div>

            {/* FECHA */}
            <div>

              <label className="font-semibold block mb-3">
                Fecha
              </label>

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border border-gray-300 rounded-2xl p-4"
              />

            </div>

            {/* HORA INICIO */}
            <div>

              <label className="font-semibold block mb-3">
                Hora Inicio
              </label>

              <input
                type="time"
                value={startHour}
                onChange={(e) => setStartHour(e.target.value)}
                className="w-full border border-gray-300 rounded-2xl p-4"
              />

            </div>

            {/* HORA FIN */}
            <div>

              <label className="font-semibold block mb-3">
                Hora Fin
              </label>

              <input
                type="time"
                value={endHour}
                onChange={(e) => setEndHour(e.target.value)}
                className="w-full border border-gray-300 rounded-2xl p-4"
              />

            </div>

            {/* PROGRAMACION */}
            <div>

              <label className="font-semibold block mb-3">
                Tipo de Sesión
              </label>

              <select
                value={mode}
                onChange={(e) => setMode(e.target.value)}
                className="w-full border border-gray-300 rounded-2xl p-4"
              >

                <option value="Hoy">
                  Realizar Hoy
                </option>

                <option value="Programada">
                  Programar para otro día
                </option>

              </select>

            </div>

          </div>

          {/* BOTON */}
          <button
            onClick={createSession}
            className="mt-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-[1.02] transition-all text-white px-8 py-5 rounded-2xl text-xl font-bold"
          >

            Registrar Sesión

          </button>

        </div>

        {/* HISTORIAL */}
        <div className="bg-white rounded-3xl shadow-md p-8">

          <h2 className="text-3xl font-bold mb-8">
            Próximas y Recientes Sesiones
          </h2>

          <div className="space-y-6">

            {sessions.map((session, index) => (

              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200"
              >

                <div className="flex flex-col xl:flex-row xl:justify-between gap-6">

                  {/* INFO */}
                  <div>

                    <h3 className="text-2xl font-bold text-gray-800">

                      {session.student}

                    </h3>

                    <div className="flex items-center gap-3 mt-4">

                      <FaBookOpen className="text-purple-600" />

                      <p className="text-gray-600">
                        Tema: {session.topic}
                      </p>

                    </div>

                    <div className="flex items-center gap-3 mt-3">

                      <FaCalendarAlt className="text-blue-500" />

                      <p className="text-gray-600">
                        Fecha: {session.date}
                      </p>

                    </div>

                    <div className="flex items-center gap-3 mt-3">

                      <FaClock className="text-orange-500" />

                      <p className="text-gray-600">
                        {session.startHour} - {session.endHour}
                      </p>

                    </div>

                  </div>

                  {/* ESTADO */}
                  <div className="flex flex-col items-start xl:items-end">

                    <span className="
                      bg-purple-100
                      text-purple-600
                      px-5
                      py-3
                      rounded-2xl
                      font-semibold
                    ">

                      {session.mode}

                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default Sessions;