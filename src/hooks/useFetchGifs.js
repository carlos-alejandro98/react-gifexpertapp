import { useState, useEffect } from 'react';
import { getGifts } from '../helpers/getGifs'

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => { // Se hace el efecto para que solo se dispare una vez, cuando cambia el 'category'

        getGifts(category) // hace la petición http
            .then(imgs => { // Obtenemos las imagenes


                setState({     // cambian los datos
                    data: imgs,
                    loading: false
                });



            });

    }, [category])

    return state;

}