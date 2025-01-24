function HeroSection() {
    return (
        <div className="video-container z-[-10] min-h-[90%]">
                <video autoPlay muted loop>
                <source src="https://videos.pexels.com/video-files/4430493/4430493-uhd_2560_1440_24fps.mp4" type="video/mp4" />
                LASTING IMPRESSIONS CAST IN IRON
                </video>
                <div className="video-overlay"></div>
                <div className="content">
                <h1 className="text-xl sm:text-3xl md:text-6xl font-bold">Welcome to Our Website</h1>
                <p className="text-sm sm:text-lg md:text-xl mt-4">Experience excellence and innovation</p>
                </div>
            </div>
    )
}

export default HeroSection
