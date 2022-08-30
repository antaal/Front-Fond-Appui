import axios from 'axios';

const url = "http://127.0.0.1:8000/api";


export const postSecteur = async (secteur) => {
    const response= await axios.post(`${url}/secteurs`, secteur)
    return response.data;
}

export const postOffre = async (offre) => {
    const response= await axios.post(`${url}/offres`, offre)
    return response.data;
}
        
export const postResponsable =async (responsable) => {
    const response = await axios.post(`${url}/responsables`, responsable)
    return response.data;
}
// export const postCommune =async (commune) => {
//     const response = await axios.post(`${url}/communes`, commune)
//     return response.data;
// }
export const postProjet = async (projet) => {
    const response = await axios.post(`${url}/projets`, projet)
    return response.data;
}
////////////////////////////////////////////////requete Get////////////////////////////////////
export const getAllOffres = async () => {
    const res= await axios.get(`${url}/offres`)
    return res.data;
}

export const getAllQuartiers = async () => {
    return await axios.get(`${url}/quartiers`).then(response => {
        console.log(response.data);
        return response.data;
    });
}

export const getAllCommunes = async () => {
    return await axios.get(`${url}/communes`).then(response => {
    return response.data;
    });
}

export const getAllSecteurs = async () => {
    return await axios.get(`${url}/secteurs`).then(response => {
    return response.data;
    });
}

export const getAllProjets = async () => {
    return await axios.get(`${url}/projets`).then(response => {
    return response.data;
    });
}
////////////////////////////////////////get by id/////////////////

export const getProjetById = async (id) => {
    return await axios.get(`${url}/projets/${id}`)
    .then(response => {
        return response.data;
    });

}

export const getOffreById = async (id) => {
    const response = await axios.get(`${url}/offres/${id}`)
        return response.data;
    

}





