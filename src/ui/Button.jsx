export default function Button({ children }) {
  return (
    <button
      className="rounded-2xl border border-emerald-500/30 bg-emerald-500 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-emerald-400"
    >
      {children}
    </button>
  );
}