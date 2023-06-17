 export class ResponseError extends Error {
    constructor (message){
        super(message)
        this.name = 'ResponseError'
        this.stack = ''
    }
}

export class ValidationError extends Error {
    constructor (message){
        super(message)
        this.name = 'ValidationError'
        this.stack = ''
    }
}

export class ConectionError extends Error {
    constructor (message){
        super(message)
        this.name = 'ConectionError'
        this.stack = ''
    }
}
export default ValidationError