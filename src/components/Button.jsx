export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="px-4 py-2 text-xs md:text-base rounded-md bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-slate-100"
    >
      {children}
    </button>
  );
}
