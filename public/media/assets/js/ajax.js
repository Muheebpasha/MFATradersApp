var xmlHttp

function setArtistDetails(artist_name, artist_id)
{
	xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
	{
		alert ("Browser does not support HTTP Request")
		return
	}
	var url="artist_details.php"+"?artist_name="+artist_name+"&artist_id="+artist_id
	xmlHttp.onreadystatechange=stateChanged
	xmlHttp.open("GET",url,true)
	xmlHttp.send(null)
}

function setMovieDetails(lang_id, movie_name, movie_id)
{
	xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
	{
		alert ("Browser does not support HTTP Request")
		return
	}
	var url="?controller=movies&action=movie_details&lang_id="+lang_id+"&movie_name="+movie_name+"&movie_id="+movie_id
	xmlHttp.onreadystatechange=stateChanged1
	xmlHttp.open("GET",url,true)
	xmlHttp.send(null)
}

function stateChanged()
{
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
		{
		
	 	xmlDoc=xmlHttp.responseXML;

	 	var field_names_array = new Array();
	 	field_names_array = ["artist_id", "dob_year", "dob_month", "dob_date", "place", "country", "weburl", "ss_url", "meta_title", "meta_desc", "meta_key"];

	 	for(var i=0, len = field_names_array.length; i<len; i++)
 		{	
 			console.log(field_names_array[i]);
 			if (xmlDoc.getElementsByTagName(field_names_array[i])[0].childNodes[0] != undefined )
			{
				document.getElementById(field_names_array[i]).value =
				xmlDoc.getElementsByTagName(field_names_array[i])[0].childNodes[0].nodeValue;
			}
 		}
 		
	 	var field_names_array = new Array();
	 	field_names_array = ["def_meta_title", "def_meta_desc", "def_meta_key"];
	 	for(var i=0, len = field_names_array.length; i<len; i++)
		{
			if (xmlDoc.getElementsByTagName(field_names_array[i])[0].childNodes[0] != undefined )
			{
				document.getElementById(field_names_array[i]).innerHTML =
				xmlDoc.getElementsByTagName(field_names_array[i])[0].childNodes[0].nodeValue;
			}
		}

	 	/*if (document.getElementById("debut_movie").value != '' && document.getElementById("debut_lang").value != '')
	 		{
	 		var language = document.getElementById("debut_lang").value;
	 		document.getElementById("debut_movie").readOnly = false;
	 		search_movie_obj = new AutoComplete(document.getElementById('debut_movie'), '1', movies_array[language], 'search_movie_obj');
	 		}*/

	 	if (xmlDoc.getElementsByTagName("sex")[0].childNodes[0] != undefined )
			{
				var sex = xmlDoc.getElementsByTagName("sex")[0].childNodes[0].nodeValue;
				if (sex == 'male')
					{
						document.getElementById("male").checked = true;
					}
				else if (sex == 'female')
					{
						document.getElementById("female").checked = true;
					}
			}

		var field_names_array = new Array();
	 	field_names_array = ["biography","do_you_know"];
	 	for(var i=0, len = field_names_array.length; i<len; i++)
	 		{
	 			if (xmlDoc.getElementsByTagName(field_names_array[i])[0].childNodes[0] != undefined )
					{
						tinyMCE.execCommand("mceRemoveControl", false, field_names_array[i]);
						document.getElementById(field_names_array[i]).value =
						xmlDoc.getElementsByTagName(field_names_array[i])[0].childNodes[0].nodeValue;
						tinyMCE.execCommand("mceAddControl", false, field_names_array[i]);
					}
	 		}

		var res = xmlDoc.getElementsByTagName("artist_lang");
		if(res.length > 0)
		{
			var res1 = res.item(0).getElementsByTagName('lang_id');
			document.getElementById("language").options[0].selected = false;
			for (var j = 0; j < res1.length; j++)
			{
				document.getElementById("language").options[res1[j].childNodes[0].nodeValue].selected = true;
			}
		}

		var field_names_array = new Array();
	 	field_names_array = ["wallpaper", "gallery","celeb_search_tweets","unknown_fact","a_awards","a_spouse", "a_father", "a_mother", "a_sibling", "a_children", "a_edu", "a_college", "a_school","a_debut", "gallery_images"];

		for(var i=0, len = field_names_array.length; i<len; i++)
	 		{
			if (field_names_array[i] == 'wallpaper')
				{
				div_id1 = 'wall_row1';
				div_id2 = 'wall_row2';
				div_id3 = 'wall_row3';
				}
			else if (field_names_array[i] == 'gallery')
				{
				div_id1 = 'gal_row1';
				div_id2 = 'gal_row2';
				div_id3 = 'gal_row3';
				text_id1 = 'gallery1';
				text_id2 = 'gallery2';
				text_id3 = 'gallery3';
				}
			else if (field_names_array[i] == 'celeb_search_tweets')
			{
				div_id = 'celeb_search_tweets';
			}
			else if (field_names_array[i] == 'unknown_fact')
			{
				div_id = 'artist_unknown_fact';
			}
			else if (field_names_array[i] == 'a_awards')
			{
				div_id = 'div_a_awards';
			}
			else if (field_names_array[i] == 'a_spouse')
			{
				div_id = 'div_a_spouse';
			}
			else if (field_names_array[i] == 'a_father')
			{
				div_id = 'div_a_father';
			}
			else if (field_names_array[i] == 'a_mother')
			{
				div_id = 'div_a_mother';
			}
			else if (field_names_array[i] == 'a_sibling')
			{
				div_id = 'div_a_sibling';
			}
			else if (field_names_array[i] == 'a_children')
			{
				div_id = 'div_a_children';
			}
			else if (field_names_array[i] == 'a_edu')
			{
				div_id = 'education_qualification_row';
			}
			else if (field_names_array[i] == 'a_college')
			{
				div_id = 'college_row';
			}
			else if (field_names_array[i] == 'a_school')
			{
				div_id = 'school_row';
			}
			else if (field_names_array[i] == 'a_debut')
			{
				div_id = 'div_a_debut';
			}
			else if (field_names_array[i] == 'gallery_images')
			{
				div_id = 'artist_gallery_images';
			}
			var res = xmlDoc.getElementsByTagName(field_names_array[i]);
			if (res.length > 0)
			{
				var res1 = res.item(0).getElementsByTagName('url');
				if (i == '1')
					var res2 = res.item(0).getElementsByTagName('gallery_type');
				if (res1.length > 0)
				{
					document.getElementById(div_id1).style.display = 'none';
					document.getElementById(div_id2).style.display = 'none';
					document.getElementById(div_id3).style.display = 'none';
					if (i == 1)
                    {
	                    document.getElementById(text_id1).setAttribute('name','hidden_gallery');
	                    document.getElementById(text_id2).setAttribute('name','hidden_gallery');
	                    document.getElementById(text_id3).setAttribute('name','hidden_gallery');
                    }

					for (var j = 0; j < res1.length; j++)
					{
						if (i == '0')
						addTableRow(field_names_array[i]+'[]', 1, 0, res1[j].childNodes[0].nodeValue);
						else
						{
						addTableRow(field_names_array[i]+'[]', 1, 0, res1[j].childNodes[0].nodeValue, res2[j].childNodes[0].nodeValue);
						}
					}
				}
					var res1 = res.item(0).getElementsByTagName('name');
					console.log(res1);
					if (res1.length > 0)
					{
						document.getElementById(div_id).style.display = 'none';

						for (var j = 0; j < res1.length; j++)
						{
							if(i=='3' || i=='4' || i=='5'|| i=='6'|| i=='7'|| i=='8'|| i=='9'|| i=='10'|| i=='11'|| i=='12'|| i=='13' || i=='14')
							{
								console.log("If "+field_names_array[i]);
								addRow(field_names_array[i]+'[]', 1, 0, res1[j].childNodes[0].nodeValue);
							}
							else
							{
								console.log("Else "+field_names_array[i]);
								addTableRow(field_names_array[i]+'[]', 1, 0, res1[j].childNodes[0].nodeValue);
							}

						}
					}
				}
	 		}
		}
	}

