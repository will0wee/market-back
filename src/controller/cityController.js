import City from '../modeles/city';

class CityController
{
    static async list(request, response)
    {
        let status = 200;
        let body = {};
        try{
            let myCities = await City.find();
            body = {myCities, 'message': 'List of Cities'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
    
    static async getCity(request, response)
    {
        let status = 200;
        let body = {};
        try{
            let myCity = await City.findOne(
            {
                _id: request.params.id
            });
            body = {myCity, 'message': 'City find'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
	
    // TODO : faire l'objet order
    static async createCity(request, response)
    {
        let status = 200;
        let body = {};
        try{
            let myCity = await City.create(
            {
                name: request.body.name
            });
            body = {myCity, 'message': 'City created'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
    
    static async deleteCity(request, response)
    {
        let status = 200;
        let body = {};
        try{
            let id = request.params.id;
            await City.deleteOne({_id: id});
            body = {'message': 'City deleted'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
	
    // TODO : faire l'objet order
    static async updateCity(request, response)
    {
        let status = 200;
        let body = {};
        try{
            await City.update({_id: request.params.id},
            {
                _id: request.params.id,
                name: request.body.name
            });
            body = {'message': 'City updated'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
}

export default CityController;