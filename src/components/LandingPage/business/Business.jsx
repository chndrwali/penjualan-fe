/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { FaChartBar, FaBalanceScale, FaTools, FaWallet, FaBriefcase, FaRegLightbulb } from 'react-icons/fa';
import { bisnis } from '../data/landingpageData';

function Business() {
    // State untuk menyimpan data ikon
    const [icons] = useState([
        FaChartBar, 
        FaBalanceScale, 
        FaTools, 
        FaWallet, 
        FaBriefcase, 
        FaRegLightbulb
    ]);

    return (
        <section className="bg-gray-50 dark:bg-gray-800">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="mb-8 max-w-screen-md lg:mb-16">
                    <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">{bisnis.title}</h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">{bisnis.desc}</p>
                </div>
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    {icons.map((Icon, index) => (
                        <div key={index}>
                            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                <Icon className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
                            </div>
                            <h3 className="mb-2 text-xl font-bold dark:text-white">{bisnis.bisnisBody[index].title}</h3>
                            <p className="text-gray-500 dark:text-gray-400">{bisnis.bisnisBody[index].desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Business;