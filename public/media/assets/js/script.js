var row_id = 0;
function calculateAge() {

 var combinied_date = $("#date_of_birth").val()
 
 const ageDifMs = Date.now() - new Date(combinied_date).getTime();
 const ageDate = new Date(ageDifMs);
 if(combinied_date!=''){
 	$("#age_as_on").val(Math.abs(ageDate.getUTCFullYear() - 1970));	
 }
 
}

function removeImage(gallery_id) {

	if (confirm("Are You Sure, Do You Want to Delete ?") == true) {
	 	$("#gallery"+gallery_id+"_source").val("");
		$("#gallery_"+gallery_id+"_url").val("");
		$("#preview_"+gallery_id).hide();
        $("#gallery_"+gallery_id).val("");
		$("#preview_"+gallery_id).removeAttr("src");
		$("#gall_"+gallery_id+"_action_div").hide();
		$("#gallery_"+gallery_id+"_id").val("");
        
	} 

}
//function for onload event
function PageLoadFocus(fldId)
{
        if(!document.getElementById(fldId))
                return;
        document.getElementById(fldId).focus();
}

function addTableRow(name,num,i,default_value, isEvent)
{	
	
	if(default_value == undefined)
	{
		default_value='';
	}
	if (i ==undefined)
	{
		i=0;
	}
	if (isEvent == undefined)
	{
		isEvent = 0;
	}

	sno_array_dr = document.getElementsByName(name);
	if(sno_array_dr.length == 0)
	{
		max_dr = '1';
	}
	else
	{
		max_dr = eval(sno_array_dr.length)+1;
	}

	var tr = document.createElement('div');
	tr.setAttribute('class', 'row');
	tr.setAttribute('id', 'dynamicRow' + num );
	/*var td = document.createElement('TD');
	td.innerHTML = '&nbsp;';
	tr.appendChild(td);*/
	var td = document.createElement('TD');

	if('wallpaper[]' == name)
	{
		td.innerHTML = '<input size="40" type="text" id="wallpaper" name="wallpaper[]" value="'+ default_value +'" class="TextBox form-control" />';
		tr.appendChild(td);
		document.getElementById('dynamic_table').tBodies[i].appendChild(tr);
	}
	else if('gallery[]' == name)
	{
		tdHtml = '<input size="40" type="text" id="gallery" name="gallery[]" value="'+ default_value +'" class="TextBox form-control" />';
		if (isEvent != 0)
			tdHtml += '&nbsp;&nbsp; <input type="checkbox" name="event_'+max_dr+'" value="1" checked> &nbsp; Event';
		else
			tdHtml += '&nbsp;&nbsp; <input type="checkbox" name="event_'+max_dr+'" value="1"> &nbsp; Event';

		td.innerHTML = tdHtml;	
		tr.appendChild(td);
		document.getElementById('dynamic_gal').tBodies[i].appendChild(tr);
	}
	else if('celeb_search_tweets[]' == name)
	{	

		if (default_value) {
			var def_value_arr = default_value.split(',');
			tr.innerHTML = '<div class="col-md-12"><div class="form-group"><input type="hidden" id="search_tweets_id" name="search_tweets_id[]" value="'+def_value_arr[0]+'"/><input size="40" type="text" placeholder="Search Tweets" id="search_tweets_keyword" name="search_tweets_keyword[]" value="'+ def_value_arr[1] +'" class="TextBox form-control" /></div></div>';
			document.getElementById('celeb_search_tweetstab').appendChild(tr);
		}
		else{

			tr.innerHTML = '<div class="col-md-12"><div class="form-group"><input type="hidden" id="search_tweets_id" name="search_tweets_id[]" value=""/><input size="40" type="text" placeholder="Search Tweets" id="search_tweets_keyword" name="search_tweets_keyword[]" value="" class="TextBox form-control" /></div></div>';
			document.getElementById('celeb_search_tweetstab').appendChild(tr);
		}
		
	}

	else if('a_spouse[]' == name)
	{	
		console.log(rand);
		if(default_value!='')
		{
			var def_value_arr = default_value.split(',');
			tr.innerHTML = '<div class="col-md-3"><div class="form-group"><input type="text" id="a_spouse_'+rand+'" name="a_spouse[]" value="'+def_value_arr[0]+'"  class="TextBox form-control" size="40" onkeyup="javascript:eventobj_'+rand+'.show_options(event);" onblur="javascript:eventobj_'+rand+'.hide_options();" placeholder="Spouse Name"/>&nbsp<input size="40" type="text" name="a_spouse_url[]" id="a_spouse_url'+rand+'" value="'+def_value_arr[1]+'" class="TextBox form-control" placeholder="Spouse Url"/>';
		}
		else
		{
	        tr.innerHTML = '<input type="text" id="a_spouse_'+rand+'" name="a_spouse[]" value=""  class="TextBox form-control" size="40" onkeyup="javascript:eventobj_'+rand+'.show_options(event);" onblur="javascript:eventobj_'+rand+'.hide_options();" placeholder="Spouse Name"/>&nbsp<input size="40" type="text" name="a_spouse_url[]" id="a_spouse_url'+rand+'" value="" class="TextBox form-control" placeholder="Spouse Url"/>';
		}

		document.getElementById('a_spousetab').appendChild(tr);	
	}

	else if('a_father[]' == name)
	{
		if(default_value!='')
		{
			var def_value_arr = default_value.split(',');
			td.innerHTML = '<input type="text" id="a_father_'+rand+'" name="a_father[]" value="'+def_value_arr[0]+'"  class="TextBox form-control" size="40" onkeyup="javascript:eventobjf_'+rand+'.show_options(event);" onblur="javascript:eventobjf_'+rand+'.hide_options();" placeholder="Father Name"/>&nbsp<input size="40" type="text" name="a_father_url[]" id="a_father_url'+rand+'" value="'+def_value_arr[1]+'" class="TextBox form-control" placeholder="Father Url"/>';
		}
		else
		{
	        td.innerHTML = '<input type="text" id="a_father_'+rand+'" name="a_father[]" value=""  class="TextBox form-control" size="40" onkeyup="javascript:eventobjf_'+rand+'.show_options(event);" onblur="javascript:eventobjf_'+rand+'.hide_options();" placeholder="Father Name"/>&nbsp<input size="40" type="text" name="a_father_url[]" id="a_father_url'+rand+'" value="" class="TextBox form-control" placeholder="Father Url"/>';
		}

		tr.appendChild(td);
		document.getElementById('dynamic_father').tBodies[i].appendChild(tr);	
	}

	else if('a_mother[]' == name)
	{
		if(default_value!='')
		{
			var def_value_arr = default_value.split(',');
			td.innerHTML = '<input type="text" id="a_mother_'+rand+'" name="a_mother[]" value="'+def_value_arr[0]+'"  class="TextBox form-control" size="40" onkeyup="javascript:eventobjm_'+rand+'.show_options(event);" onblur="javascript:eventobjm_'+rand+'.hide_options();" placeholder="Mother Name"/>&nbsp<input size="40" type="text" name="a_mother_url[]" id="a_mother_url'+rand+'" value="'+def_value_arr[1]+'" class="TextBox form-control" placeholder="Mother Url"/>';
		}
		else
		{
	        td.innerHTML = '<input type="text" id="a_mother_'+rand+'" name="a_mother[]" value=""  class="TextBox form-control" size="40" onkeyup="javascript:eventobjm_'+rand+'.show_options(event);" onblur="javascript:eventobjm_'+rand+'.hide_options();" placeholder="Mother Name"/>&nbsp<input size="40" type="text" name="a_mother_url[]" id="a_mother_url'+rand+'" value="" class="TextBox form-control" placeholder="Mother Url"/>';
		}

		tr.appendChild(td);
		document.getElementById('dynamic_mother').tBodies[i].appendChild(tr);	
	}

	else if('a_sibling[]' == name)
	{
		if(default_value!='')
		{
			var def_value_arr = default_value.split(',');
			td.innerHTML = '<input type="text" id="a_sibling_'+rand+'" name="a_sibling[]" value="'+def_value_arr[0]+'"  class="TextBox form-control" size="40" onkeyup="javascript:eventobjs_'+rand+'.show_options(event);" onblur="javascript:eventobjs_'+rand+'.hide_options();" placeholder="Sibling Name"/>&nbsp<input size="40" type="text" name="a_sibling_url[]" id="a_sibling_url'+rand+'" value="'+def_value_arr[1]+'" class="TextBox form-control" placeholder="Sibling Url"/>';
		}
		else
		{
	        td.innerHTML = '<input type="text" id="a_sibling_'+rand+'" name="a_sibling[]" value=""  class="TextBox form-control" size="40" onkeyup="javascript:eventobjs_'+rand+'.show_options(event);" onblur="javascript:eventobjs_'+rand+'.hide_options();" placeholder="Sibling Name"/>&nbsp<input size="40" type="text" name="a_sibling_url[]" id="a_sibling_url'+rand+'" value="" class="TextBox form-control" placeholder="Sibling Url"/>';
		}

		tr.appendChild(td);
		document.getElementById('dynamic_sibling').tBodies[i].appendChild(tr);	
	}

	else if('a_children[]' == name)
	{
		if(default_value!='')
		{
			var def_value_arr = default_value.split(',');
			td.innerHTML = '<input type="text" id="a_children_'+rand+'" name="a_children[]" value="'+def_value_arr[0]+'"  class="TextBox form-control" size="40" onkeyup="javascript:eventobjc_'+rand+'.show_options(event);" onblur="javascript:eventobjc_'+rand+'.hide_options();" placeholder="Children Name"/>&nbsp<input size="40" type="text" name="a_children_url[]" id="a_children_url'+rand+'" value="'+def_value_arr[1]+'" class="TextBox form-control" placeholder="Children Url"/>';
		}
		else
		{
	        td.innerHTML = '<input type="text" id="a_children_'+rand+'" name="a_children[]" value=""  class="TextBox form-control" size="40" onkeyup="javascript:eventobjc_'+rand+'.show_options(event);" onblur="javascript:eventobjc_'+rand+'.hide_options();" placeholder="Children Name"/>&nbsp<input size="40" type="text" name="a_children_url[]" id="a_children_url'+rand+'" value="" class="TextBox form-control" placeholder="Children Url"/>';
		}

		tr.appendChild(td);
		document.getElementById('dynamic_children').tBodies[i].appendChild(tr);	
	}

	else if('a_edu[]' == name)
	{
		
		if(default_value!='')
		{
			
			td.innerHTML = '<input type="text" id="a_edu_'+rand+'" name="a_edu[]" value="'+default_value+'"  class="TextBox form-control" size="40" />';
		}
		else
		{
	        td.innerHTML = '<input type="text" id="a_edu_'+rand+'" name="a_edu[]" value=""  class="TextBox form-control" size="40" />';
		}

		tr.appendChild(td);
		document.getElementById('education_qualificationtab').tBodies[i].appendChild(tr);	
	}

	else if('a_college[]' == name)
	{	

		if(default_value!='')
		{
			
			td.innerHTML = '<input type="text" id="a_college_'+rand+'" name="a_college[]" value="'+default_value+'"  class="TextBox form-control" size="40" />';
		}
		else
		{
	        td.innerHTML = '<input type="text" id="a_college_'+rand+'" name="a_college[]" value=""  class="TextBox form-control" size="40" />';
		}

		tr.appendChild(td);
		document.getElementById('collegetab').tBodies[i].appendChild(tr);	
	}

	else if('a_school[]' == name)
	{
		if(default_value!='')
		{
			
			td.innerHTML = '<input type="text" id="a_school_'+rand+'" name="a_school[]" value="'+default_value+'"  class="TextBox form-control" size="40" />';
		}
		else
		{
	        td.innerHTML = '<input type="text" id="a_school_'+rand+'" name="a_school[]" value=""  class="TextBox form-control" size="40" />';
		}

		tr.appendChild(td);
		document.getElementById('schooltab').tBodies[i].appendChild(tr);	
	}
}
function showArtist(role_id,cast_id)
{
	
	if(role_id != '' && role_id != 0)
	{
		//var field_name =document.getElementById(eval(cast));// eval('window.opener.document.movies.' + cast);
		//field_name.value ='';
		document.getElementById(cast_id).value='';
		document.getElementById(cast_id).focus();
		if(role_id == 1)
		{
			var artist_array = artist_array_1;
		}
		else if (role_id ==2)
		{
			var artist_array = artist_array_2;
		}
		else if (role_id ==3)
		{
			var artist_array = artist_array_3;
		}
		else if (role_id ==4)
		{
			var artist_array = artist_array_4;
		}
		else if (role_id ==5)
		{
			var artist_array = artist_array_5;
		}
		else if (role_id ==6)
		{
			var artist_array = artist_array_6;
		}
		else if (role_id ==7)
		{
			var artist_array = artist_array_7;
		}
		else if (role_id ==8)
		{
			var artist_array = artist_array_8;
		}
		else if (role_id ==9)
		{
			var artist_array = artist_array_9;
		}
		else if (role_id ==10)
		{
			var artist_array = artist_array_10;
		}
		eventobj1 = new AutoComplete(document.getElementById(cast_id), '1', artist_array, 'eventobj1');
	}
}
function showWriting(role_id,write_id)
{
	
	if(role_id != '' && role_id != 0)
	{
		//var field_name =document.getElementById(eval(cast));// eval('window.opener.document.movies.' + cast);
		//field_name.value ='';
		
		document.getElementById(write_id).value='';
		document.getElementById(write_id).focus();
		if(role_id == 1)
		{
			var artist_array = artist_array_1;
		}
		else if (role_id ==2)
		{
			var artist_array = artist_array_2;
		}
		else if (role_id ==3)
		{
			var artist_array = artist_array_3;
		}
		else if (role_id ==4)
		{
			var artist_array = artist_array_4;
		}
		else if (role_id ==5)
		{
			var artist_array = artist_array_5;
		}
		else if (role_id ==6)
		{
			var artist_array = artist_array_6;
		}
		else if (role_id ==7)
		{
			var artist_array = artist_array_7;
		}
		else if (role_id ==8)
		{
			var artist_array = artist_array_8;
		}
		else if (role_id ==9)
		{
			var artist_array = artist_array_9;
		}
		else if (role_id ==10)
		{
			var artist_array = artist_array_10;
		}
		eventobj8 = new AutoComplete(document.getElementById(write_id), '1', artist_array, 'eventobj8');
	}
}
function showArtistFilmo(lang_id,cast_id)
{
	
	if(lang_id != '' && lang_id != 0)
	{
		//var field_name =document.getElementById(eval(cast));// eval('window.opener.document.movies.' + cast);
		//field_name.value ='';
		document.getElementById(cast_id).value='';
		document.getElementById(cast_id).focus();
		search_movie_obj = new AutoComplete(document.getElementById(cast_id), '1', movies_array[lang_id], 'search_movie_obj');
	}
}

