<style src="./style.css"  scoped></style>
<template>
    <div id="favoriteTable">
        <div class="container col-sm-12 col-lg-9  mb-2">
            <div class="clearfix">
                <button type="button" id="deleteDetail" class="btn btn-light float-right" @click="showExistDetail()" disabled>Details <span class="fas fa-chevron-right"></span></button><!--detail button-->
            </div>
        </div>
        <div  class="container col-sm-12 col-lg-9">
            <table  class="table table-hover" ><!--favorite list-->
                <thead><tr><th scope="col">#</th><th scope="col">Category</th><th scope="col">Name</th><th scope="col">Address</th><th scope="col">Favorite</th><th scope="col">Details</th></tr></thead>

                <tbody>
                <tr v-for="(x,index) in favoriteList">
                    <th scope="row">{{index+1}}</th>
                    <td><img :src="x.icon"></td>
                    <td><a>{{x.name}}</a></td>
                    <td><a>{{x.vicinity}}</a></td>
                    <td><button  class="btn btn-light" @click="removeItem(x)"><span id="x.place_id" class="far fa-trash-alt"></span></button></td>
                    <td><button  id="showDetail" type="button" class="btn btn-light" @click="showDetail(x.place_id)" ><span class="fas fa-chevron-right"></span></button></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script src="./index.js"></script>