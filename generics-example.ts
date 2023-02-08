class Dictionary<T> {
    private _dict: { [key: string]: T } = {};

    public getValueByKey(key: string): T | null {
        if (this._dict[key]) {
            return this._dict[key];
        }
        else {
            return null;
        }
    }

    public setValue(key: string, value: T): void {
        if (this._dict[key]) {
            throw new Error("Key already exists");
        }
        else {
            this._dict[key] = value;
        }
    }

    public deleteValue(key: string): void {
        if (this._dict[key]) {
            // this._dict[key] = undefined;
            delete this._dict[key];
        }
        else {
            throw new Error("Key does not exist");
        }
    }
}

const d: Dictionary<string> = new Dictionary();

try {
    d.setValue("Hello", "Hello");
    d.setValue("World", "World");

    d.deleteValue("Hello");
    console.log("End of execution");
}
catch (error) {
    console.error(error);
}