function stateChanged1()
{
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
		{
			
	 		xmlDoc=xmlHttp.responseXML;
	 		//alert(xmlDoc.getElementsByTagName("create_showtimes")[0].childNodes[0].nodeValue);
	 	var field_names_array = new Array();
	 	field_names_array = ["movie_id", "year", "release_month", "release_date", "satellite_rights", "release_month_india","release_date_india", "duration","box_review", "old_box_review", "website", "color", "certification", "screensaver", "trailer", "preview_url", "review_url", "remake_movie", "remake_lang", "dub_movie", "dub_lang", "sequel_movie", "sequel_lang", "meta_title", "meta_desc", "meta_key"];

	 	for(var i=0, len = field_names_array.length; i<len; i++)
	 		{
	 			if (xmlDoc.getElementsByTagName(field_names_array[i])[0].childNodes[0] != undefined )
				{	
					console.log(field_names_array[i]);
					document.getElementById(field_names_array[i]).value =
					xmlDoc.getElementsByTagName(field_names_array[i])[0].childNodes[0].nodeValue;
				}
	 		}

	 		if(xmlDoc.getElementsByTagName("create_showtimes")[0].childNodes[0].nodeValue==1)
		 	{
		 		document.getElementById('create_showtimes').checked=true;
		 		$('#cities_showtimes').toggle();
		 		
		 		var shows = xmlDoc.getElementsByTagName("showtime_cities").item(0).getElementsByTagName('name');
		 		//console.log(shows[1].childNodes[0].nodeValue);
		 		for (var j = 0; j < shows.length; j++)
				{
			 		$(".city_list").each(function()
			        {
			        	if(shows[j].childNodes[0].nodeValue==this.value)
			        	{
			        		this.checked=true;
			        	}
			        	//console.log(this.value);
			        });
			 	}
		 	}
	 	//Added to display default meta details.
	 	var field_names_array = new Array();
	 	field_names_array = ["def_meta_title", "def_meta_desc", "def_meta_key"];
	 	for(var i=0, len = field_names_array.length; i<len; i++)
		{
			if (xmlDoc.getElementsByTagName(field_names_array[i])[0].childNodes[0] != undefined )
			{
				document.getElementById(field_names_array[i]).innerHTML =
				xmlDoc.getElementsByTagName(field_names_array[i])[0].childNodes[0].nodeValue;
			}
		}

	 	if (document.getElementById("dub_movie").value != '' && document.getElementById("dub_lang").value != '')
	 		{
	 		var language = document.getElementById("dub_lang").value;
	 		document.getElementById("dub_movie").readOnly = false;
	 		search_movie_obj1 = new AutoComplete(document.getElementById('dub_movie'), '1', movies_array[language], 'search_movie_obj1');
	 		}

	 	if (document.getElementById("remake_movie").value != '' && document.getElementById("remake_lang").value != '')
	 		{
	 		var language = document.getElementById("remake_lang").value;
	 		document.getElementById("remake_movie").readOnly = false;
	 		search_movie_obj = new AutoComplete(document.getElementById('remake_movie'), '1', movies_array[language], 'search_movie_obj');
	 		}

	 	if (document.getElementById("sequel_movie").value != '' && document.getElementById("sequel_lang").value != '')
	 		{
	 		var language = document.getElementById("sequel_lang").value;
	 		document.getElementById("sequel_movie").readOnly = false;
	 		search_movie_obj2 = new AutoComplete(document.getElementById('sequel_movie'), '1', movies_array[language], 'search_movie_obj2', 'true');
	 		}


	 	var field_names_array = new Array();
	 	field_names_array = ["awards", "synopsis", "preview", "review"];
	 	for(var i=0, len = field_names_array.length; i<len; i++)
	 		{
	 			if (xmlDoc.getElementsByTagName(field_names_array[i])[0].childNodes[0] != undefined )
					{
						tinyMCE.execCommand("mceRemoveControl", false, field_names_array[i]);
						document.getElementById(field_names_array[i]).value =
						xmlDoc.getElementsByTagName(field_names_array[i])[0].childNodes[0].nodeValue;
						tinyMCE.execCommand("mceAddControl", false, field_names_array[i]);
					}
	 		}

	 	/*var ress = xmlDoc.getElementsByTagName("all_genres");
	 	console.log(ress.length);
		if(ress.length > 0)
		{
			var ress1 = ress.item(0).getElementsByTagName('genre_id');
			console.log(ress1);
			document.getElementById("genre").options[0].selected = false;
			for (var j = 0; j < ress1.length; j++)
			{
				document.getElementById("genre").options[ress1[j].childNodes[0].nodeValue].selected = true;
			}
		}*/

	 	var field_names_array = new Array();
	 	field_names_array = ["cast","writing","song_title", "director", "cinematography", "editing", "producer", "lyricst", "mus_director", "singer", "review_title","search_tweets_keyword","search_tweets_keyword1","movie_dialogue", "artdirector", "action_stunt_choreography", "vfx_supervision", "costume_design", "additional_crew", "country", "satellite_rights", "other_languages", "dance_choreography", "production_company", "distributor", "music_label"];

		for(var i=0, len = field_names_array.length; i<len; i++)
	 		{
	 			console.log(field_names_array[i]);
			var role_id = 0;
			var div_id = '';
			if (field_names_array[i] == 'cast')
			{
				role_id = 1;
				div_id = 'cast_row';
			}
			if (field_names_array[i] == 'writing')
			{
				role_id = 8;
				div_id = 'write_row';
			}
			else if (field_names_array[i] == 'song_title')
				{
				div_id = 'song_row';
				}
			else if (field_names_array[i] == 'review_title')
				{
				div_id = 'critics_review_row';
				}
			else if (field_names_array[i] == 'search_tweets_keyword')
				{
					div_id = 'search_tweets_row';
				}
				else if (field_names_array[i] == 'search_tweets_keyword1')
				{
					div_id = 'search_tweets_row1';
				}
			else if (field_names_array[i] == 'movie_dialogue')
				{
					div_id = 'movie_dialogue_row';
				}
				else if (field_names_array[i] == 'unknown_fact')
				{
					div_id = 'artist_unknown_fact';
				}
			else if (field_names_array[i] == 'director')
				{
					role_id = 3;
					div_id = 'director_row';
				}
				else if (field_names_array[i] == 'cinematography')
				{
					role_id = 11;
					div_id = 'cinemato_row';
				}
				else if (field_names_array[i] == 'editing')
				{
					role_id = 12;
					div_id = 'editing_row';
				}
			else if(field_names_array[i] == 'producer')
				{
					role_id = 4;
					div_id = 'producer_row';
				}
			else if(field_names_array[i] == 'mus_director')
				{
					role_id = 5;
					div_id = 'musicdir_row';
				}
			else if(field_names_array[i] == 'lyricst')
				{
					role_id = 6;
					div_id = 'lyricst_row';
				}
			else if(field_names_array[i] == 'singer')
				{
					role_id = 7;
					div_id = 'singer_row';
				}
				else if(field_names_array[i] == 'artdirector')
				{
					role_id = 13;
					div_id = 'artdirector_row';
				}
				else if(field_names_array[i] == 'action_stunt_choreography')
				{
					role_id = 14;
					div_id = 'action_stunt_choreography_row';
				}
				else if(field_names_array[i] == 'vfx_supervision')
				{
					role_id = 15;
					div_id = 'vfx_supervision_row';
				}
				else if(field_names_array[i] == 'costume_design')
				{
					role_id = 16;
					div_id = 'costume_design_row';
				}
				else if(field_names_array[i] == 'additional_crew')
				{
					role_id = 17;
					div_id = 'additional_crew_row';
				}
				else if(field_names_array[i] == 'dance_choreography')
				{
					role_id = 18;
					div_id = 'dance_choreography_row';
				}
				else if(field_names_array[i] == 'production_company')
				{
					role_id = 19;
					div_id = 'production_company_row';
				}
				else if(field_names_array[i] == 'distributor')
				{
					role_id = 21;
					div_id = 'distributor_row';
				}
				else if(field_names_array[i] == 'music_label')
				{
					role_id = 20;
					div_id = 'music_label_row';
				}
				else if (field_names_array[i] == 'country')
				{
					div_id = 'country';
					var res = xmlDoc.getElementsByTagName(field_names_array[i]);
					addRow(field_names_array[i]+'[]', 1, 1, res[0].childNodes[0].nodeValue);
				}
				else if (field_names_array[i] == 'satellite_rights')
				{
					div_id = 'satellite_rights';
					var res = xmlDoc.getElementsByTagName(field_names_array[i]);
					console.log(res[0].childNodes[0].nodeValue);
					addRow(field_names_array[i]+'[]', 1, 1, res[0].childNodes[0].nodeValue);
				}
				else if(field_names_array[i]=='other_languages') {
					div_id = 'additional_lang';
				}
				else if(field_names_array[i]=='before_movie_tags') {
					div_id = 'additional_lang';
				}
				else if(field_names_array[i]=='after_movie_tags') {
					div_id = 'additional_lang';
				}
			
			var res = xmlDoc.getElementsByTagName(field_names_array[i]);

			if (res.length > 0)
				{
				var res1 = res.item(0).getElementsByTagName('name');
				console.log(res1);
				if (res1.length > 0)
					{
					document.getElementById(div_id).style.display = 'none';
					for (var j = 0; j < res1.length; j++)
						{
							addRow(field_names_array[i]+'[]', 1, role_id, res1[j].childNodes[0].nodeValue);
						}
					}
				}
	 		}

	 	var field_names_array = new Array();
	 	field_names_array = ["wallpaper", "gallery"];
		for(var i=0, len = field_names_array.length; i<len; i++)
 		{
			if (field_names_array[i] == 'wallpaper')
			{
				div_id1 = 'wall_row1';
				div_id2 = 'wall_row2';
				div_id3 = 'wall_row3';
			}
			else if (field_names_array[i] == 'gallery')
			{
				div_id1 = 'gal_row1';
				div_id2 = 'gal_row2';
				div_id3 = 'gal_row3';
				text_id1 = 'gallery1';
                text_id2 = 'gallery2';
                text_id3 = 'gallery3';
			}

			var res = xmlDoc.getElementsByTagName(field_names_array[i]);
			if (res.length > 0)
				{
				var res1 = res.item(0).getElementsByTagName('name');
				if (i == '1')
                var res2 = res.item(0).getElementsByTagName('gallery_type');
				if (res1.length > 0)
					{
					document.getElementById(div_id1).style.display = 'none';
					document.getElementById(div_id2).style.display = 'none';
					document.getElementById(div_id3).style.display = 'none';

					if (i == 1)
					{
					document.getElementById(text_id1).setAttribute('name','hidden_gallery');
					document.getElementById(text_id2).setAttribute('name','hidden_gallery');
					document.getElementById(text_id3).setAttribute('name','hidden_gallery');
					}

					for (var j = 0; j < res1.length; j++)
					{
						if (i == '0')
                        addRow(field_names_array[i]+'[]', 1, 0, res1[j].childNodes[0].nodeValue);
						else
						{
						addRow(field_names_array[i]+'[]', 1, 0, res1[j].childNodes[0].nodeValue,res2[j].childNodes[0].nodeValue);
						}
					}
					}
				}
	 		}
			
			
			for(var i=0, len = field_names_array.length; i<len; i++)
	 		{
				var role_id = 0;
				var div_id = '';
				if (field_names_array[i] == 'song')
				{
					div_id = 'song_row';
				}
					
				var res = xmlDoc.getElementsByTagName(field_names_array[i]);
				if (res.length > 0)
				{
					var res1 = res.item(0).getElementsByTagName('song_title');
					if (res1.length > 0)
					{
						document.getElementById(div_id).style.display = 'none';
						for (var j = 0; j < res1.length; j++)
						{
							addSongRow(song_title+'[]', 1, 0, res1[j].childNodes[0].nodeValue);
						}
					}
					var res1 = res.item(0).getElementsByTagName('lyrics_writer');
					if (res1.length > 0)
					{
						document.getElementById(div_id).style.display = 'none';
						for (var j = 0; j < res1.length; j++)
						{
							addSongRow(lyrics_writer+'[]', 1, 6, res1[j].childNodes[0].nodeValue);
						}
					}
					var res1 = res.item(0).getElementsByTagName('singer');
					if (res1.length > 0)
					{
						document.getElementById(div_id).style.display = 'none';
						for (var j = 0; j < res1.length; j++)
						{
							addSongRow(singer+'[]', 1, 7, res1[j].childNodes[0].nodeValue);
						}
					}
				}				
			}

			/*  Critics Review Code started  */
			for(var i=0, len = field_names_array.length; i<len; i++)
	 		{
				var role_id = 0;
				var div_id = '';
				if (field_names_array[i] == 'critiscs_review')
				{
					div_id = 'critics_review_row';
				}
					
				var res = xmlDoc.getElementsByTagName(field_names_array[i]);
				if (res.length > 0)
				{
					var res1 = res.item(0).getElementsByTagName('review_id');
					if (res1.length > 0)
					{
						document.getElementById(div_id).style.display = 'none';
						for (var j = 0; j < res1.length; j++)
						{
							addRow(review_id+'[]', 1,0,res1[j].childNodes[0].nodeValue);
						}
					}
					var res1 = res.item(0).getElementsByTagName('review_title');
					if (res1.length > 0)
					{
						document.getElementById(div_id).style.display = 'none';
						for (var j = 0; j < res1.length; j++)
						{
							addRow(review_title+'[]', 1,0,res1[j].childNodes[0].nodeValue);
						}
					}
					var res1 = res.item(0).getElementsByTagName('review_desc');
					if (res1.length > 0)
					{
						document.getElementById(div_id).style.display = 'none';
						for (var j = 0; j < res1.length; j++)
						{
							addRow(review_desc+'[]', 1, 0, res1[j].childNodes[0].nodeValue);
						}
					}
					var res1 = res.item(0).getElementsByTagName('review_link');
					if (res1.length > 0)
					{
						document.getElementById(div_id).style.display = 'none';
						for (var j = 0; j < res1.length; j++)
						{
							addRow(review_link+'[]', 1, 0, res1[j].childNodes[0].nodeValue);
						}
					}
					var res1 = res.item(0).getElementsByTagName('review_rating');
					if (res1.length > 0)
					{
						document.getElementById(div_id).style.display = 'none';
						for (var j = 0; j < res1.length; j++)
						{
							addRow(review_rating+'[]', 1,0, res1[j].childNodes[0].nodeValue);
						}
					}	
				}
				
				
			}
			/*  Critics Review Code Ended  */	



			

		}
	}

function GetXmlHttpObject()
	{
	var objXMLHttp=null
	if (window.XMLHttpRequest)
	  	{
	  	objXMLHttp=new XMLHttpRequest()
	  	}
	else if (window.ActiveXObject)
	 	{
	 	objXMLHttp=new ActiveXObject("Microsoft.XMLHTTP")
	 	}
	return objXMLHttp
 	}

function inviteFriend(email, offset_path)
{
	var email = trim(email);
	if(email)
	{
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
			{
			alert ("Browser does not support HTTP Request")
			return
			}
		var url=offset_path+"/inviteFriends.php"+"?email="+email
		xmlHttp.onreadystatechange =
			function()
			{
				if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
				{
					document.getElementById('request_status').innerHTML = xmlHttp.responseText;
				}
			}
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)
	}
	else
	{
		document.getElementById('request_status').innerHTML = "Please enter email";
	}
}

function recommendFriend_email(email,source_id, offset_path,source_type,role_id)
{
	var email = trim(email);
	if(email && email != 'friend@domain.com')
	{
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
			{
			alert ("Browser does not support HTTP Request")
			return
			}
		var url=offset_path+"/recomendFriends.php"+"?&email="+email+"&source_id="+source_id+"&source_type="+source_type+"&role_id="+role_id+'&fans_count='+fans_count+'&photos_count='+photos_count+'&quiz_count='+quiz_count+'&polls_count='+polls_count
		xmlHttp.onreadystatechange =
			function()
			{
				if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
				{
					document.getElementById('recommend_status_mail').innerHTML = xmlHttp.responseText;
				}
			}
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)
	}
	else
	{
		document.getElementById('recommend_status_mail').innerHTML = "Please enter email";
	}
}

