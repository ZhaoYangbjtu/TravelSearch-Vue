<style src="./style.css"  scoped></style>

<template>
<div>

		<div class="container col-sm-12 col-lg-9 mb-1">
			<h3 id="placeName" class="text-center"></h3>
		</div>
		<div class="container  col-sm-12 col-12 col-lg-9 mb-1">
			<div class="clearfix">
				<button type="button" id="showList" class="btn btn-light float-left" @click="showList()" >
					<span class="fas fa-chevron-left"></span> List
				</button><!--list button-->
				<a href="" id="twitter"><button  class="btn btn-light float-right p-0"><img src="http://cs-server.usc.edu:45678/hw/hw8/images/Twitter.png" style="width:38px;height:34px"></button></a>
				<button  class="btn btn-light float-right mr-2"  @click="addItem()"><span id="favStar" class="far fa-star"></span></button>
			</div>
		</div>
		<div class="col-sm-12 col-12 col-lg-9 container" ><!--navbar-->
			<ul class="nav nav-tabs justify-content-end" id="myTab" role="tablist">
				<li class="nav-item">
					<a class="nav-link active" id="details-tab" data-toggle="tab" href="#details" role="tab" aria-controls="details" aria-selected="true">Info</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" id="photos-tab" data-toggle="tab" href="#photos" role="tab" aria-controls="photos" aria-selected="false" >Photos</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" id="route-tab" data-toggle="tab" href="#route" role="tab" aria-controls="route" aria-selected="false">Map</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab"  aria-controls="reviews" aria-selected="false">Reviews</a>
				</li>
			</ul>
			<div class="tab-content my-3" id="myTabContent">
				<div class="tab-pane fade show active" id="details" role="tabpanel" aria-labelledby="details-tab">


				</div>
				<div class="tab-pane fade" id="photos" role="tabpanel" aria-labelledby="photos-tab">
					<div class="container col-12 noRecords rounded  my-5" id="noPhotoResult">
						<span >No records</span>
					</div>
					<div id="photoList" class="col-12">
						<div class="card-columns p-2">
							<div class="card" v-for="item in placeDetail.photos">
								<a :href="photoUrl+item.photo_reference" target="_blank">
									<img class="img-thumbnail  w-100 img-fluid " :src="photoUrl+item.photo_reference" >
								</a>
							</div>
						</div>
					</div>

				</div>
				<div class="tab-pane fade" id="route" role="tabpanel" aria-labelledby="route-tab">


				</div>

				<div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">


				</div>
			</div>
		</div>
</div>
</template>

<script src="./index.js"></script>