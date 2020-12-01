<template>


<div id="my-strictly-unique-vue-upload-multiple-image" style="display: flex; justify-content: center;">
<elintegro-multiple-image
    @upload-success="uploadImageSuccess"
    idUpload="myIdUpload"
    editUpload="myIdEdit"
    :maxImage=20
    capture = "camera"
    primaryText = ""
    browseText = "Browse picture(s)"
    :show-delete = true
    dragText = "Drag pictures"
></elintegro-multiple-image>
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
import ElintegroMultipleImage from "@/components/ElintegroMultipleImage";
export default {

  name: "PhotoTaken",
  data() {
    return {
      images: [],
    }
  },
  components: {
    ElintegroMultipleImage
  },
  methods: {
    uploadImageSuccess(formData, index, fileList) {
      console.log('data', formData, index, fileList)
      // Upload image api
      // axios.post('http://your-url-upload', formData).then(response => {
      //   console.log(response)
      // })
    },
  },

}

</script>


