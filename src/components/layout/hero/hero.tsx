"use client";
import { motion } from "framer-motion";
import styles from "./hero.module.css";
import {
	IconKey,
	IconCalendarCheck,
	IconListCheck,
	IconAssembly,
	IconShieldCheck,
} from "@tabler/icons-react";
import { MDescCard } from "@/components/shared/descCard/descCard";

export default function Hero() {
	return (
		<motion.section
			className={styles.section}
			initial="hidden"
			whileInView="visible"
		>
			<motion.div
				className={styles.bgColumn}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2, ease: "easeInOut" }}
			></motion.div>

			<motion.div
				className={styles.mainCard}
				initial={{ opacity: 0, x: -50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 1, ease: "easeInOut" }}
			>
				<p className={styles.p}>ABOUT COMPANY</p>
				<h1 className={styles.h1}>Energy Engineering</h1>
				<p
					className={styles.p}
				>{`Компанія "ІК Енерджі Інженіринг" виконує повний цикл робіт у сфері газопостачання, котельних, установок, індивідуальних теплових, тепломереж та водопостачання`}</p>
			</motion.div>

			<motion.img
				className={styles.houseImg}
				src="./house.png"
				alt="house picture"
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 1, ease: "easeInOut" }}
			/>

			<div className={styles.description}>
				<MDescCard Icon={IconKey}>
					Ми виконуємо проекти під ключ: від проектування до задачі в
					експлуатації
				</MDescCard>
				<MDescCard Icon={IconCalendarCheck}>
					Ми цінуємо Ваш час і нерви, тому робота наших професіоналів
					гарантує готовність об&#39;екта точно в термінах.
				</MDescCard>
				<MDescCard Icon={IconListCheck}>
					Підбираємо обладнання та інженерні рішення згідно основних
					потреб замовника.
				</MDescCard>
				<MDescCard Icon={IconAssembly}>
					Беремо на себе всі комунікації з контродюючиси органами.
				</MDescCard>
				<MDescCard Icon={IconShieldCheck}>
					Завдяки нашим професійним відділам, фахівціям, досвіду та
					стандартів роботи - гарантуємо відсутність проблем з
					комунальними службами в майбутньому
				</MDescCard>
			</div>
		</motion.section>
	);
}
