#!/usr/bin/env node
/*
* This program and the accompanying materials are made available under the terms of the
* Eclipse Public License v2.0 which accompanies this distribution, and is available at
* https://www.eclipse.org/legal/epl-v20.html
*
* SPDX-License-Identifier: EPL-2.0
*
* Copyright Contributors to the Zowe Project.
*
*/

import { IImperativeConfig, Imperative } from "@zowe/imperative";
import { inspect } from "util";

const config: IImperativeConfig = {
    configurationModule: __dirname + "/imperative"
};

(async () => {
    try {
        await Imperative.init(config);
        Imperative.api.appLogger.trace("Init was successful");

        Imperative.parse();
    } catch (initErr) {
        Imperative.console.fatal("Error initializing WaniKani CLI:\n "
            + inspect(initErr));
        process.exit(1);
    }
})();