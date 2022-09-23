interface Rect {
    readonly id: string,
    color?: string,
    size: {
        width: number,
        heigth: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        heigth: 30
    },
    color: '#ccc'
}

const rect2: Rect = {
    id: '12345',
    size: {
        width: 25,
        heigth: 5
    },
}

rect2.color = '#fhg';

const rect3 = {} as Rect;
const rect4 = <Rect>{};

//=========
interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: '334',
    size: {
        width: 23,
        heigth: 4
    },
    getArea(): number {
        return this.size.width * this.size.heigth
    }
}

//===========
interface IClock {
    time: Date,
    setTime(date: Date): void
}

class Clock implements IClock{
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

//=============
interface Styles {
    [key:string]: string
}


const css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}
