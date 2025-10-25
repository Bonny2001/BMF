import React from "react";

const Social = () => {
    const images = [
        "bmf-cover.jpg",
        "bmf-cover2.jpg",
        "bmf-cover3.jpg",
        "bmf-cover4.jpg",
        "bmf-cover5.jpg",
        "bmf-cover6.jpg",
        "bmf-cover7.jpg",
        "bmf-cover8.jpg",
        "bmf-cover9.jpg",
        "bmf-cover10.jpg",
        "bmf-cover11.jpg",
        "bmf-cover12.jpg",
    ];

    return (
        <div className="flex flex-col justify-center items-center gap-10 my-16 px-4">
            {/* Heading */}
            <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight text-center">
                BMF Mixtape <span className="text-red-500">Live</span>
            </h1>

            {/* Main Content Section */}
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 w-full max-w-7xl">
                {/* Image Gallery */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-5 md:w-1/2 justify-items-center">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`BMF Cover ${index + 1}`}
                            className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-xl shadow-md hover:scale-110 transition-transform duration-300"
                        />
                    ))}
                </div>

                {/* Facebook Page Embed */}
                <div className="flex justify-center w-full md:w-1/2">
                    <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbmf2k22%2Fphotos&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                        width="340"
                        height="500"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        title="BMF Facebook Page"
                    />
                </div>
            </div>
        </div>
    );
};

export default Social;
