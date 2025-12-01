(() => {
    // función para obtener información de una película por Id
    function getMovieById( id: string ) {
        console.log({ id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( id: string ) {
        console.log({ id });
    }
    
    // Crear una película
    interface Movie {
        cast:        string[];
        description: string;
        rating:      number;
        title:       string;
    }
    function createMovie(movie: Movie ) {
        console.log(movie);
    }

    // Crea un nuevo actor
    interface Actor {
        birthdate: Date;
        fullName: string;
    }
    function createActor( actor: Actor ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( actor.fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;
    }
})();