function recommendFriend(fan,source_id, offset_path,source_type,role_id)
{
	var fan = trim(fan);
	if(fan && fan != 'Friend Name')
	{
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
			{
			alert ("Browser does not support HTTP Request")
			return
			}
		var url=offset_path+"/recomendFriends.php"+"?fan_name="+fan+"&source_id="+source_id+"&source_type="+source_type+"&role_id="+role_id+'&fans_count='+fans_count+'&photos_count='+photos_count+'&quiz_count='+quiz_count+'&polls_count='+polls_count
		xmlHttp.onreadystatechange =
			function()
			{
				if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
				{
					document.getElementById('recommend_status').innerHTML = xmlHttp.responseText;
				}
			}
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)
	}
	else
	{
		document.getElementById('recommend_status').innerHTML = "Please enter your friend's name";
	}
}
function recommendProfile_email(email,profile_id, offset_path)
{
	var email = trim(email);
	if(email && email != 'friend@domain.com')
	{
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
			{
			alert ("Browser does not support HTTP Request")
			return
			}
		var url=offset_path+"/recomendProfile.php"+"?&email="+email+"&profile_id="+profile_id+'&fans_count='+fans_count+'&photos_count='+photos_count+'&quiz_count='+quiz_count+'&polls_count='+polls_count;
		xmlHttp.onreadystatechange =
			function()
			{
				if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
				{
					document.getElementById('recommend_status_mail').innerHTML = xmlHttp.responseText;
				}
			}
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)
	}
	else
	{
		document.getElementById('recommend_status_mail').innerHTML = "Please enter email";
	}
}

function recommendProfile(fan,profile_id, offset_path)
{
	var fan = trim(fan);
	if(fan && fan != 'Friend Name')
	{
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
			{
			alert ("Browser does not support HTTP Request")
			return
			}
		var url=offset_path+"/recomendProfile.php"+"?fan_name="+fan+"&profile_id="+profile_id+'&fans_count='+fans_count+'&photos_count='+photos_count+'&quiz_count='+quiz_count+'&polls_count='+polls_count;
		xmlHttp.onreadystatechange =
			function()
			{
				if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
				{
					document.getElementById('recommend_status').innerHTML = xmlHttp.responseText;
				}
			}
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)
	}
	else
	{
		document.getElementById('recommend_status').innerHTML = "Please enter your friend's name";
	}
}
function sharePolls_freindemail(email,source_id, offset_path,source_type,role_id,poll_id,disp_id)
{
	var email = trim(email);
	if(email && email != 'friend@domain.com')
	{
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
			{
			alert ("Browser does not support HTTP Request")
			return
			}
		var url=offset_path+"/sharePolls.php"+"?&email="+email+"&source_id="+source_id+"&source_type="+source_type+"&role_id="+role_id+"&poll_id="+poll_id
		xmlHttp.onreadystatechange =
			function()
			{
				if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
				{
					document.getElementById(disp_id).innerHTML = xmlHttp.responseText;
				}
			}
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)
	}
	else
	{
		document.getElementById(disp_id).innerHTML = "Please enter email";
	}
}

function sharePolls_freind(fan,source_id, offset_path,source_type,role_id,poll_id,disp_id)
{
	var fan = trim(fan);
	if(fan && fan != 'Friend Name')
	{
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
			{
			alert ("Browser does not support HTTP Request")
			return
			}
		var url=offset_path+"/sharePolls.php"+"?fan_name="+fan+"&source_id="+source_id+"&source_type="+source_type+"&role_id="+role_id+"&poll_id="+poll_id
		xmlHttp.onreadystatechange =
			function()
			{
				if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
				{
					document.getElementById(disp_id).innerHTML = xmlHttp.responseText;
				}
			}
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)
	}
	else
	{
		document.getElementById(disp_id).innerHTML = "Please enter your friend's name";
	}
}
function shareQuiz_freindemail(email,source_id, offset_path,source_type,role_id,quiz_id,disp_id)
{
	var email = trim(email);
	if(email && email != 'friend@domain.com')
	{
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
			{
			alert ("Browser does not support HTTP Request")
			return
			}
		var url=offset_path+"/shareQuiz.php"+"?&email="+email+"&source_id="+source_id+"&source_type="+source_type+"&role_id="+role_id+"&quiz_id="+quiz_id
		xmlHttp.onreadystatechange =
			function()
			{
				if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
				{
					document.getElementById(disp_id).innerHTML = xmlHttp.responseText;
				}
			}
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)
	}
	else
	{
		document.getElementById(disp_id).innerHTML = "Please enter email";
	}
}

function shareQuiz_freind(fan,source_id, offset_path,source_type,role_id,quiz_id,disp_id)
{
	var fan = trim(fan);
	if(fan && fan != 'Friend Name')
	{
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
			{
			alert ("Browser does not support HTTP Request")
			return
			}
		var url=offset_path+"/shareQuiz.php"+"?fan_name="+fan+"&source_id="+source_id+"&source_type="+source_type+"&role_id="+role_id+"&quiz_id="+quiz_id
		xmlHttp.onreadystatechange =
			function()
			{
				if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
				{
					document.getElementById(disp_id).innerHTML = xmlHttp.responseText;
				}
			}
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)
	}
	else
	{
		document.getElementById(disp_id).innerHTML = "Please enter your friend's name";
	}
}
function shareReviews_freindemail(email,source_id, offset_path,source_type,role_id,review_id,disp_id)
{
	var email = trim(email);
	if(email && email != 'friend@domain.com')
	{
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
			{
			alert ("Browser does not support HTTP Request")
			return
			}
		var url=offset_path+"/shareReviews.php"+"?&email="+email+"&source_id="+source_id+"&source_type="+source_type+"&role_id="+role_id+"&review_id="+review_id
		xmlHttp.onreadystatechange =
			function()
			{
				if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
				{
					document.getElementById(disp_id).innerHTML = xmlHttp.responseText;
				}
			}
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)
	}
	else
	{
		document.getElementById(disp_id).innerHTML = "Please enter email";
	}
}

function shareReviews_freind(fan,source_id, offset_path,source_type,role_id,review_id,disp_id)
{
	var fan = trim(fan);
	if(fan && fan != 'Friend Name')
	{
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
			{
			alert ("Browser does not support HTTP Request")
			return
			}
		var url=offset_path+"/shareReviews.php"+"?fan_name="+fan+"&source_id="+source_id+"&source_type="+source_type+"&role_id="+role_id+"&review_id="+review_id
		xmlHttp.onreadystatechange =
			function()
			{
				if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
				{
					document.getElementById(disp_id).innerHTML = xmlHttp.responseText;
				}
			}
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)
	}
	else
	{
		document.getElementById(disp_id).innerHTML = "Please enter your friend's name";
	}
}
function recomend_Videosemail(email,source_id, offset_path,source_type,role_id,video_id)
{
	var email = trim(email);
	if(email && email != 'friend@domain.com')
	{
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
			{
			alert ("Browser does not support HTTP Request")
			return
			}
		var url=offset_path+"/recVideos.php"+"?&email="+email+"&source_id="+source_id+"&source_type="+source_type+"&role_id="+role_id+"&video_id="+video_id
		xmlHttp.onreadystatechange =
			function()
			{
				if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
				{
					document.getElementById('recommend_status_email').innerHTML = xmlHttp.responseText;
				}
			}
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)
	}
	else
	{
		document.getElementById('recommend_status_email').innerHTML = "Please enter email";
	}
}

function recomend_Videos(fan,source_id, offset_path,source_type,role_id,video_id)
{
	var fan = trim(fan);
	if(fan && fan != 'Friend Name')
	{
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
			{
			alert ("Browser does not support HTTP Request")
			return
			}
		var url=offset_path+"/recVideos.php"+"?fan_name="+fan+"&source_id="+source_id+"&source_type="+source_type+"&role_id="+role_id+"&video_id="+video_id
		xmlHttp.onreadystatechange =
			function()
			{
				if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
				{
					document.getElementById('recommend_status').innerHTML = xmlHttp.responseText;
				}
			}
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)
	}
	else
	{
		document.getElementById('recommend_status').innerHTML = "Please enter your friend's name";
	}
}
function recomend_Photosemail(email,source_id, offset_path,source_type,role_id,photo_id,gallery_type)
{
	var email = trim(email);
	if(email && email != 'friend@domain.com')
	{
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
			{
			alert ("Browser does not support HTTP Request")
			return
			}
		var url=offset_path+"/recPhotos.php"+"?&email="+email+"&source_id="+source_id+"&source_type="+source_type+"&role_id="+role_id+"&photo_id="+photo_id+"&gallery_type="+gallery_type
		xmlHttp.onreadystatechange =
			function()
			{
				if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
				{
					document.getElementById('recommend_status_email').innerHTML = xmlHttp.responseText;
				}
			}
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)
	}
	else
	{
		document.getElementById('recommend_status_email').innerHTML = "Please enter email";
	}
}

function recomend_Photos(fan,source_id, offset_path,source_type,role_id,photo_id,gallery_type)
{
	var fan = trim(fan);
	if(fan && fan != 'Friend Name')
	{
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
			{
			alert ("Browser does not support HTTP Request")
			return
			}
		var url=offset_path+"/recPhotos.php"+"?fan_name="+fan+"&source_id="+source_id+"&source_type="+source_type+"&role_id="+role_id+"&photo_id="+photo_id+"&gallery_type="+gallery_type
		xmlHttp.onreadystatechange =
			function()
			{
				if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
				{
					document.getElementById('recommend_status').innerHTML = xmlHttp.responseText;
				}
			}
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)
	}
	else
	{
		document.getElementById('recommend_status').innerHTML = "Please enter your friend's name";
	}
}
/* display the contents in i frame making the current pannel active and dull backgroung */
function TogglePopupPanel(id,dispid)
{
	var panelContainer = document.getElementById(id);

	if (panelContainer.style.display == "none")
	{
		panelContainer.style.display = "block";
		document.getElementById(dispid).focus();
		document.body.onfocus = function(){document.getElementById(dispid).focus();};
	}
	else
	{
		panelContainer.style.display = "none";
		document.body.onfocus = function() { return true; };
	}
}
/* display the contents in iframe making the current pannel active and dull backgroung ends here */


/*function addMovieReview(movie_id, reviewText, offset_path, review_id)
{
	if(review_id == undefined)
	{
		var review_id = '';
	}
        //reviewText=str_replace('"','&quot;',reviewText);
	//reviewText=str_replace('&','#amp',reviewText);
	reviewText = encode(trim(reviewText));
	if(reviewText)
	{
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
			{
			alert ("Browser does not support HTTP Request")
			return
			}
		var url=offset_path+"/addMovieReview.php"+"?movie_id="+movie_id+"&reviewText="+reviewText+'&review_id='+review_id
		xmlHttp.onreadystatechange =
			function()
			{
				if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
				{
					if(review_id)
					{
						document.getElementById('edit_review').style.display = 'none';
					}
					else
					{
						document.getElementById('add_review').style.display = 'none';
					}
					document.getElementById('review_status').innerHTML = xmlHttp.responseText;
				}
			}
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)

	}
	else
	{
		document.getElementById('review_status').innerHTML = "Please enter review text";
	}
}*/
function addMovieReview(movie_id, name,email,reviewText, offset_path, review_id)
{
	
	story_rate=document.getElementById('story_rating').value;
	acting_rate=document.getElementById('acting_rating').value;
	direction_rate=document.getElementById('direction_rating').value;
	movieRating_rate=document.getElementById('movieRating_rating').value;
	
	if(review_id == undefined)
	{
		review_id = '';
	}
      	reviewText = encode(trim(reviewText));
	name = encode(trim(name));
	email = encode(trim(email));
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	
	if(name=='')
	{
		document.getElementById('review_status').innerHTML = "Please enter name";
		document.getElementById('userReviewErrorMessage').innerHTML = "";
	}else if(email=='')
	{
		
		document.getElementById('review_status').innerHTML = "Please enter email";
		document.getElementById('userReviewErrorMessage').innerHTML = "";
	}else if(reg.test(email) == false) 
        {
		document.getElementById('review_status').innerHTML = 'Invalid Email Address';
		document.getElementById('userReviewErrorMessage').innerHTML = "";
           
        }else if(reviewText=='')
	{
		document.getElementById('review_status').innerHTML = "Please enter review text";
		document.getElementById('userReviewErrorMessage').innerHTML = "";
	}
	else
	{
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
			{
			alert ("Browser does not support HTTP Request")
			return
			}
		var url=offset_path+"/addMovieReview.php"+"?movie_id="+movie_id+"&reviewText="+reviewText+'&review_id='+review_id+'&name='+name+'&email='+email+'&story_rate='+story_rate+'&acting_rate='+acting_rate+'&direction_rate='+direction_rate+'&movieRating_rate='+movieRating_rate;
		xmlHttp.onreadystatechange =
			function()
			{
				if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
				{
					document.getElementById('review_status').innerHTML = "";	
					//document.getElementById('review_block').innerHTML = xmlHttp.responseText;
					$('#review_block').html(xmlHttp.responseText);
					$('#storyhalf').raty({
						half	: true,
						score	: 0,
						offset_path_val : offset_path,
						click : function(score, evt) {
							document.getElementById('story_rating').value=score;
						}
					});
					
					$('#actinghalf').raty({
						half	: true,
						score	: 0,
						offset_path_val : offset_path,
						click : function(score, evt) {
							document.getElementById('acting_rating').value=score;
						}
					});
					$('#directionhalf').raty({
						half	: true,
						score	: 0,
						offset_path_val : offset_path,
						click : function(score, evt) {
							document.getElementById('direction_rating').value=score;
						}
					});
					$('#movieRatinghalf').raty({
					        half	: true,
						score	: 0,
						offset_path_val : offset_path,
						click : function(score, evt) {
							document.getElementById('movieRating_rating').value=score;
					        }
					});
					gotorolediv('reviewdiv');
				}
			}
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)
	}
}



