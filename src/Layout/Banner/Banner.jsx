import banner from "../../assets/banner.jpg"

const Banner = () => {
    return (
        <>
            <div className="min-h-screen bg-green-200 w-full flex">
               
                    {/*right side */}  
                    <div className="w-1/2">
                        <button className="text-white p-2"> Business Empowerment </button>
                        <h3 className="Uppercase font-bold text-white text-5xl">
                            Elevate your <br /> business with <br />Sms insights
                        </h3>
                        <p>Our transformative world of cloud software solutions, where innovation sparks growth and propels businesses forward.</p>
                        <button className="btn btn-accent">Get Started</button>
                    </div>
                    {/*right side */}
                    <div className="w-1/2">
                            <img className="w-[400px] h-[600px]" src={banner} alt="" />
                    </div>
                
            </div>
        </>
    );
};

export default Banner;