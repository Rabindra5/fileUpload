<template>
    <div>
    <h1>Hello World</h1>
        <v-text-field label="First Name" placeholder="Enter Your Name Here." v-model = "myFirstName"></v-text-field>
        <v-text-field label="Age" placeholder="Enter your age." type="number" v-model = "myAge"></v-text-field>
<!--        Select your country-->
<!--        <v-select v-model="selectedValue"  :items="countries" multiple>-->
<!--    </v-select>-->
        <br><br>
        <v-file-input ref="file" v-on:change="handleFileUpload()"></v-file-input><br><br>
        <v-btn type="button"  @click="example">Click Me</v-btn>
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
                countries:['Nepal','India','Japan','USA','Australia','China','Dubai'],
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
                formData.append('age',myAge);

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