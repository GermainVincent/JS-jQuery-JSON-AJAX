 
 function voir(){
      console.log($this);
        $(this).next().show();/*transformer .pannel-body en le pannel body juste apres $this*/
    };

$( document ).ready(function() {
    console.log( "ready!" );

    var starWarsPeopleUrl = "http://swapi.co/api/people/";
    var starWarsFilmsUrl = "http://swapi.co/api/films/";
    var starWarsPlanetsUrl = "http://swapi.co/api/planets/";
    var starWarsWrongUrl = "http://swapi.co/api/frefe/";


   


    // function appel API
    function appelAjax(url){
      $.ajax({
        url: url,
        typeData:"json",
        beforeSend: function(){
          console.log("request will be send soon");
        },
        success: function(result, status){
          console.log("request succeeds");

          /*Afficher le resultat de la requete*/
          console.log(result);
          /*fin*/

          /*1.3 Afficher ces données dans le navigateur sans mise en page précise*/

          //document.write(result);

          /*fin*/
          

        },
        error : function(resultat, statut, erreur){
          console.log("the request fails");
        },
        complete : function(resultat, statut){
          console.log("request finishes, whether in failure or success");
        }
      });
    }

    /* section 1 */

//    appelAjax('http://swapi.co/api/people/');
//    appelAjax('http://swapi.co/api/films/');
//    appelAjax('http://swapi.co/api/planets/');
//    appelAjax('http://swapi.co/api/frefe/');

    /*
     * Observations :frefre renvoie GET http://swapi.co/api/frefe/ 404 (Not Found) donc il n'y as donc pas de donnée
     */

    /* section 2 */



    $.ajax({
        url: starWarsFilmsUrl ,
        typeData:"json",
        success: function(result, status){
          console.log("request succeeds");
          /*pour la liste*/
          var liste_films = [];
          /*pour le pannel*/
          var liste_films2 = [];
           $("#result").html("<ul id='result_list' class='list-group'></ul>");
          console.log(result);
          
          $.each(result.results, function(key,val){ 
          console.log(val.planets)
          liste_films.push(/*"<li>atchoum</li>"*/'<li class="list-group-item">'+val.title+" "+val.director+'<span class="badge">'+/*val.episode_id*/val.planets.length+'</span></li>');
          });
          //console.log(result.results.length);



            $("#result_list").html(liste_films);
            //console.log(result.results[i].planets.length);
          for (i = 0; i < result.results.length; i++) {
            liste_films.push("<li class='list-group-item'>"+result.results[i].title+' '+result.results[i].director+'<span class="badge">'+result.results[i].planets.length,episode_id+'</span></li>');
          }
          
          


    /* section 3 */
        for (j = 0; j < result.results.length; j++) {

            $("#result").append("<div class='panel panel-default'>\
                                <div class='panel-heading' href='#'>"
                                  +result.results[j].title
                                  +"</div>\
                                <div class='pannel-body'>"+result.results[j].opening_crawl+'</div>\
                              </div>');
            $('.pannel-body').hide();

          }

        $('.panel-heading').click(function(){
          $(this).next().show();
        });
        
          

        },
        error : function(resultat, statut, erreur){
          console.log("the request fails");
        },
      });

    
    

    /* section 4 */

    $.ajax({
        url: "http://www.anapioficeandfire.com/api/characters" ,
        typeData:"json",
        success: function(result, status){

          var liste_cara_got =[];
          for (k = 0; k < result.length; k++) {
            
            var nombre_de_saison = result[k].tvSeries.length;
            var derniere_saison = result[k].tvSeries[nombre_de_saison-1];
            
            liste_cara_got.push("<div class='panel panel-default'>\
                                  <div class='panel-heading' type='button' href='#' onclick='voir($this)'>"
                                  +result[k].name+" "+result[k].aliases
                                  +"</div>\
                                <div class='pannel-body' style='visibility : hidden'>"+derniere_saison+'</div>\
                              </div>');




            
            $("#result_list").html(liste_cara_got);
            console.log(result[k].name+result[k].aliases+derniere_saison);
            console.log(derniere_saison);
            console.log(result[k].tvSeries[0]);

          }
          

        },

        error : function(resultat, statut, erreur){
        console.log("the request fails");
        },

    });



});
