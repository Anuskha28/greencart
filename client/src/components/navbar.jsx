const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative">

      {/* Logo */}
      <a href="https://prebuiltui.com">
        <svg width="157" height="40" viewBox="0 0 157 40" fill="none">
          <path
            d="M47.904 28.28q-1.54 0-2.744-.644a5.1 5.1 0 0 1-1.904-1.82q-.672-1.148-.672-2.604v-3.864q0-1.456.7-2.604a4.9 4.9 0 0 1 1.904-1.792q1.204-.672 2.716-.672 1.82 0 3.276.952a6.44 6.44 0 0 1 2.324 2.52q.868 1.567.868 3.556 0 1.96-.868 3.556a6.5 6.5 0 0 1-2.324 2.492q-1.456.924-3.276.924"
            fill="#000"
          />
          <path
            d="m8.75 11.3 6.75 3.884 6.75-3.885M8.75 34.58v-7.755L2 22.939m27 0-6.75 3.885v7.754M2.405 15.408 15.5 22.954l13.095-7.546M15.5 38V22.939M29 28.915V16.962a2.98 2.98 0 0 0-1.5-2.585L17 8.4a3.01 3.01 0 0 0-3 0L3.5 14.377A3 3 0 0 0 2 16.962v11.953A2.98 2.98 0 0 0 3.5 31.5L14 37.477a3.01 3.01 0 0 0 3 0L27.5 31.5a3 3 0 0 0 1.5-2.585"
            stroke="#4F39F6"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <button type="button">Home</button>
        <button type="button">About</button>
        <button type="button">Contact</button>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
        </div>

        <button
          onClick={() => alert("Login clicked")}
          className="px-8 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full"
        >
          Login
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={() => setOpen(!open)} className="sm:hidden">
        <svg width="21" height="15" viewBox="0 0 21 15" fill="none">
          <rect width="21" height="1.5" rx=".75" fill="#426287" />
          <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
          <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full z-50 bg-white shadow-md py-4 flex-col gap-2 px-5 text-sm sm:hidden`}
      >
        <button type="button">Home</button>
        <button type="button">About</button>
        <button type="button">Contact</button>

        <button
          onClick={() => alert("Login clicked")}
          className="mt-2 px-6 py-2 bg-indigo-500 text-white rounded-full"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;