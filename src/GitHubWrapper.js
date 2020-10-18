import axios, { AxiosInstance } from 'axios'
import {accesToken} from "./accesToken" 


export default class GithubWrapper {

    
    
    constructor() {
        this.client = axios.create({
          baseURL: 'https://api.github.com/',
          responseType: 'json',
          headers: {
            'Authorization': 'token ' + accesToken,
          }
        })
      }
      
    getRequest(path) {
        return this.client.get(path)
    }
    
    postRequest(path, payload) {
        return this.client.post(path, payload)
    }

    patchRequest(path, payload) {
        return this.client.patch(path, payload)
    }

    deleteRequest(path) {
        return this.client.delete(path)
    }
    
    root() {
        return this.getRequest('/')
    }
    
    async createGist(payload) {
        return await this.postRequest('/gists', payload)
    }
    
    async getGist(gistId) {
        return await this.getRequest(`/gists/${gistId}`)
    }

    async updateGist(gistId, payload) {
        return await this.patchRequest(`/gists/${gistId}`, payload)
    }

    async collection(githubUsername, per_page = 30, page = 1) {
        return await this.getRequest(`/users/${githubUsername}/gists?per_page=${per_page}&page=${page}`)
    }

    async deleteGist(gistId) {
        return await this.deleteRequest(`/gists/${gistId}`)
    }

    async filter(githubUsername, keyword, per_page = 30, page = 1) {
		return await this.collection(githubUsername, per_page, page).then((response) => {
				return response.data.filter(function(gist) {
					return gist.description.includes(keyword)
				})
			}).catch((result) => {
                return 'errored'
        })
	}
}