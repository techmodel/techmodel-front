export type Settings = {
    backendUrl: string;
    loginRoute: string;
}

export enum Environment {
    production = 'production',
    preprod = 'preprod',
    dev = 'dev'
};
