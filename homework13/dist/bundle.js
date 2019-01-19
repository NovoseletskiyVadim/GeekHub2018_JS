/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/controler.js":
/*!*****************************!*\
  !*** ./src/js/controler.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createObjectForLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createObjectForLocalStorage.js */ \"./src/js/createObjectForLocalStorage.js\");\n// импортирую модуль с  шаблоном обьекта(по которому записиваю обьекты и извлекаю из LocalStorage )\n // экспортирую контроллер в main.js(точка входа)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Controler); // конструктор \n\nfunction Controler(model, view) {\n  this.model = model;\n  this.view = view;\n\n  this.tabSwitching = function () {\n    // создаем 3 х слушателей  и на кажлого свое действие(закуладки на странице)\n    for (var numberBookMark = 1; numberBookMark <= 3; numberBookMark++) {\n      var bookMarkSelector = \".bookMarks a:nth-child(\" + numberBookMark + \") span\"; // console.log(bookMarkSelector);\n\n      $(bookMarkSelector).on(\"click\", function () {\n        // console.log(\"click\");\n        $(\".bookMarks span\").removeClass(\"ativated\");\n        $(this).addClass(\"ativated\");\n        $(\".contentTaskPage\").empty();\n        $(\".blockAddNewTask\").empty(); // проверим с помощью parent().is() связь \"родитель потомок\" \n\n        if ($(this).parent().is(\":nth-child(1)\")) {\n          view.newTaskElement();\n          $(\".blockAddNewTask button\").on(\"click\", function () {\n            model.addNewTaskInArray();\n            alert(\"Новое задание сохранено\");\n          });\n        } else if ($(this).parent().is(\":nth-child(2)\")) {\n          view.renderTask(model.arrFfromLocalStorage());\n        } else if ($(this).parent().is(\":nth-child(3)\")) {\n          view.reverseRenderTask(model.arrFfromLocalStorage());\n        }\n\n        ;\n        return false;\n      });\n    }\n  };\n}\n\nControler.prototype = {\n  deleteChangeSaveButton: function deleteChangeSaveButton() {\n    // TODO: обработчики событий кнопок delete , change, save\n    // click button delete task \n    $(\".contentTaskPage\").on(\"click\", \"td button[data-buttonDelete]\", function () {\n      var a = $(this).attr(\"data-buttonDelete\");\n      var b = $(this).attr(\"data-ObjKey\");\n      var c = $(this).parent().parent().attr('data-rowId');\n      window.localStorage.removeItem(b);\n      $(this).remove();\n      $(\"tr[data-rowId=\" + c + \"]\").remove();\n      alert(\"Элемент удален из localStorage!\");\n    }); // click button \"change text \" \n\n    $(\".contentTaskPage\").on(\"click\", \"td button[data-buttonChange]\", function () {\n      var a, textOfTask;\n      a = $(this).attr(\"data-buttonChange\");\n      textOfTask = prompt(\"Изменение задания.Введите другое задание\", \"текст другого задания\");\n      $(\"span [data-taskTextFull=\" + a + \"] \").empty();\n      $(\"span [data-taskTextFull=\" + a + \"] \").text(textOfTask);\n    }); // click button \" save changes\" \n\n    $(\".contentTaskPage\").on(\"click\", \"td button[data-buttonSave]\", function () {\n      var a, keyChangeObject, completionStatus, timeOfCreateTask, textOfTask;\n      keyChangeObject = $(this).attr(\"data-ObjKey\");\n      a = $(this).attr(\"data-buttonSave\");\n\n      if ($(\"input[data-idStatus=\" + a + \"]\").is(':checked')) {\n        completionStatus = true;\n      } else {\n        completionStatus = false;\n      }\n\n      timeOfCreateTask = $(\"span[data-StartTimeTask=\" + a + \"]\").text();\n      textOfTask = $(\"span [data-taskTextFull=\" + a + \"]\").text();\n      var taskChangeObject = new _createObjectForLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](completionStatus, timeOfCreateTask, textOfTask);\n      var serialTaskChangeObject = JSON.stringify(taskChangeObject);\n      window.localStorage.setItem(keyChangeObject, serialTaskChangeObject);\n      alert(\"Изминеня сохранены в Local Storage!\");\n    });\n  }\n};\n\n//# sourceURL=webpack:///./src/js/controler.js?");

