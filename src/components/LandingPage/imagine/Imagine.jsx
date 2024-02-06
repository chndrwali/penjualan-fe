import { magic } from "../data/landingpageData";

function Imagine() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">{magic.title}</h2>
                    <p className="mb-4">{magic.desc}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="Contoh kusen kayu" />
                    <img className="mt-4 w-full rounded-lg lg:mt-10" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="Contoh furniture" />
                </div>
            </div>
        </section>
    );
}
export default Imagine;