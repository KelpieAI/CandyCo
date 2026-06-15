interface WholesaleSuccessOverlayProps {
  visible: boolean
  onBack: () => void
}

export function WholesaleSuccessOverlay({ visible, onBack }: WholesaleSuccessOverlayProps) {
  return (
    <div
      className={`fixed inset-0 z-[800] flex flex-col items-center justify-center bg-void text-center transition-opacity duration-300 ${
        visible
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!visible}
    >
      <span className="text-[72px] leading-none" role="img" aria-label="handshake">
        🤝
      </span>
      <h2 className="font-display mt-6 text-[64px] leading-none tracking-wide text-off">
        GOT IT<span className="text-acid">.</span>
      </h2>
      <p className="mt-4 font-mono text-[10px] font-bold tracking-[0.18em] text-muted uppercase">
        We&apos;ll be in touch within 24 hours
      </p>
      <button
        type="button"
        onClick={onBack}
        className="mt-10 cursor-none bg-acid px-7 py-[14px] font-mono text-[10px] font-bold tracking-[0.14em] text-void uppercase transition-colors hover:bg-[#b0d820]"
      >
        Back to form
      </button>
    </div>
  )
}
