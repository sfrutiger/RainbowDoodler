import Pixel from "./Pixel";

const n = 240;

export default function Board() {
    return [...Array(n)].map((e, i) => <Pixel key = {i}/>);
}