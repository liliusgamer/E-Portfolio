
import LightRays from './LightRays';
import GradientText from './GradientText'

const Hero = () => {
    return (
        <div className="relative min-h-screen">
            {/* Background Effect */}
            <div className="absolute inset-0 z-0">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#00ffff"
                    raysSpeed={1.5}
                    lightSpread={0.8}
                    rayLength={1.2}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.05}
                    className="custom-rays"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 min-h-screen flex items-center justify-center">
                <div className="text-center text-white ">

                    <div className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                        <GradientText
                            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                            animationSpeed={3}
                            showBorder={false}
                            className="custom-class"
                        >
                            Welcome to my portfolio!
                        </GradientText>
                    </div>

                    <p className="text-xl md:text-2xl drop-shadow">
                        Khám phá kỹ năng và dự án của tôi
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;

