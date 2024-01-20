<template>
    <div>
        <a href="https://wa.me/573022868300?text=Me%20gustaría%20saber%20el%20precio%20del%20coche" class="whatsapp"
            target="_blank">
            <i class="fa fa-whatsapp whatsapp-icon"></i>
        </a>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.whatsapp {
    position: fixed;
    width: 65px;
    height: 65px;
    bottom: 100px;
    right: 60px;
    background-color: #128C7E;
    color: #FFF;
    border-radius: 50px;
    text-align: center;
    font-size: 38px;
    z-index: 100;
    transition: transform 0.3s ease;
}

.whatsapp-icon {
    margin-top: 13px;
}

.whatsapp:hover {
    transform: scale(1.1);
    background-color: #25d366;
}
</style>
