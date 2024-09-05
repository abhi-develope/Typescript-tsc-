interface Book {
    name: string;
    price: number;
}


interface Ebook extends Book {
    // name: string;
    // price: number;
    fileSize: number;
    formate: string;
}


interface Audiobook extends Ebook  {
    // name: string;
    // price: number;
    // fileSize: number;
    // formate: string;
    duration: number;
}


const book: Audiobook = {
    name: 'my experiment with truth',
    price: 200,
    fileSize: 300,
    formate: "mp3",
    duration: 5,

}

// merging

interface Kitaab {
    name: string;
    price: number;
}

interface Kitaab {  // merge this property to previous interfaces of same name 
    size: number;
}


const kitaab : Kitaab = {
    name: 'Your dad',
    price: 420,
    size:43,

}