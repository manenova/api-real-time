import express, {Request, Response} from 'express';
import settings from './settings';

//Express app
const app = express();

//Mocks
const MockUsers: any = [
    {username:'norieemm@', email:"norieemm@gmail.com",fullName:"Mane nova"},
    {username:'norieemm@', email:"norieemm@gmail.com",fullName:"Mane nova"},
    {username:'norieemm@', email:"norieemm@gmail.com",fullName:"Mane nova"}
]
//Serialization JSON
app.use(express.json());

//Rutas de la API
app.get('/testing',(req: Request, res: Response )=>{
    res.status(200).json({
        status: 'success',
        code: 200,
        environment: settings.api.environment,
        msg:'API funcionado de forma correcta'
    })
});

app.get('/getUser/:userName',(req: Request, res: Response)=>{
   
    const { userName } =  req.params

    res.status(200).json({
        userName
    });
});


app.get('/getUsers',(req: Request, res: Response)=>{
    res.status(200).json(MockUsers);
});

app.post('/addUser',(req: Request, res: Response)=>{
    const {
        userName,
        password,
        email,
        fullName
    } = req.body;

    res.status(201).json({
        userName,
        password,
        email,
        fullName,
        status: 'success',
        msj: 'Registro insertado de forma correcta en la Base de datos !!!'
    })
})

app.listen(settings.api.port,()=>{
    console.log(`Servidor Express corriendo ${settings.api.port}`);
});