import {ICommandOptionDefinition} from '@zowe/imperative';

export class CommonOptions{

    public static TOKEN_OPTION: ICommandOptionDefinition = {
        name: "token",
        description: "The API token used to authenticate you to the WaniKani REST API.",
        type: "string",
        required: true
    }
}