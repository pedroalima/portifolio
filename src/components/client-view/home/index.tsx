"use client";
import Link from "next/link";
import { useMemo } from "react";
import { motion } from "framer-motion";
import AnimationWrapper from "../animate-wrapper";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FormDataTypes } from "@/types";
import Navbar from "../navbar";

export default function ClientHome({ data } : { data : FormDataTypes[]}) {
    function variants() {
        return {
            offscreen: {
                x: 200,
                opacity: 0,
            },
            onscreen: ({ duration = 1.5 } = {}) => ({
                x: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    duration,
                },
            }),
        };
    }

    const setVariants = useMemo(() => variants(), []);

    return (
        <AnimationWrapper className="h-full">
            <motion.div 
                className="h-full flex flex-col justify-between"
                variants={setVariants}
            >
                <div>
                    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-cyan-400">Pedro Lima</h1>
                    <p className="text-xl font-normal text-gray-100 mt-3 mb-2">{data[0].mainText}</p>
                    <p className="text-base font-normal text-gray-400">{data[0].description}</p>
                </div>

                <Navbar />

                <div className="flex gap-10 mx-3">
                    <motion.div  animate={{ scale: 1.5}} whileHover={{ scale: 2 }}>
                        <Link href="https://github.com/pedroalima">
                            <FaGithub className="w-4 h-4 contact-icons text-gray-200 hover:text-cyan-400" />
                        </Link>
                    </motion.div>
                    <motion.div  animate={{ scale: 1.5}} whileHover={{ scale: 2 }}>
                        <Link href="https://www.linkedin.com/in/pedroalima6/">
                            <FaLinkedinIn className="w-4 h-4 text-gray-200 hover:text-cyan-400" />
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </AnimationWrapper>
    );
}