"use client";
import { Text, Container, ActionIcon, Group, rem } from "@mantine/core";
import {
	IconBrandTwitter,
	IconBrandYoutube,
	IconBrandInstagram,
} from "@tabler/icons-react";
import styles from "./footer.module.css";

const data = [
	{
		title: "About",
		links: [
			{ label: "Features", link: "#" },
			{ label: "Pricing", link: "#" },
			{ label: "Support", link: "#" },
			{ label: "Forums", link: "#" },
		],
	},
	{
		title: "Project",
		links: [
			{ label: "Contribute", link: "#" },
			{ label: "Media assets", link: "#" },
			{ label: "Changelog", link: "#" },
			{ label: "Releases", link: "#" },
		],
	},
	{
		title: "Community",
		links: [
			{ label: "Join Discord", link: "#" },
			{ label: "Follow on Twitter", link: "#" },
			{ label: "Email newsletter", link: "#" },
			{ label: "GitHub discussions", link: "#" },
		],
	},
];

export function Footer() {
	const groups = data.map((group) => {
		const links = group.links.map((link, index) => (
			<Text<"a">
				key={index}
				className={styles.link}
				component="a"
				href={link.link}
				onClick={(event) => event.preventDefault()}
			>
				{link.label}
			</Text>
		));

		return (
			<div className={styles.wrapper} key={group.title}>
				<Text className={styles.title}>{group.title}</Text>
				{links}
			</div>
		);
	});

	return (
		<footer className={styles.footer}>
			<Container className={styles.inner}>
				<div className={styles.logo}>
					<div className={styles.logoDiv}></div>
					<Text size="xs" c="dimmed" className={styles.description}>
						Київ, ВУЛИЦЯ ДІЛОВА, 5
						<br /> +38 (050) 16 30 000 info@ik.engineering
					</Text>
				</div>
				<div className={styles.groups}>{groups}</div>
			</Container>
			<Container className={styles.afterFooter}>
				<Text c="dimmed" size="sm">
					github.com/ha1dysh
				</Text>

				<Group
					gap={0}
					className={styles.social}
					justify="flex-end"
					wrap="nowrap"
				>
					<ActionIcon size="lg" color="gray" variant="subtle">
						<IconBrandTwitter
							style={{ width: rem(18), height: rem(18) }}
							stroke={1.5}
						/>
					</ActionIcon>
					<ActionIcon size="lg" color="gray" variant="subtle">
						<IconBrandYoutube
							style={{ width: rem(18), height: rem(18) }}
							stroke={1.5}
						/>
					</ActionIcon>
					<ActionIcon size="lg" color="gray" variant="subtle">
						<IconBrandInstagram
							style={{ width: rem(18), height: rem(18) }}
							stroke={1.5}
						/>
					</ActionIcon>
				</Group>
			</Container>
		</footer>
	);
}
