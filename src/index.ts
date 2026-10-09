import app from "./app.js"
import { PORT } from "./utils/env.js";


app.listen(PORT, ()=> {
    console.log(`Server running at http://localhost:${PORT}`);
})