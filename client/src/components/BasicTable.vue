<template>
    <div>
        <table id="basicTable">
            <thead>
            <tr>
                <th>S.N.</th>
                <th>Name</th>
                <th>Roll No.</th>
                <th>Address</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="row in rows">
                <td>{{row.id}}</td>
                <td>{{row.name}}</td>
                <td>{{row.roll}}</td>
                <td>{{row.address}}</td>
            </tr>
            </tbody>
        </table>
        <basic-info :myInfo="myData" basic-id="basiInfo"></basic-info>
    </div>

</template>
<script>
    import BasicInfo from "./BasicInfo";
    export default {
        components:{
            BasicInfo
        },
        data() {
            return {
                rows:[
                    {id:1,name:"aaa",roll:1,address:"ktm"},
                    {id:2,name:"bbb",roll:2,address:"pokhara"},
                    {id:3,name:"ccc",roll:3,address:"butwal"},
                    {id:4,name:"ddd",roll:4,address:"palpa"},
                    {id:5,name:"eee",roll:5,address:"chitwan"},
                    ],
                myData :{
                    projectData:
                        {id: 1, firstName: "eugene", lastName: "lipkovich", email: "eugene@gmail.com", phone: null}
                    ,
                    places: ["Kathmandu", "Pokhara", "Chitwan"],

                    Districts: [{id: 1, name: "kathmandu"}, {id: 2, name: "bhaktapur"}, {id: 3, name: "lalitpur"}],

                    Foods: ["Daal", "Vaat", "Tarkari"]
                }
            }
        },
    }




</script>