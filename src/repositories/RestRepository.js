import Repository, { baseUrl,baseUrlApi} from './Repository';
class RestRepository {
    async get(endPoint,params){
        const reponse = await Repository.get(`${baseUrlApi}${endPoint}`,{params:params})
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return {error : error};
            });
        return reponse;
    }
    async post(endPoint,data){
        const reponse = await Repository.post(`${baseUrlApi}${endPoint}`,data)
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                return {error : error};
            });
        return reponse;
    }
}
export default new RestRepository();