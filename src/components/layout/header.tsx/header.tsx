"use client";
import {
	Group,
	Divider,
	Box,
	Burger,
	Drawer,
	ScrollArea,
	rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Theme } from "@/components/shared/theme/theme";
import styles from "./header.module.css";

export default function Header() {
	const [drawerOpened, { toggle, close }] = useDisclosure(false);

	return (
		<Box className={styles.mainCont}>
			<header className={styles.header}>
				<Group justify="space-between" h="100%" maw={1920} m="auto">
					<div className={styles.logo}></div>

					<Group h="100%" gap="sm" visibleFrom="sm">
						<a href="#" className={styles.link}>
							ГОЛОВНА
						</a>
						<a href="#departments" className={styles.link}>
							ВІДДІЛИ
						</a>
						<a href="#projects" className={styles.link}>
							ПРОЕКТИ
						</a>
						<Theme />
					</Group>

					<Group h="100%" gap="xs" hiddenFrom="sm">
						<Theme />
						<Burger opened={drawerOpened} onClick={toggle} />
					</Group>
				</Group>
			</header>

			<Drawer
				opened={drawerOpened}
				onClose={close}
				size="100%"
				padding="md"
				title={<div className={styles.logo}></div>}
				hiddenFrom="sm"
				zIndex={1000000}
			>
				<ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
					<Divider my="sm" />
					<a href="#" className={styles.link} onClick={close}>
						ГОЛОВНА
					</a>
					<a
						href="#departments"
						className={styles.link}
						onClick={close}
					>
						ВІДДІЛИ
					</a>
					<a href="#projects" className={styles.link} onClick={close}>
						ПРОЕКТИ
					</a>
				</ScrollArea>
			</Drawer>
		</Box>
	);
}
