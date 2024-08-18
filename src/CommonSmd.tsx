import { mm, mmStr } from "@tscircuit/mm";

/**
 * TODO we should load in recommended pad layouts for these, this is
 * currently just a quick heuristic
 */
const generateCommonDualPad =
	({
		w,
		h,
		pitch,
		pad_width,
		pad_height,
	}: {
		w: string | number;
		h: string | number;
		pitch?: string | number;
		pad_width?: string | number;
		pad_height?: string | number;
	}) =>
	() => {
		pitch ??= mm(w);
		pad_width ??= mm(w) / 2;
		pad_height ??= mm(w) / 2;
		return (
			<footprint>
				<smtpad
					pcbX={-mm(pitch) / 2}
					pcbY={0}
					portHints={["1"]}
					shape="rect"
					width={pad_width}
					height={pad_height}
				/>
				<smtpad
					pcbX={mm(pitch) / 2}
					pcbY={0}
					portHints={["2"]}
					shape="rect"
					width={pad_width}
					height={pad_height}
				/>
			</footprint>
		);
	};

// https://www.pcblibraries.com/Forum/0402-min-size-land-pattern_topic30.html
export const Smd0402 = generateCommonDualPad({
	w: "0.04in",
	h: "0.02in",
	pitch: "1mm",
});
export const Smd0603 = generateCommonDualPad({ w: "0.06in", h: "0.03in" });
export const Smd0805 = generateCommonDualPad({ w: "0.08in", h: "0.05in" });
export const Smd1206 = generateCommonDualPad({ w: "0.12in", h: "0.06in" });
export const Smd1210 = generateCommonDualPad({ w: "0.12in", h: "0.10in" });
export const Smd2512 = generateCommonDualPad({ w: "0.25in", h: "0.12in" });
