import { useEffect } from "react";

function Modal({ judul, children, onTutup }) {
  useEffect(() => {
    function tanganiEscape(event) {
      if (event.key === "Escape") onTutup();
    }

    window.addEventListener("keydown", tanganiEscape);
    return () => window.removeEventListener("keydown", tanganiEscape);
  }, [onTutup]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4"
      onClick={onTutup}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={judul}
        onClick={(event) => event.stopPropagation()}
        className="w-full max-w-sm rounded-xl bg-white p-5 shadow-xl"
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
