"use client";
import { motion } from "framer-motion";
import styles from "./descCard.module.css";
import { forwardRef } from "react";
import { Text, ThemeIcon } from "@mantine/core";

type Props = {
	children: React.ReactNode;
	Icon: any;
};
type Ref = HTMLDivElement;

const animation = {
	initial: "hidden",
	whileInView: "visible",
	viewport: { amount: 0.2, once: true },

	variants: {
		hidden: { y: 75, opacity: 0 },
		visible: { y: 0, opacity: 1, transition: { duration: 1 } },
	},
};

const DescCard = forwardRef<Ref, Props>(({ children, Icon }, ref) => {
	return (
		<motion.div className={styles.container} ref={ref} {...animation}>
			<ThemeIcon
				size="4.5rem"
				radius="md"
				variant="gradient"
				gradient={{
					deg: 0,
					from: "var(--mantine-color-orange-8)",
					to: "var(--mantine-color-orange-4)",
				}}
			>
				<Icon size={50} />
			</ThemeIcon>

			<Text fs="italic" fz="lg">
				{children}
			</Text>
		</motion.div>
	);
});

DescCard.displayName = "DescCard";

export default DescCard;
export const MDescCard = motion(DescCard);