function showArtistAwards(lang_id,cast_id)
{
	
	if(lang_id != '' && lang_id != 0)
	{
		//var field_name =document.getElementById(eval(cast));// eval('window.opener.document.movies.' + cast);
		//field_name.value ='';
		document.getElementById(cast_id).value='';
		document.getElementById(cast_id).focus();
		search_movie_obj1 = new AutoComplete(document.getElementById(cast_id), '1', movies_array[lang_id], 'search_movie_obj1');
	}
}

function addRow(name,num,id,default_value, isEvent)
{

	if(default_value == undefined)
	{
		default_value='';
	}
	if (isEvent == undefined)
    {
        isEvent = 0;
    }
	sno_array_dr = document.getElementsByName(name);
    if(sno_array_dr.length == 0)
        max_dr = '1';
    else
        max_dr = eval(sno_array_dr.length)+1;
	var tr = document.createElement('div');
   	
   	var tab_id = name.split("[]");
	var nc = $("#"+tab_id[0]+"tab").find(".row").length;
	row_id = row_id + 1;
	//var rand = row_id;
	var rand = nc+1;
	tr.setAttribute('class', 'row');
   	tr.setAttribute('id', 'dynamicRow' + rand );
	if ('cast[]' == name)
	{
		var selected1 = '';
		var selected2 = '';
		if (default_value != '')
		{
				var def_value_arr = default_value.split(',');
				if(def_value_arr[0] == 1)
				{
						var selected1 = 'selected';
				}
				else if (def_value_arr[0] == 2)
				{
						var selected2 = 'selected';
				}
				var readonly = '';
		}
		else
		{
				var def_value_arr = ['','',''];
				var readonly = 'readonly';
		}
		tr.innerHTML = '<div class="col-md-4"><div class="form-group"><select id="roles" name="role[]" class="form-control" onchange="enableControl(this,\'cast_'+rand+'\');showArtist(this.value,\'cast_'+rand+'\');"><option value="0">Select</option><option value="1" '+selected1+'>Actor</option><option value="2" '+selected2+'>Actress</option></select></div></div><div class="col-md-4"><div class="form-group"><input size="30" type="text" id="cast_'+rand+'" name="cast[]" value="'+def_value_arr[1]+'"  class="form-control starcasts" placeholder="Cast Name" autocomplete="off" '+readonly+' /><div id="display-cast_'+rand+'" style="width:97%;position: absolute;z-index: 1000;background: #ebebeb;"></div></div></div><div class="col-md-4"><div class="form-group"><input size="30" class="form-control" type="text" id="character" name="character[]" value="'+def_value_arr[2]+'" placeholder="Character" /></div></div>';
		document.getElementById('casttab').appendChild(tr);
	}

	else if ('production_company[]' == name)
	{	
		tr.innerHTML = '<div class="col-md-12"><div class="form-group"><input placeholder="Production Company" type="text" id="production_company_'+rand+'" name="production_company[]" value="'+default_value+'"  class="TextBox form-control" autocomplete="off" onkeyup="javascript:eventobj16.show_options(event);" onblur="javascript:eventobj16.hide_options(event);" /></div></div>';
		document.getElementById('production_companytab').appendChild(tr);
		this["eventobj16"] = new AutoComplete(document.getElementById('production_company_'+rand), '1', eval('artist_array_19'), 'eventobj16');
	}

	else if ('distributor[]' == name)
	{	
		tr.innerHTML = '<div class="col-md-12"><div class="form-group"><input placeholder="Distributor" type="text" id="distributor_'+rand+'" name="distributor[]" value="'+default_value+'"  class="TextBox form-control" autocomplete="off" onkeyup="javascript:eventobj17.show_options(event);" onblur="javascript:eventobj17.hide_options(event);" /></div></div>';
		document.getElementById('distributortab').appendChild(tr);
		this["eventobj17"] = new AutoComplete(document.getElementById('distributor_'+rand), '1', eval('artist_array_21'), 'eventobj17');
	}

	else if ('music_label[]' == name)
	{	
		tr.innerHTML = '<div class="col-md-12"><div class="form-group"><input placeholder="Music Label" type="text" id="music_label_'+rand+'" name="music_label[]" value="'+default_value+'"  class="TextBox form-control" autocomplete="off" onkeyup="javascript:eventobj18.show_options(event);" onblur="javascript:eventobj18.hide_options(event);" /></div></div>';
		document.getElementById('music_labeltab').appendChild(tr);
		this["eventobj18"] = new AutoComplete(document.getElementById('music_label_'+rand), '1', eval('artist_array_20'), 'eventobj18');
	}


	else if ('a_edu[]' == name)
	{	

		tr.innerHTML = '<div class="col-md-12"><div class="form-group"><input size="40" type="text" id="a_edu_'+rand+'" name="a_edu[]" value="'+default_value+'"  class="TextBox form-control" autocomplete="off" placeholder="Educational Qualification" /></div></div>';
		document.getElementById('a_edutab').appendChild(tr);

	}

	else if ('a_college[]' == name)
	{	
		tr.innerHTML = '<div class="col-md-12"><div class="form-group"><input size="40" type="text" id="a_college_'+rand+'" name="a_college[]" value="'+default_value+'"  class="TextBox form-control" autocomplete="off" placeholder="College" /></div></div>';
		document.getElementById('a_collegetab').appendChild(tr);
	}
	else if ('a_school[]' == name)
	{	
		tr.innerHTML = '<div class="col-md-12"><div class="form-group"><input size="40" type="text" id="a_school_'+rand+'" name="a_school[]" value="'+default_value+'"  class="TextBox form-control" autocomplete="off" placeholder="School" /></div></div>';
		document.getElementById('a_schooltab').appendChild(tr);
	}

	else if ('artdirector[]' == name)
	{
		var selected1 = '';
		var selected2 = '';
		if (default_value != '')
		{
				var def_value_arr = default_value.split(',');
				var readonly = '';
		}
		else
		{
				var def_value_arr = ['','',''];
				var readonly = 'readonly';
		}
		tr.innerHTML = '<div class="col-md-6"><div class="form-group"><input placeholder="Name" type="text" id="artdirector_'+rand+'" name="artdirector[]" value="'+def_value_arr[1]+'"  class="TextBox form-control starcasts" autocomplete="off" /><div id="display-artdirector_'+rand+'" style="width:98.6%;position: absolute;z-index: 1000;background: #ebebeb;"></div></div></div><div class="col-md-6"><div class="form-group"><input size="30" type="text" id="artdirector_role" name="artdirector_role[]" value="'+def_value_arr[2]+'" placeholder="Role"  class="TextBox form-control" /></div></div>';
		document.getElementById('artdirectortab').appendChild(tr);
	}
    else if ('favourite[]' == name)
	{
		var selected1 = '';
		var selected2 = '';
		if (default_value != '')
		{
				var def_value_arr = default_value.split(',');
				var readonly = '';
		}
		else
		{
				var def_value_arr = ['','',''];
				var readonly = 'readonly';
		}
		var select_options = $("#favourite_title_"+nc).html();
		tr.innerHTML = '<div class="col-md-6"><div class="form-group"><select data-placeholder="Favourite Title" id="favourite_title_'+rand+'" name="favourite_title[]"  class="TextBox form-control">'+select_options+'</select></div></div><div class="col-md-6"><div class="form-group"><input size="30" type="text" id="favourite_value" name="favourite_value[]" placeholder="Favourite"  class="TextBox form-control" /></div></div>';
		//$("").('#favourite_title_'+nc+' option:selected').remove();
		document.getElementById('favouritetab').appendChild(tr);
	}
	else if ('dance_choreography[]' == name)
	{
		var selected1 = '';
		var selected2 = '';
		if (default_value != '')
		{
				var def_value_arr = default_value.split(',');
				var readonly = '';
		}
		else
		{
				var def_value_arr = ['','',''];
				var readonly = 'readonly';
		}
		tr.innerHTML = '<div class="col-md-6"><div class="form-group"><input placeholder="Name" type="text" id="dance_choreography_'+rand+'" name="dance_choreography[]" value="'+def_value_arr[1]+'"  class="TextBox form-control starcasts" autocomplete="off" /><div id="display-dance_choreography_'+rand+'" style="width:98.6%;position: absolute;z-index: 1000;background: #ebebeb;"></div></div></div><div class="col-md-6"><div class="form-group"><input size="30" type="text" placeholder="Role" id="dance_choreography_role" name="dance_choreography_role[]" value="'+def_value_arr[2]+'"  class="TextBox form-control" /></div></div>';
		document.getElementById('dance_choreographytab').appendChild(tr);
	}
	else if ('action_stunt_choreography[]' == name)
	{
		var selected1 = '';
		var selected2 = '';
		if (default_value != '')
		{
				var def_value_arr = default_value.split(',');
				var readonly = '';
		}
		else
		{
				var def_value_arr = ['','',''];
				var readonly = 'readonly';
		}
		tr.innerHTML = '<div class="col-md-6"><div class="form-group"><input placeholder="Name" type="text" id="action_stunt_choreography_'+rand+'" name="action_stunt_choreography[]" value="'+def_value_arr[1]+'"  class="TextBox form-control starcasts" autocomplete="off" /><div id="display-action_stunt_choreography_'+rand+'" style="width:98.6%;position: absolute;z-index: 1000;background: #ebebeb;"></div></div></div><div class="col-md-6"><div class="form-group"><input size="30" placeholder="Role" type="text" id="action_stunt_choreography_role" name="action_stunt_choreography_role[]" value="'+def_value_arr[2]+'"  class="TextBox form-control" /></div></div>';
		document.getElementById('action_stunt_choreographytab').appendChild(tr);
	}
	else if ('vfx_supervision[]' == name)
	{
		var selected1 = '';
		var selected2 = '';
		if (default_value != '')
		{
				var def_value_arr = default_value.split(',');
				var readonly = '';
		}
		else
		{
				var def_value_arr = ['','',''];
				var readonly = 'readonly';
		}
		tr.innerHTML = '<div class="col-md-6"><div class="form-group"><input placeholder="Name" type="text" id="vfx_supervision_'+rand+'" name="vfx_supervision[]" value="'+def_value_arr[1]+'"  class="TextBox form-control starcasts" autocomplete="off" /><div id="display-vfx_supervision_'+rand+'" style="width:98.6%;position: absolute;z-index: 1000;background: #ebebeb;"></div></div></div><div class="col-md-6"><div class="form-group"><input size="30" type="text" placeholder="Role" id="vfx_supervision_role" name="vfx_supervision_role[]" value="'+def_value_arr[2]+'"  class="TextBox form-control" /></div></div>';
		document.getElementById('vfx_supervisiontab').appendChild(tr);
	}
	else if ('costume_design[]' == name)
	{
		var selected1 = '';
		var selected2 = '';
		if (default_value != '')
		{
				var def_value_arr = default_value.split(',');
				var readonly = '';
		}
		else
		{
				var def_value_arr = ['','',''];
				var readonly = 'readonly';
		}
		tr.innerHTML = '<div class="col-md-6"><div class="form-group"><input placeholder="Name" type="text" id="costume_design_'+rand+'" name="costume_design[]" value="'+def_value_arr[1]+'"  class="TextBox form-control starcasts" autocomplete="off" /><div id="display-costume_design_'+rand+'" style="width:98.6%;position: absolute;z-index: 1000;background: #ebebeb;"></div></div></div><div class="col-md-6"><div class="form-group"><input size="30" type="text" placeholder="Role" id="costume_design_role" name="costume_design_role[]" value="'+def_value_arr[2]+'"  class="TextBox form-control" /></div></div>';
		document.getElementById('costume_designtab').appendChild(tr);
	}
	else if ('additional_crew[]' == name)
	{
		var selected1 = '';
		var selected2 = '';
		if (default_value != '')
		{
				var def_value_arr = default_value.split(',');
				var readonly = '';
		}
		else
		{
				var def_value_arr = ['','',''];
				var readonly = 'readonly';
		}
		tr.innerHTML = '<div class="col-md-6"><div class="form-group"><input placeholder="Name" type="text" id="additional_crew_'+rand+'" name="additional_crew[]" value="'+def_value_arr[1]+'"  class="TextBox form-control starcasts" autocomplete="off" /><div id="display-additional_crew_'+rand+'" style="width:98.6%;position: absolute;z-index: 1000;background: #ebebeb;"></div></div></div><div class="col-md-6"><div class="form-group"><input size="30" type="text" placeholder="Role" id="additional_crew_role" name="additional_crew_role[]" value="'+def_value_arr[2]+'"  class="TextBox form-control" /></div></div>';
		document.getElementById('additional_crewtab').appendChild(tr);
	}

	else if ('gallery_images[]' == name)
	{
		
		if (default_value != '')
		{
				var def_value_arr = default_value.split(',');
				var position = def_value_arr[0];
				var image = def_value_arr[1];
				var source = def_value_arr[2];
				var link = def_value_arr[3];
				var id = def_value_arr[4];

				$("#gallery"+position+"_source").val(source);
				$("#gallery_"+position+"_url").val(link);
				$("#preview_"+position).attr('src', 'http://filmibeat.greynium.com/img/popcorn/artist_gallery/'+image);
				$("#preview_"+position).show();
				$("#gall_"+position+"_action_div").show();
				
				$("#gallery_"+position+"_id").val(id);
				$("#gallery_"+position+"_old_file").val(image);
		}
		
	}

	else if('country[]'==name) {
		if(default_value!='') {
			document.getElementById('country').value=default_value;
		}
	}
	else if('satellite_rights[]'==name) {
		console.log(default_value);
		if(default_value!='') {
			document.getElementById('satellite_rights').value=default_value;
		}
	}
	else if('other_languages[]'==name) {
		var def_value_arr = default_value.split(',');
		$('input:checkbox[class="city_list"][value="' + def_value_arr[1] + '"]').attr('checked', 'checked');
	}
	else if('before_movie_tags[]'==name) {
		var def_value_arr = default_value.split(',');
		document.getElementById('before_movie_tags').value += default_value+',';
	}
	else if('after_movie_tags[]'==name) {
		var def_value_arr = default_value.split(',');
		document.getElementById('after_movie_tags').value += default_value+',';
	}
	else if ('filmo[]' == name)
	{
		var selected1 = '';
		var selected2 = '';
		if (default_value != '')
		{
			var def_value_arr = default_value.split(',');
			if(def_value_arr[0] == 1)
			{
					var selected1 = 'selected';
			}
			else if (def_value_arr[0] == 2)
			{
					var selected2 = 'selected';
			}
			var readonly = '';
		}
		else
		{
			var def_value_arr = ['','',''];
			var readonly = 'readonly';
		}
		td.innerHTML = '<select id="remake_lang" name="remake_lang[]" onchange="enableControl(this,\'remake_movie_'+rand+'\');showArtistFilmo(this.value,\'remake_movie_'+rand+'\');"><option value="0">Select</option><option value="1">English</option><option value="2">Hindi</option><option value="3">Kannada</option><option value="4">Malayalam</option><option value="5">Tamil</option><option value="6">Telugu</option></select>&nbsp;&nbsp;&nbsp;&nbsp;<input size="30" type="text" id="remake_movie_'+rand+'" name="remake_movie[]" value="" onkeyup="javascript:search_movie_obj.show_options(event);" onblur="javascript:search_movie_obj.hide_options(event);" autocomplete="off" '+readonly+' />&nbsp;<select id="artist_role" name="artist_role[]"><option value="">Role</option><option value="1">Actor</option><option value="2">Actress</option><option value="3">Director</option><option value="4">Producer</option><option value="5">Lyricst</option><option value="6">Music Director</option><option value="7">Singer</option><option value="8">Story</option><option value="9">Screenplay</option><option value="10">Dialogues</option><option value="11">Cinematography</option><option value="12">Editing</option></select>&nbsp;<input size="30" type="text" id="character" name="character[]" value=""  class="TextBox form-control" />';
		tr.appendChild(td);
		document.getElementById('dynamic_filmo').tBodies[0].appendChild(tr);
	}
	else if ('a_awards[]' == name)
	{	
		var award_inner_html = '';
		var selected1 = '';
		var selected2 = '';
		var yr_op = '';
		var yr_op_arr = ["2050","2022","2021","2020","2019","2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997","1996","1995","1994","1993","1992","1991","1990","1989","1988","1987","1986","1985","1984","1983","1982","1981","1980","1979","1978","1977","1976","1975","1974","1973","1972","1971","1970","1969","1968","1967","1966","1965","1964","1963","1962","1961","1960","1959","1958","1957","1956","1955","1954","1953","1952","1951","1950","1949","1948","1947","1946","1945","1944","1943","1942","1941","1940","1939","1938","1937","1936","1935","1934","1933","1932","1931","1930","1929","1928","1927","1926","1925","1924","1923","1922","1921"];
		var ss = '';
		var lang_s = '';
		var lang_op = '';
		var lang_op_arr = ["Dummy","English", "Hindi", "Kannada", "Malayalam", "Tamil", "Telugu"];
		var movie_typ_arr = ["Select","Movie", "TV", "Web Series", "Others"];
		var stat_op = '';
		var movie_typ_op = '';
		
			var def_value_arr = ['','','','',''];
			for (i = 1; i < yr_op_arr.length; i++) 
			{
			    yr_op = yr_op+'<option value="'+yr_op_arr[i]+'" '+ss+'>'+yr_op_arr[i]+'</option>'; 
			}
			for (j = 1; j<lang_op_arr.length; j++) 
			{
			    lang_op = lang_op+'<option value="'+j+'" '+lang_s+'>'+lang_op_arr[j]+'</option>';
			}
			var readonly = 'readonly';
			stat_op = '<option value="1">Winner</option><option value="2">Nominee</option>';

			for (mt = 0; mt<5; mt++) 
			{
			    movie_typ_op = movie_typ_op+'<option value="'+mt+'">'+movie_typ_arr[mt]+'</option>';
			}

			tr.innerHTML = '<div class="col-sm-2"><div class="form-group"><select id="awards_year" class="form-control" name="awards_year[]"><option value="0" id="" selected="selected">Year</option>'+yr_op+'</select></div></div><div class="col-sm-2"><div class="form-group"><input class="form-control" type="text" id="nominee" name="nominee[]" value="'+def_value_arr[1]+'" /></div></div><div class="col-sm-2"><div class="form-group"><input type="text" id="artist_award" name="artist_award[]" value="'+def_value_arr[2]+'"  class="form-control" /></div></div><div class="col-sm-2"><div class="form-group"><select class="form-control" id="award_status" name="award_status[]"><option value="0">Select</option>'+stat_op+'</select></div></div><div class="col-sm-2"><div class="form-group"><select class="form-control" id="language-award_movie'+rand+'" name="award_lang[]" onchange="enableControl(this,\'award_movie'+rand+'\');"><option value="0">Select</option>'+lang_op+'</select></div></div><div class="col-sm-2"><div class="form-group"><select class="form-control" id="movie_type" name="movie_type[]">'+movie_typ_op+'</select></div></div><div class="col-sm-2"><div class="form-group"><input class="form-control movie_lists" type="text" id="award_movie'+rand+'" name="award_movie[]" value="'+def_value_arr[4]+'" autocomplete="off" '+readonly+' /><div class="autocomplete_wrapper" id="display-award_movie'+rand+'" style="width:97%;position: absolute;z-index: 1000;background: #ebebeb;"></div></div></div>';

			document.getElementById('a_awardstab').appendChild(tr);
	}


	else if ('a_debut[]' == name)
	{	
		var award_inner_html = '';
		var selected1 = '';
		var selected2 = '';
		
		var lang_s = '';
		var lang_op = '';
		var lang_op_arr = ["Dummy","English", "Hindi", "Kannada", "Malayalam", "Tamil", "Telugu"];
		var stat_op = '';
		if (default_value != '')
		{	

			var def_value_arr = default_value.split(',');
			console.log(def_value_arr);
			
			for (j = 1; j<lang_op_arr.length; j++) 
			{
			    if(def_value_arr[0] == j)
			    {
			        lang_s = 'selected';
			    }
			    else
			    {
			        lang_s = '';
			    }
			    lang_op = lang_op+'<option value="'+j+'" '+lang_s+'>'+lang_op_arr[j]+'</option>';
			}

			var readonly = '';
			
		}
		else
		{	

			var readonly = 'readonly';

			var def_value_arr = ['','','','',''];
			
			for (j = 1; j<lang_op_arr.length; j++) 
			{
			    lang_op = lang_op+'<option value="'+j+'" '+lang_s+'>'+lang_op_arr[j]+'</option>';
			}


			
		}
		
		tr.innerHTML += '<div class="col-md-6"><div class="form-group"><select class="form-control" id="language-debut_movie'+rand+'" name="debut_lang[]" onchange="enableDebutControl(this,\'debut_movie'+rand+'\');"><option value="0">Select</option>'+lang_op+'</select></div></div><div class="col-md-6"><div class="form-group"><input size="30" type="text" class="form-control movie_lists" id="debut_movie'+rand+'" name="debut_movie[]" value="'+def_value_arr[1]+'" autocomplete="off" '+readonly+' /><div class="autocomplete_wrapper" id="display-debut_movie'+rand+'" style="width:97%;position: absolute;z-index: 1000;background: #ebebeb;"></div></div></div>';


		document.getElementById('a_debuttab').appendChild(tr);
	}



	else if ('a_spouse[]' == name)
	{

		if(default_value!='')
		{
			var def_value_arr = default_value.split(',');
			tr.innerHTML = '<div class="col-md-3"><div class="form-group"><input class="form-control" type="text" id="a_spouse_'+rand+'" name="a_spouse[]" value="'+def_value_arr[0]+'"  class="TextBox form-control" size="40" placeholder="Spouse Name"/></div></div><div class="col-md-3"><div class="form-group"><input size="40" class="form-control" type="text" name="a_spouse_url[]" id="a_spouse_url'+rand+'" value="'+def_value_arr[1]+'" class="TextBox form-control" placeholder="Spouse Url"/></div></div><div class="col-md-3"><div class="form-group"><input class="form-control" size="20" type="text" name="a_spouse_text[]" id="a_spouse_text'+rand+'" value="'+def_value_arr[2]+'" class="TextBox form-control" placeholder="Additional Text" /></div></div><div class="col-md-3"><div class="form-group"><input class="form-control" size="20" type="date" name="a_spouse_marriage_date[]" id="a_spouse_marriage_date'+rand+'" value="'+def_value_arr[3]+'" class="TextBox form-control" placeholder="Marriage Date" /></div></div>';
		}
		else
		{
	        tr.innerHTML = '<div class="col-md-3"><div class="form-group"><input class="form-control" type="text" id="a_spouse_'+rand+'" name="a_spouse[]" value=""  class="TextBox form-control" size="40" placeholder="Spouse Name"/></div></div><div class="col-md-3"><div class="form-group"><input class="form-control" size="40" type="text" name="a_spouse_url[]" id="a_spouse_url'+rand+'" value="" class="TextBox form-control" placeholder="Spouse Url"/></div></div><div class="col-md-3"><div class="form-group"><input class="form-control" size="20" type="text" name="a_spouse_text[]" id="a_spouse_text'+rand+'" class="TextBox form-control" placeholder="Additional Text" /></div></div><div class="col-md-3"><div class="form-group"><input class="form-control" size="20" type="date" name="a_spouse_marriage_date[]" id="a_spouse_marriage_date'+rand+'" value="" class="TextBox form-control" placeholder="Marriage Date" /></div></div>';
		}	

		document.getElementById('a_spousetab').appendChild(tr);

	}

	else if ('a_father[]' == name)
	{

		if(default_value!='')
		{
			var def_value_arr = default_value.split(',');
			tr.innerHTML = '<div class="col-md-6"><div class="form-group"><input class="form-control" type="text" id="a_father_'+rand+'" name="a_father[]" value="'+def_value_arr[0]+'"  class="TextBox form-control" size="40" placeholder="Father Name"/></div></div><div class="col-md-6"><div class="form-group"><input size="40" class="form-control" type="text" name="a_father_url[]" id="a_father_url'+rand+'" value="'+def_value_arr[1]+'" class="TextBox form-control" placeholder="Father Url"/></div></div>';
		}
		else
		{
	        tr.innerHTML = '<div class="col-md-6"><div class="form-group"><input class="form-control" type="text" id="a_father_'+rand+'" name="a_father[]" value=""  class="TextBox form-control" size="40" placeholder="Father Name"/></div></div><div class="col-md-6"><div class="form-group"><input size="40" class="form-control" type="text" name="a_father_url[]" id="a_father_url'+rand+'" value="" class="TextBox form-control" placeholder="Father Url"/></div></div>';
		}	

		document.getElementById('a_fathertab').appendChild(tr);

	}

	else if ('a_mother[]' == name)
	{

		if(default_value!='')
		{
			var def_value_arr = default_value.split(',');
			tr.innerHTML = '<div class="col-md-6"><div class="form-group"><input class="form-control" type="text" id="a_mother_'+rand+'" name="a_mother[]" value="'+def_value_arr[0]+'"  class="TextBox form-control" size="40" placeholder="Mother Name"/><div class="col-md-6"><div class="form-group"><input size="40" class="form-control" type="text" name="a_mother_url[]" id="a_mother_url'+rand+'" value="'+def_value_arr[1]+'" class="TextBox form-control" placeholder="Mother Url"/>';
		}
		else
		{
	        tr.innerHTML = '<div class="col-md-6"><div class="form-group"><input class="form-control" type="text" id="a_mother_'+rand+'" name="a_mother[]" value=""  class="TextBox form-control" size="40" placeholder="Mother Name"/></div></div><div class="col-md-6"><div class="form-group"><input size="40" class="form-control" type="text" name="a_mother_url[]" id="a_mother_url'+rand+'" value="" class="TextBox form-control" placeholder="Mother Url"/></div></div>';
		}	

		document.getElementById('a_mothertab').appendChild(tr);

	}

	else if ('a_sibling[]' == name)
	{

		if(default_value!='')
		{
			var def_value_arr = default_value.split(',');
			tr.innerHTML = '<div class="col-md-6"><div class="form-group"><input class="form-control" type="text" id="a_sibling_'+rand+'" name="a_sibling[]" value="'+def_value_arr[0]+'"  class="TextBox form-control" size="40" placeholder="Sibling Name"/></div></div><div class="col-md-6"><div class="form-group"><input size="40" class="form-control" type="text" name="a_sibling_url[]" id="a_sibling_url'+rand+'" value="'+def_value_arr[1]+'" class="TextBox form-control" placeholder="Sibling Url"/></div></div>';
		}
		else
		{
	        tr.innerHTML = '<div class="col-md-6"><div class="form-group"><input class="form-control" type="text" id="a_sibling_'+rand+'" name="a_sibling[]" value=""  class="TextBox form-control" size="40" placeholder="Sibling Name"/></div></div><div class="col-md-6"><div class="form-group"><input class="form-control" size="40" type="text" name="a_sibling_url[]" id="a_sibling_url'+rand+'" value="" class="TextBox form-control" placeholder="Sibling Url"/></div></div>';
		}	
		document.getElementById('a_siblingtab').appendChild(tr);
	}

	else if ('a_children[]' == name)
	{

		if(default_value!='')
		{
			var def_value_arr = default_value.split(',');
			tr.innerHTML = '<div class="col-md-6"><div class="form-group"><input class="form-control" type="text" id="a_children_'+rand+'" name="a_children[]" value="'+def_value_arr[0]+'"  class="TextBox form-control" size="40" placeholder="Children Name"/></div></div><div class="col-md-6"><div class="form-group"><input class="form-control" size="40" type="text" name="a_children_url[]" id="a_children_url'+rand+'" value="'+def_value_arr[1]+'" class="TextBox form-control" placeholder="Children Url"/></div></div>';
		}
		else
		{
	        tr.innerHTML = '<div class="col-md-6"><div class="form-group"><input class="form-control" type="text" id="a_children_'+rand+'" name="a_children[]" value=""  class="TextBox form-control" size="40" placeholder="Children Name"/></div></div><div class="col-md-6"><div class="form-group"><input class="form-control" size="40" type="text" name="a_children_url[]" id="a_children_url'+rand+'" value="" class="TextBox form-control" placeholder="Children Url"/></div></div>';
		}	
		document.getElementById('a_childrentab').appendChild(tr);
	}

	else if ('writing[]' == name)
	{
		//console.log(default_value);
		var selected1 = '';
		var selected2 = '';
		var selected3 = '';
		if (default_value != '')
		{
				var def_value_arr = default_value.split(',');
				if(def_value_arr[0] == 8)
				{
						var selected1 = 'selected';
				}
				else if (def_value_arr[0] == 9)
				{
						var selected2 = 'selected';
				}
				else if (def_value_arr[0] == 10)
				{
						var selected3 = 'selected';
				}
				var readonly = '';
		}
		else
		{
				var def_value_arr = ['','',''];
				var readonly = 'readonly';
		}
		tr.innerHTML = '<div class="col-md-4"><div class="form-group"><select class="form-control" id="wroles" name="wrole[]" onchange="enableControl(this,\'writing_'+rand+'\');showWriting(this.value,\'writing_'+rand+'\');"><option value="0">Select</option><option value="8" '+selected1+'>Story</option><option value="9" '+selected2+'>Screenplay</option><option value="10" '+selected3+'>Dialogue</option></select></div></div><div class="col-md-8"><div class="form-group"><input size="30" type="text" id="writing_'+rand+'" name="writing[]" value="'+def_value_arr[1]+'"  class="TextBox form-control starcasts" autocomplete="off" '+readonly+' /><div id="display-writing_'+rand+'" style="width:97.9%;position: absolute;z-index: 1000;background: #ebebeb;"></div></div></div>';
		document.getElementById('writingtab').appendChild(tr);
	}
	    else if ('song_title[]' == name)
    {
        var song_count=parseInt(document.getElementById("song_count_id").value);
        song_count=song_count+1;
        val="addRow('song_detail[]', '"+song_count+"',7)";

        document.getElementById("song_count_id").value=song_count;
        if (default_value != '')
        {
                sub_html_txt='';
                default_lyr_arr_val='';
                default_sng_arr_val='';
                lyricts_value_array=new Array();
                singer_value_array=new Array();
                var def_value_arr = default_value.split(',');
                //alert(def_value_arr);
                if(def_value_arr[2]!='')
                {
                        var lyricts_value_arr = def_value_arr[2].split('#$#');
                        var lyr_count=lyricts_value_arr.length-1;
                        default_lyr_arr_val='';
                        for (var i=0;i<lyr_count && lyricts_value_arr[i]!='';i++)
                        {
                                if(i==0)
                                        lyricts_code='<input size="21" type="text" id="lyricst_writer_'+rand+'" name="lyricst_writer[]" value="'+lyricts_value_arr[i]+'" class="TextBox form-control" autocomplete="off" onkeyup="javascript:lyricstobj'+rand+'.show_options(event);" onblur="javascript:lyricstobj'+rand+'.hide_options();"/>';
                                else
                                {
                                        default_lyr_arr_val=default_lyr_arr_val+'<input size="21" type="text" id="lyricst_writer_sub_'+rand+'" name="lyricst_writer_sub[]" value="'+lyricts_value_arr[i]+'" class="TextBox form-control" autocomplete="off" onkeyup="javascript:lyricstsubobj_'+rand+'.show_options(event);" onblur="javascript:lyricstsubobj_'+rand+'.hide_options();"/>##$##';
                                }
                        }
                        
                        lyricts_value_array = default_lyr_arr_val.split('##$##');
                        lyr_count=lyricts_value_array.length-1;
                }
                else
                {
                    lyricts_code='<input size="21" type="text" id="lyricst_writer_'+rand+'" name="lyricst_writer[]" value="" class="TextBox form-control" autocomplete="off" onkeyup="javascript:lyricstobj'+rand+'.show_options(event);" onblur="javascript:lyricstobj'+rand+'.hide_options();"/>';
                    lyr_count=0;
                    
                }
                if(def_value_arr[3]!='')
                {
                    var singer_value_arr = def_value_arr[3].split('#$#');
                    sng_count=singer_value_arr.length-1;
                    default_sng_arr_val='';
                    for (var i=0;i<sng_count && singer_value_arr[i]!='';i++)
                    {
                        if(i==0)
                            singer_code='<input size="21" type="text" id="song_singer_'+rand+'" name="song_singer[]" value="'+singer_value_arr[i]+'" class="TextBox form-control" autocomplete="off" onkeyup="javascript:singerobj'+rand+'.show_options(event);" onblur="javascript:singerobj'+rand+'.hide_options();"/>';
                        else
                            default_sng_arr_val=default_sng_arr_val+'&nbsp;<input size="21" type="text" id="song_singer_sub_'+rand+'" name="song_singer_sub[]" value="'+singer_value_arr[i]+'" class="TextBox form-control" autocomplete="off" onkeyup="javascript:singersubobj_'+rand+'.show_options(event);" onblur="javascript:singersubobj_'+rand+'.hide_options();"/>##$##';
                    }
                    singer_value_array =default_sng_arr_val.split('##$##');
                    sng_count=singer_value_array.length-1;
                }
                else
                {
                    singer_code='<input size="21" type="text" id="song_singer_'+rand+'" name="song_singer[]" value="" class="TextBox form-control" autocomplete="off" onkeyup="javascript:singerobj'+rand+'.show_options(event);" onblur="javascript:singerobj'+rand+'.hide_options();"/>';
                    sng_count=0;
                }
                
                
                
            
                var max_count=Math.max(lyr_count,sng_count);
                for(i=0;i<max_count;i++)
                {
                        sub_html_txt=sub_html_txt+'<input type="hidden" name="song_count_index[]" id="song_count_index'+rand+'" value="'+def_value_arr[4]+'"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
                        if(lyr_count)
                        {
                                if(lyricts_value_array[i])
                                sub_html_txt=sub_html_txt+lyricts_value_array[i];
                                else
                                sub_html_txt=sub_html_txt+'<input size="21" type="text" id="lyricst_writer_sub_'+rand+'" name="lyricst_writer_sub[]" value="" class="TextBox form-control" autocomplete="off" onkeyup="javascript:lyricstsubobj_'+rand+'.show_options(event);" onblur="javascript:lyricstsubobj_'+rand+'.hide_options();"/>';
                        }
                        else
                        {
                                sub_html_txt=sub_html_txt+'<input size="21" type="text" id="lyricst_writer_sub_'+rand+'" name="lyricst_writer_sub[]" value="" class="TextBox form-control" autocomplete="off" onkeyup="javascript:lyricstsubobj_'+rand+'.show_options(event);" onblur="javascript:lyricstsubobj_'+rand+'.hide_options();"/>';   
                        }
                        if(sng_count)
                        {
                                if(singer_value_array[i])
                                        sub_html_txt=sub_html_txt+singer_value_array[i]+"<br/><div style='height: 5px;'></div>";
                                else
                                        sub_html_txt=sub_html_txt+'&nbsp;<input size="21" type="text" id="song_singer_sub_'+rand+'" name="song_singer_sub[]" value="" class="TextBox form-control" autocomplete="off" onkeyup="javascript:singersubobj_'+rand+'.show_options(event);" onblur="javascript:singersubobj_'+rand+'.hide_options();"/><br/><div style="height: 5px;"></div>';
                        }
                        else
                        {
                                sub_html_txt=sub_html_txt+'&nbsp;<input size="21" type="text" id="song_singer_sub_'+rand+'" name="song_singer_sub[]" value="" class="TextBox form-control" autocomplete="off" onkeyup="javascript:singersubobj_'+rand+'.show_options(event);" onblur="javascript:singersubobj_'+rand+'.hide_options();"/><br/><div style="height: 5px;"></div>';
                        }
                        
                }

                
                td.innerHTML ='<div class="col-md-3"><div class="form-group"><input type="hidden" name="song_id[]" id="song_id'+rand+'" value="'+def_value_arr[0]+'" class="TextBox form-control"/><input type="text" size="21" name="song_title[]" id="song_title_'+rand+'" value="'+def_value_arr[1]+'" class="TextBox form-control"/></div></div>'+lyricts_code+'&nbsp;'+singer_code+'<div class="col-md-3"><div class="form-group"><input type="button" class="form-control Button btn btn-warning" name="add_song" id="add_singer_lyricst_'+song_count+'" value="Add more singer/lyricst" onclick="'+val+'"/><table id="div_singer_lyricst_'+def_value_arr[4]+'"><tr id="song_sub_row_'+song_count+'" style="display:block;"><td>'+sub_html_txt+'</td></tr></table></div></div>';
                tr.appendChild(td);
                document.getElementById('songtab').tBodies[0].appendChild(tr);

                this["lyricstobj"+rand] = new AutoComplete(document.getElementById('lyricst_writer_'+rand), '1', eval('artist_array_6'), 'lyricstobj'+rand);
                this["singerobj"+rand] = new AutoComplete(document.getElementById('song_singer_'+rand), '1', eval('artist_array_7'), 'singerobj'+rand);
                if(sub_html_txt!='')
                {
                        this["lyricstsubobj_"+rand] = new AutoComplete(document.getElementById('lyricst_writer_sub_'+rand), '1', eval('artist_array_6'), 'lyricstsubobj_'+rand);
                        this["singersubobj_"+rand] = new AutoComplete(document.getElementById('song_singer_sub_'+rand), '1', eval('artist_array_7'), 'singersubobj_'+rand);
                }
                        
                
                eventobjsl1= new AutoComplete(document.getElementById('lyricst_writer_'+rand), '1', eval('artist_array_6'), 'eventobjsl1');
                eventobjss1 = new AutoComplete(document.getElementById('song_singer_'+rand), '1', eval('artist_array_7'), 'eventobjss1');
                
                eventobjsl11 = new AutoComplete(document.getElementById('lyricst_writer_'+rand), '1', eval('artist_array_6'), 'eventobjsl11');
                eventobjss11= new AutoComplete(document.getElementById('song_singer_'+rand), '1', eval('artist_array_7'), 'eventobjss11');

                
                eventobjsl12 = new AutoComplete(document.getElementById('lyricst_writer_'+rand), '1', eval('artist_array_6'), 'eventobjsl12');
                eventobjss12= new AutoComplete(document.getElementById('song_singer_'+rand), '1', eval('artist_array_7'), 'eventobjss12');
                
            
        }
        else
        {
                var def_value_arr = ['','',''];
                tr.innerHTML = '<div class="col-md-3"><div class="form-group"><input type="hidden" name="song_id[]" id="song_id'+rand+'" value="'+def_value_arr[0]+'" class="TextBox form-control"/><input type="text" size="21" name="song_title[]" id="song_title_'+rand+'" value="'+def_value_arr[1]+'" class="TextBox form-control"/></div></div><div class="col-md-3"><div class="form-group"><input size="21" type="text" id="lyricst_writer_'+rand+'" name="lyricst_writer[]" value="" class="TextBox form-control" autocomplete="off" onkeyup="javascript:lyricstobj1'+rand+'.show_options(event);" onblur="javascript:lyricstobj1'+rand+'.hide_options();"/></div></div><div class="col-md-3"><div class="form-group"><input size="21" type="text" id="song_singer_'+rand+'" name="song_singer[]" value="" class="TextBox form-control" autocomplete="off" onkeyup="javascript:singerobj1'+rand+'.show_options(event);" onblur="javascript:singerobj1'+rand+'.hide_options();"/></div></div><div class="col-md-3"><div class="form-group"><input type="button" name="add_song" id="add_singer_lyricst_'+song_count+'" value="Add more singer/lyricst" class="form-control Button btn btn-warning"  onclick="'+val+'"/><table id="div_singer_lyricst_'+song_count+'"><tr id="song_sub_row_'+song_count+'" style="display:block;"><td></td></tr></table></div></div>';
                document.getElementById('songtab').appendChild(tr);
                //eventobjsl1 = new AutoComplete(document.getElementById('lyricst_writer_'+rand), '1', eval('artist_array_6'), 'eventobjsl1');
                //eventobjss1 = new AutoComplete(document.getElementById('song_singer_'+rand), '1', eval('artist_array_7'), 'eventobjss1');
                this["lyricstobj1"+rand] = new AutoComplete(document.getElementById('lyricst_writer_'+rand), '1', eval('artist_array_6'), 'lyricstobj1'+rand);
                this["singerobj1"+rand] = new AutoComplete(document.getElementById('song_singer_'+rand), '1', eval('artist_array_7'), 'singerobj1'+rand);
        }
    }
	else if ('song_detail[]' == name)
	{
		var song_count=parseInt(document.getElementById("song_count_id").value);
		var tr = document.createElement('div');
		tr.setAttribute('class', 'row');
		var td = document.createElement('TD');
		val="addRow('song_detail[]', '"+song_count+"',7)";
		if (default_value != '')
		{
				tr.innerHTML =  '<div class="col-md-3"></div><div class="col-md-3"><input type="hidden" name="song_count_index[]" id="song_count_index'+rand+'" value="'+num+'"/><input size="21" type="text" id="lyricst_writer_sub_'+rand+'" name="lyricst_writer_sub[]" value="'+def_value_arr[0]+'" class="TextBox form-control" autocomplete="off" onkeyup="javascript:eventobjsl1.show_options(event);" onblur="javascript:eventobjsl1.hide_options();"/></div><div class="col-md-3"><input size="21" type="text" id="song_singer_sub_'+rand+'" name="song_singer_sub[]" value="'+def_value_arr[1]+'" class="TextBox form-control" autocomplete="off" onkeyup="javascript:eventobjss1.show_options(event);" onblur="javascript:eventobjss1.hide_options();"/></div><br><div class="col-md-3"></div>';
				document.getElementById('div_singer_lyricst_'+num).appendChild(tr);
				eventobjsl1 = new AutoComplete(document.getElementById('lyricst_writer_sub_'+rand), '1', eval('artist_array_6'), 'eventobjsl1');
				eventobjss1 = new AutoComplete(document.getElementById('song_singer_sub_'+rand), '1', eval('artist_array_7'), 'eventobjss1');
		}
		else
		{
				var def_value_arr = ['','',''];
				tr.innerHTML =   '<div class="col-md-3"></div></div class="col-md-3"><input type="hidden" name="song_count_index[]" id="song_count_index'+rand+'" value="'+num+'"/></div><div class="col-md-3"><div class="form-group"><input size="21" type="text" id="lyricst_writer_sub_'+rand+'" name="lyricst_writer_sub[]" value="" class="TextBox form-control" autocomplete="off" onkeyup="javascript:lyricstsubobj1_'+rand+'.show_options(event);" onblur="javascript:lyricstsubobj1_'+rand+'.hide_options();"/></div></div><div class="col-md-3"><div class="form-group"><input size="21" type="text" id="song_singer_sub_'+rand+'" name="song_singer_sub[]" value="" class="TextBox form-control" autocomplete="off" onkeyup="javascript:singersubobj1_'+rand+'.show_options(event);" onblur="javascript:singersubobj1_'+rand+'.hide_options();"/></div></div><div class="col-md-3"></div>';
				console.log(num);
				document.getElementById('songtab').appendChild(tr);
				//eventobjsl1 = new AutoComplete(document.getElementById('lyricst_writer_sub_'+rand), '1', eval('artist_array_6'), 'eventobjsl1');
				//eventobjss1 = new AutoComplete(document.getElementById('song_singer_sub_'+rand), '1', eval('artist_array_7'), 'eventobjss1');
				this["lyricstsubobj1_"+rand] = new AutoComplete(document.getElementById('lyricst_writer_sub_'+rand), '1', eval('artist_array_6'), 'lyricstsubobj1_'+rand);
				this["singersubobj1_"+rand] = new AutoComplete(document.getElementById('song_singer_sub_'+rand), '1', eval('artist_array_7'), 'singersubobj1_'+rand);
		}
	}
	else if ('search_tweets_keyword[]' == name)
	{
		if(default_value!='')
		{
			var def_value_arr = default_value.split(',');
			tr.innerHTML = '<div class="col-md-6"><div class="form-group"><input size="40" type="hidden" id="search_tweets_id" name="search_tweets_id[]" class="TextBox form-control" value="'+def_value_arr[0]+'"/><input type="text" id="search_tweets_keyword'+rand+'" name="search_tweets_keyword[]" placeholder="Movie Tweets"  value="'+def_value_arr[1]+'"  class="TextBox form-control" size="40"/></div></div><div class="col-md-6"><div class="form-group"><input type="text" size="40" id="search_tweets_widget_id'+rand+'" name="search_tweets_widget_id[]" value="'+def_value_arr[2]+'" class="TextBox form-control" autocomplete="off" placeholder="Widget Id"/></div></div>';
		}
		else
		{
	        tr.innerHTML = '<div class="col-md-6"><div class="form-group"><input size="40" type="hidden" id="search_tweets_id" name="search_tweets_id[]" class="TextBox form-control" value=""/><input type="text" id="search_tweets_keyword'+rand+'" name="search_tweets_keyword[]" value=""  class="TextBox form-control" placeholder="Movie Tweets"  size="40"/></div></div><div class="col-md-6"><div class="form-group"><input type="text" size="40" id="search_tweets_widget_id'+rand+'" name="search_tweets_widget_id[]" value="" class="TextBox form-control" autocomplete="off" placeholder="Widget Id"/></div></div>';
		}	
		document.getElementById('searchtweetstab').appendChild(tr);
	}
	else if ('search_tweets_keyword1[]' == name)
	{
		if(default_value!='')
		{
			var def_value_arr = default_value.split(',');
			tr.innerHTML = '<div class="col-md-12"><div class="form-group"><input size="40" type="hidden" id="search_tweets_id1" name="search_tweets_id1[]" class="TextBox form-control" value="'+def_value_arr[0]+'"/><input type="text" id="search_tweets_keyword1'+rand+'" name="search_tweets_keyword1[]" value="'+def_value_arr[1]+'" placeholder="Twitter Url"  class="TextBox form-control" size="40"/></div></div>';
		}
		else
		{
	        tr.innerHTML = '<div class="col-md-12"><div class="form-group"><input size="40" type="hidden" id="search_tweets_id1" name="search_tweets_id1[]" class="TextBox form-control" value=""/><input type="text" id="search_tweets_keyword1'+rand+'" name="search_tweets_keyword1[]" value=""  class="TextBox form-control" size="40" placeholder="Twitter Url"/></div></div>';
		}	
		document.getElementById('searchtweetstab1').appendChild(tr);
	}	
	else if ('movie_dialogue[]' == name)
	{
		if(default_value!='')
		{
			var def_value_arr = default_value.split(',');
			tr.innerHTML = '<div class="col-md-12"><div class="form-group"><input size="40" type="hidden" id="dialogue_id" name="dialogue_id[]" class="TextBox form-control" value="'+def_value_arr[0]+'"/><textarea id="movie_dialogue" name="movie_dialogue[]" cols="50" class="TextBox form-control">'+def_value_arr[1].split("##$$##").join(",")+'</textarea></div></div>';
		}
		else
		{
	        tr.innerHTML = '<div class="col-md-12"><div class="form-group"><input size="40" type="hidden" id="dialogue_id" name="dialogue_id[]" class="TextBox form-control" value=""/><textarea id="movie_dialogue" name="movie_dialogue[]" cols="50" class="TextBox form-control"></textarea></div></div>';
		}	
		document.getElementById('moviedialoguetab').appendChild(tr);
	}
	else if ('unknown_fact[]' == name)
	{
		tr.innerHTML = '<div class="col-md-12"><div class="form-group"><input size="40" type="hidden" id="unknown_fact_id" name="unknown_fact_id[]" class="TextBox form-control" value=""/><input type="text" class="form-control" id="unknown_fact" name="unknown_fact[]" placeholder="Unknown Facts"/></div></div>';
		document.getElementById('unknown_facttab').appendChild(tr);
	}	
	
	
    else if ('director[]' == name)
    {
		tr.innerHTML = '<div class="col-md-12"><div class="form-group"><input placeholder="Director Name" class="form-control starcasts" type="text" id="director_'+rand+'" name="director[]" value="'+default_value+'"  class="starcasts TextBox" autocomplete="off" /><div id="display-director_'+rand+'" style="width:98.6%;position: absolute;z-index: 1000;background: #ebebeb;"></div></div></div>';
		document.getElementById('directortab').appendChild(tr);
    }
    else if ('cinematography[]' == name)
    {
		tr.innerHTML = '<div class="col-md-12"><div class="form-group"><input placeholder="Cinematographer" type="text" id="cinematography_'+rand+'" name="cinematography[]" value="'+default_value+'"  class="TextBox form-control starcasts" autocomplete="off/" /><div id="display-cinematography_'+rand+'" style="width:98.6%;position: absolute;z-index: 1000;background: #ebebeb;"></div></div></div>';
		document.getElementById('cinematographytab').appendChild(tr);
    }
    else if ('editing[]' == name)
    {
		tr.innerHTML = '<div class="col-md-12"><div class="form-group"><input placeholder="Editor" type="text" id="editing_'+rand+'" name="editing[]" value="'+default_value+'"  class="TextBox form-control starcasts" autocomplete="off"/><div id="display-editing_'+rand+'" style="width:98.6%;position: absolute;z-index: 1000;background: #ebebeb;"></div></div></div>';
		document.getElementById('editingtab').appendChild(tr);
    }
	else if ('producer[]' == name)
    {
        tr.innerHTML = '<div class="col-md-12"><div class="form-group"><input placeholder="Producer Name" type="text" id="producer_'+rand+'" name="producer[]" value="'+default_value+'"  class="TextBox form-control starcasts" autocomplete="off" /><div id="display-producer_'+rand+'" style="width:98.6%;position: absolute;z-index: 1000;background: #ebebeb;"></div></div></div>';
        document.getElementById('producertab').appendChild(tr);
	}
	else if ('lyricst[]' == name)
    {
        tr.innerHTML = '<div class="col-md-12"><div class="form-group"><input placeholder="Lyricist" type="text" id="lyricst_'+rand+'" name="lyricst[]" value="'+default_value+'"  class="TextBox form-control starcasts" autocomplete="off" /><div id="display-lyricst_'+rand+'" style="width:98.6%;position: absolute;z-index: 1000;background: #ebebeb;"></div></div></div>';
        document.getElementById('lyricsttab').appendChild(tr);
    }
	else if ('mus_director[]' == name)
    {
        tr.innerHTML = '<div class="col-md-12"><div class="form-group"><input placeholder="Music Director" type="text" id="mus_director_'+rand+'" name="mus_director[]" value="'+default_value+'"  class="TextBox form-control starcasts" autocomplete="off"/><div id="display-mus_director_'+rand+'" style="width:98.6%;position: absolute;z-index: 1000;background: #ebebeb;"></div></div></div>';
        document.getElementById('mus_directortab').appendChild(tr);
	}
	else if ('singer[]' == name)
    {
		tr.innerHTML = '<div class="col-md-12"><div class="form-group"><input placeholder="Singer" type="text" id="singer_'+rand+'" name="singer[]" value="'+default_value+'"  class="TextBox form-control starcasts" autocomplete="off" /><div id="display-singer_'+rand+'" style="width:98.6%;position: absolute;z-index: 1000;background: #ebebeb;"></div></div></div>';
        document.getElementById('singertab').appendChild(tr);
    }
    else if ('artdirector[]' == name)
    {
		td.innerHTML = '<input size="40" placeholder="Name" type="text" id="artdirector_'+rand+'" name="artdirector[]" value="'+default_value+'"  class="TextBox form-control starcasts" autocomplete="off"/><div id="display-artdirector_'+rand+'" style="width:98.6%;position: absolute;z-index: 1000;background: #ebebeb;"></div>';
        td.innerHTML += '&nbsp;<input size="40" type="text" id="artdirector_role'+rand+'" name="artdirector_role[]" value="'+default_value+'"  class="TextBox form-control" autocomplete="off" placeholder="Role"/>';
        tr.appendChild(td);
        document.getElementById('artdirectortab').tBodies[0].appendChild(tr);
    }
    else if ('action_stunt_choreography[]' == name)
    {
		td.innerHTML = '<input size="40" placeholder="Name" type="text" id="action_stunt_choreography_'+rand+'" name="action_stunt_choreography[]" value="'+default_value+'"  class="TextBox form-control" autocomplete="off" onkeyup="javascript:eventobj9.show_options(event);" onblur="javascript:eventobj9.hide_options();"/>';
		td.innerHTML += '&nbsp;<input size="40" type="text" id="action_stunt_choreography_role'+rand+'" name="action_stunt_choreography_role[]" value="'+default_value+'"  class="TextBox form-control" autocomplete="off" onkeyup="javascript:eventobj9.show_options(event);" onblur="javascript:eventobj9.hide_options();" placeholder="Role"/>';        
        tr.appendChild(td);
        document.getElementById('action_stunt_choreographytab').tBodies[0].appendChild(tr);
		eventobj9 = new AutoComplete(document.getElementById('action_stunt_choreography_'+rand), '1', eval('artist_array_'+id), 'eventobj9');
    }
    else if ('dance_choreography[]' == name)
    {
		td.innerHTML = '<input size="40" placeholder="Name" type="text" id="dance_choreography_'+rand+'" name="dance_choreography[]" value="'+default_value+'"  class="TextBox form-control" autocomplete="off" onkeyup="javascript:eventobj13.show_options(event);" onblur="javascript:eventobj13.hide_options();"/>';
		td.innerHTML += '&nbsp;<input size="40" type="text" id="dance_choreography_role'+rand+'" name="dance_choreography_role[]" value="'+default_value+'"  class="TextBox form-control" autocomplete="off" onkeyup="javascript:eventobj13.show_options(event);" onblur="javascript:eventobj13.hide_options();" placeholder="Role"/>';        
        tr.appendChild(td);
        document.getElementById('dance_choreographytab').tBodies[0].appendChild(tr);
		eventobj13 = new AutoComplete(document.getElementById('dance_choreography_'+rand), '1', eval('artist_array_'+id), 'eventobj13');
    }
     else if ('vfx_supervision[]' == name)
    {
		td.innerHTML = '<input size="40" placeholder="Name" type="text" id="vfx_supervision_'+rand+'" name="vfx_supervision[]" value="'+default_value+'"  class="TextBox form-control" autocomplete="off" onkeyup="javascript:eventobj10.show_options(event);" onblur="javascript:eventobj10.hide_options();"/>';
        td.innerHTML += '&nbsp;<input size="40" type="text" id="vfx_supervision_role'+rand+'" name="vfx_supervision_role[]" value="'+default_value+'"  class="TextBox form-control" autocomplete="off" onkeyup="javascript:eventobj10.show_options(event);" onblur="javascript:eventobj10.hide_options();" placeholder="Role"/>';
        tr.appendChild(td);
        document.getElementById('vfx_supervisiontab').tBodies[0].appendChild(tr);
		eventobj9 = new AutoComplete(document.getElementById('vfx_supervision_'+rand), '1', eval('artist_array_'+id), 'eventobj10');
    }
    else if ('costume_design[]' == name)
    {
		td.innerHTML = '<input size="40" placeholder="Name" type="text" id="costume_design_'+rand+'" name="costume_design[]" value="'+default_value+'"  class="TextBox form-control" autocomplete="off" onkeyup="javascript:eventobj14.show_options(event);" onblur="javascript:eventobj14.hide_options();"/>';
		td.innerHTML += '&nbsp;<input size="40" type="text" id="costume_design_role'+rand+'" name="costume_design_role[]" value="'+default_value+'"  class="TextBox form-control" autocomplete="off" onkeyup="javascript:eventobj14.show_options(event);" onblur="javascript:eventobj14.hide_options();" placeholder="Role"/>';
        tr.appendChild(td);
        document.getElementById('costume_designtab').tBodies[0].appendChild(tr);
		eventobj14 = new AutoComplete(document.getElementById('costume_design_'+rand), '1', eval('artist_array_'+id), 'eventobj14');
    }
    else if ('additional_crew[]' == name)
    {
		td.innerHTML = '&nbsp;<input size="40" placeholder="Name" type="text" id="additional_crew_'+rand+'" name="additional_crew[]" value="'+default_value+'"  class="TextBox form-control" autocomplete="off" onkeyup="javascript:eventobj15.show_options(event);" onblur="javascript:eventobj15.hide_options();"/>';
		td.innerHTML += '&nbsp;<input size="40" type="text" id="additional_crew_role'+rand+'" name="additional_crew_role[]" value="'+default_value+'"  class="TextBox form-control" autocomplete="off" onkeyup="javascript:eventobj15.show_options(event);" onblur="javascript:eventobj15.hide_options();" placeholder="Role"/>';
        tr.appendChild(td);
        document.getElementById('additional_crewtab').tBodies[0].appendChild(tr);
		eventobj15 = new AutoComplete(document.getElementById('additional_crew_'+rand), '1', eval('artist_array_'+id), 'eventobj15');
    }
    else if ('production_company[]' == name)
    {
		tr.innerHTML = '<div class="col-md-12"><div class="form-group"><input placeholder="Production Company" type="text" id="production_company_'+rand+'" name="production_company[]" value="'+default_value+'"  class="TextBox form-control" autocomplete="off" onkeyup="javascript:eventobj16.show_options(event);" onblur="javascript:eventobj16.hide_options();"/></div></div>';
        document.getElementById('production_companytab').appendChild(tr);
		eventobj16 = new AutoComplete(document.getElementById('production_company_'+rand), '1', eval('artist_array_'+id), 'eventobj16');
    }
    else if ('distributor[]' == name)
    {
		td.innerHTML = '<div class="col-md-12"><div class="form-group"><input placeholder="Distributor" type="text" id="distributor_'+rand+'" name="distributor[]" value="'+default_value+'"  class="TextBox form-control" autocomplete="off" onkeyup="javascript:eventobj17.show_options(event);" onblur="javascript:eventobj17.hide_options();"/></div></div>';
        document.getElementById('distributortab').appendChild(tr);
		eventobj17 = new AutoComplete(document.getElementById('distributor_'+rand), '1', eval('artist_array_'+id), 'eventobj17');
    }
    else if ('music_label[]' == name)
    {
		td.innerHTML = '<div class="col-md-12"><div class="form-group"><input placeholder="Music Label" type="text" id="music_label_'+rand+'" name="music_label[]" value="'+default_value+'"  class="TextBox form-control" autocomplete="off" onkeyup="javascript:eventobj18.show_options(event);" onblur="javascript:eventobj18.hide_options();"/></div></div>';
        document.getElementById('music_labeltab').appendChild(tr);
		eventobj18 = new AutoComplete(document.getElementById('music_label_'+rand), '1', eval('artist_array_'+id), 'eventobj18');
    }
    else if ('a_edu[]' == name)
	{	
		tr.innerHTML = '<div class="col-md-12"><div class="form-group"><input size="40" type="text" id="a_edu_'+rand+'" name="a_edu[]" value="'+default_value+'"  class="TextBox form-control" placeholder="Educational Qualification" autocomplete="off" /></div></div>';
		document.getElementById('a_edutab').appendChild(tr);
	}
	else if ('college[]' == name)
	{	
		td.innerHTML = '<input size="40" type="text" id="a_college_'+rand+'" name="a_college[]" value="'+default_value+'"  class="TextBox form-control" autocomplete="off" />';
		tr.appendChild(td);
		document.getElementById('collegetab').tBodies[0].appendChild(tr);
	}
	else if ('school[]' == name)
	{	
		td.innerHTML = '<input size="40" type="text" id="a_school_'+rand+'" name="a_school[]" value="'+default_value+'"  class="TextBox form-control" autocomplete="off" />';
		tr.appendChild(td);
		document.getElementById('schooltab').tBodies[0].appendChild(tr);
	}
	else if ('sequel[]' == name)
	{
		td.innerHTML = '<input size="40" type="text" id="sequel" name="sequel[]" value="'+default_value+'"  class="TextBox form-control" />';
        tr.appendChild(td);
        document.getElementById('sequeltab').tBodies[0].appendChild(tr);
	}
	else if ('wallpaper[]' == name)
	{
		tdHtml = '<div class="row"><div class="col-md-12"><div class="form-group"><input size="40" type="text" id="wallpaper" name="wallpaper[]" value="'+default_value+'"  class="TextBox form-control" placeholder="URL" /></div></div></div>';
        
        $('#walltab').append(tdHtml);
	}
	else if ('gallery[]' == name)
	{
		tdHtml = '<div class="row"><div class="col-md-8"><div class="form-group"><input size="40" type="text" id="gallery" name="gallery[]" value="'+ default_value +'" class="TextBox form-control" placeholder="URL" /></div></div>';
		if (isEvent != 0)
				tdHtml += '<div class="col-md-4"><div class="form-group"><div class="form-check"><input type="checkbox" class="form-check-input" name="event_'+max_dr+'" value="1" checked><label class="form-check-label" for="event_'+max_dr+'">Event</label></div></div></div></div>';
		else
				tdHtml += '<div class="col-md-4"><div class="form-group"><div class="form-check"><input type="checkbox" class="form-check-input" name="event_'+max_dr+'" value="1"><label class="form-check-label" for="event_'+max_dr+'">Event</label></div></div></div></div>';
	
      		$('#galtab').append(tdHtml);
        }


	else if ('review_title[]' == name)
	{
		var def_value_arr = default_value.split(',');
		var creview_count_id=parseInt(document.getElementById("creview_count_id").value);
		var selval='selected';
		if(default_value=='')
			tdHtml = '<div class="col-md-3"><div class="form-group"><input type="hidden" id="creview_count_id" name="creview_count_id" value="'+rand+'"  class="TextBox form-control" /><input type="hidden" id="review_id" name="review_id[]" class="TextBox form-control" /><input size="40" type="text" id="review_title" name="review_title[]" placeholder="Critics Title" value="" class="TextBox form-control" /></div></div><div class="col-md-4"><div class="form-group"><textarea id="review_desc" name="review_desc[]" cols="50" class="form-control" placeholder="Critics Desc"></textarea></div></div><div class="col-md-3"><div class="form-group"><input size="40" type="text" id="review_link" name="review_link[]" value=""  class="TextBox form-control" placeholder="Critics Link" /></div></div><div class="col-md-2"><div class="form-group"><select name="review_rating[]" id="review_rating" class="form-control"><option value="">Select Rating</option><option value="1">1</option><option value="1.5">1.5</option><option value="2">2</option><option value="2.5">2.5</option><option value="3">3</option><option value="3.5">3.5</option><option value="4">4</option><option value="4.5">4.5</option><option value="5">5</option></select></div></div>';
		else
		{
			if(def_value_arr[2]==1)           
				tdHtml = '<br/><div class="critics_css1"><div class="critics_css">Critics Title</div><input type="hidden" id="creview_count_id" name="creview_count_id" value="'+def_value_arr[5]+'"  class="TextBox form-control" /><input type="hidden" id="review_id" name="review_id[]" class="TextBox form-control" value="'+def_value_arr[0]+'"/><input size="40" type="text" id="review_title" name="review_title[]" value="'+ def_value_arr[1] +'" class="TextBox form-control" /></div><div class="critics_css1"><div class="critics_css"><br/>Critics Desc</div><textarea id="review_desc" name="review_desc[]" cols="50">'+def_value_arr[3].split("##$##").join(",")+'</textarea></div><div class="critics_css1"><div class="critics_css">Critics Link</div><input size="40" type="text" id="review_link" name="review_link[]" value="'+ def_value_arr[4] +'" class="TextBox form-control" /></div><div class="critics_css1"><div class="critics_css">Critics Rating</div><select name="review_rating[]" id="review_rating"><option value="">Select Rating</option><option value="1" '+selval+'>1</option><option value="1.5">1.5</option><option value="2">2</option><option value="2.5">2.5</option><option value="3">3</option><option value="3.5">3.5</option><option value="4">4</option><option value="4.5">4.5</option><option value="5">5</option></select></div>';
			else if(def_value_arr[2]==1.5)           
				tdHtml = '<br/><div class="critics_css1"><div class="critics_css">Critics Title</div><input type="hidden" id="creview_count_id" name="creview_count_id" value="'+def_value_arr[5]+'"  class="TextBox form-control" /><input type="hidden" id="review_id" name="review_id[]" class="TextBox form-control" value="'+def_value_arr[0]+'"/><input size="40" type="text" id="review_title" name="review_title[]" value="'+ def_value_arr[1] +'" class="TextBox form-control" /></div><div class="critics_css1"><div class="critics_css"><br/>Critics Desc</div><textarea id="review_desc" name="review_desc[]" cols="50">'+def_value_arr[3].split("##$##").join(",")+'</textarea></div><div class="critics_css1"><div class="critics_css">Critics Link</div><input size="40" type="text" id="review_link" name="review_link[]" value="'+ def_value_arr[4] +'" class="TextBox form-control" /></div><div class="critics_css1"><div class="critics_css">Critics Rating</div><select name="review_rating[]" id="review_rating"><option value="">Select Rating</option><option value="1">1</option><option value="1.5" '+selval+'>1.5</option><option value="2">2</option><option value="2.5">2.5</option><option value="3">3</option><option value="3.5">3.5</option><option value="4">4</option><option value="4.5">4.5</option><option value="5">5</option></select></div>';
			else if(def_value_arr[2]==2)           
				tdHtml = '<br/><div class="critics_css1"><div class="critics_css">Critics Title</div><input type="hidden" id="creview_count_id" name="creview_count_id" value="'+def_value_arr[5]+'"  class="TextBox form-control" /><input type="hidden" id="review_id" name="review_id[]" class="TextBox form-control" value="'+def_value_arr[0]+'"/><input size="40" type="text" id="review_title" name="review_title[]" value="'+ def_value_arr[1] +'" class="TextBox form-control" /></div><div class="critics_css1"><div class="critics_css"><br/>Critics Desc</div><textarea id="review_desc" name="review_desc[]" cols="50">'+def_value_arr[3].split("##$##").join(",")+'</textarea></div><div class="critics_css1"><div class="critics_css">Critics Link</div><input size="40" type="text" id="review_link" name="review_link[]" value="'+ def_value_arr[4] +'" class="TextBox form-control" /></div><div class="critics_css1"><div class="critics_css">Critics Rating</div><select name="review_rating[]" id="review_rating"><option value="">Select Rating</option><option value="1">1</option><option value="1.5">1.5</option><option value="2" '+selval+'>2</option><option value="2.5">2.5</option><option value="3">3</option><option value="3.5">3.5</option><option value="4">4</option><option value="4.5">4.5</option><option value="5">5</option></select></div>';
			else if(def_value_arr[2]==2.5)           
				tdHtml = '<br/><div class="critics_css1"><div class="critics_css">Critics Title</div><input type="hidden" id="creview_count_id" name="creview_count_id" value="'+def_value_arr[5]+'"  class="TextBox form-control" /><input type="hidden" id="review_id" name="review_id[]" class="TextBox form-control" value="'+def_value_arr[0]+'"/><input size="40" type="text" id="review_title" name="review_title[]" value="'+ def_value_arr[1] +'" class="TextBox form-control" /></div><div class="critics_css1"><div class="critics_css"><br/>Critics Desc</div><textarea id="review_desc" name="review_desc[]" cols="50">'+def_value_arr[3].split("##$##").join(",")+'</textarea></div><div class="critics_css1"><div class="critics_css">Critics Link</div><input size="40" type="text" id="review_link" name="review_link[]" value="'+ def_value_arr[4] +'" class="TextBox form-control" /></div><div class="critics_css1"><div class="critics_css">Critics Rating</div><select name="review_rating[]" id="review_rating"><option value="">Select Rating</option><option value="1">1</option><option value="1.5">1.5</option><option value="2">2</option><option value="2.5" '+selval+'>2.5</option><option value="3">3</option><option value="3.5">3.5</option><option value="4">4</option><option value="4.5">4.5</option><option value="5">5</option></select></div>';
			else if(def_value_arr[2]==3)           
				tdHtml = '<br/><div class="critics_css1"><div class="critics_css">Critics Title</div><input type="hidden" id="creview_count_id" name="creview_count_id" value="'+def_value_arr[5]+'"  class="TextBox form-control" /><input type="hidden" id="review_id" name="review_id[]" class="TextBox form-control" value="'+def_value_arr[0]+'"/><input size="40" type="text" id="review_title" name="review_title[]" value="'+ def_value_arr[1] +'" class="TextBox form-control" /></div><div class="critics_css1"><div class="critics_css"><br/>Critics Desc</div><textarea id="review_desc" name="review_desc[]" cols="50">'+def_value_arr[3].split("##$##").join(",")+'</textarea></div><div class="critics_css1"><div class="critics_css">Critics Link</div><input size="40" type="text" id="review_link" name="review_link[]" value="'+ def_value_arr[4] +'" class="TextBox form-control" /></div><div class="critics_css1"><div class="critics_css">Critics Rating</div><select name="review_rating[]" id="review_rating"><option value="">Select Rating</option><option value="1">1</option><option value="1.5">1.5</option><option value="2">2</option><option value="2.5">2.5</option><option value="3" '+selval+'>3</option><option value="3.5">3.5</option><option value="4">4</option><option value="4.5">4.5</option><option value="5">5</option></select></div>';
			else if(def_value_arr[2]==3.5)           
				tdHtml = '<br/><div class="critics_css1"><div class="critics_css">Critics Title</div><input type="hidden" id="creview_count_id" name="creview_count_id" value="'+def_value_arr[5]+'"  class="TextBox form-control" /><input type="hidden" id="review_id" name="review_id[]" class="TextBox form-control" value="'+def_value_arr[0]+'"/><input size="40" type="text" id="review_title" name="review_title[]" value="'+ def_value_arr[1] +'" class="TextBox form-control" /></div><div class="critics_css1"><div class="critics_css"><br/>Critics Desc</div><textarea id="review_desc" name="review_desc[]" cols="50">'+def_value_arr[3].split("##$##").join(",")+'</textarea></div><div class="critics_css1"><div class="critics_css">Critics Link</div><input size="40" type="text" id="review_link" name="review_link[]" value="'+ def_value_arr[4] +'" class="TextBox form-control" /></div><div class="critics_css1"><div class="critics_css">Critics Rating</div><select name="review_rating[]" id="review_rating"><option value="">Select Rating</option><option value="1">1</option><option value="1.5">1.5</option><option value="2">2</option><option value="2.5">2.5</option><option value="3">3</option><option value="3.5" '+selval+'>3.5</option><option value="4">4</option><option value="4.5">4.5</option><option value="5">5</option></select></div>';
			else if(def_value_arr[2]==4)           
				tdHtml = '<br/><div class="critics_css1"><div class="critics_css">Critics Title</div><input type="hidden" id="creview_count_id" name="creview_count_id" value="'+def_value_arr[5]+'"  class="TextBox form-control" /><input type="hidden" id="review_id" name="review_id[]" class="TextBox form-control" value="'+def_value_arr[0]+'"/><input size="40" type="text" id="review_title" name="review_title[]" value="'+ def_value_arr[1] +'" class="TextBox form-control" /></div><div class="critics_css1"><div class="critics_css"><br/>Critics Desc</div><textarea id="review_desc" name="review_desc[]" cols="50">'+def_value_arr[3].split("##$##").join(",")+'</textarea></div><div class="critics_css1"><div class="critics_css">Critics Link</div><input size="40" type="text" id="review_link" name="review_link[]" value="'+ def_value_arr[4] +'" class="TextBox form-control" /></div><div class="critics_css1"><div class="critics_css">Critics Rating</div><select name="review_rating[]" id="review_rating"><option value="">Select Rating</option><option value="1">1</option><option value="1.5">1.5</option><option value="2">2</option><option value="2.5">2.5</option><option value="3">3</option><option value="3.5">3.5</option><option value="4" '+selval+'>4</option><option value="4.5">4.5</option><option value="5">5</option></select></div>';
			else if(def_value_arr[2]==4.5)           
				tdHtml = '<br/><div class="critics_css1"><div class="critics_css">Critics Title</div><input type="hidden" id="creview_count_id" name="creview_count_id" value="'+def_value_arr[5]+'"  class="TextBox form-control" /><input type="hidden" id="review_id" name="review_id[]" class="TextBox form-control" value="'+def_value_arr[0]+'"/><input size="40" type="text" id="review_title" name="review_title[]" value="'+ def_value_arr[1] +'" class="TextBox form-control" /></div><div class="critics_css1"><div class="critics_css"><br/>Critics Desc</div><textarea id="review_desc" name="review_desc[]" cols="50">'+def_value_arr[3].split("##$##").join(",")+'</textarea></div><div class="critics_css1"><div class="critics_css">Critics Link</div><input size="40" type="text" id="review_link" name="review_link[]" value="'+ def_value_arr[4] +'" class="TextBox form-control" /></div><div class="critics_css1"><div class="critics_css">Critics Rating</div><select name="review_rating[]" id="review_rating"><option value="">Select Rating</option><option value="1">1</option><option value="1.5">1.5</option><option value="2">2</option><option value="2.5">2.5</option><option value="3">3</option><option value="3.5">3.5</option><option value="4">4</option><option value="4.5" '+selval+'>4.5</option><option value="5">5</option></select></div>';
			else if(def_value_arr[2]==5)           
				tdHtml = '<br/><div class="critics_css1"><div class="critics_css">Critics Title</div><input type="hidden" id="creview_count_id" name="creview_count_id" value="'+def_value_arr[5]+'"  class="TextBox form-control" /><input type="hidden" id="review_id" name="review_id[]" class="TextBox form-control" value="'+def_value_arr[0]+'"/><input size="40" type="text" id="review_title" name="review_title[]" value="'+ def_value_arr[1] +'" class="TextBox form-control" /></div><div class="critics_css1"><div class="critics_css"><br/>Critics Desc</div><textarea id="review_desc" name="review_desc[]" cols="50">'+def_value_arr[3].split("##$##").join(",")+'</textarea></div><div class="critics_css1"><div class="critics_css">Critics Link</div><input size="40" type="text" id="review_link" name="review_link[]" value="'+ def_value_arr[4] +'" class="TextBox form-control" /></div><div class="critics_css1"><div class="critics_css">Critics Rating</div><select name="review_rating[]" id="review_rating"><option value="">Select Rating</option><option value="1">1</option><option value="1.5">1.5</option><option value="2">2</option><option value="2.5">2.5</option><option value="3">3</option><option value="3.5">3.5</option><option value="4">4</option><option value="4.5">4.5</option><option value="5" '+selval+'>5</option></select></div>';
			else
				tdHtml = '<br/><div class="critics_css1"><div class="critics_css">Critics Title</div><input type="hidden" id="creview_count_id" name="creview_count_id" value="'+def_value_arr[5]+'"  class="TextBox form-control" /><input type="hidden" id="review_id" name="review_id[]" class="TextBox form-control" value="'+def_value_arr[0]+'"/><input size="40" type="text" id="review_title" name="review_title[]" value="'+ def_value_arr[1] +'" class="TextBox form-control" /></div><div class="critics_css1"><div class="critics_css"><br/>Critics Desc</div><textarea id="review_desc" name="review_desc[]" cols="50">'+def_value_arr[3].split("##$##").join(",")+'</textarea></div><div class="critics_css1"><div class="critics_css">Critics Link</div><input size="40" type="text" id="review_link" name="review_link[]" value="'+ def_value_arr[4] +'" class="TextBox form-control" /></div><div class="critics_css1"><div class="critics_css">Critics Rating</div><select name="review_rating[]" id="review_rating"><option value="">Select Rating</option><option value="1">1</option><option value="1.5">1.5</option><option value="2">2</option><option value="2.5">2.5</option><option value="3">3</option><option value="3.5">3.5</option><option value="4">4</option><option value="4.5">4.5</option><option value="5">5</option></select></div>';
		}
	        tr.innerHTML = tdHtml;
		creview_count_id++;
		document.getElementById('creview_count_id').value=creview_count_id;
	        document.getElementById('reviewtab').appendChild(tr);
	}

}



