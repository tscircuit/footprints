import mm, { mmStr } from "@tscircuit/mm"

export interface PinRowProps {
  pad_count: number
  pad_pitch?: number | string
  pad_width?: number | string
  pad_length?: number | string
  drill_size?: number | string
}

export const PinRow = ({
  pad_count,
  drill_size = "0.8mm",
  pad_pitch = "2.54mm",
  pad_width = "1.2mm",
  pad_length = "2mm",
}: PinRowProps) => {
  const pp = mm(pad_pitch)
  const pw = mm(pad_width)
  const pl = mm(pad_length)
  const ds = mm(drill_size)

  const h = pad_count * pp

  return (
    <footprint>
      {Array.from({ length: pad_count }).map((_, i) => (
        <platedhole
          x={0}
          y={(i % 2 === 0 ? 0 : pp / 2) + pp * i - h / 2}
          port_hints={[`${i + 1}`]}
          hole_diameter={ds}
          outer_diameter={pl}
          inner_diameter={pw}
        />
      ))}
    </footprint>
  )
}
