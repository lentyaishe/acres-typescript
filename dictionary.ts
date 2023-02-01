interface StringDictionary {
    [key: string]: string;
}

const dict: StringDictionary = {};
dict["data1"] = "some data";
dict["data2"] = "another data";

console.log(dict.data1);