function validate_form(thisform)
{
	if (thisform.artist_name.value == '')
	{
		alert("Please enter artist name!");
		thisform.artist_name.focus();
		return false;
	}
	var flag = false;
	for(i=0;i<thisform.sex.length;i++)
	{
		if (thisform.sex[i].checked == true)
		{
			flag = true;
		}
	}
	if (!flag)
	{
		alert("Please select gender !");
		//thisform.sex.focus();
		return false;
	}
	if (thisform.weburl.value !='')
	{
		if( !isValidWebAddress(thisform.weburl.value))
		{
			alert('Please enter a valid web address for website.');
			thisform.weburl.focus();
			return false;
		}
	}
	if (thisform.ss_url.value !='')
	{
	if( !isValidWebAddress(thisform.ss_url.value))
		{
			alert('Please enter a valid web address for screensaver.');
			thisform.ss_url.focus();
			return false;
		}
	}
	
	var wallpaper = document.getElementsByName('wallpaper[]');
	for (i=0;i<wallpaper.length;i++)
	{
		if(wallpaper[i].value != '')
		{
			if( !isValidWebAddress(wallpaper[i].value))
			{
				alert('The wallpaper url is not a valid web address.');
				wallpaper[i].focus();
				return false;
			}
		}
	}
	
	var gallery = document.getElementsByName('gallery[]');
	for (i=0;i<gallery.length;i++)
	{
		if(gallery[i].value != '')
		{
			if( !isValidWebAddress(gallery[i].value))
			{
				alert('The gallery url is not a valid web address.');
				gallery[i].focus();
				return false;
			}
		}
	}
	
	thisform.action.value="submit";
	thisform.submit();
}

