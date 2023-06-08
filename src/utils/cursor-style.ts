class CursorPlugin {
    private cursor: HTMLElement;
  
    constructor() {
        this.cursor = document.createElement("div");
        this.cursor.classList.add("cursor");
        document.body.appendChild(this.cursor);
    }
  
    public show(name?: string) {
        this.cursor.innerHTML = name || "click";
        this.cursor.style.transform = "translate(-50%, -50%) scale(1)";
    }
  
    public hide() {
        this.cursor.style.transform = "translate(-50%, -50%) scale(0)";
    }
  
    public move(e: MouseEvent) {
        this.cursor.style.left = `${e.clientX}px`;
        this.cursor.style.top = `${e.clientY}px`;
    }
}

export const cursorPlugin = new CursorPlugin();