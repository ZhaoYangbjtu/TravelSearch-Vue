<style src="./style.css"  scoped></style>

<template>
	<div class="container-fluid col-sm-12 col-lg-7 col-12 my-2">
		<form  class="border bg-light rounded px-1" role="form" onsubmit="return false" novalidate>
			<h3 class="text-center my-3">Travel and Entertainment Search</h3>
			<div class="container col-lg-9 col-12">
				<div class="form-group row " id="keyword-validation" >
					<label for="keyword" class="col-sm-2 col-form-label" >Keyword<span class="red-star">*</span></label>
					<div class="col-sm-10">
						<input type="text" class="form-control" id="keyword" name="keyword" data-bv-notempty data-bv-notempty-message="Please enter a keyword" v-model="keyword" required>
						<div class="invalid-feedback">
							Please Enter a keyword.
						</div>
					</div>
				</div>
				<div class="form-group row">
					<label for="category" class="col-sm-2 col-form-label" >Cateory</label>
					<div class="col-sm-7">
						<select id="category" class="form-control" v-model="category"> 
							<option value="default" selected="selected">Default</option>
							<option value="airport">Airport</option>
							<option value="amusement_park">Amusement Park</option>
							<option value="aquarium">Aquarium</option>
							<option value="art_gallery">Art Gallery</option>
							<option value="bakery">Bakery</option>
							<option value="bar">Bar</option>
							<option value="beauty_salon">Beauty Salon</option>
							<option value="bowling_alley">Bowling Alley</option>
							<option value="bus_station">Bus Station</option>
							<option value="cafe">Cafe</option>
							<option value="campground">Campground</option>
							<option value="car_rental">Car Rental</option>
							<option value="casino">Casino</option>
							<option value="lodging">Lodging</option>
							<option value="movie_theater">Moview Theater</option>
							<option value="museum">Museum</option>
							<option value="night_club">Night Club</option>
							<option value="park">Park</option>
							<option value="parking">Parking</option>
							<option value="restaurant">Restaurant</option>
							<option value="shopping_mall">Shopping Mall</option>
							<option value="stadium">Stadium</option>
							<option value="subway_station">Subway Station</option>
							<option value="taxi_stand">Taxi Stand</option>
							<option value="train_station">Train Station</option>
							<option value="transit_station">Transit Station</option>
							<option value="travel_agency">Travel Agency</option>
							<option value="zoo">Zoo</option>
							
						</select>
					</div>
				</div>
				<div class="form-group row">
					<label for="distance" class="col-sm-2 col-form-label" >Distance(miles)</label>
					<div class="col-sm-7">
						<input type="text" class="form-control" id="distance" 
						placeholder="10" v-model="distance">
					</div>
				</div>
				<fieldset class="form-group" >
					<div class="row">
						<legend class="col-form-label col-sm-2 pt-0">From<span class="red-star">*</span></legend>
						<div class="col-sm-10">
							<div class="form-check">
								<input class="form-check-input" type="radio" name="location" id="current-location" value="current-location" checked>
								<label class="form-check-label" for="current-location">
									Current location
								</label>
							</div>
							<div class="form-check">
								<input class="form-check-input" type="radio" name="location" id="other-location" value="other-location" >
								<label class="form-check-label" for="other-location" >
									Other.Please Specify
								</label>
							</div>
							<div class="col-sm-10 col-sm-offset-2" id="location-validation">
								<input type="text" class="form-control" id="specify-location" name="specify-location"  v-model="specify_location" placeholder="Enter a location" disabled>
								<div class="invalid-feedback">
									Please Enter a location.
								</div>
							</div>
						</div>
					</div>
				</fieldset>
				<div class="form-group row mb-4">
					<div class="col-sm-10">
						<button type="submit" id="search" class="btn btn-primary" @click="searchPlaces()" ><span class="fas fa-search"></span> Search</button>
						<button type="clear" id="clear" class="btn btn-light" @click="clear()">Clear</button>
					</div>
				</div>
			</div>
		</form>

	</div>
</template>

<script src="./index.js"></script> 
