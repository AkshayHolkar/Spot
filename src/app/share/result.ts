import {dataType} from './movie'

export interface resultType
{
    page: number,
    results: dataType[],
    total_pages: number,
    total_results: number

}