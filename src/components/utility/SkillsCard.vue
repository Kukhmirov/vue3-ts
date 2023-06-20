<template>
    <div class="skills__card">
        <h5>
            <slot name="title" />
        </h5>
        <span class="skills__card-count">
            <slot name="count" />
        </span>
        <p class="skills__description">
            <slot name="description" />
        </p>
    </div>
</template>

<script setup lang="ts">

</script>
  
<style scoped lang="scss">
    .skills {
        &__card {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            width: 200px;
            height: 200px;
            padding: 20px;
            backdrop-filter: blur(5px);
            background-color: rgba(255, 255, 255, 0.01);
            transition: background-color 0.3s ease-in-out;
            color: white;
            &:hover {
                background-color: rgba(255, 255, 255, 0.2);
                cursor: none;
                // filter: blur(3px);
                &::before {
                    opacity: 1;
                }
                &::after {
                    opacity: 0.6;
                }
            }
            &::after {
                content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0.07;
                    z-index: 1;
                    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8),
                        0 0 50px rgba(255, 255, 255, 0.6),
                        0 0 80px rgba(255, 255, 255, 0.4),
                        0 0 100px rgba(255, 255, 255, 0.2);
                    transition: opacity 0.3s ease-in-out;
            }
            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0.2;
                z-index: -1;
                background-color: rgba(255, 255, 255, 0.2);
                transition: opacity 0.3s ease-in-out;
            }
        }
        .skills__card-count {
            font-size: 48px;
        }
        &__description {
            text-align: center;
        }
    }
  </style>