/***/ }),

/***/ "./src/js/createObjectForLocalStorage.js":
/*!***********************************************!*\
  !*** ./src/js/createObjectForLocalStorage.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (createObjectForLocalStorage);\n\nfunction createObjectForLocalStorage(completionStatus, timeOfCreateTask, textOfTask) {\n  this._completionStatus = completionStatus;\n  this._timeOfCreateTask = timeOfCreateTask;\n  this._textOfTask = textOfTask;\n}\n\n//# sourceURL=webpack:///./src/js/createObjectForLocalStorage.js?");

/***/ }),

/***/ "./src/js/dragAndDrop.js":
/*!*******************************!*\
  !*** ./src/js/dragAndDrop.js ***!
  \*******************************/
/*! exports provided: dragSrcEl, handleDragStart, handleDragOver, handleDragEnter, handleDragLeave, handleDrop, handleDragEnd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dragSrcEl\", function() { return dragSrcEl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleDragStart\", function() { return handleDragStart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleDragOver\", function() { return handleDragOver; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleDragEnter\", function() { return handleDragEnter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleDragLeave\", function() { return handleDragLeave; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleDrop\", function() { return handleDrop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleDragEnd\", function() { return handleDragEnd; });\n// console.log(\"dran and drop=ok\");\n\n/*  \r\n    при перетаскивании мы переписываем innerHtml элементов, т.е.\r\n    просто содержимое. всякие динамические изменения обьектов DOM, \r\n    как например, состояние \"checked\" у чекбокса, естественно, теряется, \r\n    так как фактически это новый чекбокс. старый контекст теряется.\r\n    вариантов решения вижу два - либо вместо this.innerHTML оперировать\r\n    самим объектом this (ну и dragSrcEl вместо dragSrcEl.innerHTML),\r\n    либо сохранять состояние чекбокса в data-атрибуте и после переноса\r\n    проверять этот дата-атрибут и устанавливать состояние чекбокса в\r\n    зависимости от значения data-атрибута\r\n    \r\n*/\nvar dragSrcEl = null; // обработчик события dragstart\n\nfunction handleDragStart(e) {\n  dragSrcEl = this;\n  e.dataTransfer.effectAllowed = 'move';\n  e.dataTransfer.setData('text/html', this.innerHTML);\n}\nfunction handleDragOver(e) {\n  if (e.preventDefault) {\n    e.preventDefault();\n  }\n\n  e.dataTransfer.dropEffect = 'move';\n  return false;\n}\nfunction handleDragEnter(e) {}\nfunction handleDragLeave(e) {}\nfunction handleDrop(e) {\n  if (e.stopPropagation) {\n    e.stopPropagation(); // stops the browser from redirecting.\n  } // Don't do anything if dropping the same column we're dragging.\n\n\n  if (dragSrcEl != this) {\n    // Set the source column's HTML to the HTML of the columnwe dropped on.\n    dragSrcEl.innerHTML = this.innerHTML;\n    this.innerHTML = e.dataTransfer.getData('text/html');\n  }\n\n  return false;\n}\nfunction handleDragEnd(e) {// setTimeout(FinishPlay,100);\n}\n\n//# sourceURL=webpack:///./src/js/dragAndDrop.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/js/model.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ \"./src/js/view.js\");\n/* harmony import */ var _controler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controler */ \"./src/js/controler.js\");\n// import $ from 'jquery';\n\n\n\n$(document).ready(function () {\n  var model = new _model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  var view = new _view__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  var controler = new _controler__WEBPACK_IMPORTED_MODULE_2__[\"default\"](model, view);\n  view.newTaskElement();\n  $(\".blockAddNewTask button\").on(\"click\", function () {\n    model.addNewTaskInArray();\n    alert(\"Новое задание сохранено\");\n  });\n  controler.tabSwitching();\n  controler.deleteChangeSaveButton();\n});\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/model.js":
/*!*************************!*\
  !*** ./src/js/model.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createObjectForLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createObjectForLocalStorage.js */ \"./src/js/createObjectForLocalStorage.js\");\n// импортирую модуль с  шаблоном обьекта(по которому записиваю обьекты и извлекаю из LocalStorage )\n // экспортирую модель в main.js(точка входа)\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModelLocalStorage); // конструктор\n\nfunction ModelLocalStorage() {}\n\nModelLocalStorage.prototype = {\n  //метод добавления задания в localStorage(сохраняем обьект) \n  addNewTaskInArray: function addNewTaskInArray() {\n    var completionStatus, timeOfCreateTask, textOfTask;\n    var days = [\"Воскресенье\", \"Понедельник\", \"Вторник\", \"Среда\", \"Четверг\", \"Пятница\", \"Суббота\"];\n    var months = [\"Января\", \"Февраля\", \"Марта\", \"Апреля\", \"Мая\", \"Июня\", \"Июля\", \"Августа\", \"Сентября\", \"Октября\", \"Ноября\", \"Декабря\"];\n    var DateTask = new Date();\n    var currentDateTask = DateTask.getDate() + \" \" + months[DateTask.getMonth()] + \" \" + DateTask.getFullYear() + \" \" + days[DateTask.getDay()] + \" \" + DateTask.getHours() + \":\" + DateTask.getMinutes(); // если поле инпута не пустое то записать значение. \n\n    if ($(\".blockAddNewTask input\").val() !== \"\") {\n      completionStatus = false;\n      timeOfCreateTask = currentDateTask;\n      textOfTask = $(\".blockAddNewTask input\").val();\n      var taskObject = new _createObjectForLocalStorage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](completionStatus, timeOfCreateTask, textOfTask);\n      var serialObj = JSON.stringify(taskObject); //сериализуем его    \n      // console.log(serialObj);        \n      // var mykey=Date.now();// generate key value variant №1\n      // generate key value variant №2\n\n      var counterKey = 0;\n      var maxValueKey = 0;\n\n      for (var key in window.localStorage) {\n        counterKey++;\n\n        if (counterKey <= window.localStorage.length) {\n          var currentKey = parseInt(key);\n\n          if (currentKey > maxValueKey) {\n            maxValueKey = currentKey;\n          }\n        }\n      }\n\n      var mykey = maxValueKey + 1;\n      window.localStorage.setItem(mykey, serialObj);\n      $(\".blockAddNewTask input\").val(\"\"); //очищение поля \n    }\n  },\n  // метод возвращения массива из local storage;\n  arrFfromLocalStorage: function arrFfromLocalStorage() {\n    var renderArray = [];\n    var myCounter = 0; // add information in the array from local storage\n\n    for (var key in window.localStorage) {\n      myCounter++;\n\n      if (myCounter <= window.localStorage.length) {\n        //  добавлением обьектов из local Storage в массив  renderArray=[];\n        var returnObjFromLocalStorage = JSON.parse(window.localStorage.getItem(key));\n        renderArray[parseInt(key)] = returnObjFromLocalStorage;\n      }\n    }\n\n    return renderArray;\n  }\n};\n\n//# sourceURL=webpack:///./src/js/model.js?");

