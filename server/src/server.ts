import express    from 'express';
import subdomain  from 'express-subdomain';
import cors       from 'cors';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(subdomain('api', routes));

app.listen(3333);