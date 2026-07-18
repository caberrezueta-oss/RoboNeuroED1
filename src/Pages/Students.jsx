import { useState } from "react";

import Navbar from "../components/Navbar";

import {
  FaUserGraduate,
  FaPlus,
  FaBrain,
  FaSearch,
  FaChild
} from "react-icons/fa";

function Students() {

  // FORMULARIO
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [hyperactivity, setHyperactivity] = useState("");

  // ESTUDIANTES
  const [students, setStudents] = useState([
    {
      name: "María",
      lastname: "González",
      age: 5,
      hyperactivity: "Moderado"
    },

    {
      name: "Carlos",
      lastname: "Rodríguez",
      age: 6,
      hyperactivity: "Alto"
    }
  ]);

  // REGISTRAR ESTUDIANTE
  const registerStudent = () => {

    if (
      !name ||
      !lastname ||
      !age ||
      !hyperactivity
    ) {
      return;
    }

    const newStudent = {
      name,
      lastname,
      age,
      hyperactivity
    };

    setStudents([newStudent, ...students]);

    // LIMPIAR
    setName("");
    setLastname("");
    setAge("");
    setHyperactivity("");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-8">

        {/* HEADER */}
        <div className="mb-10">

          <h1 className="text-4xl font-bold text-gray-800">
            Gestión de Estudiantes
          </h1>

          <p className="text-gray-500 mt-2">
            Registro y monitoreo pedagógico
          </p>

        </div>

        {/* TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

          {/* TOTAL */}
          <div className="bg-white rounded-3xl shadow-md p-6">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">
                  Estudiantes Registrados
                </p>

                <h2 className="text-5xl font-bold mt-4">
                  {students.length}
                </h2>

              </div>

              <FaUserGraduate className="text-5xl text-purple-600" />

            </div>

          </div>

          {/* TDAH */}
          <div className="bg-white rounded-3xl shadow-md p-6">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">
                  Seguimiento Activo
                </p>

                <h2 className="text-5xl font-bold mt-4">
                  100%
                </h2>

              </div>

              <FaBrain className="text-5xl text-blue-500" />

            </div>

          </div>

          {/* EDAD */}
          <div className="bg-white rounded-3xl shadow-md p-6">

            <div className="flex justify-between items-center">

              <div>

                <p className="text-gray-500">
                  Edad Promedio
                </p>

                <h2 className="text-5xl font-bold mt-4">
                  5 años
                </h2>

              </div>

              <FaChild className="text-5xl text-green-500" />

            </div>

          </div>

        </div>

        {/* FORMULARIO */}
        <div className="bg-white rounded-3xl shadow-md p-8 mb-10">

          <div className="flex items-center gap-4 mb-8">

            <FaPlus className="text-3xl text-purple-600" />

            <h2 className="text-3xl font-bold">
              Registrar Estudiante
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* NOMBRES */}
            <div>

              <label className="font-semibold block mb-3">
                Nombres
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej: María"
                className="w-full border border-gray-300 rounded-2xl p-4"
              />

            </div>

            {/* APELLIDOS */}
            <div>

              <label className="font-semibold block mb-3">
                Apellidos
              </label>

              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                placeholder="Ej: González"
                className="w-full border border-gray-300 rounded-2xl p-4"
              />

            </div>

            {/* EDAD */}
            <div>

              <label className="font-semibold block mb-3">
                Edad
              </label>

              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Ej: 5"
                className="w-full border border-gray-300 rounded-2xl p-4"
              />

            </div>

            {/* HIPERACTIVIDAD */}
            <div>

              <label className="font-semibold block mb-3">
                Nivel de Hiperactividad
              </label>

              <select
                value={hyperactivity}
                onChange={(e) =>
                  setHyperactivity(e.target.value)
                }
                className="w-full border border-gray-300 rounded-2xl p-4"
              >

                <option value="">
                  Seleccionar nivel
                </option>

                <option value="Bajo">
                  Bajo
                </option>

                <option value="Moderado">
                  Moderado
                </option>

                <option value="Alto">
                  Alto
                </option>

              </select>

            </div>

          </div>

          {/* BOTON */}
          <button
            onClick={registerStudent}
            className="
              mt-8
              bg-gradient-to-r
              from-purple-600
              to-blue-600
              hover:scale-[1.02]
              transition-all
              text-white
              px-8
              py-5
              rounded-2xl
              text-xl
              font-bold
            "
          >

            Registrar Estudiante

          </button>

        </div>

        {/* BUSCADOR */}
        <div className="bg-white rounded-3xl shadow-md p-5 mb-10 flex items-center gap-4">

          <FaSearch className="text-gray-400 text-2xl" />

          <input
            type="text"
            placeholder="Buscar estudiante..."
            className="w-full outline-none text-lg"
          />

        </div>

        {/* LISTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {students.map((student, index) => (

            <div
              key={index}
              className="
                bg-white
                rounded-3xl
                shadow-md
                p-6
                hover:scale-105
                transition-all
              "
            >

              {/* ICONO */}
              <div className="flex justify-between items-center mb-6">

                <div className="bg-purple-100 p-5 rounded-2xl">

                  <FaUserGraduate className="text-4xl text-purple-600" />

                </div>

                <span className="
                  bg-green-100
                  text-green-600
                  px-4
                  py-2
                  rounded-xl
                  font-semibold
                ">

                  Activo

                </span>

              </div>

              {/* NOMBRE */}
              <h2 className="text-3xl font-bold text-gray-800">

                {student.name} {student.lastname}

              </h2>

              {/* EDAD */}
              <p className="text-gray-500 mt-3">

                Edad: {student.age} años

              </p>

              {/* HIPERACTIVIDAD */}
              <div className="mt-6">

                <p className="text-gray-500 mb-2">
                  Nivel de Hiperactividad
                </p>

                <span className="
                  bg-purple-100
                  text-purple-700
                  px-4
                  py-2
                  rounded-xl
                  font-semibold
                ">

                  {student.hyperactivity}

                </span>

              </div>

              {/* BOTONES */}
              <div className="flex gap-4 mt-8">

                <button className="
                  flex-1
                  bg-blue-500
                  hover:bg-blue-600
                  text-white
                  py-3
                  rounded-2xl
                  font-semibold
                ">

                  Ver Perfil

                </button>

                <button className="
                  flex-1
                  bg-purple-600
                  hover:bg-purple-700
                  text-white
                  py-3
                  rounded-2xl
                  font-semibold
                ">

                  Iniciar Sesión

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Students;