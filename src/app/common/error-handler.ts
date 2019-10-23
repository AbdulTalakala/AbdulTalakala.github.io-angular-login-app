import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler{
    handleError(error){
        alert("An Expected Error Has Been Occured");
        console.log("Error: "+error);
    }
}