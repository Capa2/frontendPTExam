const fetchDeta = async (url, options) => {
    const res = await fetch(url, options);
    if (res.ok) return await res.json();
    else {
        const { code, message } = await res.json();
        throw { code, message };
    }
}

export default fetchDeta;