function addFriend(profile_id, offset_path)
{
	profile_id = trim(profile_id);
	if(profile_id)
	{
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
			{
			alert ("Browser does not support HTTP Request")
			return
			}
		var url=offset_path+"/inviteFriends.php"+"?profile_id="+profile_id
		xmlHttp.onreadystatechange =
			function()
			{
				if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
				{
					document.getElementById('fan_status').innerHTML = xmlHttp.responseText;
				}
			}
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)
	}
}

function addArtistFan(artist_id, role_id, offset_path, msg_div)
{
	if(msg_div == undefined)
	{
		msg_div = 'fan_status';
	}

	xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
		{
		alert ("Browser does not support HTTP Request")
		return
		}
	var url=offset_path+"/artist_fan.php"+"?artist_id="+artist_id+'&role_id='+role_id
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
		{
			xmlDoc=xmlHttp.responseXML;
			document.getElementById(msg_div).innerHTML = xmlDoc.getElementsByTagName('fan')[0].childNodes[0].nodeValue;
		}
	}
	xmlHttp.open("GET",url,true)
	xmlHttp.send(null)
}
/* Nandhini Javascript Function code Started */
function addArtistFan(artist_id,offset_path, msg_div)
{
	if(msg_div == undefined)
	{
		msg_div = 'fan_status';
	}

	xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
		{
		alert ("Browser does not support HTTP Request")
		return
		}
	var url=offset_path+"/celeb-fan-activity.php"+"?artist_id="+artist_id;
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
		{
			xmlDoc=xmlHttp.responseXML;
			document.getElementById(msg_div).innerHTML = xmlDoc.getElementsByTagName('fan')[0].childNodes[0].nodeValue;
		}
	}
	xmlHttp.open("GET",url,true)
	xmlHttp.send(null)
}
function addArtistFanRightBtn(artist_id,offset_path,curl,msg_div)
{

	if(msg_div == undefined)
	{
		msg_div = 'artist_fan_status_right';
	}

	xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
		{
		alert ("Browser does not support HTTP Request")
		return
		}
	var url=offset_path+"/celeb-fan-activity.php"+"?artist_id="+artist_id+"&cur_url="+curl;
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
		{
			xmlDoc=xmlHttp.responseXML;
			document.getElementById(msg_div).innerHTML = xmlDoc.getElementsByTagName('fan')[0].childNodes[0].nodeValue;
		}
	}
	xmlHttp.open("GET",url,true)
	xmlHttp.send(null)
}
function addArtistFan(artist_id,offset_path,curl,msg_div)
{
	if(msg_div == undefined)
	{
		msg_div = 'fan_status';
	}


	xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
		{
		alert ("Browser does not support HTTP Request")
		return
		}
	var url=offset_path+"/celeb-fan-activity.php"+"?artist_id="+artist_id+"&cur_url="+curl;

	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
		{
			xmlDoc=xmlHttp.responseXML;
			document.getElementById(msg_div).innerHTML = xmlDoc.getElementsByTagName('fan')[0].childNodes[0].nodeValue;
		}
	}
	xmlHttp.open("GET",url,true)
	xmlHttp.send(null)
}

/* Nandhini Javascript Function code Ended */
function removeArtistFan(artist_id, offset_path, msg_div)
{
	if(msg_div == undefined)
	{
		msg_div = 'fan_status';
	}

	xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
	{
		alert ("Browser does not support HTTP Request")
		return
	}
	var url=offset_path+"/artist_fan.php"+"?artist_id="+artist_id+'&opt=2';
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
		{
			xmlDoc=xmlHttp.responseXML;
			document.getElementById(msg_div).innerHTML = xmlDoc.getElementsByTagName('fan')[0].childNodes[0].nodeValue;
		}
	}
	xmlHttp.open("GET",url,true)
	xmlHttp.send(null)
}

function addMovieFan(movie_id, offset_path, msg_div)
{
	if(msg_div == undefined)
	{
		msg_div = 'fan_status';
	}

	xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
	{
		alert ("Browser does not support HTTP Request")
		return
	}
	var url=offset_path+"/movie_fan.php"+"?movie_id="+movie_id
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
		{
			xmlDoc=xmlHttp.responseXML;
			document.getElementById(msg_div).innerHTML = xmlDoc.getElementsByTagName('fan')[0].childNodes[0].nodeValue;
		}
	}
	xmlHttp.open("GET",url,true)
	xmlHttp.send(null)
}
function addMovieFanRightBtn(movie_id, offset_path, msg_div)
{
	if(msg_div == undefined)
	{
		msg_div = 'fan_status_right';
	}

	xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
	{
		alert ("Browser does not support HTTP Request")
		return
	}
	var url=offset_path+"/movie_fan.php"+"?movie_id="+movie_id
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
		{
			xmlDoc=xmlHttp.responseXML;
			document.getElementById(msg_div).innerHTML = xmlDoc.getElementsByTagName('fan')[0].childNodes[0].nodeValue;
		}
	}
	xmlHttp.open("GET",url,true)
	xmlHttp.send(null)
}

function removeMovieFan(movie_id, offset_path)
{
	xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
	{
		alert ("Browser does not support HTTP Request")
		return
	}
	var url=offset_path+"/movie_fan.php"+"?movie_id="+movie_id+'&opt=2';
	xmlHttp.onreadystatechange = function() {
		if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
		{
			xmlDoc=xmlHttp.responseXML;
			document.getElementById('fan_status').innerHTML = xmlDoc.getElementsByTagName('fan')[0].childNodes[0].nodeValue;
		}
	}
	xmlHttp.open("GET",url,true)
	xmlHttp.send(null)
}

function addUserFan(fan_of, offset_path)
{
	xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
		{
		alert ("Browser does not support HTTP Request")
		return
		}
	var url=offset_path+"/user_fan.php"+"?fan_of="+fan_of
	xmlHttp.onreadystatechange=stateChanged2
	xmlHttp.open("GET",url,true)
	xmlHttp.send(null)
}
function stateChanged2()
{
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
	{
		xmlDoc=xmlHttp.responseXML;
		document.getElementById('fan_status').innerHTML = xmlDoc.getElementsByTagName('fan')[0].childNodes[0].nodeValue;
	}
}

