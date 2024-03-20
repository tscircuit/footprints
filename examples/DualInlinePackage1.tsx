import { DualInlinePackage } from "../src/DualInlinePackage"

export const DualInlinePackage1 = () => (
  <bug
    port_arrangement={{
      left_size: 12,
      right_size: 12,
    }}
    port_labels={{}}
    footprint={
      <DualInlinePackage
        pad_count={24}
        drill_size="0.8mm"
        pad_pitch="2.54mm"
        pad_length="2mm"
        row_spacing="7.52mm"
      />
    }
  />
)
