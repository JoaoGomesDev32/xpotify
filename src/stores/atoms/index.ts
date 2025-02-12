import { atom } from "recoil";

export const atomToken = atom<string>({
    key: "atomToken",
    default: "",
});