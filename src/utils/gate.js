// Gates encapsulates return values and errors of a function behind a "gate" boolean. 
// Gates toggles themselves off when the function is resolved.
// AsyncGate supports asyncronous functions, and the gate will remain open (true) for the duration of the asyncronous call.

const gate = (func, gate, setGate) => {
    if (gate) try {
        return func();
    } catch (err) {
        if (gate) throw err;
    } finally {
            setGate(false);
        }
}

const asyncGate = async (func, gate, setGate) => {
    if (gate) try {
        return await func;
    } catch (err) {
        if (gate) throw err;
    } finally {
            setGate(false);
        }
}

export { gate, asyncGate };