export default createObjectForLocalStorage;

function createObjectForLocalStorage(completionStatus,timeOfCreateTask, textOfTask){

    this._completionStatus=completionStatus;
    this._timeOfCreateTask=timeOfCreateTask;
    this._textOfTask=textOfTask;

}
