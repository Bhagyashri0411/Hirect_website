<template>
<div>
    <!-- map The container must be written on it -->
    <div id="GmapsLittle" />

    <!-- jsUrl="https://ditu.google.cn/maps/api/js?v=3&key=AIzaSyCxUAZ3vLOBjYnVkacfPIPc8mVJ5MzoXGo" -->
    <!-- jsUrl="https://maps.google.com/maps/api/js?sensor=false&key=AIzaSyCxUAZ3vLOBjYnVkacfPIPc8mVJ5MzoXGo" -->
    <remote-js js-url="https://maps.googleapis.com/maps/api/js?&key=AIzaSyCxUAZ3vLOBjYnVkacfPIPc8mVJ5MzoXGo" :js-load-call-back="loadRongJs" />
</div>
</template>

<script>
import RemoteJs from './remote'
// import google from 'google'

export default {
    components: {
        RemoteJs
    },
    props: {
        mapData: {
            type: Object,
            required: true
        }
    },
    created() {},
    updated() {},
    methods: {
        loadRongJs() {
            var options = {
                zoom: 15,
                center: {
                    lat: this.mapData.latitude,
                    lng: this.mapData.longitude
                },
                disableDefaultUI: true,
                zoomControl: false,
                mapTypeControl: false,
                streetViewControl: false,
                language: 'en'
            }

            var map = new window.google.maps.Map(document.getElementById('GmapsLittle'), options)
            const marker = new window.google.maps.Marker({
                position: {
                    lat: this.mapData.latitude,
                    lng: this.mapData.longitude
                },
                map: map,
                title: 'Google Map',
                width: '20px',
                height: '20px'
            })
            marker.setMap(map)

            var infowindow = new window.google.maps.InfoWindow({
                content: this.mapData.address
            })
            marker.addListener('click', function () {
                infowindow.open(map, marker)
            })
        },
        initLocation(val) {
            this.mapData = val
            this.loadRongJs()
        }
    }
}
</script>

<style lang="scss" scoped>
#GmapsLittle {
    width: 100%;
    height: 185px;
    border-radius: 5px;
}
</style>
