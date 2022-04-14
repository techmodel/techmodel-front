export default {
    apiUrl: process.env.API_URL ?? 'localhost:8080',
} as Partial<Environment>;


export interface Environment {
    apiUrl: string,
}