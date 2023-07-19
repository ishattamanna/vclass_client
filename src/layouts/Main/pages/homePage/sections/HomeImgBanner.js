import React from 'react';
import homeBannerImg from '../../../../../assets/home_images/traditional-vs-online-schooling-1024x476.jpg.webp'
import OutlineButton from '../../../../../tools/buttons/OutlineButton';
import ArrowDownIcon from '../../../../../tools/icons/ArrowDownIcon';

const HomeImgBanner = () => {
    return (
        <div className="hero h-[90vh] lg:h-[80vh] mb-5 rounded-lg" style={{ backgroundImage: `url(${homeBannerImg})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-2 lg:mb-5 text-3xl lg:text-5xl font-bold">Hello there</h1>
                    <p className="mb-2 lg:mb-5 font-semibold">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <OutlineButton className={"text-black"}>Get Started</OutlineButton>
                    <a href="#schrollHere">
                    <ArrowDownIcon
                    className={"font-bold mx-auto mt-5 animate-bounce lg:hidden"}></ArrowDownIcon>
                    </a>
                    
                </div>
            </div>
        </div>
    );
};

export default HomeImgBanner;