function submit_form(thisform)
{
	thisform.action.value="submit";
    thisform.submit();
}

function validationRule(frmname)
{
	var movie = document.movies.movie_name;
	var language = document.movies.language;
	var year = document.movies.year;
	var genre = document.movies.genre;
	//castflag=false;
	dirflag=false;
	
	/*var cast1 = document.getElementsByName('cast[]');
	for (i=0;i<cast1.length;i++)
	{
		if(cast1[i].value != '')
		{
			castflag=true;
			break;
		}
	}*/
	var director1 = document.getElementsByName('director[]');
	
	for (i=0;i<director1.length;i++)
	{
		//alert(director1[i].value);
		if(director1[i].value != '')
		{
			dirflag=true;
			break;
		}
	}
	var poster =  document.movies.poster;
	var website =  document.movies.website;
	var review_url = document.movies.review_url;
	var preview_url = document.movies.preview_url;
	var screensaver = document.movies.screensaver;
	var trailer = document.movies.trailer;
	if (language.value ==0)
	{
		alert('Please select language');
		language.focus();
		return false;
	}
	if (movie.value == '')
	{
		alert('Please enter movie name');
		movie.focus();
		return false;
	}
	if (year.value ==0)
	{
		alert('Please select year');
		year.focus();
		return false;
	}
	if (genre.value ==0)
	{
		alert('Please select genre');
		genre.focus();
		return false;
	}
	/*if (castflag != true)
	{
		alert('Please enter star cast');
		//cast.focus();
		return false;
	}*/
	if (dirflag != true)
	{
		alert('Please enter director details');
		//director.focus();
		return false;
	}
	if( !validateFieldLength(1,100,movie.value))
	{
		alert('The movie name length should be between 1 and 100');
		movie.focus();
		return false;
	}
	/*if (!validateFieldLength(1,100,cast.value))
	{
		alert('The cast name length should be between 1 and 100');
		cast.focus();
		return false;
	}
	if (!validateFieldLength(1,100,director.value))
	{
		alert('The director name length should be between 1 and 100');
		director.focus();
		return false;
	}*/
	if (poster.value !='')
	{
		if( !isImage(poster.value))
		{
			alert ('The poster is not valid image  of type .gif, .jpg, .jpe, .jpeg.');
			poster.focus();
			return false;
		}
	}
	if (website.value !='')
	{

		if( !isValidWebAddress(website.value))
		{
			alert('The website is not a valid web address.');
			website.focus();
			return false;
		}

	}
	if (review_url.value !='')
	{
		if( !isValidWebAddress(review_url.value))
		{
			alert('The review url is not a valid web address.');
			review_url.focus();
			return false;
		}
	}
	if (preview_url.value !='')
	{
		if( !isValidWebAddress(preview_url.value))
		{
			alert('The preview url is not a valid web address.');
			preview_url.focus();
			return false;
		}
	}
	if (screensaver.value !='')
	{
		if( !isValidWebAddress(screensaver.value))
		{
			alert('The screensaver url is not a valid web address.');
			screensaver.focus();
			return false;
		}
	}
	if (trailer.value !='')
	{
		if( !isValidWebAddress(trailer.value))
		{
			alert('The trailer url is not a valid web address.');
			trailer.focus();
			return false;
		}
	}
	var wallpaper = document.getElementsByName('wallpaper[]');
	for (i=0;i<wallpaper.length;i++)
	{
		if(wallpaper[i].value != '')
		{
			if( !isValidWebAddress(wallpaper[i].value))
			{
				alert('The wallpaper url is not a valid web address.');
				wallpaper[i].focus();
				return false;
			}
		}
	}
	
	var gallery = document.getElementsByName('gallery[]');
	for (i=0;i<gallery.length;i++)
	{
		if(gallery[i].value != '')
		{
			if( !isValidWebAddress(gallery[i].value))
			{
				alert('The gallery url is not a valid web address.');
				gallery[i].focus();
				return false;
			}
		}
	}
	return true;

}

	/*function validationRule(frmname)
	{
	var ele_array = "";
	var element = "";
	var ele_value = "";
	var outer_cnt = "";
	var inner_cnt = "";
	var validate_val = "";
	var error_msg = "";
	var msg = "";
	var mandatory;

		if((document.getElementById('strValidationRule')) && (document.getElementById('strValidationRule').value != "")  && (document.getElementById('strValidationRule').value != 0 ))
		{

			ele_array =  document.getElementById('strValidationRule').value.split("|");
			for(outer_cnt=0; outer_cnt<ele_array.length; outer_cnt++)
			{
				element = ele_array[outer_cnt].split(":");
				ele_value = element[1].split("~");

				if( document.getElementById(element[0]))
				{
				   validate_val = document.getElementById(element[0]).value;

				   msg = "";
				   for(inner_cnt=0;inner_cnt<ele_value.length;inner_cnt++)
				   {
					ele_value_array =  ele_value[inner_cnt].split(",");
					if(ele_value_array.length>1)
					{
						ele_value[inner_cnt]=ele_value_array[0];
					}
					switch(ele_value[inner_cnt])
					{
						// for blank
						case '1':

							if( validate_val == "")
							{
								msg += " Please enter Mandatory fields.";
								mandatory='1';
							}
							break;
						// for string
						case '2':

							if( !isString(validate_val))
							{
								msg += " The value should be only alphabets."
							}
							break;
						// for numeric
						// only 0-9 digits
						case '3':
							if( !isNumeric(validate_val))
							{
								msg += " The value should be only numeric.";
							}
							break;
						// for image validation
						case '4':

							if (validate_val != '')
							{
								if( !isImage(validate_val))
								{
									msg +=" The value is empty or not valid image ";
									msg += " of type .gif, .jpg, .jpe, .jpeg.";
								}
							}
							break;
						// for valid web addtress
						case '5':

							if (validate_val != '')
							{
								if( !isValidWebAddress(validate_val))
								{
									msg +=" The value is empty or not a valid ";
									msg += " web address.";
								}
							}
							break;
						// check for special chars
						case '6':
							if( !isSpecialChar(validate_val))
							{
								msg +=" The value contains special chars. ";
							}

							break;
						// check for email
						case '7':
							if( !isValidEmail(validate_val))
							{
								msg +=" The value is not a valid email id. ";
							}
							break;
						case '8':
							if( !isValidIP(validate_val))
							{
								msg +=" The value is not a valid IP address. ";
							}

							break;
						case '9':
							if( !isValidPhoneNo(validate_val))
							{
	    							msg += " The phone number contains illegal characters.";
							}
							break;
						case '10':
							if( !isValidDate(validate_val))
							{
								msg +=" The value is not a valid date. ";
							}
							break;
						case '15':
							if( !validateFieldLength(ele_value_array[1],ele_value_array[2],validate_val))
							{
								msg +=" The value should be between " +ele_value_array[1] +' and '+ ele_value_array[2];
							}
							break;
						case '16':
							if( !isAlphaNumeric(validate_val))
							{
								msg += "The value should be alphanumeric. ";
							}
							break;
						case '17':
							if( !isValidDomainName(validate_val))
							{
								msg += "The value should be a valid domain name";
							}
							break;
						case '18':
							if( !isValidWebPath(validate_val))
							{
								msg += "The value should be a web path";
							}
							break;
						case '19':
							if( !isValidDomainName(validate_val) &&  !isValidIP(validate_val))
							{
								msg += " The value should be a valid domain name or valid IP.";
							}
							break;
						case '21':
							if( !isValidFileName(validate_val))
							{
								msg += "Please enter valid Filename";
							}

							break;
						case '22':
							if (validate_val ==0)
							{
								msg += "Please select any option";
							}
							break;
						case '33':
							if(validate_val != 'l, F j Y H:i')
							{
								msg += "<br> Please enter valid date format";
							}
							break;
						case '34':
							if (!checkFolderName(validate_val))
							{
								msg += "<br> No special characters allowed except # /";
							}
							break;
						default:

					}
					}
					if ( msg != "")
					{

						var label ='label_'+element[0];
						if(document.getElementById(label))
							var label_val = document.getElementById(label).innerHTML;
						else
							var label_val = element[0];
						error_msg += "<br/>\t"+label_val+":\t"+msg;
						if(mandatory=='1')
							error_msg='Please Enter all mandatory fields';

					}
				}
			}
		}
		if ( error_msg != "")
		{
			if(document.getElementById('divError'))
			{

				var span = '<br/>';
				document.getElementById('divError').innerHTML = "";
				document.getElementById('divError').innerHTML = span;
				document.getElementById('divError').innerHTML += error_msg;
				scrollTo(10,10);
				return false;
			}
		}
			return true;
	}*/

 /**
  *   this function checks for exceed of required no. of words
  *   @param string string
  *   @return num int
  *                 */
