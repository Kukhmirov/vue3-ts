class CursorPlugin {
    private cursor: HTMLElement;
  
    constructor() {
        this.cursor = document.createElement("div");
        this.cursor.classList.add("cursor", "font", "pro-display", "s", "s--700");
        document.body.appendChild(this.cursor);
    }
  
    public show(e: MouseEvent, name?: string) {
        const target = e.currentTarget as HTMLElement;
        target.classList.add("hidden-text");
        this.cursor.innerHTML = name || "click";
        this.cursor.style.transform = "translate(-50%, -50%) scale(1)";
    }
  
    public hide(e: MouseEvent) {
        const target = e.target as HTMLElement;
        target.classList.remove("hidden-text");
        this.cursor.style.transform = "translate(-50%, -50%) scale(0)";
    }
  
    public move(e: MouseEvent) {
        this.cursor.style.left = `${e.clientX}px`;
        this.cursor.style.top = `${e.clientY}px`;
    }
}

export const cursorPlugin = new CursorPlugin();