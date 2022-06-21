import { Environment } from 'types/settings';
import defaultSettings from './default';
import devSettings from './dev';
import preprodSettings from './preprod';
import productionSettings from './production';

const env = process.env.REACT_APP_ENVIRONMENT ?? 'dev';

if (!(env in Environment)) {
    throw new Error(`Invalid environment: '${env}'`);
}

const settings = (() => {
    switch(env) {
        case Environment.dev: {
            return devSettings;
        }
        case Environment.preprod: {
            return preprodSettings;
        }
        case Environment.production: {
            return productionSettings;
        }
        default: {
            return defaultSettings;
        }
    }
})()

export default settings;
