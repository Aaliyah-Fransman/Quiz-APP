class Question {
constructor(text,options,correctIndex){
        this.text=text;
        this.options=options;
        this.correctIndex=correctIndex;
   this.userAnswer=null; 
}
isCorrect(){return this.userAnswer===this.correctIndex;}
}


class Quiz{
    constructor(topic,questions){
    this.topic=topic;
    this.questions=questions;
    this.currentIndex=0;
    }
getCurrentQuestion(){
    return this.questions[this.currentIndex];
}
nextQuestion(){
    this.currentIndex++;
}
isFinished() {
    return this.currentIndex>=this.questions.length;
}
}