/***/ }),

/***/ "./src/js/view.js":
/*!************************!*\
  !*** ./src/js/view.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dragAndDrop.js */ \"./src/js/dragAndDrop.js\");\n// экспортирую вьюху в main.js(точка входа)\n/* harmony default export */ __webpack_exports__[\"default\"] = (View); // импорт функционала Drag And Drop\n\n // конструктор\n\nfunction View() {}\n\nView.prototype = {\n  newTaskElement: function newTaskElement() {\n    var $nameInputTask, $inputAddTask, $buttonInputTask;\n    $(\".container .blockAddNewTask\").empty();\n    $nameInputTask = $(\"<p>\").text(\"Добавить новое задание\");\n    $inputAddTask = $(\"<input>\");\n    $buttonInputTask = $(\"<button>\").text(\"+\");\n    $(\".blockAddNewTask\").append($nameInputTask, $inputAddTask, $buttonInputTask); // console.log(\"ok view\");\n  },\n  //new function \"render task \"\n  renderTask: function renderTask(ArrayRenderTask) {\n    $(\".contentTaskPage\").empty();\n    var $taskTable, $task_row, $task_td_task, $task_td_DeleteButton, $task_td_ToChangeButton, $task_td_ToSaveChangeButton, $taskStatus, $taskDeleteButton, $taskToChangeButton, $taskToSaveChangeButton, $taskTextStartTask, $taskStartTimeTask, $taskTetxDescribe, $taskContent, $taskTextFull; // create a table in the index \n\n    $taskTable = $(\"<table>\"); // render  task information\n\n    var counterForRender = 0;\n\n    for (var i = 0; i <= ArrayRenderTask.length; i++) {\n      if (ArrayRenderTask[i] === undefined) continue;else {\n        counterForRender++;\n        $task_row = $(\"<tr>\").attr('data-rowId', counterForRender).attr('draggable', 'true').addClass('dragAndDrop');\n        $task_td_task = $(\"<td>\").attr('data-task', counterForRender);\n        $task_td_DeleteButton = $(\"<td>\").attr('data-DeleteButton', counterForRender);\n        $task_td_ToChangeButton = $(\"<td>\").attr('data-ToChangeButton', counterForRender);\n        $task_td_ToSaveChangeButton = $(\"<td>\").attr('data-ToSaveChangeButton', counterForRender);\n        $taskStatus = $(\"<input>\").attr('type', \"checkbox\").attr('data-idStatus', counterForRender).prop('checked', ArrayRenderTask[i]._completionStatus);\n        $taskTextStartTask = $(\"<span>\").text('дата начала :').css('color', 'red').css('font-weight', 'bold');\n        $taskStartTimeTask = $(\"<span>\").attr('data-StartTimeTask', counterForRender).text(' ' + ArrayRenderTask[i]._timeOfCreateTask).css('font-weight', 'bold');\n        $taskTetxDescribe = $(\"<span>\").text('Задание:').css('color', 'red').css('font-weight', 'bold');\n        $taskTextFull = $(\"<span>\").attr('data-taskTextFull', counterForRender).text(ArrayRenderTask[i]._textOfTask).css('font-size', '1.5em');\n        $taskContent = $(\"<span>\").append($taskTextStartTask, $taskStartTimeTask, $taskTetxDescribe, $taskTextFull);\n        $taskDeleteButton = $(\"<button>\").attr('data-buttonDelete', counterForRender).attr('data-ObjKey', i).text(\"delete\");\n        $taskToChangeButton = $(\"<button>\").attr('data-buttonChange', counterForRender).attr('data-ObjKey', i).text(\"ToChange\");\n        $taskToSaveChangeButton = $(\"<button>\").attr('data-buttonSave', counterForRender).attr('data-ObjKey', i).text(\"ToSaveChanges\");\n        $task_td_task.append($taskStatus, $taskContent);\n        $task_td_DeleteButton.append($taskDeleteButton);\n        $task_td_ToChangeButton.append($taskToChangeButton);\n        $task_td_ToSaveChangeButton.append($taskToSaveChangeButton);\n        $task_row.append($task_td_task, $task_td_DeleteButton, $task_td_ToChangeButton, $task_td_ToSaveChangeButton);\n        $taskTable.append($task_row);\n      }\n    } // добавляем table  на страницу\n\n\n    $(\".contentTaskPage\").append($taskTable);\n    var cols = document.querySelectorAll('tr.dragAndDrop');\n    [].forEach.call(cols, function (col) {\n      col.addEventListener('dragstart', _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_0__[\"handleDragStart\"], false);\n      col.addEventListener('dragenter', _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_0__[\"handleDragEnter\"], false);\n      col.addEventListener('dragover', _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_0__[\"handleDragOver\"], false);\n      col.addEventListener('dragleave', _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_0__[\"handleDragLeave\"], false);\n      col.addEventListener('drop', _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_0__[\"handleDrop\"], false);\n      col.addEventListener('dragend', _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_0__[\"handleDragEnd\"], false);\n    });\n  },\n  // new function \"reverse render task \"\n  reverseRenderTask: function reverseRenderTask(ArrayRenderTask) {\n    var reverseArrayRenderTask = [];\n    reverseArrayRenderTask = ArrayRenderTask; // reverseArrayRenderTask.reverse();\n\n    $(\".contentTaskPage\").empty();\n    var $taskTable, $task_row, $task_td_task, $task_td_DeleteButton, $task_td_ToChangeButton, $task_td_ToSaveChangeButton, $taskStatus, $taskDeleteButton, $taskToChangeButton, $taskToSaveChangeButton, $taskTextStartTask, $taskStartTimeTask, $taskTetxDescribe, $taskContent, $taskTextFull; // create a table in the index \n\n    $taskTable = $(\"<table>\"); // TODO: render  task information\n\n    var counterForRender = 0;\n\n    for (var i = reverseArrayRenderTask.length; i >= 0; i--) {\n      if (reverseArrayRenderTask[i] === undefined) continue;else {\n        counterForRender++;\n        $task_row = $(\"<tr>\").attr('data-rowId', counterForRender).attr('draggable', 'true').addClass('dragAndDrop');\n        $task_td_task = $(\"<td>\").attr('data-task', counterForRender);\n        $task_td_DeleteButton = $(\"<td>\").attr('data-DeleteButton', counterForRender);\n        $task_td_ToChangeButton = $(\"<td>\").attr('data-ToChangeButton', counterForRender);\n        $task_td_ToSaveChangeButton = $(\"<td>\").attr('data-ToSaveChangeButton', counterForRender);\n        $taskStatus = $(\"<input>\").attr('type', \"checkbox\").attr('data-idStatus', counterForRender).prop('checked', reverseArrayRenderTask[i]._completionStatus);\n        $taskTextStartTask = $(\"<span>\").text('дата начала :').css('color', 'red').css('font-weight', 'bold');\n        $taskStartTimeTask = $(\"<span>\").attr('data-StartTimeTask', counterForRender).text(' ' + reverseArrayRenderTask[i]._timeOfCreateTask).css('font-weight', 'bold');\n        $taskTetxDescribe = $(\"<span>\").text('Задание:').css('color', 'red').css('font-weight', 'bold');\n        $taskTextFull = $(\"<span>\").attr('data-taskTextFull', counterForRender).text(reverseArrayRenderTask[i]._textOfTask).css('font-size', '1.5em');\n        $taskContent = $(\"<span>\").append($taskTextStartTask, $taskStartTimeTask, $taskTetxDescribe, $taskTextFull);\n        $taskDeleteButton = $(\"<button>\").attr('data-buttonDelete', counterForRender).attr('data-ObjKey', i).text(\"delete\");\n        $taskToChangeButton = $(\"<button>\").attr('data-buttonChange', counterForRender).attr('data-ObjKey', i).text(\"ToChange\");\n        $taskToSaveChangeButton = $(\"<button>\").attr('data-buttonSave', counterForRender).attr('data-ObjKey', i).text(\"ToSaveChanges\");\n        $task_td_task.append($taskStatus, $taskContent);\n        $task_td_DeleteButton.append($taskDeleteButton);\n        $task_td_ToChangeButton.append($taskToChangeButton);\n        $task_td_ToSaveChangeButton.append($taskToSaveChangeButton);\n        $task_row.append($task_td_task, $task_td_DeleteButton, $task_td_ToChangeButton, $task_td_ToSaveChangeButton);\n        $taskTable.append($task_row);\n      }\n    } // добавляем table  на страницу\n\n\n    $(\".contentTaskPage\").append($taskTable);\n    var cols = document.querySelectorAll('tr.dragAndDrop'); // console.log(\"cols=\",cols);\n\n    [].forEach.call(cols, function (col) {\n      col.addEventListener('dragstart', _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_0__[\"handleDragStart\"], false);\n      col.addEventListener('dragenter', _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_0__[\"handleDragEnter\"], false);\n      col.addEventListener('dragover', _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_0__[\"handleDragOver\"], false);\n      col.addEventListener('dragleave', _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_0__[\"handleDragLeave\"], false);\n      col.addEventListener('drop', _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_0__[\"handleDrop\"], false);\n      col.addEventListener('dragend', _dragAndDrop_js__WEBPACK_IMPORTED_MODULE_0__[\"handleDragEnd\"], false);\n    });\n  }\n};\n\n//# sourceURL=webpack:///./src/js/view.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/sass/style.scss?");

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi ./src/js/main.js ./src/sass/style.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/main.js */\"./src/js/main.js\");\nmodule.exports = __webpack_require__(/*! ./src/sass/style.scss */\"./src/sass/style.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/main.js_./src/sass/style.scss?");

/***/ })

/******/ });