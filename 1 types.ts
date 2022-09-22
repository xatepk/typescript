const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'Hello TypeScript';

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ['Hello', 'TypeScript'];

const contact:[string, number] = ['Alex', 87654323];

//Any
let variable: any = 42;
variable = 'New string'

//====
function sayMyName(name: string): void {
    console.log(name);
}

sayMyName('Хайзенберг');

//Never
function throwError(message: string):never {
   
    throw new Error(message)

}

function infinite(): never {
    while (true) {
        
    }
}