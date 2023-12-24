"use client";
import { Text, Title } from "@mantine/core";
import { motion } from "framer-motion";
import styles from "./depCard.module.css";
import cx from "clsx";
import { forwardRef } from "react";

type Props = {
	children: React.ReactNode;
	title: string;
	bgColor?: string;
};
type Ref = HTMLDivElement;

const animation = {
	hidden: { x: -75, opacity: 0 },
	visible: { x: 0, opacity: 1, transition: { duration: 1 } },
};

const DepCard = forwardRef<Ref, Props>(
	({ children, title, bgColor = "" }, ref) => {
		return (
			<motion.div
				className={cx(styles.container, styles[bgColor])}
				ref={ref}
				viewport={{ amount: 0.2, once: true }}
				variants={animation}
				initial="hidden"
				whileInView="visible"
			>
				<Title className={styles.title} order={2} ta="center">
					{title}
				</Title>
				<Text ta="justify">{children}</Text>
			</motion.div>
		);
	}
);
DepCard.displayName = "DepCard";

export default DepCard;
