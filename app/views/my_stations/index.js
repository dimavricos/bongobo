var BaseView = require('../base');
var Backbone = require('backbone');
var _ = require('underscore');
var myStationsView = require('../../views/my_stations/my_stations')
var editmyStationsView = require('../../views/my_stations/edit_my_stations')

module.exports = BaseView.extend({
	className: 'my-stations-index', 
	events : {
		'click #save' : 'save',  
		
		'click .add-playlist-to-station' : 'add_playlist_to_station',
		'click  .open-small-message' : 'open_yes_no',
		'click  .not-sure' : 'close_yes_no',
		'click .close-search'  : 'close_search',
		'click .my-station-title .open' : 'open_close',
		'click .open-edit-my-stations' : 'open_edit_stations',
		'click .delete-station' : 'delete_station',
		'click .remove-playlist' : 'delete_playlist',
		'click .close-popup' : 'close_popup',
	},

	initialize: function(){
		this.app.on('choose_playlist', this.choose_station, this);
		this.app.on('open_my_stations', this.open_my_stations, this);
	},


	preRender: function(){

	},

	postRender : function(){ 
		var that = this
		require('bootstrap')
		require('ui') 


		var that = this
		that.station_name = 'my new station'

		that.Station = Backbone.Model.extend({

		});

		that.Stations = Backbone.Collection.extend({ 
			model : that.Station,
			localStorage: new Backbone.LocalStorage("choose-some-identifier")  ,
			initialize : function(){
				this.on('change:playlists', this.onChange);
			},

			onChange: function(e) {
				alert('model changed')
			},

		});

		that.myStations = new that.Stations();

		that.myStations.fetch({
			success : function(){
				my_stations_view = new myStationsView({collection : that.myStations , app : that.app}) 

				my_stations_view.render().$el 
				
			}
		});

	},


	open_my_stations: function(){
		$('.my-stations-container').fadeIn()
	},


	open_close : function(e){
		$(e.currentTarget).parent().next().slideToggle()
		$(e.currentTarget).find('i').toggleClass('fa-chevron-down').toggleClass('fa-chevron-up')
	},

	close_search: function(){ 
		$('.search-column').slideUp()
		$('.search-for-stations').val('')
	},

	open_yes_no : function(){
		$('.small-message').fadeIn()
	},

	close_yes_no : function(){
		$('.small-message').fadeOut()
	},

	save : function(e){   
		var that = this
		that.station_name = $('#station-name').val() 

		if(that.station_name.split(' ').join('') === ""){
			$('.alert-container').fadeIn()
		}else{



			that.Station = Backbone.Model.extend({
				defaults: function(){
					return {
						id : that.station_name.split(' ').join('_'),
						stationId :that.station_name.split(' ').join('_'),
						stationName : that.station_name,
						playlists : that.playlists 
					}
				}
			});

			that.Stations = Backbone.Collection.extend({ 
				model : that.Station,
				localStorage: new Backbone.LocalStorage("choose-some-identifier")  ,
				initialize : function(){
					this.on('change:playlists', this.onChange);
				},

				onChange: function(e) {
					alert('model changed')
				},

			});

			that.myStations = new that.Stations();

			that.myStations.fetch({
				success : function(){
					my_stations_view = new myStationsView({collection : that.myStations , app : that.app}) 
      //my_stations_view.render().$el 
  }
});

			var newModel = this.myStations.findWhere({id:that.station_name.split(' ').join('_'), stationId: that.station_name.split(' ').join('_') });

			that.myStation = new that.Station({stationName : that.station_name, stationId : that.station_name.split(' ').join('_'), playlists:[] }); 

			if(newModel == undefined){
				that.myStations.add(that.myStation); 
				that.myStation.save()
				alert('new playlist created')

				my_stations_view.render().$el 
				$('.my-stations-container').show()
			}else{

				alert('you have alrady this playlist') 
			}

		}
		console.log('PLAYLISTS' , that.myStations)

	},


	open_edit_stations : function(){
		var that = this
		$('.edit-my-stations-container').fadeIn()

		that.myStations.fetch({
			success : function(){ 
				edit_my_stations_view = new editmyStationsView({collection : that.myStations , app : that.app})  
				edit_my_stations_view.render().$el  
				$('.my-stations-container').show()
				that.sort_playlists() 
			}
		});

	},

	sort_playlists : function(e){
		var that = this
		var updated_playlists = []
		var ids = {}

		$( "#edit-my-stations .my-station-playlists" ).sortable();

		$('#edit-my-stations .my-station-playlists').on('sortupdate',function() {


			var playlists = $(this).context.children
			var station_id = $(this).context.attributes[1].value
			var find_station =   that.myStations.find(function(model) { return model.get('id') ==  station_id; });
			console.log( 'wds', $(this).context.attributes ,find_station)
			$.each( playlists , function( index, value ) {
				ids =  {
					id : $(value).find("span.remove-playlist").data("id")  ,
					name : $(value).find("div.playlist-name").text() ,
					image : $(value).find("img").attr('src') ,
					station : $(value).data('station') 
				}

				console.log(ids)
				updated_playlists.push(ids)

			});


			console.log(updated_playlists)
			find_station.set({'playlists' : updated_playlists}) 
			find_station.save()
			that.open_edit_stations()
			my_stations_view.render().$el 
			$('.my-stations-container').show()
		});

      // $('.sort').trigger('sortupdate');  
  },

  delete_station : function(e){
  	var that = this
  	var station_id = $(e.currentTarget).parents('li.my-station').data('id')
  	var find_station =   that.myStations.find(function(model) { return model.get('id') ==  station_id; });


  	find_station.destroy();
  	this.open_edit_stations()
  	my_stations_view.render().$el 
  	$('.my-stations-container').show()

  },

  delete_playlist : function(e){
  	var that = this
  	var playlist_id = $(e.currentTarget).parents('li.my-station').data('id')
  	var find_playlist =   that.myStations.find(function(model) { return model.get('id') ==  playlist_id; });
  	var all_playlists = find_playlist.get('playlists')
  	var playlist_id = $(e.currentTarget).data('id')


  	for (var i = 0; i < all_playlists.length; i++)
  		if (all_playlists[i].id && all_playlists[i].id === playlist_id) { 
  			all_playlists.splice(i, 1);
  			break;
  		}
  		console.log('asasas' , all_playlists)

  		find_playlist.set({'playlists' : all_playlists}) 
  		find_playlist.save()
  		this.open_edit_stations()
  		my_stations_view.render().$el 
  		$('.my-stations-container').show()

  	},




  	choose_station : function(e){
  		if(this.myStations.length == 0){
  			alert("Create a playlist first")
  			$('.my-stations-container').fadeIn()
  		}else{
  			$('.pick-a-station-container').show()

  			var playlistId = $(e.div).data('id')
  			var playlistName = $(e.div).data('name')
  			var playlistImage = $(e.div).data('image')
  			var playlistStation = $(e.div).data('station')
  			$('.picked-station-id').html(playlistId)
  			$('.picked-station-name').html(playlistName)
  			$('.picked-station-image').attr('src' , playlistImage)
  			$('.picked-station-station').html(playlistStation)
  		}

  	},

  	add_playlist_to_station : function(){
  		var that = this
  		if (!$("input[name='choose-station']:checked").val()) {
  			alert('Nothing is checked!');
  		}
  		else {
  			var checked_station = $("input[name='choose-station']:checked").val() 
  			var playlistId = $('.picked-station-id').html()
  			var playlistName = $('.picked-station-name').html()
  			var playlistImage = $('.picked-station-image').attr('src')
  			var playlistStation = $('.picked-station-station').html()
  			var newModel = this.myStations.findWhere({ stationId: checked_station });
  			console.log('aaaaaaaaaaaaa' , newModel)
  			that.playlists = newModel.attributes.playlists
  			that.playlists.unshift( { id : playlistId, name : playlistName  , image : playlistImage , station : playlistStation}  ) 

  			console.log('playlists added' , that.playlists)
  			newModel.set({'playlists' : that.playlists}) 
  			newModel.save()
  			alert('  playlist updated') 
  			my_stations_view.render().$el 
  			$('.my-stations-container').show()
  		}
  	},


  	close_popup : function(e){
  		$(e.currentTarget).parent().parent().fadeOut();
  	},









  });
module.exports.id = 'my_stations/index';
