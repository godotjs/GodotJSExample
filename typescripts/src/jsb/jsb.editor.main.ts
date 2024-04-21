
// entry point (editor only)

export function auto_complete(scope: any, pattern: string): Array<string> {
    let result: Array<string> = [];
    if (typeof pattern !== "string") {
        return result;
    }
    
    let head = '';
    let index = pattern.lastIndexOf('.');
    let left = '';
    if (index >= 0) {
        left = pattern.substring(0, index + 1);
        try {
            scope = eval(pattern.substring(0, index));
        } catch (e) {
            scope = null;
        }
        pattern = pattern.substring(index + 1);
    }

    for (let k in scope) {
        if (k.indexOf(pattern) == 0) {
            result.push(head + left + k);
        }
    }

    return result;
}
