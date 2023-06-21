<template>
    <div class="skill-section">
        <div class="skill-list">
            <div
                v-for="skill in skills"
                :key="skill.title"
                class="skill-card"
            >
                <div class="skill-title">{{ skill.title }}</div>
                <div class="skill-progress-bar">
                    <div
                        class="skill-progress"
                        :style="{ width: skill.count }"
                    />
                </div>
                <div class="skill-percentage">{{ skill.count }}</div>
                <div class="skill-description">{{ skill.description }}</div>
                <a
                    :href="skill.link"
                    class="skill-link"
                >Подробнее</a>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
const skills = [
    {
        title: "HTML",
        count: "90%",
        description: "по результатам тестирования w3schools",
        link: "/",
    },
    {
        title: "CSS/препроц...",
        count: "92%",
        description: "по результатам тестирования w3schools",
        link: "/home",
    },
    {
        title: "JS",
        count: "80%",
        description: "Оценка основана на собственных наблюдениях",
        link: "/about",
    },
    {
        title: "VUE 2^",
        count: "76%",
        description: "Оценка основана на собственных наблюдениях",
        link: "/",
    },
];
</script>
  
<style scoped lang="scss">
  
.skill-section {
    position: relative;
    width: 100%;
    height: 100vh;
    background: wheat;
    z-index: 1;
}
  
.skill-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
  
.skill-card {
    width: 300px;
    height: 350px;
    margin: 20px;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
    text-align: center;
    position: relative;
}
  
.skill-title {
    font-size: 24px;
    font-weight: bold;
}
  
.skill-progress-bar {
    width: 100%;
    height: 20px;
    margin: 20px 0;
    background: #f2f2f2;
    border-radius: 10px;
    position: relative;
}
  
.skill-progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    background: #3c434a;
    border-radius: 10px;
}
  
.skill-percentage {
    font-size: 24px;
    font-weight: bold;
}
  
.skill-description {
    margin: 20px 0;
    font-size: 16px;
}
  
.skill-link {
    font-size: 16px;
    color: #3c434a;
    font-weight: bold;
    text-decoration: none;
    position: absolute;
    bottom: 20px;
    left: 20px;
}
</style>