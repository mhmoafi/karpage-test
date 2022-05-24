import axios from 'axios';

const mainLoginUrl = "https://reqres.in/api"
const mainProductsUrl = "https://api.mobolet.ir"
const userLoginUrl = `${mainLoginUrl}/login`
const productsSearchUrl = `${mainProductsUrl}/elastic_search/all/`

const urlPreparer = (args) => {
    // console.log(args);
    if (args.cmd === "login") return userLoginUrl;
    // if (args.cmd === "nasaSearch") return nasaSearchUrl+"?q="+args.data.q;
    if (args.cmd === "productsSearch") return productsSearchUrl;
}
export const netCall = (method, args) => { //method: 'GET'||'POST' , args: {cmd: string, params: any, data: any}
    if (method === "GET") {
        return new Promise((resolve, reject) => {
            (async () => {
                try {
                    const res = await axios({
                        method: 'get',
                        url: urlPreparer(args),
                        headers: {
                            'Cache-Control': 'no-cache',
                            'Content-Type': 'application/json',
                            //"Authorization": tokenChecker()
                        },
                        params: { ...args.params }
                    });

                    if (res.status === 200) {
                        resolve([res.status, res.data]);
                    } else {
                        resolve(["380", "network error in Call"])
                    }
                } catch (err) {
                    if (err.response && err.response.status) {
                        //response err num check here...
                    } else {
                        resolve(["381", "network error in Reply: " + JSON.stringify(err)])
                    }
                }
            })();
        });
    } else if (method === "POST") {
        return new Promise((resolve, reject) => {
            (async () => {
                try {
                    const res = await axios({
                        method: "post",
                        url: urlPreparer(args),
                        headers: {
                            'Cache-Control': 'no-cache',
                            'Content-Type': 'application/json',
                            //"Authorization": tokenChecker()
                        },
                        data: JSON.stringify(args.data)
                    });

                    if (res.status === 200) {
                        resolve([res.status, res.data]);
                    } else {
                        resolve(["380", "network error in Call"])
                    }
                } catch (err) {
                    if (err.response && err.response.status) {
                        //response err num check here...
                        resolve([err.response.status, JSON.stringify(err)])
                    } else {
                        resolve(["381", "network error in Reply: " + JSON.stringify(err)])
                    }
                }
            })();
        })
    }
}