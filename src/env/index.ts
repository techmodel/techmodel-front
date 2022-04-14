import local from "./local";
import staging from "./staging";
import prod from "./prod";
import { Environment } from "./default";


const configurations: Record<string, Environment> = {
    local,
    staging,
    prod,
};

export default configurations[process.env.ENVIRONMENT || 'local'];
