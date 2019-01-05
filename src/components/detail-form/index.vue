<style src="./style.css"  scoped></style>

<template>
	<transition name="detail">

		<div>

			<div class="container col-sm-12 col-lg-9 mb-1">
				<h3 id="placeName" class="text-center"></h3>
			</div>
			<div class="container  col-sm-12 col-12 col-lg-9 mb-1">
				<div class="clearfix">
					<button type="button" id="showList" class="btn btn-light float-left" @click="showSearchResult()" >
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
							<table class="table table-striped">
								<tbody>
									<tr>
										<th scope="row">Address</th>
										<td>{{address}}</td>
									</tr>
									<tr>
										<th scope="row">Phone Address</th>
										<td>{{phone}}</td>
									</tr>
									<tr>
										<th scope="row">Price Level</th>
										<td><span>{{price}}</span></td>
									</tr>
									<tr>
										<th scope="row">Rating</th>
										<td>{{rate}}
											<div class="stars-outer">
												<div class="stars-inner" style="width:77.39999999999999px;"><svg class="svg-inline--fa fa-star fa-w-18 fa-1x" style="color: #FF8C00;z-index: -1;" aria-hidden="true" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg><!-- <span class="fas fa-star fa-1x" style="color:#FF8C00;z-index:-1;"></span> --><svg class="svg-inline--fa fa-star fa-w-18 fa-1x" style="color: #FF8C00;z-index: -1;" aria-hidden="true" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg><!-- <span class="fas fa-star fa-1x" style="color:#FF8C00;z-index:-1;"></span> --><svg class="svg-inline--fa fa-star fa-w-18 fa-1x" style="color: #FF8C00;z-index: -1;" aria-hidden="true" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg><!-- <span class="fas fa-star fa-1x" style="color:#FF8C00;z-index:-1;"></span> --><svg class="svg-inline--fa fa-star fa-w-18 fa-1x" style="color: #FF8C00;z-index: -1;" aria-hidden="true" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg><!-- <span class="fas fa-star fa-1x" style="color:#FF8C00;z-index:-1;"></span> --><svg class="svg-inline--fa fa-star fa-w-18 fa-1x" style="color: #FF8C00;z-index: -1;" aria-hidden="true" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg><!-- <span class="fas fa-star fa-1x" style="color:#FF8C00;z-index:-1;"></span> -->
												</div>
											</div>
										</td>
									</tr>
									<tr>
										<th scope="row">Google Page</th>
										<td><a target="_blank" href="https://maps.google.com/?cid=7298462879195094883">{{googlePage}}</a></td>
									</tr>
									<tr>
										<th scope="row">Website</th>
										<td><a target="_blank" href="http://www.chick-fil-a.com/hollywooddt">{{website}}</a></td>
									</tr>
									<tr>
										<th scope="row">Hours</th>
										<td><sapn>Open now   <a href="#" data-toggle="modal" data-target="#exampleModal">  Daily open hours </a></sapn></td>
									</tr>
								</tbody>
							</table>
						</div>



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


							<div class="border container col-12 p-2 mb-2" v-for="item in placeDetail.reviews">
								<div class="row">
									<div class="col-lg-1 col-md-1 col-sm-2 col-xs-1 col-2">
										<img class="img-fluid ml-2" :src="item.profile_photo_url">
									</div>
									<div class="col-lg-11 col-md-11 col-sm-10 col-xs-11 col-10">
										<div class="row">
											<div class="col-4">{{item.author_name}}</div>
										</div>
										<div class="row">

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
	</transition>
</template>

<script src="./index.js"></script>