"use client";
import DepCard from "@/components/shared/depCard/depCard";
import { DepImg } from "@/components/shared/depImg/depImg";
import styles from "./department.module.css";

const Department = () => {
	return (
		<>
			<h2 className={styles.title} id="departments">
				Відділи які працюють в компанії &#171;ІК Енерджі
				Інжиніринг&#187;
			</h2>
			<section className={styles.section}>
				<DepCard title="Проектний відділ" bgColor="orange">
					Це проектний відділ проектувальників з вищою профільною
					освітою, яка має досвід виконання проектних робіт будь-якої
					складності. Проекти виконуватимуться з застосуванням
					сучасних програмних комплексів (AutoCad, Auditor) які
					дозволяють виконувати проектні роботи на високому рівні.
				</DepCard>
				<DepImg
					src="./architect.webp"
					alt="architect image"
					classes="architect"
				/>

				<DepCard title="Відділ сервісу" bgColor="gray">
					Складається з мобільних бригад, які пройшли стажування і
					навчання у виробників устаткування, що в свою чергу дозволяє
					оперативно проводити повний комплекс гарантійного та
					післягарантійного технічного обслуговування обє&#039;ктів
					будь-якої складності.
				</DepCard>
				<DepImg
					src="./mobile.png"
					alt="mobile brigade image"
					classes="mobile"
				/>

				<DepCard title="Виконавчий відділ" bgColor="light">
					Складається з монтажних бригад, які регулярно проходять
					підвищення кваліфікації для поліпшення навичок користування
					технологічним обладнанням. Бригади укомплектовані
					спеціалізованим обладнанням і інструментом, що дозволяє
					виконувати монтажні роботи з високою швидкістю і якістю.
					{/* Висококваліфіковані наладчики, які пройшли повний курс
				стажування на заводах виробника обладнання, виконують повний
				комплекс пуско-налагоджувальних робіт */}
				</DepCard>
				<DepImg
					src="./assembly.jpg"
					alt="assembly brigade"
					classes="assembly"
				/>
			</section>
		</>
	);
};

export default Department;
