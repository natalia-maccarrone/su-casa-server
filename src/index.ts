import config from './config';
import { App } from './App';

const application = new App();

application.start(+config.port);