function countWords(string,num)
{
	str = value;
	wordcnt = str.split(' ').length;
	if ( str.length > 0 )
	wordcnt += str.split( '\n' ).length-2;
	if(wordcnt > (num-1))
	{
		return false;
	}
	return true;
}

 /**
  *   this function checks for the presence of number.
  *   @param sText string
  *   @return status int
  *                 */
function isNumeric(sText)
{
	var ValidChars = "0123456789";
	var IsNumber=true;
	var Char;

	for (i = 0; i < sText.length && IsNumber == true; i++)
	{
	               Char = sText.charAt(i);
	               if (ValidChars.indexOf(Char) == -1)
		       {
		                   IsNumber = false;
		       }
        }
        return IsNumber;
}
  /**
   *   this function checks for the presence or type of image.
   *   @param id string
   *   @return status int
   *                 */
   function isImage( val )
   {
           var ext = val;
           ext = ext.substring(ext.length-3,ext.length);
           ext = ext.toLowerCase();
           if ((ext != 'jpg') && (ext != 'gif') && (ext != 'jpe')&& (ext != 'jpeg') )
	           return false;
	   else
	           return true;
   }
 /**
  *  this function checks for the valid web address.
  *  @param address string
  *  @return status int
  */
  function isValidWebAddress( address )
  {
             var reWhiteSpace = new RegExp(/\s/);
             // Check for white space
             if (reWhiteSpace.test(address))
	     	 {
                      //alert("Please Check Your Fields For Spaces");
                      return false;
             }
			 var regexp = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
             return regexp.test(address);
   }

