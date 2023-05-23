import { Application, config } from "./depts.ts";
import { usersRouter } from "./routes/users.routes.ts";
import { productRouter } from "./routes/products.routes.ts";

const {PORT} = config();

const app = new Application();
const port = parseInt(PORT);

//inicializamos la app creando la ruta raiz
app.use(usersRouter.routes());
app.use(productRouter.routes());

app.use((ctx)=>{
    ctx.response.body="Bienvenido al servidor de oak";
});

app.listen({port});
console.log(`Server is listening on port ${port}`);