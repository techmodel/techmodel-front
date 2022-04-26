export default {
    backend_baseUrl: process.env.API_URL ?? 'localhost:8080',
} as Partial<Environment>;


export interface Environment {
    backend_baseUrl: string,
}