/**
  *  this function checks for the valid domain name.
  *  @param address string
  *  @return status int
  */
  function isValidDomainName( address )
  {
	var reWhiteSpace = new RegExp(/\s/);
	// Check for white space
	if (reWhiteSpace.test(address))
	{
		return false;
        }
 	objRegExp = /[a-zA-Z]+(\.|\-[a-z0-9-A-Z]+)*(\.[a-z]{2,3})/

	return objRegExp.test(address);
  }

/**
  *  this function checks for the valid webpath
  *  @param address string
  *  @return status int
  */
function isValidWebPath( address )
{
	var reWhiteSpace = new RegExp(/\s/);
	// Check for white space

	if (reWhiteSpace.test(address))
	{
		return false;

    }
    else
    {
    	var objRegExp = new RegExp(/\/$/);

		if(objRegExp.test(address))
			address=address;
		else
			address = address+'/';
    }

 	var objRegExp = new RegExp(/^(\/|[a-zA-Z])([a-zA-Z\d-_\.\/])*[a-zA-Z-\d]*\/$/);
	return objRegExp.test(address);

}
/**
  *  this function checks for the valid web address.
  *  @param address string
  *  @return status int
  */
 function isValidIP( val )
 {
		//var ipPattern = new RegExp(/[0-9]{3}\.[0-255]\.[0-255]\.[0-255]/);
		var regexIP = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;

		return regexIP.test(val);
 }
 /**
  *  this function checks for the valid web address.
  *  @param address string
  *  @return status int
  */
 function isString( val )
 {
	 var objRegExp=/^[A-Za-z\s]+$/; ///^[a-zA-Z]$/;
	 return objRegExp.test(val);
 }

