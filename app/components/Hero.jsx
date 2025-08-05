import { assets } from "@/assets/assets";
import { Hand } from "lucide-react";
import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <div>
            <div>
                <Image src={assets.profile_img} alt="profile_img" className="rounded-full w-32"/>
                <h3 ><Hand className="text-yellow-500" /> Hello, I am JOSEPH AHMED</h3>
            </div>
        </div>
    );
};

export default Hero;
