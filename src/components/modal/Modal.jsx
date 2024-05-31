export default function Modal({ title, message, onClose }) {
  return (
    <div className="absolute flex flex-col modal w-[100vw] h-[100vh] bg-transparent border-2 justify-center items-center z-39">
      <div className="flex flex-col justify-center items-center modalWrapper px-2 py-4 text-center w-[70%] h-[60%] border-2 border-pink-600 bg-pink-200 rounded-2xl z-40">
        <h3>{title}</h3>
        <p>{message}</p>
        <button
          onClick={onClose}
          className="shadow-3xl border-2 border-pink-700 text-pink-700 bg-pink-300 font-bold rounded-full text-sm  px-8 py-2 text-center mb-2 z-50"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
