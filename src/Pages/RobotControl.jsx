import { useState } from "react";

import Navbar from "../components/Navbar";

import {
  FaRobot,
  FaBatteryThreeQuarters,
  FaHeartbeat,
  FaUserGraduate,
  FaPowerOff,
  FaPaperPlane,
  FaPlus,
  FaTrash,
  FaEye
} from "react-icons/fa";

function RobotControl() {

  // PREGUNTA
  const [question, setQuestion] = useState("");

  // OPCIONES
  const [options, setOptions] = useState([
    "Opción 1",
    "Opción 2",
    "Opción 3",
    "Opción 4"
  ]);

  // RESPUESTA CORRECTA
  const [correctAnswer, setCorrectAnswer] = useState(0);

  // PREGUNTA ACTIVA EN TFT
  const [activeQuestion, setActiveQuestion] = useState({
    question: "¿Cuánto es 5 + 3?",
    options: ["6", "7", "8", "9"]
  });

  // HISTORIAL
  const [history, setHistory] = useState([
    {
      student: "María González",
      question: "¿Cuánto es 5 + 3?",
      answer: "8",
      time: "Hace 2 min"
    }
  ]);

  // CAMBIAR OPCIONES
  const handleOptionChange = (index, value) => {

    const updatedOptions = [...options];

    updatedOptions[index] = value;

    setOptions(updatedOptions);
  };

  // AGREGAR OPCION
  const addOption = () => {

    if (options.length >= 6) return;

    setOptions([...options, `Opción ${options.length + 1}`]);
  };

  // ELIMINAR OPCION
  const removeOption = (index) => {

    const updatedOptions = options.filter((_, i) => i !== index);

    setOptions(updatedOptions);
  };

  // ENVIAR PREGUNTA
  const sendQuestion = () => {

    if (!question) return;

    setActiveQuestion({
      question,
      options
    });

    // AGREGAR AL HISTORIAL
    setHistory([
      {
        student: "Sesión Activa",
        question,
        answer: options[correctAnswer],
        time: "Ahora"
      },

      ...history
    ]);

    // LIMPIAR
    setQuestion("");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-8">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-4xl font-bold text-gray-800">
              Control del Robot Pedagógico
            </h1>

            <p className="text-gray-500 mt-2">
              Sistema interactivo para apoyo educativo TDAH
            </p>

          </div>

          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-4 rounded-2xl flex items-center gap-3 font-semibold transition-all">

            <FaPowerOff />

            Desactivar Robot

          </button>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

          {/* PANEL IZQUIERDO */}
          <div className="space-y-6">

            {/* BATERIA */}
            <div className="bg-white rounded-3xl shadow-md p-6">

              <div className="flex items-center gap-4 mb-4">

                <FaBatteryThreeQuarters className="text-3xl text-green-500" />

                <h2 className="text-2xl font-bold">
                  Batería
                </h2>

              </div>

              <div className="w-full bg-gray-200 rounded-full h-5">

                <div className="bg-green-500 h-5 rounded-full w-[85%]"></div>

              </div>

              <p className="mt-3 text-gray-600">
                85% restante
              </p>

            </div>

            {/* ESTADO */}
            <div className="bg-white rounded-3xl shadow-md p-6">

              <div className="flex items-center gap-4 mb-4">

                <FaHeartbeat className="text-3xl text-blue-500" />

                <h2 className="text-2xl font-bold">
                  Estado
                </h2>

              </div>

              <p className="text-4xl font-bold text-green-600">
                Activo
              </p>

            </div>

            {/* ESTUDIANTE */}
            <div className="bg-white rounded-3xl shadow-md p-6">

              <div className="flex items-center gap-4 mb-4">

                <FaUserGraduate className="text-3xl text-purple-500" />

                <h2 className="text-2xl font-bold">
                  Estudiante Actual
                </h2>

              </div>

              <p className="text-3xl font-bold">
                María González
              </p>

              <p className="text-gray-500 mt-2">
                Tiempo de sesión: 12 minutos
              </p>

            </div>

            {/* ILUMINACION */}
            <div className="bg-white rounded-3xl shadow-md p-6">

              <div className="flex items-center gap-4 mb-6">

                <FaEye className="text-3xl text-purple-500" />

                <h2 className="text-2xl font-bold">
                  Control de Iluminación
                </h2>

              </div>

              <p className="mb-4 font-semibold">
                Brillo de LEDs
              </p>

              <input
                type="range"
                min="0"
                max="100"
                className="w-full"
              />

            </div>

          </div>

          {/* PANEL DERECHO */}
          <div className="xl:col-span-2 space-y-8">

            {/* FORMULARIO */}
            <div className="bg-white rounded-3xl shadow-md p-8">

              <div className="flex justify-between items-center mb-8">

                <h2 className="text-3xl font-bold">
                  Crear Nueva Pregunta
                </h2>

                <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-3 rounded-2xl font-semibold">

                  Generar con IA

                </button>

              </div>

              {/* INPUT */}
              <div className="mb-8">

                <label className="font-semibold block mb-3">
                  Pregunta
                </label>

                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Escribe la pregunta..."
                  className="w-full border border-gray-300 rounded-2xl p-4 outline-none"
                />

              </div>

              {/* OPCIONES */}
              <div>

                <div className="flex justify-between items-center mb-4">

                  <h3 className="text-xl font-bold">
                    Opciones de Respuesta
                  </h3>

                  <button
                    onClick={addOption}
                    className="text-purple-600 font-semibold flex items-center gap-2"
                  >

                    <FaPlus />

                    Agregar opción

                  </button>

                </div>

                <div className="space-y-4">

                  {options.map((option, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-4"
                    >

                      <input
                        type="radio"
                        checked={correctAnswer === index}
                        onChange={() => setCorrectAnswer(index)}
                      />

                      <span className="font-bold">
                        {String.fromCharCode(65 + index)}.
                      </span>

                      <input
                        type="text"
                        value={option}
                        onChange={(e) =>
                          handleOptionChange(index, e.target.value)
                        }
                        className="flex-1 border border-gray-300 rounded-2xl p-4 outline-none"
                      />

                      <button
                        onClick={() => removeOption(index)}
                        className="text-red-500"
                      >

                        <FaTrash />

                      </button>

                    </div>

                  ))}

                </div>

              </div>

              {/* BOTON */}
              <button
                onClick={sendQuestion}
                className="w-full mt-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:scale-[1.01] transition-all text-white py-5 rounded-2xl text-xl font-bold flex items-center justify-center gap-4"
              >

                <FaPaperPlane />

                Enviar Pregunta al Robot

              </button>

            </div>

            {/* PANTALLA ROBOT */}
            <div className="bg-white rounded-3xl shadow-md p-8">

              <div className="flex items-center gap-4 mb-8">

                <FaRobot className="text-4xl text-purple-600" />

                <h2 className="text-3xl font-bold">
                  Pantalla del Robot
                </h2>

              </div>

              <div className="bg-gray-900 rounded-3xl p-10">

                <h2 className="text-white text-5xl text-center font-bold mb-12">

                  {activeQuestion.question}

                </h2>

                <div className="grid grid-cols-2 gap-8">

                  {activeQuestion.options.map((option, index) => (

                    <button
                      key={index}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white text-3xl font-bold py-10 rounded-3xl"
                    >

                      {String.fromCharCode(65 + index)}. {option}

                    </button>

                  ))}

                </div>

              </div>

            </div>

            {/* HISTORIAL */}
            <div className="bg-white rounded-3xl shadow-md p-8">

              <h2 className="text-3xl font-bold mb-8">
                Historial de Respuestas
              </h2>

              <div className="space-y-6">

                {history.map((item, index) => (

                  <div
                    key={index}
                    className="border border-gray-200 rounded-2xl p-6"
                  >

                    <div className="flex justify-between">

                      <div>

                        <h3 className="text-2xl font-bold">
                          {item.student}
                        </h3>

                        <p className="text-gray-500 mt-2">
                          Pregunta: "{item.question}"
                        </p>

                        <p className="mt-4 text-xl">

                          Respuesta seleccionada:

                          <span className="text-purple-600 font-bold ml-2">
                            "{item.answer}"
                          </span>

                        </p>

                      </div>

                      <p className="text-gray-400">
                        {item.time}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default RobotControl;