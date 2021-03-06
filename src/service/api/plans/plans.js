import httpRequestHandler from "@/service/api/httpRequestHandler";

export const get = async () => {
    const URL = `ActivePlan?subDomain=sabz&IsSuggestionForm=false&insurancePolicyType=13`;
    return await httpRequestHandler.get(URL).then((response) => response);
};
