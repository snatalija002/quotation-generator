const trivia=[
    {
      start: "You're",
      middle: "a wizard",
      end: "Harry",
    },
    {
      start: "He called",
      middle: "me",
      end: "a Mudblood",
    },
    {
      start: "they",
      middle: "want me",
      end: "to tap-dance",
    },
    {
      start: "That",
      middle: "felt",
      end: "good",
    },
    {
      start: "I must",
      middle: "not tell",
      end: "lies",
    },
    {
      start: "I am the",
      middle: "the",
      end: "Chosen One",
    }
];
const headlines=[
    {
    start: "Ide",
    middle: "mostom",
    end: "devojčica",
  },
  {
    start: "na njoj",
    middle: "kratka",
    end: "haljinica",
  },
  {
    start: "Joj",
    middle: "što nisam",
    end: "šarančić",
  },
  {
    start: "Da se",
    middle: "nađem",
    end: "pod mostić",
  },
  {
    start: "Teče teče",
    middle: "rečica u njoj",
    end: "pliva ribica",
  },
  {
    start: "Ta ta talasić",
    middle: "praćnuo se",
    end: "šarančić"
  }
];

let n=1;
let type=1;
let qoute="";

function updateNumber(k){
    n=k;
    document.getElementById("side_text").innerHTML =k;
}

function updateType(k){
    type=k;
}

const generateQoute = () => {
    let array;
    if(type===1)
    array=trivia
    else
    array=headlines;
    let string="";
    for (let i=0; i < n; i++) {
        let quote = getQuote(array);
        string+=quote+"<br>";
      }
    document.getElementById("quote").innerHTML =string;
}

const getQuote = (selectQt) => {
    let num = randomNum(0, selectQt.length);
    let uno = selectQt[num].start;

    num = randomNum(0, selectQt.length);
    let dos = selectQt[num].middle;

    num = randomNum(0, selectQt.length);
    let tres = selectQt[num].end;

    return  uno + ' ' + dos + ' ' + tres;
}

const randomNum = (m, n) => {
    return Math.floor(Math.random() * n) + m;
}
