import Category from '../modeles/category';

class CategoryController
{
    static async list(request, response)
    {
        let status = 200;
        let body = {};
        try{
            let myCategories = await Category.find();
            body = {myCategories, 'message': 'List of Categories'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
    
    static async getCategory(request, response)
    {
        let status = 200;
        let body = {};
        try{
            let myCategory = await Category.findOne(
            {
                _id: request.params.id
            });
            body = {myCategory, 'message': 'Category find'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
	
    // TODO : faire l'objet order
    static async createCategory(request, response)
    {
        let status = 200;
        let body = {};
        try{
            let myCategory = await Category.create(
            {
                name: request.body.name,
            });
            body = {myCategory, 'message': 'Category created'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
    
    static async deleteCategory(request, response)
    {
        let status = 200;
        let body = {};
        try{
            let id = request.params.id;
            await Category.deleteOne({_id: id});
            body = {'message': 'Category deleted'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
	
    // TODO : faire l'objet order
    static async updateCategory(request, response)
    {
        let status = 200;
        let body = {};
        try{
            await Category.update({_id: request.params.id},
            {
                _id: request.params.id,
            });
            body = {'message': 'Category updated'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
}

export default CategoryController;