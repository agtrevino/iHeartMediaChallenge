import { injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http";

@injectable()
export  class EmployeeService {

  constructor(private http: HttpClient) { }

  getRedditPosts(){
    return this.http.get();
  }
}
