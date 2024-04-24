import { mm, mmStr } from "@tscircuit/mm"

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

  /**
   * Get the x and y coordinates of the pad at index i, where i is the top left
   * corner and we go CCW from there.
   *
   * e.g.
   *
   *    1    8
   *    2    7
   *    3    6
   *    4    5
   */
  const getXY = (i: number): { x: number; y: number } => {
    if (i < pad_count / 2) {
      return {
        x: -rs / 2,
        y: -pp * i + h / 2,
      }
    } else {
      return {
        x: rs / 2,
        y: -pp * (pad_count - i - 1) + h / 2,
      }
    }
  }

  return (
    <footprint>
      {Array.from({ length: pad_count }).map((_, i) => (
        <smtpad
          {...getXY(i)}
          port_hints={[`${i + 1}`]}
          shape="rect"
          width={pw}
          height={pl}
        />
      ))}
    </footprint>
  )
}

export const SOIC = SmallOutline
