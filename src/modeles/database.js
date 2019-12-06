import {connect} from 'mongoose';

const connexion = () => 
{
    return connect(`mongodb://localhost:27017/market`,
    {useNewUrlParser: true, useUnifiedTopology: true});
}

export default connexion;