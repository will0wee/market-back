import Order from '../modeles/order';

class OrderController
{
    static async list(request, response)
    {
        let status = 200;
        let body = {};
        try{
            let myOrders = await Order.find();
            body = {myOrders, 'message': 'List of Users'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
    
    static async listFromBuyer(request, response)
    {
        let status = 200;
        let body = {};
        try{
            let myOrders = await Order.find({owner: this.params.id});
            body = {myOrders, 'message': 'List of orders from user'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
    
    static async getOrder(request, response)
    {
        let status = 200;
        let body = {};
        try{
            let myOrder = await Order.findOne(
            {
                _id: request.params.id
            }).populate('Product');
            body = {myOrder, 'message': 'Order find'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
	
    static async createOrder(request, response)
    {
        let status = 200;
        let body = {};
        try{
            let myOrder = await Order.create(
            {
                content: this.body.content,
                price: this.body.price,
                owner: this.body.owner
            });
            body = {myOrder, 'message': 'Order created'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
    
    static async deleteOrder(request, response)
    {
        let status = 200;
        let body = {};
        try{
            let id = request.params.id;
            await Order.deleteOne({_id: id});
            body = {'message': 'Order deleted'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
	
    static async updateOrder(request, response)
    {
        let status = 200;
        let body = {};
        try{
            await Order.update({_id: request.params.id},
            {
                content: this.body.content,
                price: this.body.price,
                owner: this.body.owner
            });
            body = {'message': 'Order updated'};
        }
        catch(error) {
            status = 500;
            body = {'message': error.message};
        }
        return response.status(status).json(body);
    }
}

export default OrderController;