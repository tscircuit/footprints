import mm, { mmStr } from "@tscircuit/mm"

export interface DualInlinePackageProps {
  pad_count: number
  pad_pitch?: number | string
  pad_width?: number | string
  pad_length?: number | string
  row_spacing?: number | string
  drill_size?: number | string
}

export const DualInlinePackage = ({
  pad_count,
  drill_size = "0.8mm",
  pad_pitch = "2.54mm",
  pad_width = "1.2mm",
  pad_length = "2mm",
  row_spacing = "7.52mm",
}: DualInlinePackageProps) => {
  const pp = mm(pad_pitch)
  const pw = mm(pad_width)
  const pl = mm(pad_length)
  const rs = mm(row_spacing)
  const ds = mm(drill_size)

  return (
    <footprint>
      {Array.from({ length: pad_count }).map((_, i) => (
        <platedhole
          x={i % 2 === 0 ? -rs / 2 : rs / 2}
          y={pp * Math.floor(i / 2)}
          port_hints={[`${i + 1}`]}
          hole_diameter={ds}
          outer_diameter={pl}
          inner_diameter={pw}
        />
      ))}
      {/* <platedhole
        port_hints={["1"]}
        x={-1}
        y={-1}
        hole_diameter={1}
        outer_diameter={1.5}
        inner_diameter={0.5}
      /> */}
      {/* <platedhole
        x={-1}
        y={0}
        hole_diameter={1}
        outer_diameter={1.5}
        inner_diameter={0.5}
      /> */}
    </footprint>
  )
}
