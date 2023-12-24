"use client";
import cx from "clsx";
import {
	ActionIcon,
	useMantineColorScheme,
	useComputedColorScheme,
	Group,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import styles from "./theme.module.css";

export function Theme() {
	const { setColorScheme } = useMantineColorScheme();
	const computedColorScheme = useComputedColorScheme("light", {
		getInitialValueInEffect: true,
	});

	return (
		<Group justify="center">
			<ActionIcon
				onClick={() =>
					setColorScheme(
						computedColorScheme === "light" ? "dark" : "light"
					)
				}
				variant="default"
				size="xl"
				aria-label="Toggle color scheme"
			>
				<IconSun
					className={cx(styles.icon, styles.light)}
					stroke={1.5}
				/>
				<IconMoon
					className={cx(styles.icon, styles.dark)}
					stroke={1.5}
				/>
			</ActionIcon>
		</Group>
	);
}
