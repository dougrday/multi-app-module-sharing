import { useState } from "react";

export const useApp1Hook = () => {
    const results = useState(0);
    return results;
};
