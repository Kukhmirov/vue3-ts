import { onMounted, onUnmounted, ref } from "vue";

export default function useMousePosition() {
    const mouseX = ref(0);
    const mouseY = ref(0);

    // Обработчик движения мыши
    function handleMouseMove(event: MouseEvent) {
        mouseX.value = (event.clientX / window.innerWidth) * 2 - 1;
        mouseY.value = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    // Добавление event listener'ов при монтировании компонента
    onMounted(() => {
        window.addEventListener("mousemove", handleMouseMove);
    });

    // Удаление event listener'ов при демонтаже компонента
    onUnmounted(() => {
        window.removeEventListener("mousemove", handleMouseMove);
    });

    return { mouseX, mouseY };
}