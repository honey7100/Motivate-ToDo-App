<template>
    <div id="imageContainer">
        <img id="backgroundImage" v-bind:src="randomImage()">
    </div>
</template>

<script>
export default {
    name: 'Background',
    data(){
        return{
            imageLink: '',

            picArray: ['https://ismh.s3.amazonaws.com/macos-wallpapers-thumbs/10-14-Night-Thumb.jpg',
            'https://www.jakpost.travel/imgfiles/full/65/656444/italy-desktop-wallpaper.jpg',
            'https://papers.co/wallpaper/papers.co-nx26-snow-street-mountain-light-winter-nature-36-3840x2400-4k-wallpaper.jpg',
            'https://images.pexels.com/photos/513270/pexels-photo-513270.jpeg?cs=srgb&dl=stars-night-forest-sky-513270.jpg&fm=jpg',
            'https://dzbc.org/wp-content/uploads/data/2018/2/18/macbook-pro-backgrounds-hd-PIC-MCH084153.jpg',
            'https://i.imgur.com/Vtx5OH2.jpg',
            'https://ismh.s3.amazonaws.com/macos-wallpapers-thumbs/10-8--thumb.jpg',
            'https://ismh.s3.amazonaws.com/macos-wallpapers-thumbs/10-11--thumb.jpg',
            'https://i.pinimg.com/originals/e8/74/22/e8742219f9ac7faf74dc4b3503ee0a2c.jpg',
            'https://dbav.org.vn/wp-content/uploads/2018/01/puple_beach.jpg'
            ],
        }
    },

    methods:{

        randomImage(){
            let picIndex = Math.random() * this.picArray.length;
            let indexRounded = Math.floor(picIndex); 
            return this.picArray[indexRounded];
        }
    }
}
</script>

<style scoped>
   #backgroundImage{
       position:absolute;
       left: 0px;
       top: 0px;
       height: 100%;
       width: 100%;
       z-index: -1;
   }
</style>