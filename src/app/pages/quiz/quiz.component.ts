import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { UsuarioService } from '../../service/usuario/usuario.service';
import { UsuarioResponse } from '../../model/response/usuarioResponse';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit{
  user!: UsuarioResponse
  showWarning: boolean = false;
  isQuizStarted: boolean = false;
  isQuizEnded: boolean = false;
  questionsList: any[]= [];
  currentQuestionNo: number = 0;

  //remainingTime:number = 10;

  //timer = interval(1000);
  subscription: Subscription [] = [];
  correctAnswerCount: number = 0;
  usuario!: UsuarioResponse;

  constructor(private http: HttpClient, private usuarioService:UsuarioService) {
  }

  ngOnInit(): void {
    this.user = this.usuarioService.getUsuario();
    this.loadQuestions();
    this.usuario = this.usuarioService.getUsuario();

  }
  loadQuestions() {
    this.http.get("assets/questions.json").subscribe((res:any)=>{
      debugger;
      this.questionsList = res;
    })
  }
  nextQuestion() {
    if(this.currentQuestionNo < this.questionsList.length-1) {
      this.currentQuestionNo ++;
    } else {
      this.subscription.forEach(element => {
        element.unsubscribe();
      });
    }
  }
  finish() {
    this.isQuizEnded = true;
    this.isQuizStarted = false;
  }

  start() {
    this.showWarning = false;
    this.isQuizEnded = false;
    this.isQuizStarted = false;
  }

  showWarningPopup() {
    this.showWarning = true;
  }

  selectOption(option: any) {
    if(option.isCorrect) {
      this.correctAnswerCount ++;
    }
    option.isSelected = true;
  }
  isOptionSelected(options: any) {
    const selectionCount = options.filter((m:any)=>m.isSelected == true).length;
    if(selectionCount == 0) {
      return false;
    } else {
      return true;
    }
  }
  startQuiz() {
    this.showWarning = false;
    this.isQuizStarted = true;
   //this.subscription.push(this.timer.subscribe(res=> {
      //console.log(res);
      //if(this.remainingTime != 0) {
        //this.remainingTime --;
      }
      //if(this.remainingTime == 0) {
        //this.nextQuestion();
        //this.remainingTime = 10;
      //}
   // })
   //)
  //}

  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  closeDialog() {
    this.display = false;
  }

}
