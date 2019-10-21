'use strict'

function safeCall(f) {
    try {
        f();
        return true;
    } catch {
        return false;
    }
}