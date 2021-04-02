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

import { ICommandDefinition } from "@zowe/imperative";
import {CommonOptions} from "../common-options";
import { ListReviewsDefinition } from "./reviews/list-reviews.definition";

/**
 * This object defines the top level command group for zosfiles. This is not
 * something that is intended to be used outside of this npm package.
 *
 * @private
 */
const definition: ICommandDefinition = {
    name: "list",
    aliases: ["ls"],
    type: "group",
    summary: "List different details about your studies",
    description: "List different details about your studies",
    children: [
        ListReviewsDefinition
    ],
    passOn: [
      {
          property: "options",
          value: [
              CommonOptions.TOKEN_OPTION
          ],
          ignoreNodes: [{
              type: 'group' // don't put the token option on commands that only have children
          }]
      }
    ]
};

export = definition;