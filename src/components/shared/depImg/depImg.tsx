import { forwardRef } from "react";
import { motion } from "framer-motion";
import styles from "./depImg.module.css";

type Props = { src: string; alt: string; classes: string };
type Ref = HTMLImageElement;

const animation = {
	initial: "hidden",
	whileInView: "visible",
	viewport: { amount: 0.2, once: true },

	variants: {
		hidden: { x: 75, opacity: 0 },
		visible: { x: 0, opacity: 1, transition: { duration: 1 } },
	},
};

export const DepImg = forwardRef<Ref, Props>(({ classes, ...rest }, ref) => {
	return (
		<motion.img
			ref={ref}
			className={styles[classes]}
			{...rest}
			{...animation}
		/>
	);
});

DepImg.displayName = "DepImg";
