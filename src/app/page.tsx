import { CardsCarousel } from "@/components/layout/carousel/carousel";
import Department from "@/components/layout/department/department";
import Hero from "@/components/layout/hero/hero";
import { Title } from "@mantine/core";

export default function Home() {
	return (
		<>
			<Hero />
			<Department />
			<Title id="projects" ta="center" my="xl">
				Проекти
			</Title>
			<CardsCarousel />
		</>
	);
}
