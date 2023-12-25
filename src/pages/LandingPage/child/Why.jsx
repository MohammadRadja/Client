function Why() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        {/* Left Content */}
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">Fungsional <span className="text-blue-600">LifeSyncHub</span> Membantu Menjadi Lebih Produktif</h2>
          <p className="mb-4">Aplikasi LifeSyncHub dirancang untuk membantu pengguna mengelola kehidupan sehari-hari 
          dan mencapai tujuan secara positif. Ini mencakup pengelolaan kesehatan, produktivitas, pelacakan perkembangan, pengembangan pribadi, serta manajemen waktu. Keberhasilan aplikasi ini diukur dari kegunaan empat fitur utama: 
          Aktivitas, Manajemen Waktu, Diet Plan, dan Kesehatan Fisik dalam mendukung pengguna mencapai tujuan mereka.</p>
          {/* <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p> */}
        </div>
        {/* End of Left Content */}
        
        {/* Right Content */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
          <img className="mt-4 w-full rounded-lg lg:mt-10" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
        </div>
        {/* End of Right Content */}
      </div>
    </section>
  );
}

export default Why;
