import { request, requestAccess } from '@/helpers/http';

export default class AbstractService {
  constructor() {
    this.api = request;
    this.apiAccess = requestAccess;
  }
}