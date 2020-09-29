<template>
  <div>
  <div id="photoUpload" v-if="hideOrShowPhotoUpload">
    <input type="file" @change="onFileChange" multiple accept="image/*"/></div>

    <div id="preview">
      <img v-if="url" :src="url" />
    </div>
    <div id="app" class="web-camera-container" v-if="cameraShowHide">
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

      <div v-if="isPhotoTaken && isCameraOpen" class="camera-download">
        <a id="downloadPhoto" download="my-photo.jpg" class="button" role="button" @click="downloadImage">
          Download
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoTakenSecondExample",
  data() {
    return {
      url: null,
      hideOrShowPhotoUpload : true,
      cameraShowHide : true,
      isCameraOpen: false,
      isPhotoTaken: false,
      isShotPhoto: false,
      isLoading: false,
      link: '#',
    }
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      this.hideOrShowPhotoUpload = false
      this.cameraShowHide = false
    },
    downloadImage() {
      const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")
          .replace("image/jpeg", "image/octet-stream");
     this.url = canvas
      this.cameraShowHide = false
      this.hideOrShowPhotoUpload = false
      this.stopCameraStream()
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
    },
  },
}
</script>

<style scoped>
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