const makeOptions = (method, signal, token, body) => {
    var opts = {
        method: method,
        signal: signal,
        headers: {
            "Content-type": "application/json",
            'Accept': 'application/json',
        }
    }
    if (token) opts.headers["x-access-token"] = token;
    if (body) opts.body = JSON.stringify(body);

    return opts;
}

export default makeOptions;
