import mm, { mmStr } from "@tscircuit/mm"

interface SmallOutlineProps {
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

  const h =
    row_count === 1
      ? pp * (pad_count - 1) + pl * pp
      : row_count === 2
      ? (pad_count / 2 - 1) * pp
      : 0

  const getXY = (i: number): { x: number; y: number } => {
    if (row_count === 1) {
      return {
        x: 0,
        y: pp * (i + 1) - h / 2,
      }
    } else if (row_count === 2) {
      return {
        x: i % 2 === 0 ? -rs / 2 : rs / 2,
        y: pp * Math.floor(i / 2) - h / 2,
      }
    } else {
      throw new Error(`Row count not implemented row_count=${row_count}`)
    }
  }

  return (
    <footprint>
      {Array.from({ length: pad_count }).map((_, i) => (
        <smtpad
          {...getXY(i)}
          // port_hints={[`${i + 1}`]}
          shape="rect"
          width={pw}
          height={pl}
        />
      ))}
    </footprint>
  )
}

export const SOIC = SmallOutline
