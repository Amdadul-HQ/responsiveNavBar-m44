import './Banner.css'

const Banner = () => {
    return (
        <div className="bg flex flex-col justify-center lg:w-full lg:h-[600px] items-center text-[#050715] mb-32 rounded-2xl">
            <h1 className="text-6xl text-center font-bold mt-20">Let's Works Out </h1>
            <p className="text-xl text-center font-bold ">Choose Your Plan</p>
        </div>
    );
};

export default Banner;