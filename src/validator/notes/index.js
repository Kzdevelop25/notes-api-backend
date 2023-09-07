const { NotePayloadShema } = require("./schema")

const NotesValidator = {
    validateNotePayload: (payload) => {
        validationResult = NotePayloadShema.validate(payload);
        if(validationResult.error){
            throw new Error(validationResult.error.message)
        }
    },
}

module.exports = NotesValidator;