function changeMovieStatus(status, offset_path,movie_id)
{
	if(status)
	{
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
			{
			alert ("Browser does not support HTTP Request")
			return
			}
		var url=offset_path+"/movie_status.php"+"?status="+status+"&movie_id="+movie_id
		//alert(url);
		xmlHttp.onreadystatechange =
			function()
			{
				if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
				{
					if(status=='Want to watch')
					{
					var str=document.getElementById('movie_watch_val_hidden').value;
					var str=document.getElementById('movie_watch_val_hidden').value;
					alert(xmlHttp.responseText);
					if(str=='')
					movie_status_cnt_val=1;
					else
					{
					var movie_status_cnt_val=str.replace(",","");
					movie_status_cnt_val=parseInt(movie_status_cnt_val)+1;
					movie_status_cnt_val=addCommas(movie_status_cnt_val);
					}
					document.getElementById('movie_status_cnt').innerHTML ="("+movie_status_cnt_val+")";
					document.getElementById('movie_watch_val_hidden').value=movie_status_cnt_val;
					}
					if(status=='Not interested')
					{
					alert(xmlHttp.responseText);
					var str=document.getElementById('movie_not_interest_val_hidden').value;
					if(str=='')
					movie_not_interest_cnt_val=1;
					else
					{
					var movie_not_interest_cnt_val=str.replace(",","");
					movie_not_interest_cnt_val=parseInt(movie_not_interest_cnt_val)+1;
					movie_not_interest_cnt_val=addCommas(movie_not_interest_cnt_val);
					}
					document.getElementById('movie_not_interest_cnt').innerHTML ="("+ movie_not_interest_cnt_val+")";
					document.getElementById('movie_not_interest_val_hidden').value=movie_not_interest_cnt_val;
					}

				}
                        }
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)

	}
	else
	{
		document.getElementById('movie_status').style.display = "block";
		document.getElementById('movie_status').innerHTML = "Please update your status";
	}
}
function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}
/*function submitMovieOverviewCastVote(status, offset_path, movie_id, artist_id, fan_id, role_id,red_url) {
//	submitCastVote(status, offset_path, movie_id, artist_id, fan_id, role_id);
	 if(status)
        {
                xmlHttp=GetXmlHttpObject()
                if (xmlHttp==null)
                {
                        alert ("Browser does not support HTTP Request")
                        return
                }
                var url=offset_path+"/castVotes.php"+"?status="+status+"&movie_id="+movie_id+"&artist_id="+artist_id+"&submit_by="+fan_id+"&role_id="+role_id
                xmlHttp.onreadystatechange =
                function()
                {
                        if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
                        {
                                xmlDoc=xmlHttp.responseXML;
                                if(xmlDoc.getElementsByTagName('status_msg')[0].childNodes[0] != undefined)
                                {
                                 var status_msg = xmlDoc.getElementsByTagName('status_msg')[0].childNodes[0].nodeValue;
                                 document.getElementById('cast_vote_'+artist_id).innerHTML = status_msg;
                                }

                                if(xmlDoc.getElementsByTagName('love_count')[0].childNodes[0] != undefined)
                                {
                                var love_msg = xmlDoc.getElementsByTagName('love_count')[0].childNodes[0].nodeValue;
                                document.getElementById('love_count_'+artist_id).innerHTML = '('+love_msg+')';
				}

                                if(xmlDoc.getElementsByTagName('hate_count')[0].childNodes[0] != undefined)
                                {
                                var hate_msg = xmlDoc.getElementsByTagName('hate_count')[0].childNodes[0].nodeValue;
                                document.getElementById('hate_count_'+artist_id).innerHTML = '('+hate_msg+')';
                                }
				window.location = red_url;
                        }
                }
                xmlHttp.open("GET",url,true);
                xmlHttp.send(null);
        }
        else
        {
                document.getElementById('cast_vote_'+artist_id).innerHTML = "Please update your status";
		window.location = red_url;
        }
//	window.location = red_url;
}*/
function submitMovieOverviewCastVote(status, offset_path, movie_id, artist_id,red_url) {
	if(status)
        {
                xmlHttp=GetXmlHttpObject()
                if (xmlHttp==null)
                {
                        alert ("Browser does not support HTTP Request")
                        return
                }
                var url=offset_path+"/castVotes.php"+"?status="+status+"&movie_id="+movie_id+"&artist_id="+artist_id
                xmlHttp.onreadystatechange =
                function()
                {
                        if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
                        {
                                xmlDoc=xmlHttp.responseXML;
                                if(xmlDoc.getElementsByTagName('status_msg')[0].childNodes[0] != undefined)
                                {
					var status_msg = xmlDoc.getElementsByTagName('status_msg')[0].childNodes[0].nodeValue;
					document.getElementById('cast_vote_'+artist_id).innerHTML = status_msg;
                                }
                                if(xmlDoc.getElementsByTagName('love_count')[0].childNodes[0] != undefined)
                                {
					var love_msg = xmlDoc.getElementsByTagName('love_count')[0].childNodes[0].nodeValue;
					document.getElementById('love_count_'+artist_id).innerHTML = '('+love_msg+')';
				}
                                if(xmlDoc.getElementsByTagName('hate_count')[0].childNodes[0] != undefined)
                                {
					var hate_msg = xmlDoc.getElementsByTagName('hate_count')[0].childNodes[0].nodeValue;
					document.getElementById('hate_count_'+artist_id).innerHTML = '('+hate_msg+')';
                                }
				window.location = red_url;
                        }
                }
                xmlHttp.open("GET",url,true);
                xmlHttp.send(null);
        }
        else
        {
                document.getElementById('cast_vote_'+artist_id).innerHTML = "Please update your status";
		window.location = red_url;
        }
}
/*function submitCastVote(status, offset_path, movie_id, artist_id, fan_id, role_id)
{
        if(status)
        {
                xmlHttp=GetXmlHttpObject()
                if (xmlHttp==null)
                        {
                        alert ("Browser does not support HTTP Request")
                        return
                        }
                var url=offset_path+"/castVotes.php"+"?status="+status+"&movie_id="+movie_id+"&artist_id="+artist_id+"&submit_by="+fan_id+"&role_id="+role_id
                //alert(url);
                xmlHttp.onreadystatechange =
                function()
                {
                	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
                        {
                        	//document.getElementById('cast_vote_'+artist_id).innerHTML = xmliHttp.responseText;
				xmlDoc=xmlHttp.responseXML;
				if(xmlDoc.getElementsByTagName('status_msg')[0].childNodes[0] != undefined)
				{
				 var status_msg = xmlDoc.getElementsByTagName('status_msg')[0].childNodes[0].nodeValue;
				 document.getElementById('cast_vote_'+artist_id).innerHTML = status_msg;
			        }

				if(xmlDoc.getElementsByTagName('love_count')[0].childNodes[0] != undefined)
                                {
                                var love_msg = xmlDoc.getElementsByTagName('love_count')[0].childNodes[0].nodeValue;
                                document.getElementById('love_count_'+artist_id).innerHTML = '('+love_msg+')';
                                }

				if(xmlDoc.getElementsByTagName('hate_count')[0].childNodes[0] != undefined)
                                {
                                var hate_msg = xmlDoc.getElementsByTagName('hate_count')[0].childNodes[0].nodeValue;
                                document.getElementById('hate_count_'+artist_id).innerHTML = '('+hate_msg+')';
                                }
			}
               	}
                xmlHttp.open("GET",url,true);
                xmlHttp.send(null);
        }
        else
        {
                document.getElementById('cast_vote_'+artist_id).innerHTML = "Please update your status";
        }
}*/
function submitCastVote(status, offset_path, movie_id, artist_id)
{
        if(status)
        {
                xmlHttp=GetXmlHttpObject()
                if (xmlHttp==null)
                {
                        alert ("Browser does not support HTTP Request")
                        return
                }
                var url=offset_path+"/castVotes.php"+"?status="+status+"&movie_id="+movie_id+"&artist_id="+artist_id
		xmlHttp.onreadystatechange =
                function()
                {
                	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
                        {
				xmlDoc=xmlHttp.responseXML;
				if(xmlDoc.getElementsByTagName('status_msg')[0].childNodes[0] != undefined)
				{
				 var status_msg = xmlDoc.getElementsByTagName('status_msg')[0].childNodes[0].nodeValue;
				 document.getElementById('cast_vote_'+artist_id).innerHTML = status_msg;

				}

				if(xmlDoc.getElementsByTagName('love_count')[0].childNodes[0] != undefined)
                                {
                                var love_msg = xmlDoc.getElementsByTagName('love_count')[0].childNodes[0].nodeValue;
                                document.getElementById('love_count_'+artist_id).innerHTML = '('+love_msg+')';
                                }

				if(xmlDoc.getElementsByTagName('hate_count')[0].childNodes[0] != undefined)
                                {
                                var hate_msg = xmlDoc.getElementsByTagName('hate_count')[0].childNodes[0].nodeValue;
                                document.getElementById('hate_count_'+artist_id).innerHTML = '('+hate_msg+')';
                                }
			}
               	}
                xmlHttp.open("GET",url,true);
                xmlHttp.send(null);
        }
        else
        {
                document.getElementById('cast_vote_'+artist_id).innerHTML = "Please update your status";
        }
}
function submitBdayVote(artist_id, fan_id,offset_path)
{
        if(artist_id)
        {
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
		{
			alert ("Browser does not support HTTP Request")
			return
		}
		var url=offset_path+"/birthdayVotes.php"+"?artist_id="+artist_id+"&submit_by="+fan_id
		//alert(url);
		xmlHttp.onreadystatechange =
		function()
		{
			if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
			{
				xmlDoc=xmlHttp.responseXML;
				if(xmlDoc.getElementsByTagName('status_msg')[0].childNodes[0] != undefined)
				{
				var status_msg = xmlDoc.getElementsByTagName('status_msg')[0].childNodes[0].nodeValue;
				document.getElementById('bday_msg').innerHTML = status_msg;
				}

				if(xmlDoc.getElementsByTagName('bday_count')[0].childNodes[0] != undefined)
				{
				var bday_count = xmlDoc.getElementsByTagName('bday_count')[0].childNodes[0].nodeValue;
				document.getElementById('bday_count').innerHTML = '('+bday_count+')';
				}
				/*-----------Added By Shivappa on April 28 2014-------------------------*/
				/* analytics - begin */
				//old_url=document.location.href;
				urlWithoutHash =window.location.pathname;
				url = urlWithoutHash+'#roses_sent';
				
				if (history.pushState) {
				    window.history.pushState("Entertainment", "Title", url);
				}else{
				    window.location = url;
				}
				var html = '<iframe src="/popcorn/common/photo-slider-ad.html" frameborder="0" width="310" height="260" style="border: 0px none;" scrolling="no" />';
                $("#npRightAd").html(html);
				
				/* analytics - end */
				/*-----------Added By Shivappa on April 28 2014-------------------------*/
			}
		}
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)
        }
        else
        {
                document.getElementById('bday_count').innerHTML = "Please update your status";
        }
}
function submitBdayVoteIndex(artist_id, fan_id,offset_path)
{
        if(artist_id)
        {
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
		{
			alert ("Browser does not support HTTP Request")
			return
		}
		var url=offset_path+"/birthdayVotes.php"+"?artist_id="+artist_id+"&submit_by="+fan_id
		//alert(url);
		xmlHttp.onreadystatechange =
		function()
		{
			if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
			{
				xmlDoc=xmlHttp.responseXML;
				if(xmlDoc.getElementsByTagName('status_msg')[0].childNodes[0] != undefined)
				{
				var status_msg = xmlDoc.getElementsByTagName('status_msg')[0].childNodes[0].nodeValue;
				document.getElementById('bday_msg_'+artist_id).innerHTML = status_msg;
				}

				if(xmlDoc.getElementsByTagName('bday_count')[0].childNodes[0] != undefined)
				{
				var bday_count = xmlDoc.getElementsByTagName('bday_count')[0].childNodes[0].nodeValue;
				document.getElementById('bday_count_'+artist_id).innerHTML = '('+bday_count+')';
				}
			}
		}
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)
        }
        else
        {
                document.getElementById('bday_count').innerHTML = "Please update your status";
        }
}
//Function for next week release movies hit/flop count
function submitMovieVote(status, offset_path, movie_id)
{
	 //alert(status);
	if(movie_id)
	{
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
		{
			alert ("Browser does not support HTTP Request")
			return
		}
		var url=offset_path+"/upcomingMovieVotes.php"+"?movie_id="+movie_id+"&status="+status
		//alert(url);
		xmlHttp.onreadystatechange =
		function()
		{
			if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
			{

				xmlDoc=xmlHttp.responseXML;
				//alert(xmlDoc);
				if(xmlDoc.getElementsByTagName('status_msg')[0].childNodes[0] != undefined)
				{
				var status_msg = xmlDoc.getElementsByTagName('status_msg')[0].childNodes[0].nodeValue;
				//alert(document.getElementById('movieoverview_'+movie_id).innerHTML);
				document.getElementById('movieoverview_'+movie_id).innerHTML = status_msg;
				}

				if(xmlDoc.getElementsByTagName('hit_count')[0].childNodes[0] != undefined)
				{
				var hit_msg = xmlDoc.getElementsByTagName('hit_count')[0].childNodes[0].nodeValue;
				//alert('('+hit_msg+')');
				document.getElementById('hit_count').innerHTML = '('+hit_msg+')';
				}

				if(xmlDoc.getElementsByTagName('flop_count')[0].childNodes[0] != undefined)
				{
				var flop_msg = xmlDoc.getElementsByTagName('flop_count')[0].childNodes[0].nodeValue;
				document.getElementById('flop_count').innerHTML = '('+flop_msg+')';
				}
			}
		}
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)
	}
	else
	{
		document.getElementById('movie_count_status').innerHTML = "Please update your status";
	}
}

//Function for next month release movies watch/notwatch count
function submitWatchVote(status, offset_path, movie_id)
{
	if(movie_id)
	{
	xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
	{
		alert ("Browser does not support HTTP Request")
		return
	}
	var url=offset_path+"/upcomingMovieWatchVotes.php"+"?movie_id="+movie_id+"&status="+status
	//alert(url);
	xmlHttp.onreadystatechange =
	function()
	{
		if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
		{
			xmlDoc=xmlHttp.responseXML;
			if(xmlDoc.getElementsByTagName('status_msg')[0].childNodes[0] != undefined)
			{
			var status_msg = xmlDoc.getElementsByTagName('status_msg')[0].childNodes[0].nodeValue;
			//document.getElementById('movie_watch_status').innerHTML = status_msg;
			}

			/*if(xmlDoc.getElementsByTagName('watch_count')[0].childNodes[0] != undefined)
			{
			var watch_msg = xmlDoc.getElementsByTagName('watch_count')[0].childNodes[0].nodeValue;
			document.getElementById('watch_count').innerHTML = '('+watch_msg+')';
			}*/

			if(xmlDoc.getElementsByTagName('not_watch_count')[0].childNodes[0] != undefined)
			{
			var not_watch_msg = xmlDoc.getElementsByTagName('not_watch_count')[0].childNodes[0].nodeValue;
			document.getElementById('not_watch_count').innerHTML = not_watch_msg;
			}
		}
	}
	xmlHttp.open("GET",url,true)
	xmlHttp.send(null)
	}
	else
	{
		//document.getElementById('movie_watch_status').innerHTML = "Please update your status";
	}
}

function saveStatus(msg, offset_path)
{
	var msg = encode(trim(msg));

	xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
		{
		alert ("Browser does not support HTTP Request")
		return
		}
	var url=offset_path+"/fanStatus.php"+"?msg="+msg
	xmlHttp.onreadystatechange =
		function()
		{
			if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
			{
				xmlDoc=xmlHttp.responseXML;

				if (msg != '')
				{
					if(xmlDoc.getElementsByTagName('login_msg')[0].childNodes[0] != undefined)
					{
						var login_msg = xmlDoc.getElementsByTagName('login_msg')[0].childNodes[0].nodeValue;
						document.getElementById('change_status').innerHTML = login_msg;
					}
					else
					{
						var status_msg = xmlDoc.getElementsByTagName('status_msg')[0].childNodes[0].nodeValue;
						document.getElementById('change_status').innerHTML = status_msg;
					}
				}
				else
				{
					document.getElementById('change_status').innerHTML = 'Change Status';
				}

				if(login_msg != '')
				{
					document.getElementById('change_status').onmouseover = function onmouseover(event) {};
				}
				else
				{
					document.getElementById('change_status').onclick = function onclick(event) { changeStatus(status_msg); }
				}
			}
		}
	xmlHttp.open("GET",url,true)
	xmlHttp.send(null)
}

