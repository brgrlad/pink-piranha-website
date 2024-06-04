export default function Modal({ title, message, onClose }) {
  return (
    <div className="absolute flex flex-col modal w-[100vw] h-[100vh] justify-center items-center z-39">
      <div className="flex flex-col justify-center items-center modalWrapper px-2 py-4 text-center w-[70%] h-[60%] border-[1px] border-dark-pink bg-light-pink rounded-2xl z-50">
        <h3 className="text-3xl">{title}</h3>
        <p>{message}</p>
        <button
          onClick={onClose}
          className="shadow-3xl border-[1px] border-dark-pink text-dark-pink hover:opacity-70 rounded-full text-sm px-8 py-2 text-center mb-2 z-50"
        >
          Close
        </button>
      </div>
    </div>
  );
}