/**
  *  this function checks for the alphanumeric value.
  *  @param address string
  *  @return status int
  */
 function isAlphaNumeric( val )
 {
	 var objRegExp=/^[a-zA-Z][A-Za-z0-9\s]+$/; ///^[a-zA-Z]$/;
	 return objRegExp.test(val);
 }
 /**
  *  this function checks for the valid web address.
  *  @param address string
  *  @return status int
  */
 function isSpecialChar( val )
 {
	 var objRegExp=/^[a-zA-Z][0-9]\.,$/;
	 return objRegExp.test(val);
 }
 /**
  *  this function checks for the valid web address.
  *  @param address string
  *  @return status int
  */
 function isValidEmail( val )
 {
		var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return emailPattern.test(val);
 }

 /**
  *  this function checks for the valid web address.
  *  @param address string
  *  @return status int
  */
 function isValidPhoneNo( val )
 {
	 /*
	 var stripped = val.replace(/[\(\)\.\-\ ]/g, '-');
	 //strip out acceptable non-numeric characters
	 if (isNaN(parseInt(stripped)))
		return false;
	 else
		return true;
		*/
	//Validating Phone Numbers (555) 555-5555  Or 555.555.5555  Or 555 555-5555
	 var pattern = /^\(?\s*\d{3}\s*[\)\.\-]?\s*\d{3}\s*[\-\.]?\s*\d{4}$/;
	 return pattern.test(val);
 }

 /**
  *  this function checks for the valid web address.
  *  @param address string
  *  @return status int
  */
 function isValidDate( val )
 {
		var datePattern =  /^((0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](?:19|20)\d\d)$/;
		return datePattern.test(val);
 }

