const Jumbotron = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="place-self-center mr-auto lg:col-span-7">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl text-gray-900 dark:text-white">
            Optimalkan Hidup Anda dengan{" "}
            <span className="text-blue-600">LifeSyncHub</span>
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            LifeSyncHub adalah platform yang dirancang untuk membantu pengguna
            menyelaraskan dan mengelola berbagai aspek kehidupan mereka. Dengan
            fokus pada kesejahteraan umum, platform ini memungkinkan pengguna
            untuk mengintegrasikan keuangan, kesehatan fisik, dan manajemen
            waktu. Sebagai pusat sumber daya, LifeSyncHub memberikan alat dan
            informasi yang memungkinkan pengguna mencapai keseimbangan dan
            koordinasi dalam kehidupan mereka secara menyeluruh.
          </p>
          <a
            href="/login"
            className="hidden lg:inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-primary rounded-lg border border-primary hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 mr-2"
          >
            Login
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="/register"
            className="hidden lg:inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-primary rounded-lg border border-primary hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            Register
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src="/images/jumbotron.png" alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
