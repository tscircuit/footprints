import { mm, mmStr } from "@tscircuit/mm";

interface PinRowProps {
	pad_count: number;
	pad_pitch?: number | string;
	pad_width?: number | string;
	pad_length?: number | string;
	drill_size?: number | string;
}

export const PinRow = ({
	pad_count,
	drill_size = "0.8mm",
	pad_pitch = "2.54mm",
	pad_width = "1.2mm",
	pad_length = "2mm",
}: PinRowProps) => {
	const pp = mm(pad_pitch);
	const pw = mm(pad_width);
	const pl = mm(pad_length);
	const ds = mm(drill_size);

	const h = pad_count * pp;

	return (
		<footprint>
			{Array.from({ length: pad_count }).map((_, i) => (
				<platedhole
					// @ts-ignore
					key={i}
					pcbX={0}
					pcbY={(pad_count % 2 === 0 ? -pp / 2 : 0) - pp * i + h / 2}
					portHints={[`${i + 1}`]}
					holeDiameter={ds}
					outerDiameter={pl}
				/>
			))}
		</footprint>
	);
};
