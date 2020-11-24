import mongoose from 'mongoose';

class DataBase{
    constructor(){
        this,this.mongoDataBase();
    }
    mongoDataBase(){
        mongoose.connect('mongodb://localhost/celke', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=>{
    console.log("Conexao realizada com sucesso")
}).catch((erro)=>{
    console.log("Conexao com MongoDb não foi realizada com sucesso: " + erro)
});
    }
}


export default new DataBase();