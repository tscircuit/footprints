import { PinRow } from "../src/PinRow"

export const PinRow1 = () => (
  <bug
    port_arrangement={{
      left_size: 12,
      right_size: 12,
    }}
    port_labels={{}}
    footprint={
      <PinRow
        pad_count={6}
        drill_size="0.8mm"
        pad_pitch="2.54mm"
        pad_length="2mm"
      />
    }
  />
)
