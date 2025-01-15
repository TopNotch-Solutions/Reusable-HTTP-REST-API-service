const headers = {
    "Accept": "application/json",
    "Content-type": "application/json"
}

function joinUrl(baseURL, url){
    return `${baseURL}/${url}`
}

class Services {

    constructor(){
        this.domain = "https://jsonplaceholder.typicode.com/posts"
    }

    request(url, method="POST", data=null){
        url = joinUrl(this.domain, url);
        const options = {
            headers,
            method,
        }
        if(data){
            options.body = JSON.stringify({...data})
        }
        return fetch(url, options)
    }

    async post(url, data){
        const method = "POST";
        const res = await this.request(url, method, data);
        return await res.json();
    }

    async get(url, id){
        const method = "GET";
        if(id){
            url = `${url}/${id}`;
        }
        const res = await this.request(url, method);
        return await res.json()
        
    }

    async delete(url, id){
        const method = "DELETE";
        if(id){
            url = `${url}/${id}`;
        }
        const res = await this.request(url, method);
        return await res.json()
        
    }
    async put(url, data){
        const method = "PUT";
        const res = await this.request(url, method, data);
        return await res.json();
    }

    async patch(url, data){
        const method = "PATCH";
        const res = await this.request(url, method, data);
        return await res.json();
    }
}

export default Services;