<style src="./style.css"  scoped></style>

<template>

	<div class="listPosition" id="list">

		<div class="container col-sm-12 col-lg-9  mb-2">
			<div class="clearfix">
				<button type="button" id="existDetail" class="btn btn-light float-right" @click="showExistDetail()" disabled>Details <span class="fas fa-chevron-right"></span></button><!--detail button-->
			</div>
		</div>
		<div id="places_table"  class="container col-sm-12 col-lg-9">
			<table class="table table-hover"><!--place list-->
				<thead><tr><th scope="col">#</th><th scope="col">Category</th><th scope="col">Name</th><th scope="col">Address</th><th scope="col">Favorite</th><th scope="col">Details</th></tr></thead>
				<tbody>
					<tr v-for="item in placeLists">
						<th scope="row"></th>
						<td><img :src="item.icon"></td>
						<td><a>{{item.name}}</a></td>
						<td><a>{{item.vicinity}}</a></td>
						<td><button  class="btn btn-light" @click="addOrRemoveItem(item)"><span class="far fa-star"></span></button></td>
						<td><button  id="showDetail" type="button" class="btn btn-light" @click="requestPlaceDetail(item.place_id)" ><span class="fas fa-chevron-right"></span></button></td>
					</tr>
				</tbody>
			</table>
		</div><!--table-->
		<div class="container my-3">
			<div class="text-center">
				<button class="btn btn-light" id="previousBtn" href="#" @click="prevPage()">Previous</button>
				<button class="btn btn-light" id="nextBtn" href="#" @click="nextPage()">Next</button>
			</div>
		</div>
	</div>
	
</template>
<script src="./index.js"></script>