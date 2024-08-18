import { mm, mmStr } from "@tscircuit/mm";

interface AxiosProps {
	spread?: string | number;
	orientation?: "horizontal" | "vertical";
	hole_diameter?: string | number;
	outer_diameter?: string | number;
	inner_diameter?: string | number;
}

export const Axial = ({
	spread = "0.2in",
	orientation = "horizontal",
	hole_diameter = "0.8mm",
	inner_diameter = "1.2mm",
	outer_diameter = "2mm",
}: AxiosProps) => {
	const sp = mm(spread);

	const spx = orientation === "horizontal" ? sp : 0;
	const spy = orientation === "vertical" ? sp : 0;

	const hd = mm(hole_diameter);
	const id = mm(inner_diameter);
	const od = mm(outer_diameter);

	return (
		<footprint>
			<platedhole
				pcbX={-spx / 2}
				pcbY={0}
				portHints={["1", "left"]}
				holeDiameter={hd}
				outerDiameter={od}
				shape="circle"
			/>
			<platedhole
				pcbX={spx / 2}
				pcbY={0}
				portHints={["2", "right"]}
				holeDiameter={hd}
				outerDiameter={od}
				shape="circle"
			/>
		</footprint>
	);
};
