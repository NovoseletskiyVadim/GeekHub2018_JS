!function(t){var a={};function e(n){if(a[n])return a[n].exports;var r=a[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}e.m=t,e.c=a,e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,a){if(1&a&&(t=e(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var r in t)e.d(n,r,function(a){return t[a]}.bind(null,r));return n},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},e.p="",e(e.s=0)}([function(t,a,e){"use strict";e.r(a);var n=function(t,a,e){this._completionStatus=t,this._timeOfCreateTask=a,this._textOfTask=e};var r=o;function o(){}o.prototype={addNewTaskInArray:function(){var t,a,e=new Date,r=e.getDate()+" "+["Января","Февраля","Марта","Апреля","Мая","Июня","Июля","Августа","Сентября","Октября","Ноября","Декабря"][e.getMonth()]+" "+e.getFullYear()+" "+["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"][e.getDay()]+" "+e.getHours()+":"+e.getMinutes();if(""!==$(".blockAddNewTask input").val()){!1,t=r,a=$(".blockAddNewTask input").val();var o=new n(!1,t,a),d=JSON.stringify(o),s=0,i=0;for(var l in window.localStorage)if(++s<=window.localStorage.length){var c=parseInt(l);c>i&&(i=c)}var u=i+1;window.localStorage.setItem(u,d),$(".blockAddNewTask input").val("")}},arrFfromLocalStorage:function(){var t=[],a=0;for(var e in window.localStorage)if(++a<=window.localStorage.length){var n=JSON.parse(window.localStorage.getItem(e));t[parseInt(e)]=n}return t}};var d=function(t,a){for(var e=1;e<=3;e++){var r=".bookMarks a:nth-child("+e+") span";$(r).on("click",function(){return $(".bookMarks span").removeClass("ativated"),$(this).addClass("ativated"),$(".contentTaskPage").empty(),$(".blockAddNewTask").empty(),$(this).parent().is(":nth-child(1)")?(a.newTaskElement(),$(".blockAddNewTask button").on("click",function(){t.addNewTaskInArray(),alert("Новое задание сохранено")})):$(this).parent().is(":nth-child(2)")?a.renderTask(t.arrFfromLocalStorage()):$(this).parent().is(":nth-child(3)")&&a.reverseRenderTask(t.arrFfromLocalStorage()),!1})}$(".contentTaskPage").on("click","td button[data-buttonDelete]",function(){$(this).attr("data-buttonDelete");var t=$(this).attr("data-ObjKey"),a=$(this).parent().parent().attr("data-rowId");window.localStorage.removeItem(t),$(this).remove(),$("tr[data-rowId="+a+"]").remove(),alert("Элемент удален из localStorage!")}),$(".contentTaskPage").on("click","td button[data-buttonChange]",function(){var t,a;t=$(this).attr("data-buttonChange"),a=prompt("Изменение задания.Введите другое задание","текст другого задания"),$("span [data-taskTextFull="+t+"] ").empty(),$("span [data-taskTextFull="+t+"] ").text(a)}),$(".contentTaskPage").on("click","td button[data-buttonSave]",function(){var t,a,e,r,o;a=$(this).attr("data-ObjKey"),t=$(this).attr("data-buttonSave"),e=!!$("input[data-idStatus="+t+"]").is(":checked"),r=$("span[data-StartTimeTask="+t+"]").text(),o=$("span [data-taskTextFull="+t+"]").text();var d=new n(e,r,o),s=JSON.stringify(d);window.localStorage.setItem(a,s),alert("Изминеня сохранены в Local Storage!")})};var s=null;function i(t){s=this,t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/html",this.innerHTML)}function l(t){return t.preventDefault&&t.preventDefault(),t.dataTransfer.dropEffect="move",!1}function c(t){}function u(t){}function p(t){return t.stopPropagation&&t.stopPropagation(),s!=this&&(s.innerHTML=this.innerHTML,this.innerHTML=t.dataTransfer.getData("text/html")),!1}function f(t){}var g=v;function v(){}v.prototype={newTaskElement:function(){var t,a,e;$(".container .blockAddNewTask").empty(),t=$("<p>").text("Добавить новое задание"),a=$("<input>"),e=$("<button>").text("+"),$(".blockAddNewTask").append(t,a,e)},renderTask:function(t){var a,e,n,r,o,d,s,g,v,b,k,T,h,w,m;$(".contentTaskPage").empty(),a=$("<table>");for(var S=0,y=0;y<=t.length;y++)void 0!==t[y]&&(S++,e=$("<tr>").attr("data-rowId",S).attr("draggable","true").addClass("dragAndDrop"),n=$("<td>").attr("data-task",S),r=$("<td>").attr("data-DeleteButton",S),o=$("<td>").attr("data-ToChangeButton",S),d=$("<td>").attr("data-ToSaveChangeButton",S),s=$("<input>").attr("type","checkbox").attr("data-idStatus",S).prop("checked",t[y]._completionStatus),k=$("<span>").text("дата начала :").css("color","red").css("font-weight","bold"),T=$("<span>").attr("data-StartTimeTask",S).text(" "+t[y]._timeOfCreateTask).css("font-weight","bold"),h=$("<span>").text("Задание:").css("color","red").css("font-weight","bold"),m=$("<span>").attr("data-taskTextFull",S).text(t[y]._textOfTask).css("font-size","1.5em"),w=$("<span>").append(k,T,h,m),g=$("<button>").attr("data-buttonDelete",S).attr("data-ObjKey",y).text("delete"),v=$("<button>").attr("data-buttonChange",S).attr("data-ObjKey",y).text("ToChange"),b=$("<button>").attr("data-buttonSave",S).attr("data-ObjKey",y).text("ToSaveChanges"),n.append(s,w),r.append(g),o.append(v),d.append(b),e.append(n,r,o,d),a.append(e));$(".contentTaskPage").append(a);var x=document.querySelectorAll("tr.dragAndDrop");[].forEach.call(x,function(t){t.addEventListener("dragstart",i,!1),t.addEventListener("dragenter",c,!1),t.addEventListener("dragover",l,!1),t.addEventListener("dragleave",u,!1),t.addEventListener("drop",p,!1),t.addEventListener("dragend",f,!1)})},reverseRenderTask:function(t){var a,e,n,r,o,d,s,g,v,b,k,T,h,w,m,S;a=t,$(".contentTaskPage").empty(),e=$("<table>");for(var y=0,x=a.length;x>=0;x--)void 0!==a[x]&&(y++,n=$("<tr>").attr("data-rowId",y).attr("draggable","true").addClass("dragAndDrop"),r=$("<td>").attr("data-task",y),o=$("<td>").attr("data-DeleteButton",y),d=$("<td>").attr("data-ToChangeButton",y),s=$("<td>").attr("data-ToSaveChangeButton",y),g=$("<input>").attr("type","checkbox").attr("data-idStatus",y).prop("checked",a[x]._completionStatus),T=$("<span>").text("дата начала :").css("color","red").css("font-weight","bold"),h=$("<span>").attr("data-StartTimeTask",y).text(" "+a[x]._timeOfCreateTask).css("font-weight","bold"),w=$("<span>").text("Задание:").css("color","red").css("font-weight","bold"),S=$("<span>").attr("data-taskTextFull",y).text(a[x]._textOfTask).css("font-size","1.5em"),m=$("<span>").append(T,h,w,S),v=$("<button>").attr("data-buttonDelete",y).attr("data-ObjKey",x).text("delete"),b=$("<button>").attr("data-buttonChange",y).attr("data-ObjKey",x).text("ToChange"),k=$("<button>").attr("data-buttonSave",y).attr("data-ObjKey",x).text("ToSaveChanges"),r.append(g,m),o.append(v),d.append(b),s.append(k),n.append(r,o,d,s),e.append(n));$(".contentTaskPage").append(e);var O=document.querySelectorAll("tr.dragAndDrop");[].forEach.call(O,function(t){t.addEventListener("dragstart",i,!1),t.addEventListener("dragenter",c,!1),t.addEventListener("dragover",l,!1),t.addEventListener("dragleave",u,!1),t.addEventListener("drop",p,!1),t.addEventListener("dragend",f,!1)})}},$(document).ready(function(){var t=new r,a=new g;new d(t,a);a.newTaskElement(),$(".blockAddNewTask button").on("click",function(){t.addNewTaskInArray(),alert("Новое задание сохранено")})})}]);