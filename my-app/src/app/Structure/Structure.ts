export interface Document {
    idDocument: number;
    documentDate: string;
    coment: string;
    user: User;
    documentDetails: Array <DocumentDetail>
}
export interface User {
    idUser: number;
    Name?: string;
    email?: string;
    cell?: string

}



export interface Option {
    id: number;
    answer: string
  

}

export enum QuestionType {
    radiolist="RadioButtonList",
    text= "TextBox"
}
export interface Question{
    id : number;
    type : QuestionType;
    description : string
}

export interface QuestionRadiolist extends  Question 
{
    options: Array<Option>;
    optionSelected  : number
    
}
export interface QuestionText extends  Question 
{
    
    Answer  : Text
    
}

export interface DocumentDetail {
   // DocumentDetailID : number;
    documentID: number;
    nodeID: number;
    question:   Question | QuestionRadiolist | QuestionText; 
    seq: number;
    idTree: number
}  