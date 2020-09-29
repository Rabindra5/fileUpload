<template>
  <div>
    <div id="cameraButton" class="web-camera-container">
      <div class="camera-button">
        <button type="button" class="button is-rounded" :class="{ 'is-primary' : !isCameraOpen, 'is-danger' : isCameraOpen}" @click="toggleCamera">
          <span v-if="!isCameraOpen">Open Camera</span>
          <span v-else>Close Camera</span>
        </button>
      </div>


      <div v-if="isCameraOpen" v-show="!isLoading" class="camera-box" :class="{ 'flash' : isShotPhoto }">

        <div class="camera-shutter" :class="{'flash' : isShotPhoto}"></div>

        <video v-show="!isPhotoTaken" ref="camera" :width="450" :height="337.5" autoplay></video>

        <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="450" :height="337.5"></canvas>
      </div>

      <div v-if="isCameraOpen && !isLoading" class="camera-shoot">
        <button type="button" class="button" @click="takePhoto">
          <img src="https://img.icons8.com/material-outlined/50/000000/camera--v2.png">
        </button>
      </div>
    </div>

      <div v-if="isPhotoTaken && isCameraOpen" class="camera-download">

      </div>
      <div id="my-strictly-unique-vue-upload-multiple-image" style="display: flex; justify-content: center;">
        <vue-upload-multiple-image
            @upload-success="uploadImageSuccess"
            @before-remove="beforeRemove"
            @edit-image="editImage"
            :data-images="images"
            idUpload="myIdUpload"
            editUpload="myIdEdit"
            :maxImage=20
            capture = "camera"
            primaryText = ""
            browseText = "Browse picture(s)"
            dragText = "Drag pictures"
        ></vue-upload-multiple-image>
      </div>
    </div>

</template>

<script>
import VueUploadMultipleImage from "vue-upload-multiple-image";

export default {
  name: "PhotoTakenThirdExample",
  data (){
    return{
      images: [],
      url: null,
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: '#',
    }
  },
  components: {
    VueUploadMultipleImage
  },
  methods: {
    downloadImage() {
      const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")
          .replace("image/jpeg", "image/octet-stream");
      let cameraPhotoDetails = {default:1,highlight:0,name:'myPhoto.jpg',path:canvas}
      this.images = [cameraPhotoDetails]
      // this.stopCameraStream()
    },
    toggleCamera() {
      if (this.isCameraOpen) {
        this.isCameraOpen = false;
        this.isPhotoTaken = false;
        this.isShotPhoto = false;
        this.stopCameraStream();
      } else {
        this.isCameraOpen = true;
        this.createCameraElement();
      }
    },

    createCameraElement() {
      this.isLoading = true;

      const constraints = (window.constraints = {
        audio: false,
        video: true
      });


      navigator.mediaDevices
          .getUserMedia(constraints)
          .then(stream => {
            this.isLoading = false;
            this.$refs.camera.srcObject = stream;
          })
          .catch(error => {
            this.isLoading = false;
            alert("May the browser didn't support or there is some errors.");
          });
    },

    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();

      tracks.forEach(track => {
        track.stop();
      });
    },

    takePhoto() {
      if (!this.isPhotoTaken) {
        this.isShotPhoto = true;

        const FLASH_TIMEOUT = 50;

        setTimeout(() => {
          this.isShotPhoto = false;
        }, FLASH_TIMEOUT);
      }

      this.isPhotoTaken = !this.isPhotoTaken;

      const context = this.$refs.canvas.getContext('2d');
      context.drawImage(this.$refs.camera, 0, 0, 450, 337.5);
      const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")
          .replace("image/jpeg", "image/octet-stream");
      let cameraPhotoDetails = {default:1,highlight:0,name:'myPhoto.jpg',path:canvas}
      this.images = [cameraPhotoDetails]
    },
    uploadImageSuccess(formData, index, fileList) {
      console.log('data', formData, index, fileList)
      // Upload image api
      // axios.post('http://your-url-upload', formData).then(response => {
      //   console.log(response)
      // })
    },
    beforeRemove (index, done, fileList) {
      console.log('index', index, fileList)
      var r = confirm("remove image")
      if (r == true) {
        done()
      } else {
      }
    },
    editImage (formData, index, fileList) {
      console.log('edit data', formData, index, fileList)
    }
  },
}

</script>

<style scoped>
#my-strictly-unique-vue-upload-multiple-image {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
#photoUpload {
  padding: 20px;
}

#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 500px;
}
.web-camera-container {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 500px;
}


.camera-button {
  margin-bottom: 2rem;
}

.camera-box.camera-shutter {
  opacity: 0;
  width: 450px;
  height: 337.5px;
  background-color: #fff;
  position: absolute;
}
.flash {
  opacity: 1;
}

.camera-shoot {
  margin: 1rem 0;
}

.button-is-rounded,.button-camera {
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
}

.takenImage {
  height: 35px;
  object-fit: cover;
}

</style>