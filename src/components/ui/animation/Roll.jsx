import { useEffect, useRef } from "react";
import { LazyMotion, domAnimation, m, useAnimate, useInView, useMotionValue, useTransform } from "framer-motion";

function RollingNum({ number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });
    const [_, animate] = useAnimate();
    const startingValue = useMotionValue(0);
    const currentValue = useTransform(startingValue, (value) => Math.round(value).toLocaleString() + "+");

    useEffect(() => {
        if (isInView) {
            animate(startingValue, number, {
                duration: 2,
                ease: "easeOut",
            });
        }
    }, [animate, isInView, number, startingValue]);

    return (
        <LazyMotion features={domAnimation}>
            <m.p ref={ref}>{currentValue}</m.p>
        </LazyMotion>
    );
}

export default RollingNum;
