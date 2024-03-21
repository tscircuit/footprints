import { Smd0402, Smd0603, Smd0805 } from "../src/CommonSmd"

export const CommonSmd1 = () => (
  <group>
    <resistor
      name="0402"
      resistance="10kohm"
      pcb_x={0}
      pcb_y={0}
      footprint={<Smd0402 />}
    />
    <resistor name="0603" resistance="10kohm" footprint={<Smd0603 />} />
    <resistor name="0805" resistance="10kohm" footprint={<Smd0805 />} />
  </group>
)
