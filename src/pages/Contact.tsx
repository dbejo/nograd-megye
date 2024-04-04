export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-col md:w-1/2">
        <div className="mb-4">
          <h3 className="mb-2 text-xl font-medium">Címünk</h3>
          <p>Salgotarjan, Ugribugri utca 2.</p>
        </div>
        <div className="mb-4">
          <h3 className="mb-2 text-xl font-medium">Elérhetőségeink</h3>
          <p>
            Telefon:{" "}
            <a
              href="tel:+36301231234"
              className="text-green-700 underline hover:text-green-800"
            >
              +36 30 123 1234
            </a>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:info@nograd.hu"
              className="text-green-700 underline hover:text-green-800"
            >
              info@nograd.hu
            </a>
          </p>
        </div>
      </div>
      <div className="md:w-1/2">
        <form>
          <div className="mb-6">
            <div className="mx-0 mb-1 sm:mb-4">
              <div className="mx-0 mb-1 sm:mb-4">
                <label
                  htmlFor="name"
                  className="pb-1 text-xs uppercase tracking-wider"
                ></label>
                <input
                  type="text"
                  id="name"
                  autoComplete="name"
                  placeholder="Neved"
                  className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0 dark:text-gray-300"
                  name="name"
                />
              </div>
              <div className="mx-0 mb-1 sm:mb-4">
                <label
                  htmlFor="email"
                  className="pb-1 text-xs uppercase tracking-wider"
                ></label>
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  placeholder="Email címed"
                  className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0 dark:text-gray-300"
                  name="email"
                />
              </div>
            </div>
            <div className="mx-0 mb-1 sm:mb-4">
              <label
                htmlFor="textarea"
                className="pb-1 text-xs uppercase tracking-wider"
              ></label>
              <textarea
                id="textarea"
                name="textarea"
                placeholder="Ide írd az üzeneted..."
                className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0 dark:text-gray-300"
              ></textarea>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="font-xl w-full rounded-md bg-green-700 px-6 py-3 text-white hover:bg-green-800 sm:mb-0"
            >
              Üzenet küldése
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
