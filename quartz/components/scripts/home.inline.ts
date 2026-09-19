document.addEventListener("nav", () => {
  const home = document.querySelector<HTMLElement>(".home-content")
  if (!home) return

  const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
  const pointer = window.matchMedia("(hover: hover) and (pointer: fine)")

  for (const panel of home.querySelectorAll<HTMLElement>(".world")) {
    let frame = 0
    const move = (event: PointerEvent) => {
      if (motion.matches || !pointer.matches || event.pointerType === "touch") return
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const bounds = panel.getBoundingClientRect()
        panel.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`)
        panel.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`)
      })
    }
    const reset = () => {
      cancelAnimationFrame(frame)
      panel.style.removeProperty("--pointer-x")
      panel.style.removeProperty("--pointer-y")
    }
    panel.addEventListener("pointermove", move)
    panel.addEventListener("pointerleave", reset)
    window.addCleanup(() => {
      reset()
      panel.removeEventListener("pointermove", move)
      panel.removeEventListener("pointerleave", reset)
    })
  }
})