/**
 * this function will check for valid folder name
 *
 *
 *
 */
 function checkFolderName ( val)
 {
 	 var objRegExp=/^[A-Za-z0-9#\/]+$/;
	 return objRegExp.test(val);
 }

 /**
  *  this function checks for the length of field.
  *  @param address string
  *  @return status int
  */
 function validateFieldLength(min, max, val)
 {
 	var length = val.length;

		if(length>=min && length<=max)
			return true;
		else
			return false;

 }


  /**
  *  this function checks basic filenaming conventions.
  *  @param address string
  *  @return status bool
  */
 function isValidFileName(val)
 {
 	 //var pattern = /^\(?\s*\d{3}\s*[\)\.\-]?\s*\d{3}\s*[\-\.]?\s*\d{4}$/;

 	 var pattern = /^[a-z]([a-z0-9-_]*[a-z0-9])?$/;
	 return pattern.test(val);
 }

//function for removing white spaces
function Trim(txt){
	if(txt.split(" ").join("").length == 0)
		return true;
	else
		return false;
}

//function to alert error messages for text fields
function retunMessage(message,fldId) {
	alert(message);
	document.getElementById(fldId).focus();
	return false;
}

//function to check empty text fields
function nullCheck(fldId,message) {
		var objValue = document.getElementById(fldId).value;
		if( (objValue == "") || (Trim(objValue))){
			retunMessage(message,fldId);
		}
		else{
			return true;
		}
}

//function to check length
function checkLen(len,fldId,message) {
	var objValue = document.getElementById(fldId).value;
	var length = objValue.length
	if(length < len)
		retunMessage(message,fldId);
	else
		return true;
}

function enableControl(field1, field2)
{

	if(field1.value==0){
		document.getElementById(field2).value = '';
		document.getElementById(field2).readOnly = true;
	}
	else {
		document.getElementById(field2).readOnly = false;
		document.getElementById(field2).focus();
	}
}

function enableDebutControl(field1, field2)
{
	
	if(field1.value != '' && field1.value != 0)
	{
		document.getElementById(field2).readOnly = false;
		document.getElementById(field2).focus();
	}
	else
	{
		document.getElementById(field2).value = '';
		document.getElementById(field2).readOnly = true;
	}
}
function enableSelectControl(field1, field2)
{

	if(field1.value==0){
		document.getElementById(field2).value = '';
		document.getElementById(field2).setAttribute("disabled", "disabled");
	}
	else {
		document.getElementById(field2).removeAttribute("disabled");
		document.getElementById(field2).focus();
	}
}
function addslashes(str) 
{
	str=str.replace(/\'/g,'\\\'');
	str=str.replace(/\"/g,'\\"');
	str=str.replace(/\\/g,'\\\\');
	str=str.replace(/\0/g,'\\0');
	return str;
}
function stripslashes(str) 
{
	str=str.replace(/\\'/g,'\'');
	str=str.replace(/\\"/g,'"');
	str=str.replace(/\\\\/g,'\\');
	str=str.replace(/\\0/g,'\0');
	return str;
}

function toggleDiv(mainDiv, focusId, msgDiv)
{
	if(document.getElementById(mainDiv).style.display == 'none')
	{
		document.getElementById(mainDiv).style.display = 'block';
		
		if (focusId != undefined)
		{
		document.getElementById(focusId).focus();
		document.getElementById(focusId).value = ''; 		
		}
	}
	else
	{
		document.getElementById(mainDiv).style.display = 'none';
	}
	
	if (msgDiv != undefined)
	{
		document.getElementById(msgDiv).innerHTML = '';
	}
}

function trimText (str)
{
	var str = str.replace(/^\s\s*/, ''),
	ws = /\s/,
	i = str.length;
	while (ws.test(str.charAt(--i)));
	return str.slice(0, i + 1);
}

function googleTransliterate(content,current_lang,target_field) 
{
	google.language.transliterate(content, "en", current_lang,function(result)
	{
		if (!result.error)
		{
			if (result.transliterations && result.transliterations.length > 0 && result.transliterations[0].transliteratedWords.length > 0) 
			{
				var str = '';
				for (j=0;j<result.transliterations.length;j++)
				{
					if(result.transliterations[j].transliteratedWords[0] != undefined)
					{
						str += result.transliterations[j].transliteratedWords[0] + ' ';
					}
					else
					{
						str += result.transliterations[j].sourceWord + ' ';
					}
				}
				str = trimText(str);
				document.getElementById(target_field).value = str;
			}
		}
	});
}



























/* Tv show functions Started */
function validationTvRule(frmname)
{
	var show_name = document.tvshow.show_name;
	var language = document.tvshow.language;
	var start_month = document.tvshow.start_month;
	var start_year = document.tvshow.start_year;
	var end_month = document.tvshow.end_month;
	var end_year = document.tvshow.end_year;
	var genre = document.tvshow.genre;
	dirflag=false;
	
	var director1 = document.getElementsByName('director[]');
	
	for (i=0;i<director1.length;i++)
	{
		if(director1[i].value != '')
		{
			dirflag=true;
			break;
		}
	}
	var poster =  document.tvshow.poster;
	if (language.value ==0)
	{
		alert('Please select language');
		language.focus();
		return false;
	}
	if (show_name.value == '')
	{
		alert('Please enter show name');
		show_name.focus();
		return false;
	}
	if (start_month.value ==0)
	{
		alert('Please select start month');
		start_month.focus();
		return false;
	}
	if (start_year.value ==0)
	{
		alert('Please select start year');
		start_year.focus();
		return false;
	}
/*	if (end_month.value ==0)
	{
		alert('Please select end month');
		end_month.focus();
		return false;
	}
	if (end_year.value ==0)
	{
		alert('Please select end year');
		end_year.focus();
		return false;
	}
*/
	if (genre.value ==0)
	{
		alert('Please select genre');
		genre.focus();
		return false;
	}
/*	if (dirflag != true)
	{
		alert('Please enter director details');
		//director.focus();
		return false;
	}
*/
	if( !validateFieldLength(1,100,show_name.value))
	{
		alert('The movie name length should be between 1 and 100');
		show_name.focus();
		return false;
	}
	if (poster.value !='')
	{
		if( !isImage(poster.value))
		{
			alert ('The poster is not valid image  of type .gif, .jpg, .jpe, .jpeg.');
			poster.focus();
			return false;
		}
	}
	var wallpaper = document.getElementsByName('wallpaper[]');
	for (i=0;i<wallpaper.length;i++)
	{
		if(wallpaper[i].value != '')
		{
			if( !isValidWebAddress(wallpaper[i].value))
			{
				alert('The wallpaper url is not a valid web address.');
				wallpaper[i].focus();
				return false;
			}
		}
	}
	
	var gallery = document.getElementsByName('gallery[]');
	for (i=0;i<gallery.length;i++)
	{
		if(gallery[i].value != '')
		{
			if( !isValidWebAddress(gallery[i].value))
			{
				alert('The gallery url is not a valid web address.');
				gallery[i].focus();
				return false;
			}
		}
	}
	return true;

}
/* Tv Show functions Ended */
