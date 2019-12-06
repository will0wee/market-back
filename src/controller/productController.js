import Product from '../modeles/product';

class ProductController
{
    static async list(request, response)
    {
        let status = 200;
        let body = {};
        try{
            let myProducts = await Product.find().populate('category').populate('city').populate('owner');
            body = {myProducts, 'message': 'List of products'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
    
    static async getProduct(request, response)
    {
        let status = 200;
        let body = {};
        try{
            let myProduct = await Product.findOne(
            {
                _id: request.params.id
            }).populate('category').populate('city').populate('owner');
            body = {myProduct, 'message': 'Product find'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
	
    static async createProduct(request, response)
    {
        let status = 200;
        let body = {};
        try{
            let myProduct = await Product.create(
            {
                name: request.body.name,
                price: request.body.price,
                sellingType: request.body.sellingType,
                category: request.body.category,
                city: request.body.city,
                owner: request.body.owner
            });
            body = {myProduct, 'message': 'Product created'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
    
    static async deleteProduct(request, response)
    {
        let status = 200;
        let body = {};
        try{
            let id = request.params.id;
            await Product.deleteOne({_id:id});
            body = {'message': 'Product deleted'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
	
    static async updateProduct(request, response)
    {
        let status = 200;
        let body = {};
        try{
            await Product.update({_id: request.params.id},
            {
                name: request.body.name,
                price: request.body.price,
                sellingType: request.body.sellingType,
                description: request.body.description,
                category: request.body.category,
                city: request.body.city,
                owner: request.body.owner
            });
            body = {'message': 'Product updated'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
}

export default ProductController;