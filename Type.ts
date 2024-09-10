
export type Todo={

    id?:number,

    title?:string,

    description?:string,


}


// Card props
// DetailCard props
// 
export type Card={

    src?:any,
    title?:string,
    price?:string,
    deskcription?:string,
    btntext?:string,
    btncolor?:string,

    }

export type Button={
    btntext?:string,
    bgcolor?:string,
    btncolor?:string,
    btnborder?:string,
    marginbtm?:string,

}

export type Footer={
    title?:string[]
    data?:string[];
}


// Practice
export type Formvalues={
   
    name?:string,
    email?:string,
    message? :string ,
    
}

export type Storeinfo={
    name?:string;
    email?:string;
    message?:string;
}