function saveQuizResult(form, offset_path, quiz_id, quiz_type, type_id, last_div, role_id)
{
	if(role_id == undefined)
	{
		var role_id = '';
	}
	var status = validateOptions(last_div);


	if(status)
	{
		var url_string = '';
		for (var i = 0; i < form.elements.length; i++)
		{
			var element = form.elements[i];
			var type = element.type;
			if (type == "checkbox" || type == "radio")
			{
				if (element.checked)
				{
					url_string += element.value + ',';
				}
			}
		}

		if(quiz_id)
		{
			xmlHttp=GetXmlHttpObject()
			if (xmlHttp==null)
				{
				alert ("Browser does not support HTTP Request")
				return
				}
			var url=offset_path+"/quizResult.php"+"?quiz_id="+quiz_id+'&result='+url_string+'&quiz_type='+quiz_type+'&type_id='+type_id+'&role_id='+role_id
			xmlHttp.onreadystatechange =
				function()
				{
					if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
					{
						document.getElementById('quiz_status').innerHTML = xmlHttp.responseText;
					}
				}
			xmlHttp.open("GET",url,true)
			xmlHttp.send(null)
		}
	}
}















function showQuestions(source_id, source_type, quiz_title, questions_count, offset_path, role_id)
{
	if(role_id == undefined)
	{
		role_id = '';
	}
	quiz_title = encode(trim(quiz_title));
	if(quiz_title)
	{
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
			{
			alert ("Browser does not support HTTP Request")
			return
			}
		var url=offset_path+"/addQuiz.php"+"?source_id="+source_id+"&source_type="+source_type+"&quiz_title="+quiz_title+'&questions_count='+questions_count+"&role_id="+role_id
		xmlHttp.onreadystatechange =
			function()
			{
				if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
				{
					document.getElementById('add_quiz').style.display = 'none';
					document.getElementById('show_quiz_question').style.display = 'block';
					document.getElementById('show_quiz_question').innerHTML = xmlHttp.responseText;
					for(var i = 1; i <= questions_count; i++)
					{
						addQuizOptions('quiz_questions_table['+i+']', i);
						addQuizOptions('quiz_questions_table['+i+']', i);
					}
				}
			}
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)

	}
	else
	{
		document.getElementById('quiz_title').className = 'input_error';
	}
}

function showFanQuizQuestions(source_name, source_type, quiz_title, questions_count, offset_path, source_detail)
{
	quiz_title = encode(trim(quiz_title));
	if(quiz_title)
	{
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
			{
			alert ("Browser does not support HTTP Request")
			return
			}
		var url=offset_path+"/addQuiz.php"+"?source_name="+source_name+"&source_type="+source_type+"&quiz_title="+quiz_title+'&questions_count='+questions_count+"&source_detail="+source_detail
		xmlHttp.onreadystatechange =
			function()
			{
				if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
				{
					document.getElementById('add_quiz').style.display = 'none';
					document.getElementById('show_quiz_question').style.display = 'block';
					document.getElementById('show_quiz_question').innerHTML = xmlHttp.responseText;
					for(var i = 1; i <= questions_count; i++)
					{
						addQuizOptions('quiz_questions_table['+i+']', i);
						addQuizOptions('quiz_questions_table['+i+']', i);
					}
				}
			}
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)

	}
	else
	{
		document.getElementById('quiz_title').className = 'input_error';
	}
}

function viewNotification(notification_id, offset_path)
{
        xmlHttp=GetXmlHttpObject()
        if (xmlHttp==null)
                {
                alert ("Browser does not support HTTP Request")
                return
                }
        var url=offset_path+"/fanShared.php"+"?notification_id="+notification_id
        xmlHttp.onreadystatechange=stateChanged2
        xmlHttp.open("GET",url,true)
        xmlHttp.send(null)
	document.getElementById('notification_'+notification_id).style.display='block';
}

//Function to add, delete scrap message
//Not using it anywhere, commented for future use (if post scrap thru ajax)
/*function addScrap(to_fan_id, scrapText, offset_path, scrap_id, opt)
{
	var errorMsg = '';
	if(scrap_id == undefined)
	{
		var scrap_id = '';
	}

	if(scrapText == undefined)
	{
		var scrapText = '';
	}

	if (opt == 'add')
	{
		if(scrapText)
		{
			var scrapText = encode(trim(scrapText));
			var url=offset_path+"/fanScrapAction.php"+"?to_fan_id="+to_fan_id+"&scrapText="+scrapText+'&opt='+opt;
		}
		else
		{
			errorMsg = "Please enter scrap message";
		}
	}
	else if (opt == 'delete')
	{
		var url=offset_path+"/fanScrapAction.php"+"?to_fan_id="+to_fan_id+"&scrap_id="+scrap_id+'&opt='+opt;
	}

	if (errorMsg == '')
	{
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
		{
			alert ("Browser does not support HTTP Request")
			return
		}
		xmlHttp.onreadystatechange =
			function()
			{
				if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
				{
				        if(opt == 'delete')
				        {
						//document.getElementById('scrap_'+scrap_id).style.display = 'none';
						document.getElementById('scrap_'+scrap_id).innerHTML = xmlHttp.responseText;
				        }
				        else
				        {
						document.getElementById('add_scrap').style.display = 'none';
						document.getElementById('scrap_status').innerHTML = xmlHttp.responseText;
				        }

				}
			}
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)
	}
	else
	{
		document.getElementById('scrap_status').innerHTML = errorMsg;
	}
}*/
function viewImageTemp(image_id, div_id, offset_path, args, file_name, source_type)
{
	viewImage(image_id, div_id, offset_path, args, file_name+'.php', source_type)
}
function viewImageRedirect(image_id, div_id, path, args, file_name, source_type)
{
	if (image_id) {
		window.location = args+image_id+".html";
	}
}
function showNetPrvImage() {
	 $(".photoSlideControls").show();
}
function hideNetPrvImage()
{
	 $(".photoSlideControls").hide();
}
function viewImage(image_id, div_id, offset_path, args, file_name, source_type)
{
	//alert(source_type);
	if(source_type == undefined)
	{
		source_type = '';
	}

	image_id = trim(image_id);
	if(image_id)
	{
		xmlHttp1=GetXmlHttpObject()
		if (xmlHttp1==null)
			{
			alert ("Browser does not support HTTP Request")
			return
			}
		var url=offset_path+"/viewPhoto.php"+"?image_id="+image_id+'&source_type='+source_type+args;
		xmlHttp1.onreadystatechange =
			function()
			{
				if (xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
				{
					document.getElementById(div_id).innerHTML = xmlHttp1.responseText;
					if(file_name != undefined)
					{
						pagination(args, offset_path, file_name, image_id);
					}
				}
				else
				{
					document.getElementById(div_id).innerHTML = '<div style="text-align:center;padding:20px;"><img src="'+offset_path+'/images/ajax-loader.gif" valign="middle" /></div>';
				}
			}
		xmlHttp1.open("GET",url,true)
		xmlHttp1.send(null)
	}
}
function paginationTemp(args, offset_path, file_name, default_image)
{
	pagination(args, offset_path, file_name+'.php', default_image)
}
function pagination(args, offset_path, file_name, default_image)
{
	var args = trim(args);
	if(args)
	{
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
			{
			alert ("Browser does not support HTTP Request")
			return
			}
		var url = offset_path + '/' + file_name + '?' + args
		xmlHttp.onreadystatechange =
			function()
			{
				if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
				{
					document.getElementById('list_view').innerHTML = xmlHttp.responseText;
					if(default_image != undefined)
					{
						if(document.getElementById('image_'+default_image) != undefined)
						{
							document.getElementById('image_'+default_image).style.border = '2px solid #F47321';
						}
					}
				}
				else
				{
					document.getElementById('list_view').innerHTML = '<div style="text-align:center;padding:20px;"><img src="'+offset_path+'/images/ajax-loader.gif" valign="middle" /></div>';
				}
			}
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)
	}
}

function rating(vote,id_num,ip_num,units,table_type, role_id)
{
	xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
		{
		alert ("Browser does not support HTTP Request")
		return
		}

	var t = 'unit_ul'+id_num+'_'+table_type;
	var theUL = document.getElementById(t); // the UL
	// switch UL with a loading div
	theUL.innerHTML = '<div class="loading"></div>';
	xmlHttp.open('get', '/rpc.php?j='+vote+'&q='+id_num+'&t='+ip_num+'&c='+units+'&s='+table_type+'&role_id='+role_id,true);
	xmlHttp.onreadystatechange =
		function()
		{
			if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
			{
				var response = xmlHttp.responseText;
				var update = new Array();
				if(response.indexOf('|') != -1)
				{
					update = response.split('|');
					changeText1(update[0], update[1]);
				}
			}
		}

	xmlHttp.send(null);
}

function changeText1( div2show, text ) {
// Detect Browser
    var IE = (document.all) ? 1 : 0;
    var DOM = 0;
    if (parseInt(navigator.appVersion) >=5) {DOM=1};

    // Grab the content from the requested "div" and show it in the "container"
    if (DOM) {
        var viewer = document.getElementById(div2show);
        viewer.innerHTML = text;
    }  else if(IE) {
        document.all[div2show].innerHTML = text;
    }
}

