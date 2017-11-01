import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/share";

export abstract class StorageService {
    
    public abstract get(): Storage;
}

@Injectable()
export class LocalStorageServie extends StorageService {
    
    public get(): Storage {
        return localStorage;
    }

}