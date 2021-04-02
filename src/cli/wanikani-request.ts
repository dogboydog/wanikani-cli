import axios, { AxiosResponse } from 'axios';
import {ICommandArguments} from '@zowe/imperative';
import {RequestArgs} from '../apis/base';
export class WaniKaniRequest{

    public static async makeRequest(request: RequestArgs, args: ICommandArguments): Promise<AxiosResponse>{
        const client = axios.create({
            baseURL:  'https://api.wanikani.com/v2/' ,
            timeout: 10000,
            headers: {'Authorization': `Bearer ${args.token}`}
          });
        return client.request(request);
    }
}