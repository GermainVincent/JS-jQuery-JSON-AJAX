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
          console.log(result);
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
appelAjax('http://swapi.co/api/people/');
appelAjax('http://swapi.co/api/films/');
appelAjax('http://swapi.co/api/planets/');
appelAjax('http://swapi.co/api/frefe/');
    /*
     * Observations :
     */

    /* section 2 */


    /* section 3 */


    /* section 4 */



});