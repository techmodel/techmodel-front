import { ApiFilter } from '../components/FilterBar/FilterRow/filterInputs/hooks';
import env from '../env';

export async function searchEntity(entityType: string, filters: ApiFilter<any>[]) {
  try {
    const response = await fetch(`${env.backend_baseUrl}/search/${entityType}`, {
      method: 'POST',
      body: JSON.stringify({ filters }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const transformed = await response.json();
    return transformed.results;
    // return (
    //   (await response.json()).results?.map((result: any) => {
    //     console.log('result', result);
    //     return {
    //       ...result, // TODO: Transform result
    //     };
    //   }) ?? []
    // );
  } catch (err: any) {
    console.log('error', err);
  }
}
