import { 
  Http,
  Headers

} from '@angular/http';

import { 
  Injectable,
  Inject

} from '@angular/core';

import { environment } from "environments/environment";

import 'rxjs/add/operator/toPromise';

export function BuildHeader( authorizationKey?: string ) : Headers {
	
	let headers = new Headers({
		'Content-Type' : 'application/json',
		'Accept'	   : 'application/json'
	});

	if ( authorizationKey ) {
		headers.set('Authorization' , 'Bearer ' + authorizationKey );
	}

	return headers;
}

export const SERVICE_URI = {

    AUTH : `${environment.REST_API_URL}/auth`,
    BOOK : `${environment.REST_API_URL}/book`,
    USER : `${environment.REST_API_URL}/user`

};

@Injectable()
export abstract class AbstractService <T> {
  
	protected RS_URI: string;
  
  	constructor (protected http: Http ) { }
  
  	public GET(id: number): Promise <T> {

    	this.validateHttp();
    	const url = `${this.RS_URI}/${id}`;
    
    	return this.http
    		.get(url, { headers: BuildHeader() } )
      		.toPromise()
      		.then(response => response.json().data as T)
      		.catch(this.handleError);
  	}
  
  	public PUT(ob: T, id: number): Promise <T> {

    	this.validateHttp();
    	const url = `${this.RS_URI}/${id}`;
    
    	return this.http
      		.put(url, JSON.stringify(ob), { headers: BuildHeader() } )
      		.toPromise()
     		.then(() => ob)
      		.catch(this.handleError);
  	}
  
  	public POST(ob: T): Promise <T> {
    
    	this.validateHttp();
    
    	return this.http
  			.post(this.RS_URI, JSON.stringify(ob), { headers: BuildHeader() } )
  			.toPromise()
			.then(res => res.json().data)
  			.catch(this.handleError);
  	}
  
  	public DELETE(id: number): Promise <void> {
    
		this.validateHttp();    
		const url = `${this.RS_URI}/${id}`;
    
    	return this.http
    		.delete(url, { headers: BuildHeader() } )
      		.toPromise()
      		.then(() => null)
      		.catch(this.handleError);
  	}
  
  	protected handleError(error: any): Promise <any> {
    
    	console.error('An error occured', error);
    	return Promise.reject(error.message || error);
  	}
  
  	private validateHttp(): void {
  
		if ( this.http == null || this.RS_URI == null) {

			throw new Error('Http object or RS_URI is null');
    	}

  	}
  	
}