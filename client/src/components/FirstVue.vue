<template>
    <div>
    <h1>Hello World</h1>
        <input type="text" placeholder="Enter Your Name Here." v-model = "myFirstName"><br><br>
        <input type="number" v-model = "myAge"><br><br>
        Select your country
        <select v-model="selectedValue" multiple>
        <option >Nepal</option>
        <option>India</option>
    </select>
        <br><br>
        <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"><br><br>
    <input type="button" value="Click Me" @click="example">
    </div>
</template>

<script>
    export default {
        name: "FirstVue",
        data() {
            return {
                selectedValue:[],
                myFirstName:"",
                myAge:"",
                file :"",
                message: 'Hello World',
                takeDataFromServer: null,
                serverURL: 'http://localhost:8085'
            }
        },
        methods: {
            example: function () {
                let paramsMap = {message: ''};
                const myName = this.myFirstName;
                const myAge = this.myAge;
                const selected = this.selectedValue;

                let formData = new FormData();
                formData.append('file', this.file);
                formData.append('name',myName);
                formData.append('age',myAge)

                paramsMap['name'] = myName;
                paramsMap['age'] = myAge;
                paramsMap['select'] = selected;
                paramsMap.message = this.message;

                const jsonParamsString = JSON.stringify(paramsMap);
                fetch(`${this.serverURL}/file`,
                    {
                        method: 'POST',
                        body: formData
                    })
                    .then(response => {
                        const res = response.json();
                        console.log("Inside response");
                        return res
                    })
                    .then(json => {
                        console.log("jon doe");
                        this.takeDataFromServer = json.msg
                        console.log(json.msg)
                    })
            },

            handleFileUpload: function () {
                this.file = this.$refs.file.files[0];


            }
        }
    }
</script>

<style scoped>

</style>