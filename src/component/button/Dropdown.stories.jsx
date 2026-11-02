import React, { useState } from "react";
import { Dropdown } from "./Dropdown";

export default {
	title: "Atomic/Button/Button Dropdown",
	component: Dropdown,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		value: { control: "text" },
		placeholder: { control: "text" },
		forceOpen: { control: "boolean" },
	},
};

const InteractiveDropdown = (args) => {
	const [value, setValue] = useState(args.value);
	return <Dropdown {...args} value={value} onChange={setValue} />;
};

/**
 * Contoh Penggunaan Generik:
 */
export const Default = {
	render: (args) => <InteractiveDropdown {...args} />,
	args: {
		placeholder: "Pilih Role Pengguna",
		options: ["Admin", "Mahasiswa", "Dosen", "Guest"],
	},
};

export const Semester = {
	render: (args) => <InteractiveDropdown {...args} />,
	args: {
		placeholder: "Pilih Semester",
		options: ["Semua", "Semester 1", "Semester 2", "Semester 3", "Semester 4"],
	},
};

export const Status = {
	render: (args) => <InteractiveDropdown {...args} />,
	args: {
		placeholder: "Pilih Status",
		options: ["Aktif", "Tidak Aktif", "Demisioner"],
	},
};

export const Angkatan = {
	render: (args) => <InteractiveDropdown {...args} />,
	args: {
		placeholder: "Pilih Angkatan",
		options: ["2021", "2022", "2023", "2024", "2025", "2026"],
	},
};
