import type { Plugin } from "@moxie-protocol/core";
import { transferAction } from "./actions/transferAction";
import { balanceAction } from "./actions/balanceAction";

const klerosJurorPlugin: Plugin = {
    name: "kleros-juror",
    description: "Execute sample onchain actions",
    actions: [],
    providers: [],
    evaluators: [],
    services: [],
    clients: [],
};

export default klerosJurorPlugin;
