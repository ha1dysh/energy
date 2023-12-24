"use client";
import { Carousel } from "@mantine/carousel";
import { Paper, Button, rem } from "@mantine/core";
import classes from "./carousel.module.css";
import { IconArrowBadgeLeft, IconArrowBadgeRight } from "@tabler/icons-react";

export function CardsCarousel() {
	return (
		<Carousel
			className={classes.carousel}
			slideSize={{ base: "80%", sm: "50%" }}
			slideGap={{ base: "10px" }}
			nextControlIcon={
				<IconArrowBadgeRight
					style={{ width: rem(60), height: rem(60) }}
				/>
			}
			previousControlIcon={
				<IconArrowBadgeLeft
					style={{ width: rem(60), height: rem(60) }}
				/>
			}
		>
			<Carousel.Slide>
				<Card image="/energy/domino-1.jpg" />
			</Carousel.Slide>

			<Carousel.Slide>
				<Card image="/energy/elyseum-1.jpg" />
			</Carousel.Slide>

			<Carousel.Slide>
				<Card image="/energy/gefest-1.jpg" />
			</Carousel.Slide>

			<Carousel.Slide>
				<Card image="/energy/kador-1.jpg" />
			</Carousel.Slide>

			<Carousel.Slide>
				<Card image="/energy/m8-1.jpg" />
			</Carousel.Slide>

			<Carousel.Slide>
				<Card image="/energy/modern-1.jpg" />
			</Carousel.Slide>
		</Carousel>
	);
}

function Card({ image }: { image: string }) {
	return (
		<Paper
			shadow="md"
			p="sm"
			radius="0"
			style={{ backgroundImage: `url(${image})` }}
			className={classes.card}
		>
			<Button
				variant="gradient"
				gradient={{
					deg: 0,
					from: "var(--mantine-color-orange-8)",
					to: "var(--mantine-color-orange-4)",
				}}
				opacity={0.8}
			>
				Info
			</Button>
		</Paper>
	);
}
