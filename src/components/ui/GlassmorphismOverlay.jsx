export default function GlassmorphismOverlay() {
  return (
    <>
      {/* Vertical gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9]/50 via-[#FFFDF9]/20 to-transparent dark:from-[#000080]/20 dark:via-[#000080]/8 dark:to-transparent pointer-events-none" />

      {/* Horizontal gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDF9]/20 via-[#FFFDF9]/40 to-[#FFFDF9]/20 dark:from-transparent dark:via-[#000080]/15 dark:to-transparent pointer-events-none" />
    </>
  )
}
