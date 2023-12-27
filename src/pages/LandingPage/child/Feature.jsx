import { BiListCheck, BiTime, BiMoney, BiNews } from "react-icons/bi";
import { GiWeightLiftingUp } from "react-icons/gi";

function YourComponent() {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mb-8 max-w-screen-md lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
            Eksplorasi Fitur Unggul{" "}
            <span className="text-blue-600">LifeSyncHub</span>
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            LifeSyncHub adalah aplikasi yang membantu pengguna dalam mengelola
            kehidupan sehari-hari dengan 4 fitur utama: Aktivitas, Manajemen
            Waktu, Diet Plan, dan Kesehatan Fisik.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {/* Card 1 */}
          <div>
            <BiListCheck className="text-5xl" />
            <h3 className="mb-2 text-xl font-bold dark:text-white">Activity</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Fitur Activity memungkinkan pengguna membuat dan menyimpan catatan
              penting.
            </p>
          </div>
          {/* End of Card 1 */}

          {/* Card 2 */}
          <div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              <BiTime className="text-5xl" />
              Time Management
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Fitur Manajemen Waktu memungkinkan pengguna untuk membuat jadwal
              dan mengatur prioritas.
            </p>
          </div>

          <div>
            <BiMoney className="text-5xl" />
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Financial Record
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Fitur Kesehatan Fisik memberikan berita kesehatan terbaru.
            </p>
          </div>

          <div>
            <GiWeightLiftingUp className="text-5xl" />
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Diet Plan
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Fitur Diet Plan mencatat detail konsumsi makanan harian.
            </p>
          </div>
          <div>
            <BiNews className="text-5xl" />
            <h3 className="mb-2 text-xl font-bold dark:text-white">
              Health Article
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Fitur Health Article memberikan berita kesehatan terbaru.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default YourComponent;
