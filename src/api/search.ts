import { ApiFilter } from '../components/FilterBar/FilterRow/filterInputs/hooks';
import env from '../env';


export async function searchEntity(entityType: string, filters: ApiFilter<any>[]) {
    const response = await fetch(`${env.apiUrl}/search/${entityType}`, {
        method: 'POST',
        body: JSON.stringify({filters}),
    });
    return (await response.json()).results?.map((result: any) => ({
        ...result, // TODO: Transform result
    })) ?? [];
}
