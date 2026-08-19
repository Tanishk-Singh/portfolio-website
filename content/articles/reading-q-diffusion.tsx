export default function ReadingQDiffusionContent() {
  return (
    <>
      <p>Placeholder — replace with the real breakdown.</p>
      <h2>Why post-training quantization, and why diffusion models specifically</h2>
      <p>
        Diffusion models run the same network dozens of times per sample,
        so quantization error compounds across steps in a way it doesn't
        for a single forward pass. That's the design constraint Q-Diffusion
        is actually solving for.
      </p>
    </>
  );
}