/*function getBirthdays(offset_path, lang_id)
{
	document.getElementById('birthday_content').style.display = 'none';
	document.getElementById('loading_content').style.display = 'block';

	xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
	{
	       alert ("Browser does not support HTTP Request")
	       return
	}
	var url=offset_path+"/allBirthdaysContent.php"+"?lang_id="+lang_id
	//alert(url);
	xmlHttp.onreadystatechange =
		function()
	       {
		       if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
		       {
		       		document.getElementById('birthday_content').innerHTML = xmlHttp.responseText;
				document.getElementById('birthday_content').style.display = 'block';
			        document.getElementById('loading_content').style.display = 'none';
				changeRightSpotLightInclude(offset_path, lang_id);
		       }
	       }
	xmlHttp.open("GET",url,true)
	xmlHttp.send(null)
}*/
function getBirthdays(offset_path, lang_id)
{
	document.getElementById('birthday_content').style.display = 'none';
	document.getElementById('loading_content').style.display = 'block';

	xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
	{
	       alert ("Browser does not support HTTP Request")
	       return
	}
	var url=offset_path+"/allBirthdaysContent.php"+"?lang_id="+lang_id
	//alert(url);
	xmlHttp.onreadystatechange =
	function()
	{
		if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
		{
		       	document.getElementById('birthday_content').innerHTML = xmlHttp.responseText;
			document.getElementById('birthday_content').style.display = 'block';
			document.getElementById('loading_content').style.display = 'none';
			changeRightSpotLightInclude(offset_path, lang_id);
		}
	}
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
	selected_url = site_url+"/celebs/birthdays.html";
	if (history.pushState) {
		window.history.pushState("Entertainment", "Title", selected_url);
	}else{
		window.location = selected_url;
	}
	$(document).attr('title', "Celebrity Birthdays | Bollywood Actor & Actress Birthdays | Hollywood Birthdays | South Indian Actor & Actress birthdays | Birthday Wishes");
}
function getBirthdaysTab(site_url,offset_path, lang_id)
{
	document.getElementById('birthday_content').style.display = 'none';
	document.getElementById('loading_content').style.display = 'block';

	xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
	{
	       alert ("Browser does not support HTTP Request")
	       return
	}
	var url=offset_path+"/allBirthdaysContent.php"+"?lang_id="+lang_id
	//alert(url);
	xmlHttp.onreadystatechange =
		function()
	       {
		       if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
		       {
		       		document.getElementById('birthday_content').innerHTML = xmlHttp.responseText;
				document.getElementById('birthday_content').style.display = 'block';
			        document.getElementById('loading_content').style.display = 'none';
				changeRightSpotLightInclude(offset_path, lang_id);
		       }
	       }
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
	selected_url = site_url+"/celebs/birthdays.html";
	if (history.pushState) {
		window.history.pushState("Entertainment", "Title", selected_url);
	}else{
		window.location = selected_url;
	}
	$(document).attr('title', "Celebrity Birthdays | Bollywood Actor & Actress Birthdays | Hollywood Birthdays | South Indian Actor & Actress birthdays | Birthday Wishes");
}
function getBirthdayByMonth(site_url,offset_path,month,lang_id) {
	xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
	{
	       alert ("Browser does not support HTTP Request")
	       return
	}
	var url=offset_path+"/upcomingBirthdaysContent.php"+"?lang_id="+lang_id+"&selmonth="+month;
	//alert(url);
	xmlHttp.onreadystatechange =
		function()
	       {
		       if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
		       {
		       		document.getElementById('upcoming_birthday_content').innerHTML = xmlHttp.responseText;
				document.getElementById('upcoming_birthday_content').style.display = 'block';
			        document.getElementById('loading_content').style.display = 'none';
		       }
	       }
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
	
	selected_url = site_url+"/celebs/birthdays/"+month.toLowerCase()+'.html';
	if (history.pushState) {
		window.history.pushState("Entertainment", "Title", selected_url);
	}else{
		window.location = selected_url;
	}
	$(document).attr('title', "Celebrity Birthdays | Bollywood Actor & Actress Birthdays | Hollywood Birthdays | South Indian Actor & Actress birthdays | Birthday Wishes");
}
function getBirthdayByDate(site_url,offset_path,month,lang_id,date) {
	xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
	{
	       alert ("Browser does not support HTTP Request")
	       return
	}
	var url=offset_path+"/upcomingBirthdaysContent.php"+"?lang_id="+lang_id+"&selmonth="+month+"&seldate="+date;
	//alert(url);
	xmlHttp.onreadystatechange =
		function()
	       {
		       if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
		       {
		       		document.getElementById('upcoming_birthday_content').innerHTML = xmlHttp.responseText;
				document.getElementById('upcoming_birthday_content').style.display = 'block';
			        document.getElementById('loading_content').style.display = 'none';
		       }
	       }
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
	
	selected_url = site_url+"/celebs/birthdays/"+month.toLowerCase()+'-'+date+'.html';
	if (history.pushState) {
		window.history.pushState("Entertainment", "Title", selected_url);
	}else{
		window.location = selected_url;
	}
	$(document).attr('title', "Celebrity Birthdays | Bollywood Actor & Actress Birthdays | Hollywood Birthdays | South Indian Actor & Actress birthdays | Birthday Wishes");
}
function submitBdayVoteIndexNew(artist_id, fan_id,offset_path,artist_url)
{
        if(artist_id)
        {
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null)
		{
			alert ("Browser does not support HTTP Request")
			return
		}
		var url=offset_path+"/birthdayVotes.php"+"?artist_id="+artist_id+"&submit_by="+fan_id
		//alert(url);
		xmlHttp.onreadystatechange =
		function()
		{
			if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
			{
				xmlDoc=xmlHttp.responseXML;
				if(xmlDoc.getElementsByTagName('status_msg')[0].childNodes[0] != undefined)
				{
				var status_msg = xmlDoc.getElementsByTagName('status_msg')[0].childNodes[0].nodeValue;
				document.getElementById('bday_msg_'+artist_id).innerHTML = status_msg;
				if(xmlDoc.getElementsByTagName('bday_count')[0].childNodes[0] != undefined)
				{
				var bday_count = xmlDoc.getElementsByTagName('bday_count')[0].childNodes[0].nodeValue;
				document.getElementById('bday_count_'+artist_id).innerHTML = '('+bday_count+')';
				}
				var win=window.open(artist_url, '_blank');
				win.focus();
				}

				if(xmlDoc.getElementsByTagName('bday_count')[0].childNodes[0] != undefined)
				{
				var bday_count = xmlDoc.getElementsByTagName('bday_count')[0].childNodes[0].nodeValue;
				document.getElementById('bday_count_'+artist_id).innerHTML = '('+bday_count+')';
				}
			}
		}
		xmlHttp.open("GET",url,true)
		xmlHttp.send(null)
        }
        else
        {
                document.getElementById('bday_count').innerHTML = "Please update your status";
        }
}
function changeRightSpotLightInclude(offset_path, lang_id) {
	xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
	{
	       alert ("Browser does not support HTTP Request")
	       return
	}
	var url=offset_path+"/allBirthdaysRightIncludeContent.php"+"?lang_id="+lang_id
	xmlHttp.onreadystatechange =
		function()
	       {
		       if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
		       {
		       		document.getElementById('birthday_content_right_include').innerHTML = xmlHttp.responseText;
		       }
       	       }
       	xmlHttp.open("GET",url,true)
	xmlHttp.send(null)
}
function loadIndexImages(page_id, offset_path, lang_id, opt, limit)
{
	var xmlHttp = new Array();
	xmlHttp[opt]=GetXmlHttpObject()
	if (xmlHttp[opt]==null)
	{
		alert ("Browser does not support HTTP Request")
		return
	}
	if (opt=='movie')
		var url=offset_path+"/loadMovieImages.php"+"?lang_id="+lang_id+"&limit="+limit
	else if (opt=='actor')
		var url=offset_path+"/loadArtistImages.php"+"?lang_id="+lang_id+"&limit="+limit+"&role_id=1"
	else if (opt=='actress')
		var url=offset_path+"/loadArtistImages.php"+"?lang_id="+lang_id+"&limit="+limit+"&role_id=2"

	xmlHttp[opt].onreadystatechange =
	function()
	{
		if (xmlHttp[opt].readyState==4 || xmlHttp[opt].readyState=="complete")
		{
			document.getElementById(opt+'_content').innerHTML = xmlHttp[opt].responseText;

			var prev_page = page_id-1;
			var next_page = page_id+1;
			if(prev_page>=1)
			{
				document.getElementById('prev_link_'+opt).onclick = function onclick(event)
					{
						toggleSliderColor(prev_page, offset_path, opt, limit);
						loadIndexImages(prev_page, offset_path, lang_id, opt, limit);
					};
			}
			else
			{
				document.getElementById('prev_link_'+opt).onclick = function onclick(event){};
			}
			if(next_page<=limit)
			{
				document.getElementById('next_link_'+opt).onclick = function onclick(event)
					{
						toggleSliderColor(next_page, offset_path, opt, limit);
						loadIndexImages(next_page, offset_path, lang_id, opt, limit);
					};
			}
			else
			{
				document.getElementById('next_link_'+opt).onclick = function onclick(event){};
			}
		}
		else
		{
			document.getElementById(opt+'_content').innerHTML = '<div style="text-align:center;padding:20px;"><img src="'+offset_path+'/images/loading.gif" valign="middle" /></div>';
		}
	}
	xmlHttp[opt].open("GET",url,true)
	xmlHttp[opt].send(null)
}

function loadProfileImages(page_id, offset_path, source_id, source_type, opt, slides_count)
{
	var xmlHttp = new Array();
	xmlHttp[opt]=GetXmlHttpObject()
	if (xmlHttp[opt]==null)
	{
		alert ("Browser does not support HTTP Request")
		return
	}
	var url=offset_path+"/loadProfileImages.php"+"?source_id="+source_id+"&source_type="+source_type+"&opt="+opt
	xmlHttp[opt].onreadystatechange =
	function()
	{
		if (xmlHttp[opt].readyState==4 || xmlHttp[opt].readyState=="complete")
		{
			document.getElementById(opt+'_content').innerHTML = xmlHttp[opt].responseText;

			var prev_page = page_id-1;
			var next_page = page_id+1;
			if(prev_page>=1)
			{
				document.getElementById('prev_link_'+opt).onclick = function onclick(event)
					{
						toggleSliderColor(prev_page, offset_path, opt, slides_count);
						loadProfileImages(prev_page, offset_path, source_id, source_type, opt, slides_count);
					};
			}
			else
			{
				document.getElementById('prev_link_'+opt).onclick = function onclick(event){};
			}
			if(next_page<=slides_count)
			{
				document.getElementById('next_link_'+opt).onclick = function onclick(event)
					{
						toggleSliderColor(next_page, offset_path, opt, slides_count);
						loadProfileImages(next_page, offset_path, source_id, source_type, opt, slides_count);
					};
			}
			else
			{
				document.getElementById('next_link_'+opt).onclick = function onclick(event){};
			}
		}
		else
		{
			document.getElementById(opt+'_content').innerHTML = '<div style="text-align:center;padding:20px;"><img src="'+offset_path+'/images/ajax-loader.gif" valign="middle" /></div>';
		}
	}
	xmlHttp[opt].open("GET",url,true)
	xmlHttp[opt].send(null)
}

function loadFriendsImages(page_id, offset_path, profile_id, opt, slides_count)
{
	var xmlHttp = new Array();
	xmlHttp[opt]=GetXmlHttpObject()
	if (xmlHttp[opt]==null)
	{
		alert ("Browser does not support HTTP Request")
		return
	}
	var url=offset_path+"/loadFriendsImages.php"+"?profile_id="+profile_id

	xmlHttp[opt].onreadystatechange =
	function()
	{
		if (xmlHttp[opt].readyState==4 || xmlHttp[opt].readyState=="complete")
		{
			document.getElementById(opt+'_content').innerHTML = xmlHttp[opt].responseText;

			var prev_page = page_id-1;
			var next_page = page_id+1;
			if(prev_page>=1)
			{
				document.getElementById('prev_link_'+opt).onclick = function onclick(event)
					{
						toggleSliderColor(prev_page, offset_path, opt, slides_count);
						loadFriendsImages(prev_page, offset_path, profile_id, opt, slides_count)
					};
			}
			else
			{
				document.getElementById('prev_link_'+opt).onclick = function onclick(event){};
			}
			if(next_page<=slides_count)
			{
				document.getElementById('next_link_'+opt).onclick = function onclick(event)
					{
						toggleSliderColor(next_page, offset_path, opt, slides_count);
						loadFriendsImages(next_page, offset_path, profile_id, opt, slides_count)
					};
			}
			else
			{
				document.getElementById('next_link_'+opt).onclick = function onclick(event){};
			}
		}
		else
		{
			document.getElementById(opt+'_content').innerHTML = '<div style="text-align:center;padding:20px;"><img src="'+offset_path+'/images/ajax-loader.gif" valign="middle" /></div>';
		}
	}
	xmlHttp[opt].open("GET",url,true)
	xmlHttp[opt].send(null)
}
//Function to load upcomings movie photos in index page.
function loadUpcomingPhotos(offset_path, lang_id)
{
	xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
	{
		alert ("Browser does not support HTTP Request")
		return
	}
	var url=offset_path+"/loadUpcomingPhotos.php"+"?upcoming_lang="+lang_id;

	xmlHttp.onreadystatechange =
	function()
	{
		if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
		{
			document.getElementById('photos').innerHTML = xmlHttp.responseText;
		}
		else
		{
			document.getElementById('photos').innerHTML = '<div style="text-align:center;padding:20px;"><img src="'+offset_path+'/images/loading.gif" valign="middle" /></div>';
		}
	}
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}
function loadEventUpcomingPhotos(offset_path, lang_id)
{
	xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
	{
		alert ("Browser does not support HTTP Request")
		return
	}
	var url=offset_path+"/loadUpcomingPhotos.php"+"?upcoming_lang="+lang_id+"&type=event";

	xmlHttp.onreadystatechange =
	function()
	{
		if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
		{
			document.getElementById('eventsPhotos').innerHTML = xmlHttp.responseText;
		}
		else
		{
			document.getElementById('eventsPhotos').innerHTML = '<div style="text-align:center;padding:20px;"><img src="'+offset_path+'/images/loading.gif" valign="middle" /></div>';
		}
	}
	xmlHttp.open("GET",url,true);
	xmlHttp.send(null);
}
//Function to load recent fan's activities
function loadRecentActivities(offset_path, limit)
{
        xmlHttp=GetXmlHttpObject()
        if (xmlHttp==null)
        {
                alert ("Browser does not support HTTP Request")
                return
        }
        artistid=document.getElementById('art_id_fan_activity').value;
        var url=offset_path+"/loadRecentActivities.php"+"?limit="+limit+"&artistid="+artistid;

        xmlHttp.onreadystatechange =
        function()
        {
                if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
                {
                        document.getElementById('activity_content').innerHTML = xmlHttp.responseText;
                }
                else
                {
                        document.getElementById('activity_content').innerHTML = '<div style="text-align:center;padding:20px;"><img src="'+offset_path+'/images/loading.gif" valign="middle" /></div>';
                }
        }
        xmlHttp.open("GET",url,true);
        xmlHttp.send(null);
}
function loadIndexRecentActivities(offset_path, limit)
{

        xmlHttp=GetXmlHttpObject()
        if (xmlHttp==null)
        {
                alert ("Browser does not support HTTP Request")
                return
        }
        var url=offset_path+"/loadRecentActivities.php"+"?limit="+limit;

        xmlHttp.onreadystatechange =
        function()
        {
                if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
                {
                        document.getElementById('activity_content').innerHTML = xmlHttp.responseText;
                }
                else
                {
                        document.getElementById('activity_content').innerHTML = '<div style="text-align:center;padding:20px;"><img src="'+offset_path+'/images/loading.gif" valign="middle" /></div>';
                }
        }
        xmlHttp.open("GET",url,true);
        xmlHttp.send(null);
}
function loadMovieRecentActivities(offset_path, limit)
{
        xmlHttp=GetXmlHttpObject()
        if (xmlHttp==null)
        {
                alert ("Browser does not support HTTP Request")
                return
        }
        movieid=document.getElementById('movie_id_fan_activity').value;
     	var url=offset_path+"/loadRecentActivities.php"+"?limit="+limit+"&movieid="+movieid;
		xmlHttp.onreadystatechange =
        function()
        {
            if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
            {
                document.getElementById('activity_content').innerHTML = xmlHttp.responseText;
            }
            else
            {
				document.getElementById('activity_content').innerHTML = '<div style="text-align:center;padding:20px;"><img src="'+offset_path+'/images/loading.gif" valign="middle" /></div>';
            }
        }
        xmlHttp.open("GET",url,true);
        xmlHttp.send(null);
}





