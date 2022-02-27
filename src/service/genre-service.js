import { mocks } from "./mock-data";

export const genresRequest = () => {
    return new Promise((resolve, reject) => {
        const mock = mocks;
        if (!mock) {
            reject("Not Found");
        }
        resolve(mock);
    });
};