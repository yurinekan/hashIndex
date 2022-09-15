class Hash {
    hash(string, bucketAmount) {
        return (
            (string.slice(0, 1).charCodeAt(0) - string.slice(-1).charCodeAt(0)) %
            bucketAmount
        );
    }
}