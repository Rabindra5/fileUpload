<template>


<div id="my-strictly-unique-vue-upload-multiple-image" style="display: flex; justify-content: center;">
<v-camera
    @upload-success="uploadImageSuccess"
    @before-remove="beforeRemove"
    @edit-image="editImage"
    :data-images= 'images'
    idUpload="myIdUpload"
    editUpload="myIdEdit"
    :maxImage=20
    capture = "camera"
    primaryText = ""
    browseText = "Browse picture(s)"
    dragText = "Drag pictures"
></v-camera>
</div>
</template>
<style>
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

</style>

<script>
// import ElintegroMultipleImage from "@/components/ElintegroMultipleImage";
export default {

  name: "PhotoTaken",
  data() {
    return {
      images: [],
    }
  },
  components: {
    // ElintegroMultipleImage
  },
  methods: {
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


