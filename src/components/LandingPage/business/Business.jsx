import { FaChartBar, FaBalanceScale, FaTools, FaWallet, FaBriefcase, FaRegLightbulb } from 'react-icons/fa';

function Business() {
    return (
        <section className="bg-gray-50 dark:bg-gray-800">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="mb-8 max-w-screen-md lg:mb-16">
                    <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">Solusi Bisnis Terbaik untuk Kusen dan Furniture</h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">Rukun Perkasa menyediakan solusi bisnis terbaik untuk industri kusen dan furniture. Dengan fokus pada teknologi dan inovasi, kami membantu perusahaan Anda berkembang dan bersaing di pasar global.</p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FaChartBar className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Strategi Pemasaran</h3>
                        <p className="text-gray-500 dark:text-gray-400">Rencanakan strategi pemasaran yang efektif untuk meningkatkan visibilitas dan penjualan kusen dan furniture Anda.</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FaBalanceScale className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Kepatuhan Hukum</h3>
                        <p className="text-gray-500 dark:text-gray-400">Pastikan operasional bisnis Anda selalu sesuai dengan hukum dan regulasi yang berlaku.</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FaTools className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Perbaikan dan Perawatan</h3>
                        <p className="text-gray-500 dark:text-gray-400">Dapatkan layanan perbaikan dan perawatan kusen dan furniture dengan tingkat kehandalan yang tinggi.</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FaWallet className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Manajemen Keuangan</h3>
                        <p className="text-gray-500 dark:text-gray-400">Kelola keuangan perusahaan Anda dengan efisien menggunakan platform manajemen keuangan terbaik.</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FaBriefcase className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Desain Kustom</h3>
                        <p className="text-gray-500 dark:text-gray-400">Dapatkan desain kusen dan furniture kustom sesuai kebutuhan dan preferensi Anda.</p>
                    </div>
                    <div>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FaRegLightbulb className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Inovasi dan Pengembangan Produk</h3>
                        <p className="text-gray-500 dark:text-gray-400">Kami berkomitmen untuk terus mengembangkan inovasi dalam desain dan teknologi produksi kusen dan furniture.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Business;
