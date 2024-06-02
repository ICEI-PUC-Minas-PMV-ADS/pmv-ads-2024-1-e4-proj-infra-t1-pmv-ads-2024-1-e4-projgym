const URL = 'http://localhost:3333';

const sendRequest = async (url, method, body, headers) => {
    let init = {
        method,
        headers: {'Content-Type': "application/json"}
    }

    if(method !== "GET"){
        init.body = body;
    }

    try {
        const rawResponse = await fetch(url, init);
        const res = await rawResponse.json();
        if(rawResponse.ok){
            return res;
        }

        throw new Error(res);

    } catch(e) {
        throw e
    }

}

// #region Exercicios

const getAllExercicio = async () => {
    try{
        const res = await sendRequest(`${URL}/exercises`, "GET");
        return res

    } catch(e) {
        throw e;
    }
}

const getExercicio = async (id) => {
    try{
        const res = await sendRequest(`${URL}/exercises/${id}`, "GET");
        return res

    } catch(e) {
        throw e;
    }
}

const createExercicio = async (body) => {
    try{
        const res = await sendRequest(`${URL}/exercises`, "POST", {
            name: body.name,
            series: body.series,
            repetitions: body.repetitions,
            demo: body.demo,
            thumb: body.thumb,
        });
        return res

    } catch(e) {
        throw e;
    }
}

const deleteExercicio = async (id) => {
    try{
        const res = await sendRequest(`${URL}/exercises/${id}`, "DELETE");
        return res

    } catch(e) {
        throw e;
    }
}

const updateExercicio = async (id, body) => {
    try{
        const res = await sendRequest(`${URL}/exercises/${id}`, "PUT", {
            name: body.name,
            series: body.series,
            repetitions: body.repetitions,
            demo: body.demo,
            thumb: body.thumb,
        });
        return res

    } catch(e) {
        throw e;
    }
}

// #endregion


// #region Exercicios Grupos

const getAllExercicioGrupo = async () => {
    try{
        const res = await sendRequest(`${URL}/exer_grupo`, "GET");
        return res

    } catch(e) {
        throw e;
    }
}

const getExercicioGrupo = async (id) => {
    try{
        const res = await sendRequest(`${URL}/exer_grupo/${id}`, "GET");
        return res

    } catch(e) {
        throw e;
    }
}

const createExercicioGrupo = async (body) => {
    try{
        const res = await sendRequest(`${URL}/exer_grupo`, "POST", {
            grupo_id: body.grupo_id,
            exer_id: body.exer_id,
        });
        return res

    } catch(e) {
        throw e;
    }
}

const deleteExercicioGrupo = async (id) => {
    try{
        const res = await sendRequest(`${URL}/exer_grupo/${id}`, "DELETE");
        return res

    } catch(e) {
        throw e;
    }
}

const updateExercicioGrupo = async (id, body) => {
    try{
        const res = await sendRequest(`${URL}/exer_grupo/${id}`, "PUT", {
            grupo_id: body.grupo_id,
            exer_id: body.exer_id,
        });
        return res

    } catch(e) {
        throw e;
    }
}

// #endregion


// #region Grupos

const getAllGrupo = async () => {
    try{
        const res = await sendRequest(`${URL}/grupo`, "GET");
        return res

    } catch(e) {
        throw e;
    }
}

const getGrupo = async (id) => {
    try{
        const res = await sendRequest(`${URL}/grupo/${id}`, "GET");
        return res

    } catch(e) {
        throw e;
    }
}

const createGrupo = async (body) => {
    try{
        const res = await sendRequest(`${URL}/grupo`, "POST", {
            nome: body.nome,
            user_id: body.user_id,
        });
        return res

    } catch(e) {
        throw e;
    }
}

const deleteGrupo = async (id) => {
    try{
        const res = await sendRequest(`${URL}/grupo/${id}`, "DELETE");
        return res

    } catch(e) {
        throw e;
    }
}

const updateGrupo = async (id, body) => {
    try{
        const res = await sendRequest(`${URL}/grupo/${id}`, "PUT", {
            nome: body.nome,
            user_id: body.user_id,
        });
        return res

    } catch(e) {
        throw e;
    }
}

// #endregion


// #region Usuario

const getUser = async (id) => {
    try{
        const res = await sendRequest(`${URL}/${id}`, "GET");
        return res

    } catch(e) {
        throw e;
    }
}

const checkUser = async (id) => {
    try{
        const res = await sendRequest(`${URL}/checkuser`, "GET");
        return res

    } catch(e) {
        throw e;
    }
}

const createUser = async (body) => {
    try{
        const res = await sendRequest(`${URL}/register`, "POST", { 
            name: body.name,
            email: body.email,
            password: body.password, 
            confirmPassword: body.confirmPassword
        });
        return res

    } catch(e) {
        throw e;
    }
}

const login = async (body) => {
    try{
        const res = await sendRequest(`${URL}/login`, "POST", { 
            email: body.email,
            password: body.password, 
        });
        return res

    } catch(e) {
        throw e;
    }
}

const updateUser = async (id, body) => {
    try{
        const res = await sendRequest(`${URL}/edit/${id}`, "PUT", {
            name: body.name,
            email: body.email,
            password: body.password, 
            confirmPassword: body.confirmPassword
        });
        return res

    } catch(e) {
        throw e;
    }
}

// #endregion


// #region Historico

const getAllHitorico = async (id_user) => {
    try{
        const res = await sendRequest(`${URL}/${id_user}/historico`, "GET");
        return res

    } catch(e) {
        throw e;
    }
}

const createHistorico = async (body) => {
    try{
        const res = await sendRequest(`${URL}/historico`, "POST", {
            exer_id: body.exer_id,
            user_id: body.user_id 
        });
        return res

    } catch(e) {
        throw e;
    }
}

const deleteHistorico = async (user_id, hist_id) => {
    try{
        const res = await sendRequest(`${URL}/${user_id}/historico/${hist_id}`, "DELETE");
        return res

    } catch(e) {
        throw e;
    }
}

// #endregion




export {
    getAllExercicio,
    getExercicio
}