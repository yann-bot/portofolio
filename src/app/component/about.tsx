




export default function About() {
    return (
        <div className="flex flex-col w-full px-4 sm:px-10 md:px-20 mt-10" id="about-me">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 mb-6">
                <div className="flex items-center gap-2 w-full">
                    <h1 className="text-2xl font-bold"> <span className="text-blue-500">#</span>about me</h1>
                    <div className="h-1 w-20 bg-blue-500 flex-1"></div>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row p-4 sm:p-10 items-center md:items-start gap-8">
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <p className="text-base sm:text-lg text-gray-200">
                        I&apos;m a Fullstack Developer and Software Engineer based in Bangui, Central African Republic 🇨🇫.<br /><br />
                        Passionate about technology, I help turn your ideas into innovative digital products with a simple and efficient approach.<br />
                        With 2 years of experience, I leverage my skills to support your digital inclusion by building solutions tailored to your needs.<br />
                        <br />
                        ✨ My mission?<br />
                        To bring practical digital solutions to your everyday challenges.<br />
                        Whether you are an entrepreneur, individual, child, or adult, I design and develop tools that make your life easier and empower your projects.<br />
                    </p>
                </div>
                <div className="hidden md:block w-full md:w-1/2"></div>
            </div>
        </div>
    );
}