import * as path from "path";

// WIP Imperative version of Brightside
import { IImperativeConfig } from "@zowe/imperative";
import { CommonOptions } from "./common-options";

const config: IImperativeConfig = {
    productDisplayName: 'WaniKani CLI',
    commandModuleGlobs: [
        "list/list.definition!(.d).*s",
    ],
    rootCommandDescription: 'Prototype CLI for WaniKani the Japanese language learning site.',
    defaultHome: '~/.wanikani-cli',
    envVariablePrefix: 'WANIKANI_CLI',
    primaryTextColor: 'magenta',
    logging: {
        appLogging: {
            logFile: 'wanikani-cli.log'
        }
    },
    profiles: [
        {
            type: "wanikani",
            schema: {
                type: "object",
                title: "WaniKani Profile",
                description: "WaniKani Profile",
                properties: {
                    token: {
                        type: "string",
                        optionDefinition: CommonOptions.TOKEN_OPTION,
                        secure: true
                    }
                },
                required: ["token"]
            },
            createProfileExamples: [
                {
                    options: "myprofile --host sshhost --user ibmuser --password myp4ss",
                    description: "Create a ssh profile called 'ssh111' to connect to z/OS SSH server at host 'zos123' and default port 22"
                }
            ]
        }

    ]
};
module.exports = config;