import { mm, mmStr } from "@tscircuit/mm"
import { getCcwPosition } from "./utils/get-ccw-position"

interface DualInlinePackageProps {
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

  const h = (pad_count / 2 - 1) * pp

  return (
    <footprint>
      {Array.from({ length: pad_count }).map((_, i) => {
        const { x, y } = getCcwPosition(i, {
          left_side_size: pad_count / 2,
          right_size_size: pad_count / 2,
          pitch: pp,
          space_between_sides: rs,
        })
        const platedHoleNum = i

        return (
          <platedhole
            // @ts-ignore
            key={i}
            x={x}
            y={y}
            port_hints={[`${i + 1}`]}
            hole_diameter={ds}
            outer_diameter={pl}
            inner_diameter={pw}
          />
        )
      })}
    </footprint>
  )
}
