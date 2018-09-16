<style src="./style.css"  scoped></style>

<template>
	<div class="detailPosition" id="navTab">
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
					<div id="info">
					</div>

					<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog modal-dialog-centered " role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLabel">Open hours</h5>
									<button type="button" class="close" data-dismiss="modal" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<div id="openning_hours">
									</div>
								</div>
								<div class="modal-footer">
									<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
								</div>
							</div>
						</div>
					</div>

				</div>
				<div class="tab-pane fade" id="photos" role="tabpanel" aria-labelledby="photos-tab">
					<div class="container col-12 noRecords rounded  my-5" id="noPhotoResult">
						<span >No records</span>
					</div>
					<div id="photoList" class="col-12">
						<div class="card-columns p-2">
							<div class="card" v-for="item in photos">
								<a :href="item.photo" target="_blank">
									<img class="img-thumbnail  w-100 img-fluid " :src="item.photo" >
								</a>
							</div>
						</div>
					</div>

				</div>
				<div class="tab-pane fade" id="route" role="tabpanel" aria-labelledby="route-tab">
					<form>
						<div class="form-row">
							<div class="form-group col-md-4 ">
								<label for="from">From</label>
								<input type="text" class="form-control" id="from" placeholder="Your location" value="Your location" required>

							</div>
							<div class="form-group col-md-4 ">
								<label for="to">To</label>
								<input type="text" class="form-control" id="to" placeholder="Last name" value="Otto" required disabled>

							</div>
							<div class="form-group col-md-2 ">
								<label for="travelmode">Travel Mode</label>
								<select class="form-control" id="travelMode"> 
									<option value="DRIVING">Driving</option> 
									<option value="BICYCLING">Bicycling</option> 
									<option value="TRANSIT">Transit</option>
									<option value="BIKING">Biking</option> 
								</select>

							</div>
							<div class="form-group col-auto get-direction ml-xl-4">

								<button id="get_directions"  class="btn form-control btn-primary">Get Directions</button>

							</div>
						</div>

					</form>
					<button id="mapButton" class="btn btn-default mb-1" style="padding:4px">
						<img src="http://cs-server.usc.edu:45678/hw/hw8/images/Pegman.png" id="mapImg" style="height:30px;width:30px">
					</button>
					<div id="map" style="height:500px;"></div>
					<div  id="routeInformation">

					</div>
				</div>

				<div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
					<div class="btn-group mr-3" role="group">
						<button  type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<span id="reviewCategoryText">Google Reviews</span>
						</button>
						<div class="dropdown-menu"  id="reviewCategory" aria-labelledby="reviewCategory">
							<a class="dropdown-item" href="#" @click="requestGoogleReviews()">Google Reviews</a>
							<a class="dropdown-item" href="#" @click="requestYelpReviews()">Yelp Reviews</a>
						</div>
					</div>
					<div class="btn-group" role="group">
						<button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<span id="reviewSortText">Default Order</span>
						</button>
						<div class="dropdown-menu" id="reviewSort" aria-labelledby="reviewSort">
							<a class="dropdown-item"  @click="col='';desc=0;">Default Order</a>
							<a class="dropdown-item"  @click="col='rating';desc=1">Highest Rating</a>
							<a class="dropdown-item"  @click="col='rating';desc=0">Lowest Rating</a>
							<a class="dropdown-item"  @click="col='time';desc=1">Most Recent</a>
							<a class="dropdown-item"  @click="col='time';desc=0">Least Recent</a>					
						</div>
					</div>
					<div class="container col-12 noRecords rounded  my-5" id="noReviewResult">
						<span >No records</span>
					</div>
					<div id="reviews-list" class="my-2">


						<div class="border container col-12 p-2 mb-2" v-for="item in reviewList" review-finish>

							<div class="row">
								<div class="col-lg-1 col-md-1 col-sm-2 col-xs-1 col-2">
									<img class="img-fluid ml-2" :src="item.profile_photo_url">
								</div>
								<div class="col-lg-11 col-md-11 col-sm-10 col-xs-11 col-10">
									<div class="row">
										<div class="col-4">{{item.author_name}}</div>
									</div>
									<div class="row">
										<div class="col-6 " >

										</div>
									</div>
									<div class="row">
										<div class="col-6 ">{{item.newtime}}</div>
									</div>
									<div class="row">
										<div class="col-lg-12 col-sm-12 col-md-12 col-xs-12 col-12">{{item.text}}</div>
									</div>
								</div>
							</div>
						</div>


					</div>

				</div>
			</div>
		</div>
	</div>

</template>