//Function to load pictures
function loadPictures(offset_path)
{
	// alert('Load');
  var movie_name = "";
  var artist_name = "";
  var lang_id = "";

  typeIndex = document.getElementById('type').selectedIndex;
  type = document.getElementById('type')[typeIndex].value;
  //alert(type);
  movie_name = document.getElementById('picture_movie').value;
  artist_name = document.getElementById('picture_artist').value;
  roleIndex = document.getElementById('picture_role').selectedIndex;
  role_id = document.getElementById('picture_role')[roleIndex].value;
  langIndex =  document.getElementById('picture_lang').selectedIndex;
  lang_id = document.getElementById('picture_lang')[langIndex].value;


  xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
	{
		alert ("Browser does not support HTTP Request")
		return
	}
	var url=offset_path+"admin/controllers/loadPictures.php"+"?movie_name="+movie_name+"&artist_name="+artist_name+"&lang_id="+lang_id+"&role_id="+role_id+"&type="+type;

    xmlHttp.onreadystatechange =
        function()
        {
                if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
                {
					//alert(xmlHttp.responseText);
                      document.getElementById('picList').innerHTML = xmlHttp.responseText;
                }

        }
        xmlHttp.open("GET",url,true);
        xmlHttp.send(null);

 }
function Ltrim(val)
{return val.replace(/^\s+/,"");}
function Rtrim(val)
{return val.replace(/\s+$/,"");}
function trim(val)
{return Ltrim(Rtrim(val));}







function setTvDetails(lang_id, show_name, tv_id)
	{
	xmlHttp=GetXmlHttpObject()
	if (xmlHttp==null)
		{
		alert ("Browser does not support HTTP Request")
		return
		}
	var url="tv_show_details.php"+"?lang_id="+lang_id+"&show_name="+show_name+"&tv_id="+tv_id
	xmlHttp.onreadystatechange=tvStateChanged1
	xmlHttp.open("GET",url,true)
	xmlHttp.send(null)	
	}
function tvStateChanged1()
	{
	if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
		{
			tinyMCE.triggerSave();
	 		xmlDoc=xmlHttp.responseXML;

	 	var field_names_array = new Array();
	 	field_names_array = ["tv_id","start_year","start_month","end_year","end_month", "genre","show_time", "channel_name","channel_topic_name","cms_tv_topic", "meta_title", "meta_desc", "meta_key"];

	 	for(var i=0, len = field_names_array.length; i<len; i++)
 		{
 			if (xmlDoc.getElementsByTagName(field_names_array[i])[0].childNodes[0] != undefined )
			{
				document.getElementById(field_names_array[i]).value =
				xmlDoc.getElementsByTagName(field_names_array[i])[0].childNodes[0].nodeValue;
			}
 		}

	 	
	 	var field_names_array = new Array();
	 	field_names_array = ["awards", "synopsis"];
	 	for(var i=0, len = field_names_array.length; i<len; i++)
	 		{
	 			if (xmlDoc.getElementsByTagName(field_names_array[i])[0].childNodes[0] != undefined )
					{
						tinyMCE.execCommand("mceRemoveControl", false, field_names_array[i]);
						document.getElementById(field_names_array[i]).value =
						xmlDoc.getElementsByTagName(field_names_array[i])[0].childNodes[0].nodeValue;
						tinyMCE.execCommand("mceAddControl", false, field_names_array[i]);
					}
	 		}

	 	var field_names_array = new Array();
	 	field_names_array = ["cast", "director", "producer","search_tweets_keyword","search_tweets_keyword1"];

		for(var i=0, len = field_names_array.length; i<len; i++)
	 		{
			var role_id = 0;
			var div_id = '';
			if (field_names_array[i] == 'cast')
				{
				role_id = 1;
				div_id = 'cast_row';
				}
			else if (field_names_array[i] == 'search_tweets_keyword')
				{
					div_id = 'search_tweets_row';
				}
				else if (field_names_array[i] == 'search_tweets_keyword1')
				{
					div_id = 'search_tweets_row1';
				}
			else if (field_names_array[i] == 'director')
				{
				role_id = 3;
				div_id = 'director_row';
				}
			else if(field_names_array[i] == 'producer')
				{
				role_id = 4;
				div_id = 'producer_row';
				}
			
			var res = xmlDoc.getElementsByTagName(field_names_array[i]);
			if (res.length > 0)
				{
				var res1 = res.item(0).getElementsByTagName('name');
				if (res1.length > 0)
					{
					document.getElementById(div_id).style.display = 'none';
					for (var j = 0; j < res1.length; j++)
						{
						addRow(field_names_array[i]+'[]', 1, role_id, res1[j].childNodes[0].nodeValue);
						}
					}
				}
	 		}

	 	var field_names_array = new Array();
	 	field_names_array = ["wallpaper", "gallery"];
		for(var i=0, len = field_names_array.length; i<len; i++)
	 		{
			if (field_names_array[i] == 'wallpaper')
				{
				div_id1 = 'wall_row1';
				div_id2 = 'wall_row2';
				div_id3 = 'wall_row3';
				}
			else if (field_names_array[i] == 'gallery')
				{
				div_id1 = 'gal_row1';
				div_id2 = 'gal_row2';
				div_id3 = 'gal_row3';
				text_id1 = 'gallery1';
                                text_id2 = 'gallery2';
                                text_id3 = 'gallery3';
				}

			var res = xmlDoc.getElementsByTagName(field_names_array[i]);
			if (res.length > 0)
				{
				var res1 = res.item(0).getElementsByTagName('name');
				if (i == '1')
					var res2 = res.item(0).getElementsByTagName('gallery_type');
				if (res1.length > 0)
					{
					document.getElementById(div_id1).style.display = 'none';
					document.getElementById(div_id2).style.display = 'none';
					document.getElementById(div_id3).style.display = 'none';

					if (i == 1)
					{
					document.getElementById(text_id1).setAttribute('name','hidden_gallery');
					document.getElementById(text_id2).setAttribute('name','hidden_gallery');
					document.getElementById(text_id3).setAttribute('name','hidden_gallery');
					}

					for (var j = 0; j < res1.length; j++)
					{
						if (i == '0')
                                                addRow(field_names_array[i]+'[]', 1, 0, res1[j].childNodes[0].nodeValue);
						else
						{
						addRow(field_names_array[i]+'[]', 1, 0, res1[j].childNodes[0].nodeValue,res2[j].childNodes[0].nodeValue);
						}
					}
					}
				}
	 		}
		}
	}

function submitTvShowVote(status, offset_path, tv_id) {
	if(status)
        {
                xmlHttp=GetXmlHttpObject()
                if (xmlHttp==null)
                {
                        alert ("Browser does not support HTTP Request")
                        return
                }
                var url=offset_path+"/tvShowVotes.php"+"?status="+status+"&tv_id="+tv_id
                xmlHttp.onreadystatechange =
                function()
                {
                        if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
                        {
                                xmlDoc=xmlHttp.responseXML;
				if(xmlDoc.getElementsByTagName('status_msg')[0].childNodes[0] != undefined)
				{
					var status_msg = xmlDoc.getElementsByTagName('status_msg')[0].childNodes[0].nodeValue;
					document.getElementById('tv_show_vote').innerHTML = status_msg;
				}
				if(xmlDoc.getElementsByTagName('love_count')[0].childNodes[0] != undefined)
				{
					var love_msg = xmlDoc.getElementsByTagName('love_count')[0].childNodes[0].nodeValue;
					document.getElementById('love_count').innerHTML = '('+love_msg+')';
				}
				if(xmlDoc.getElementsByTagName('hate_count')[0].childNodes[0] != undefined)
				{
					var hate_msg = xmlDoc.getElementsByTagName('hate_count')[0].childNodes[0].nodeValue;
					document.getElementById('hate_count').innerHTML = '('+hate_msg+')';
				}
				window.location = red_url;
                        }
                }
                xmlHttp.open("GET",url,true);
                xmlHttp.send(null);
        }
        else
        {
                document.getElementById('cast_vote').innerHTML = "Please update your status";
		//window.location = red_url;
        }
	        //	window.location = red_url;
}


function submitTvShowCastVote(status, offset_path, tv_id,artist_id) {
	if(status)
        {
                xmlHttp=GetXmlHttpObject()
                if (xmlHttp==null)
                {
                        alert ("Browser does not support HTTP Request")
                        return
                }
                var url=offset_path+"/tvShowCastVotes.php"+"?status="+status+"&tv_id="+tv_id+"&artist_id="+artist_id
                xmlHttp.onreadystatechange =
                function()
                {
                        if (xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
                        {
                                xmlDoc=xmlHttp.responseXML;
				if(xmlDoc.getElementsByTagName('status_msg')[0].childNodes[0] != undefined)
				{
					var status_msg = xmlDoc.getElementsByTagName('status_msg')[0].childNodes[0].nodeValue;
					document.getElementById('tv_show_cast_vote_'+artist_id).innerHTML = status_msg;
				}
				if(xmlDoc.getElementsByTagName('love_count')[0].childNodes[0] != undefined)
				{
					var love_msg = xmlDoc.getElementsByTagName('love_count')[0].childNodes[0].nodeValue;
					document.getElementById('love_count_'+artist_id).innerHTML = '('+love_msg+')';
				}
				if(xmlDoc.getElementsByTagName('hate_count')[0].childNodes[0] != undefined)
				{
					var hate_msg = xmlDoc.getElementsByTagName('hate_count')[0].childNodes[0].nodeValue;
					document.getElementById('hate_count_'+artist_id).innerHTML = '('+hate_msg+')';
				}
				window.location = red_url;
                        }
                }
                xmlHttp.open("GET",url,true);
                xmlHttp.send(null);
        }
        else
        {
                document.getElementById('cast_vote').innerHTML = "Please update your status";
		//window.location = red_url;
        }
        //window.location = red_url;
}
function openPopup(url,message) {
    window.open( url, message, "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600" );
    return false;
} 
