<style src="./style.css"  scoped></style>

<template>

	<transition name="list">

		<div class="listPosition" id="list">

			<div class="container col-sm-12 col-lg-9  mb-2">
				<div class="clearfix">
					<button type="button" id="existDetail" class="btn btn-light float-right" @click="showDetail()" >Details <span class="fas fa-chevron-right"></span></button><!--detail button-->
				</div>
			</div>
			<div id="places_table"  class="container col-sm-12 col-lg-9">
				<table class="table table-hover"><!--place list-->
					<thead><tr><th scope="col">#</th><th scope="col">Category</th><th scope="col">Name</th><th scope="col">Address</th><th scope="col">Favorite</th><th scope="col">Details</th></tr></thead>
					<tbody>
						<tr v-for="(item,index) in placeLists.results">
							<th scope="row">{{index+1}}</th>
							<td><img :src="item.icon"></td>
							<td><a>{{item.name}}</a></td>
							<td><a>{{item.vicinity}}</a></td>
							<td><button  class="btn btn-light" @click="addOrRemoveItem(item)"><span  :id="item.place_id" :class="[inFavoriteList(item) ? 'fas' : 'far', 'fa-star']" :style="{ color:inFavoriteList(item) ? '#EEE000' : '#000000'}" ></span></button></td>
							<td><button  id="showDetail" type="button" class="btn btn-light" @click="requestPlaceDetail(item.place_id)" ><span class="fas fa-chevron-right"></span></button></td>
						</tr>
					</tbody>
				</table>
			</div><!--table-->
			<div class="container my-3">
				<div class="text-center">
					<button v-if="page >0"class="btn btn-light mr-1" id="previousBtn" href="#" @click="showPrevPage()">Previous</button>
					<button v-if="page <2"class="btn btn-light" id="nextBtn" href="#" @click="requestNextPage()">Next</button>
				</div>
			</div>
		</div>
	</transition>
	
</template>
<script src="./index.js"></script>