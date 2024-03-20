import mm, { mmStr } from "@tscircuit/mm"

export interface SmallOutlineProps {
  pad_count: number
  row_count?: number
  pad_pitch?: number | string
  pad_width?: number | string
  pad_length?: number | string
  row_spacing?: number | string
}

export const SmallOutline = ({
  pad_count,
  row_count = 2,
  pad_pitch = "2.54mm",
  pad_width = "1.2mm",
  pad_length = "2mm",
  row_spacing = "7.52mm",
}: SmallOutlineProps) => {
  const pp = mm(pad_pitch)
  const pw = mm(pad_width)
  const pl = mm(pad_length)
  const rs = mm(row_spacing)

  const h = (pad_count / 2 - 1) * pp

  return (
    <footprint>
      {Array.from({ length: pad_count }).map((_, i) => (
        <smtpad
          x={i % 2 === 0 ? -rs / 2 : rs / 2}
          y={pp * Math.floor(i / 2) - h / 2}
          // port_hints={[`${i + 1}`]}
          shape="rect"
          width={pw}
          height={pl}
        />
      ))}
    </footprint>
  )
}
