import User from '../modeles/user';

class UserController
{
    static async list(request, response)
    {
        let status = 200;
        let body = {};
        try{
            let myUsers = await User.find().populate('city');
            body = {myUsers, 'message': 'List of Users'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
    
    static async getUser(request, response)
    {
        let status = 200;
        let body = {};
        try{
            let myUser = await User.findOne(
            {
                _id: request.params.id
            }).populate('city');
            body = {myUser, 'message': 'User find'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
	
    static async createUser(request, response)
    {
        let status = 200;
        let body = {};
        try{
            //Test d'unicité sur le mail
            let testUser = await User.findOne(
            {
                mail: request.body.mail
            });
            if(testUser !== null)
            {
                throw "Mail already used";
            }
            let myUser = await User.create(
            {
                mail: request.body.mail,
                pwd: request.body.pwd,
                name: request.body.name,
                surname: request.body.surname,
                adress: request.body.adress,
                city: request.body.city
            });
            myUser ? delete myUser.pwd : null;
            body = {myUser, 'message': 'User created'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
    
    static async deleteUser(request, response)
    {
        let status = 200;
        let body = {};
        try{
            let id = request.params.id;
            await User.deleteOne({_id: id});
            body = {'message': 'User deleted'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
	
    static async updateUser(request, response)
    {
        let status = 200;
        let body = {};
        try{
            await User.update({_id: request.params.id},
            {
                mail: request.body.mail,
                pwd: request.body.pwd,
                name: request.body.name,
                surname: request.body.surname,
                adress: request.body.adress,
                city: request.body.city
            });
            body = {'message': 'User updated'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
    
    static async connection(request, response)
    {
        let status = 200;
        let body = {};
        try{
            let myUser = await User.findOne(
            {
                mail: request.body.mail,
                pwd: request.body.pwd
            });
            body = {myUser, 'message': 'User founded'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
    
    static async getProducers(request, response)
    {
        let status = 200;
        let body = {};
        try{
            let myUser = await User.find(
            {
                type: "producer"
            });
            body = {myUser, 'message': 'User founded'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
}

export default UserController;