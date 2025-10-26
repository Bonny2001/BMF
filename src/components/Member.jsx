import React from 'react';
import data from './Data';

const Member = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 mt-10 mb-10 px-0.5 lg:gap-8 lg:mt-20 lg:mb-20 lg:px-4">
            {data.map((member) => (
                <div
                    key={member.id}
                    className="relative flex flex-col bg-black shadow-md border border-red-900 rounded-lg hover:shadow-lg transition-shadow duration-300"
                >
                    <div className="relative overflow-hidden rounded-t-lg">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-55 lg:h-90 object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h6 className="mb-1 text-slate-100 text-lg font-semibold">
                            {member.name}
                        </h6>
                        <p className="text-slate-300 text-sm mb-3">
                            {member.role}
                        </p>
                        <button
                            type="button"
                            className="rounded-md bg-red-800 py-2 px-4 text-xs lg:text-sm text-white 
                                       transition-all shadow-md hover:shadow-lg focus:bg-red-700 active:bg-red-700 
                                       disabled:pointer-events-none disabled:opacity-50"
                        >
                            Read more
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Member;
